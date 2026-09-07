import { Navigate, Outlet } from "react-router";
import AdminNavbar from "../components/AdminNavbar";

// Client-side gate: no adminToken -> bounce to /admin/login.
// The real enforcement is server-side (verifyAdmin middleware) — this
// just keeps a logged-out visitor from ever seeing the admin screens.
const AdminProtectedRoute = () => {
  const adminToken = localStorage.getItem("adminToken");

  if (!adminToken) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <>
      <AdminNavbar />
      <div className="min-h-[70vh]">
        <Outlet />
      </div>
    </>
  );
};

export default AdminProtectedRoute;
