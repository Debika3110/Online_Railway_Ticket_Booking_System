import { useState } from "react";
import "../App.css";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [showSignupConfirmPassword, setShowSignupConfirmPassword] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirmPassword, setSignupConfirmPassword] = useState("");
  const [signupRole, setSignupRole] = useState("USER");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex = /^[A-Za-z\s]+$/; // Only letters and spaces

  const handleLogin = (e) => {
    e.preventDefault();
    if (!emailRegex.test(loginEmail)) {
      alert("Please enter a valid email");
      return;
    }
    if (!loginPassword) {
      alert("Please enter password");
      return;
    }
    console.log("Login:", loginEmail, loginPassword);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!signupName || !nameRegex.test(signupName)) {
      alert("Name must contain only letters and spaces");
      return;
    }
    if (!emailRegex.test(signupEmail)) {
      alert("Please enter a valid email");
      return;
    }
    if (signupPassword.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }
    if (signupPassword !== signupConfirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Signup:", signupName, signupEmail, signupPassword, signupRole);

    // Reset form and go to login after signup
    setSignupName("");
    setSignupEmail("");
    setSignupPassword("");
    setSignupConfirmPassword("");
    setSignupRole("USER");
    setShowSignup(false);
    alert("Registration successful! Please login.");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center 
      bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 p-4">
      
      <div className={`flip-container ${showSignup ? "flipped" : ""}`}>
        
        {/* Login Side */}
        <div className={`flip-side front max-w-lg w-full bg-white/10 backdrop-blur-xl 
        border border-white/20 shadow-2xl rounded-2xl p-6 sm:p-8 ${showSignup ? "" : "active"}`}>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-white mb-6">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="loginEmail" className="block text-gray-200 text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                id="loginEmail"
                name="loginEmail"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 
                border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="loginPassword" className="block text-gray-200 text-sm font-medium mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="loginPassword"
                  name="loginPassword"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 
                  border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400 pr-16"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-sm text-indigo-300 hover:text-white focus:outline-none"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 
              text-white font-semibold py-2 px-4 rounded-full 
              hover:from-indigo-600 hover:to-blue-700 transition duration-300 shadow-lg"
            >
              Sign In
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-300">New user?</p>
            <button
              onClick={() => setShowSignup(true)}
              className="mt-2 text-indigo-300 hover:text-indigo-400 font-medium focus:outline-none"
            >
              Go to Sign Up
            </button>
          </div>
        </div>

        {/* Signup Side */}
        <div className={`flip-side back max-w-lg w-full bg-white/10 backdrop-blur-xl 
        border border-white/20 shadow-2xl rounded-2xl p-6 sm:p-8 ${showSignup ? "active" : ""}`}>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-white mb-6">Sign Up</h2>
          <form onSubmit={handleSignup}>
            <div className="mb-4">
              <label htmlFor="signupName" className="block text-gray-200 text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                id="signupName"
                value={signupName}
                onChange={(e) => setSignupName(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 
                border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="signupEmail" className="block text-gray-200 text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                id="signupEmail"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 
                border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="signupPassword" className="block text-gray-200 text-sm font-medium mb-1">Password</label>
              <div className="relative">
                <input
                  type={showSignupPassword ? "text" : "password"}
                  id="signupPassword"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 
                  border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400 pr-16"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowSignupPassword(!showSignupPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-sm text-indigo-300 hover:text-white focus:outline-none"
                >
                  {showSignupPassword ? "Hide" : "Show"}
                </button>
              </div>
              <p className="text-xs text-gray-300 mt-1">Must contain letters, numbers, and symbols</p>
            </div>

            <div className="mb-4">
              <label htmlFor="signupConfirmPassword" className="block text-gray-200 text-sm font-medium mb-1">Confirm Password</label>
              <div className="relative">
                <input
                  type={showSignupConfirmPassword ? "text" : "password"}
                  id="signupConfirmPassword"
                  value={signupConfirmPassword}
                  onChange={(e) => setSignupConfirmPassword(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 
                  border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400 pr-16"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowSignupConfirmPassword(!showSignupConfirmPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-sm text-indigo-300 hover:text-white focus:outline-none"
                >
                  {showSignupConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="role" className="block text-gray-200 text-sm font-medium mb-1">Role</label>
              <select
                id="role"
                value={signupRole}
                onChange={(e) => setSignupRole(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-gray-900 border border-white/20 
                focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 
              text-white font-semibold py-2 px-4 rounded-full 
              hover:from-indigo-600 hover:to-blue-700 transition duration-300 shadow-lg"
            >
              Register
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-300">Already have an account?</p>
            <button
              onClick={() => setShowSignup(false)}
              className="mt-2 text-indigo-300 hover:text-indigo-400 font-medium focus:outline-none"
            >
              Go to Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
