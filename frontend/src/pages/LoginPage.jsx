import { useState } from "react";
import { UserCircleIcon } from "lucide-react";
import { Link } from "react-router";
import useLogin from "../hooks/useLogin.js";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const { isPending, error, loginMutation } = useLogin();

  const handleLogin = (e) => {
    e.preventDefault();
    loginMutation(loginData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100 p-4 sm:p-6">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden">
        
        {/* FORM SECTION */}
        <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-center">
          <div className="mb-6 flex items-center gap-3">
            <UserCircleIcon className="text-purple-600 w-8 h-8 sm:w-10 sm:h-10" />
            <h1 className="text-2xl sm:text-3xl font-bold text-purple-700">PlanIT!</h1>
          </div>

          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm sm:text-base">
              {error.response?.data?.message || "Error logging in"}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5 sm:space-y-6">
            <div>
              <label className="block text-sm font-medium text-purple-600 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-purple-200 rounded-lg p-3 sm:p-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-300"
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-purple-600 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full border border-purple-200 rounded-lg p-3 sm:p-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-300"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white font-medium py-3 sm:py-4 rounded-lg hover:bg-purple-700 transition duration-200 flex justify-center items-center gap-2"
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <span className="loading loading-spinner loading-xs"></span>
                  Signing in...
                </>
              ) : (
                "Log In"
              )}
            </button>
          </form>

          <p className="text-xs sm:text-sm text-purple-600 mt-6 text-center">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="text-purple-700 font-medium hover:underline">
              Sign Up
            </Link>
          </p>
        </div>

        {/* ILLUSTRATION SECTION */}
        <div className="hidden md:flex w-full md:w-1/2 bg-purple-50 items-center justify-center p-8">
          <div className="max-w-md text-center">
            <img
              src="/lavender-illustration.png"
              alt="Login illustration"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <h2 className="text-xl sm:text-2xl font-semibold text-purple-700 mt-6">
              Welcome Back!
            </h2>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;
