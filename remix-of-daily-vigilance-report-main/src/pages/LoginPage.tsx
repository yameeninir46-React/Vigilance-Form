import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, LogIn } from "lucide-react";


export default function LoginPage() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [domainId, setDomainId] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleLogin = () => {

    const correctId = "100256535";

    const correctPassword = "PIN491";

    if (domainId !== correctId) {

      setError("Incorrect Domain ID");

    }

    else if (password !== correctPassword) {

      setError("Incorrect Password");

    }

    else {

      setError("");

      navigate("/dashboard");

    }
  };

  return (

    <div className="min-h-screen bg-[#eef1f7] flex flex-col justify-between">

      {/* Top Logo */}
      <div className="p-6">

        <img
          src="/CSPC-logo.svg"
          alt="CSPC Logo"
          className="w-16"
        />

      </div>

      {/* Login Card */}
      <div className="flex items-center justify-center flex-1">

        <div className="bg-white w-[420px] rounded-md shadow-md p-10">

          {/* Login Icon */}
          <div className="flex justify-center mb-5">

            <div className="bg-red-300 p-2 rounded-md">

              <LogIn size={18} className="text-white" />

            </div>

          </div>

          {/* Heading */}
          <h1 className="text-3xl font-semibold text-center text-gray-800">
            Welcome to UrjaiNet
          </h1>

          <p className="text-center text-gray-400 text-sm mt-2 mb-8">
            Enter your login credentials to continue
          </p>

          {/* Domain ID */}
          <div className="mb-5">

            <label className="text-sm font-medium text-gray-700">
              Domain ID
            </label>

            <input
              type="text"
              placeholder="Enter your Domain ID"
              value={domainId}
              onChange={(e) => setDomainId(e.target.value)}
              className={`w-full mt-2 px-4 py-3 rounded-md outline-none text-sm border ${
                error === "Incorrect Domain ID"
                  ? "border-red-400"
                  : "border-gray-300"
              }`}
            />


            {error === "Incorrect Domain ID" && (

              <p className="text-red-500 text-xs mt-1">
                Incorrect Domain ID
              </p>

            )}

          </div>

          {/* Password */}
          <div className="mb-6">

            <label className="text-sm font-medium text-gray-700">
              Password
            </label>

            <div className="relative mt-2">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-4 py-3 rounded-md outline-none text-sm ${
                  error === "Incorrect Password"
                    ? "border border-red-400"
                    : "bg-gray-100"
                }`}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500"
              >

                {showPassword
                ? <EyeOff size={18} />
                : <Eye size={18} />
                }

              </button>

            </div>

            {error === "Incorrect Password" && (

              <p className="text-red-500 text-xs mt-1">
                Incorrect Password
              </p>

            )}

          </div>

          {/* Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-blue-800 hover:bg-blue-900 transition text-white py-3 rounded-md font-medium"
          >
            Sign in
          </button>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center mb-8">
        <p className="text-sm text-gray-500">

          Having trouble signing in?{" "}

          <span className="text-blue-700 font-medium cursor-pointer">
            Contact Administrator
          </span>

        </p>

      </div>

      {/* Footer */}
      <div className="bg-white border-t py-4 text-center text-sm text-gray-500">
        Designed & Developed by EITC
      </div>

    </div>
  );
}