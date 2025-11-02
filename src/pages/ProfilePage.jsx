import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-white shadow-lg rounded-2xl p-10 text-center max-w-sm w-full">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Please login to view your profile
          </h2>
          <p className="text-gray-500 mb-4">
            You need to log in to see your account details.
          </p>
          <button
            onClick={() => navigate("/auth")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const profilePic =
    user.profilePic ||
    `https://i.pravatar.cc/150?u=${user.email || user.name || user.id}`;

  return (
         <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="flex flex-col md:flex-row bg-white shadow-xl rounded-2xl overflow-hidden w-full max-w-4xl border border-gray-200">
        <div className="md:w-1/3 bg-gradient-to-br from-blue-700 to-pink-500 text-white p-8 flex flex-col items-center justify-center">
          <img
            src={profilePic}
            alt={user.name}
            className="w-24 h-24 rounded-full border-4 border-white shadow-lg mb-4"
          />
          <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-sm opacity-90 mb-4">
            {user.role === "admin" ? "Administrator" : "User"}
          </p>

             <button
            onClick={handleLogout}
            className="mt-3 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm transition"
            >
            Logout
          </button>

            <div className="flex gap-4 mt-6">
            <a href="#" className="hover:text-blue-500">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-blue-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-pink-500">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="md:w-2/3 p-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Information
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <p className="text-gray-500 text-sm">Email</p>
              <p className="font-medium text-gray-800">{user.email}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Phone</p>
              <p className="font-medium text-gray-800">
                {user.phone || "Not added"}
              </p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Address</p>
              <p className="font-medium text-gray-800">
                {user.location || "Not provided"}
              </p>
            </div>
          </div>

          <hr className="my-4" />

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-500">Recent</p>
              <p className="font-medium text-gray-800">E-Shop Order History</p>
            </div>
            <div>
              <p className="text-gray-500">Most Viewed</p>
              <p className="font-medium text-gray-800">Wishlist Items</p>
            </div>
          </div>

          <div className="mt-6">
            {user.role === "admin" ? (
              <button
                onClick={() => navigate("/admin")}
                className="w-full bg-black hover:bg-gray-900 text-white py-2 rounded-lg font-semibold transition"
              >
                Go to Admin Dashboard
              </button>
            ) : (
              <button
                onClick={() => navigate("/orders")}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
              >
                View My Orders
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
