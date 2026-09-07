import { Link, useNavigate } from "react-router";

const AdminNavbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3 px-5 py-3.5">
        <h1 className="text-lg sm:text-xl font-bold">Admin Panel</h1>

        <div className="flex flex-wrap gap-4 sm:gap-6 items-center text-sm sm:text-base">
          <Link to="/admin/products" className="hover:text-volt transition-colors">
            Products
          </Link>
          <Link to="/admin/products/add" className="hover:text-volt transition-colors">
            Add Product
          </Link>
          <Link to="/" className="hover:text-volt transition-colors">
            Back to Store
          </Link>
          <button
            onClick={logout}
            className="hover:text-volt transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
