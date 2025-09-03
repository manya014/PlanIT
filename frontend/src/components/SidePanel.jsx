import { useNavigate } from "react-router-dom";
import useAuthUser from "../hooks/useAuthUser.js";
import useLogout from "../hooks/useLogout.js";

const SidePanel = () => {
  const { setAuthUser } = useAuthUser();
  const navigate = useNavigate();
  const { logoutMutation } = useLogout();

  return (
    <aside className="w-20 bg-purple-700 text-white flex flex-col items-center py-6 space-y-8 rounded-tr-3xl rounded-br-3xl h-screen">
      {/* Logo */}
      <div className="text-xl font-bold mb-8">PlanIT</div>


      {/* Logout button */}
      <button
        onClick={logoutMutation}
        className="mt-auto p-3 bg-purple-300 text-white rounded-full shadow-lg hover:bg-purple-400 transition-colors"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1m0-10V5m0 14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2h4a2 2 0 012 2v1"
          />
        </svg>
      </button>
    </aside>
  );
};

export default SidePanel;
