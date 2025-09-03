import { useState } from "react";
import { SparklesIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom"; // ✅ use react-router-dom
import useSignUp from "../hooks/useSignUp";

const SignUpPage = () => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { isPending, error, signupMutation } = useSignUp();
  const navigate = useNavigate(); // ✅ init here

  const handleSubmit = (e) => {
    e.preventDefault();
    signupMutation(signupData, {
      onSuccess: () => {
        navigate("/login"); // ✅ works now
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-white to-purple-50 px-4">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col lg:flex-row">
        {/* LEFT SIDE - FORM */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
          {/* LOGO */}
          <div className="mb-6 flex items-center gap-2">
            <SparklesIcon className="w-8 h-8 text-purple-500" />
            <span className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-purple-500 to-indigo-400 text-transparent bg-clip-text">
              PlanIT!
            </span>
          </div>

          {/* ERROR MESSAGE */}
          {error && (
            <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-2 rounded-md mb-4 text-sm">
              {error.response?.data?.message || "Something went wrong"}
            </div>
          )}

          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Create an Account
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5"> {/* ✅ fixed name */}
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
                value={signupData.fullName}
                onChange={(e) =>
                  setSignupData({ ...signupData, fullName: e.target.value })
                }
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
                value={signupData.email}
                onChange={(e) =>
                  setSignupData({ ...signupData, email: e.target.value })
                }
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="********"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
                value={signupData.password}
                onChange={(e) =>
                  setSignupData({ ...signupData, password: e.target.value })
                }
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Must be at least 6 characters long
              </p>
            </div>

            {/* Terms */}
            <div className="flex items-center gap-2">
              <input type="checkbox" required className="w-4 h-4" />
              <span className="text-xs text-gray-600">
                I agree to the{" "}
                <span className="text-purple-500 hover:underline cursor-pointer">
                  terms of service
                </span>{" "}
                and{" "}
                <span className="text-purple-500 hover:underline cursor-pointer">
                  privacy policy
                </span>
              </span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-gradient-to-r from-purple-500 to-indigo-400 text-white py-2.5 rounded-lg font-medium shadow-md hover:opacity-90 transition disabled:opacity-70"
            >
              {isPending ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="loading loading-spinner loading-xs"></span>
                  Creating account...
                </span>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <p className="text-sm text-gray-600 text-center mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-purple-600 font-medium hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="hidden lg:flex w-full lg:w-1/2 bg-gradient-to-br from-purple-50 via-white to-purple-100 items-center justify-center">
          <div className="max-w-md text-center px-6">
            <img
              src="/lavender-illustration.png"
              alt="Illustration"
              className="mx-auto w-64 h-64 object-contain"
            />
            <h3 className="text-lg font-semibold text-gray-800 mt-6">
              Schedule Yourself, Your personal Manager!
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
