// src/pages/ProductDetails.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { getProduct, getProducts } from "../../services/productService";
import {
  addItem,
  addGuestItem,
} from "../../services/cartService";
import { useAuth } from "../../provider/AuthProvider";

export default function ProductDetails() {
  const { productId } = useParams();
  const { user } = useAuth();
  const [product, setProduct] = useState(null);
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getProduct(productId);
        setProduct(res.data);

        // Fetch similar products by category
        const all = await getProducts();
        setSimilar(all.data.filter(
          (p) => p.category === res.data.category && p._id !== res.data._id
        ));
      } catch (err) {
        toast.error("Failed to load product details");
      }
    }
    fetchData();
  }, [productId]);

  const handleAddToCart = async () => {
    try {
      const quantity = 1;

      if (user?._id) {
        // Logged in user
        await addItem(user._id, product._id, quantity);
        toast.success("Added to your cart");
      } else {
        // Guest logic
        let guestId = localStorage.getItem("guestId");
        if (!guestId) {
          guestId = crypto.randomUUID();
          localStorage.setItem("guestId", guestId);
        }

        await addGuestItem(guestId, product._id, quantity);
        toast.success("Added to your cart (guest)");
      }
    } catch (err) {
      toast.error("Failed to add to cart");
    }
  };

  if (!product) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="space-y-10">
      {/* Product card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white rounded-xl shadow-md p-6"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-lg font-semibold text-blue-600">
              {product.price} DH
            </p>
            <p className="text-sm text-gray-500">Available: {product.stock}</p>

            <button
              onClick={handleAddToCart}
              className="px-4 py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </motion.div>

      {/* Similar products */}
      {similar.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Similar Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {similar.map((item) => (
              <motion.div
                key={item._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-50 rounded-lg shadow p-4 cursor-pointer hover:shadow-md"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-md mb-2"
                />
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-blue-600 font-medium">{item.price} DH</p>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
