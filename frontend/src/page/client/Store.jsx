import { useEffect, useState } from "react";
import { getProducts } from "../../services/productService";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar";

const categories = ["all", "machines", "tools", "materials"];

export default function Store() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await getProducts();
        setProducts(res.data);
        setFiltered(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    let result = [...products];

    // filter by category
    if (category !== "all") {
      result = result.filter((p) => p.category === category);
    }

    // filter by search
    if (search.trim() !== "") {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFiltered(result);
  }, [category, search, products]);

  return (
    <div className="px-6 py-6">
      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Store</h1>

      {/* Search + Filters */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <SearchBar value={search} onChange={(val) => setSearch(val)} />

        <div className="flex gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                category === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      {filtered.length === 0 ? (
        <div className="min-h-screen flex items-center justify-center">
            <p className="text-gray-500 text-center">No products found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <div
              key={product._id}
              onClick={() => navigate(`/store/${product._id}`)}
              className="cursor-pointer bg-white border rounded-lg shadow-sm hover:shadow-md transition p-4 flex flex-col"
            >
              <img
                src={product.image || "/placeholder.jpg"}
                alt={product.name}
                className="h-40 w-full object-cover rounded-md mb-3"
              />
              <h2 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h2>
              <p className="text-sm text-gray-500 line-clamp-2 mb-2">
                {product.description}
              </p>
              <span className="mt-auto text-blue-600 font-bold">
                ${product.price}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
