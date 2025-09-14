// src/pages/CartPage.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import {
  getCart,
  getGuestCart,
  updateItem,
  removeItem,
  clearCart,
} from "../../services/cartService";
import { useAuth } from "../../provider/AuthProvider";

const CartPage = () => {
  const { user } = useAuth();
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  // For guest cart (simulate guestId in localStorage)
  const guestId = localStorage.getItem("guestId") || (() => {
    const id = crypto.randomUUID();
    localStorage.setItem("guestId", id);
    return id;
  })();

  const fetchCart = async () => {
    try {
      setLoading(true);
      const res = user
        ? await getCart(user._id)
        : await getGuestCart(guestId);
      setCart(res.data);
    } catch (err) {
      console.error(err);
      toast.error("Impossible de récupérer le panier");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, [user]);

  const handleUpdateQuantity = async (productId, quantity) => {
    try {
      if (quantity <= 0) return;
      if (user) {
        await updateItem(user._id, productId, quantity);
      } else {
        // Guests can't update on server in your API — for now just simulate
        toast.error("Seuls les utilisateurs connectés peuvent modifier");
        return;
      }
      toast.success("Quantité mise à jour");
      fetchCart();
    } catch (err) {
      console.error(err);
      toast.error("Erreur lors de la mise à jour");
    }
  };

  const handleRemoveItem = async (productId) => {
    try {
      if (user) {
        await removeItem(user._id, productId);
      } else {
        toast.error("Seuls les utilisateurs connectés peuvent supprimer");
        return;
      }
      toast.success("Produit retiré");
      fetchCart();
    } catch (err) {
      console.error(err);
      toast.error("Erreur lors de la suppression");
    }
  };

  const handleClearCart = async () => {
    try {
      if (user) {
        await clearCart(user._id);
      } else {
        toast.error("Seuls les utilisateurs connectés peuvent vider le panier");
        return;
      }
      toast.success("Panier vidé");
      fetchCart();
    } catch (err) {
      console.error(err);
      toast.error("Erreur lors du vidage du panier");
    }
  };

  if (loading) return <p className="text-center mt-10">Chargement...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Votre Panier</h1>

      {cart && cart.items?.length > 0 ? (
        <>
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {cart.items.map((item) => (
              <motion.div
                key={item.productId._id}
                className="flex items-center justify-between bg-white shadow p-4 rounded-xl"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.productId.image || "/placeholder.png"}
                    alt={item.productId.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h2 className="font-semibold">{item.productId.name}</h2>
                    <p className="text-sm text-gray-500">
                      {item.productId.price} DH
                    </p>
                    <div className="flex items-center mt-2 space-x-2">
                      <button
                        size="sm"
                        onClick={() =>
                          handleUpdateQuantity(item.productId._id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        size="sm"
                        onClick={() =>
                          handleUpdateQuantity(item.productId._id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  variant="destructive"
                  onClick={() => handleRemoveItem(item.productId._id)}
                >
                  Supprimer
                </button>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex justify-between items-center mt-6">
            <p className="text-lg font-bold">
              Total:{" "}
              {cart.items.reduce(
                (sum, item) => sum + item.productId.price * item.quantity,
                0
              )}{" "}
              DH
            </p>
            <button variant="outline" onClick={handleClearCart}>
              Vider le panier
            </button>
          </div>
        </>
      ) : (
        <p className="text-gray-500 text-center">Votre panier est vide</p>
      )}
    </div>
  );
};

export default CartPage;
