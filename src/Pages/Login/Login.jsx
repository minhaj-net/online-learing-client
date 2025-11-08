import { useContext, useState } from "react";
import { Link } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";

const Form = () => {
  const { googleSignIn, signIn } = useContext(AuthContext);
  const [isSignup, setIsSignup] = useState(false);

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        toast.success("Google Sign In Successful");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleSignInWithEmailAndPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Login Successful");
        e.target.reset();
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="relative flex justify-center items-center min-h-screen overflow-hidden bg-[#1b2a1f]">
        {/* 🌈 Gradient Background */}
        <div className="absolute inset-0">
          <div className="absolute top-[-60px] left-[-60px] w-[220px] h-[220px] bg-gradient-to-br from-green-300/30 via-transparent to-transparent rounded-full blur-2xl"></div>
          <div className="absolute bottom-[-60px] right-[-60px] w-[220px] h-[220px] bg-gradient-to-tl from-green-400/30 via-transparent to-transparent rounded-full blur-2xl"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(45,56,40,0.2)_0%,_rgba(5,45,31,0.5)_60%,_rgba(2,20,15,0.8)_100%)]"></div>
        </div>

        {/* 🔄 Form Container */}
        <div className="relative w-[320px] h-[500px] rounded-xl bg-[#2a3a2b] shadow-[4px_4px_12px_rgba(0,0,0,0.3),1px_1px_8px_rgba(255,255,255,0.2)] flex flex-col justify-center items-center p-6 gap-4">
          <h2 className="text-white text-2xl font-semibold mb-4 text-center">Login</h2>

          <form
            onSubmit={handleSignInWithEmailAndPassword}
            className="flex flex-col gap-3 w-full"
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full h-12 rounded-md bg-[#334033] text-white px-3 border-2 border-[#334033] focus:scale-105 transition-transform focus:outline-none shadow-[3px_3px_6px_rgba(0,0,0,0.3),1px_1px_6px_rgba(255,255,255,0.2)] placeholder:text-gray-300"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full h-12 rounded-md bg-[#334033] text-white px-3 border-2 border-[#334033] focus:scale-105 transition-transform focus:outline-none shadow-[3px_3px_6px_rgba(0,0,0,0.3),1px_1px_6px_rgba(255,255,255,0.2)] placeholder:text-gray-300"
              required
            />

            {/* Forgot Password */}
            <Link
              to="/forgot-password"
              className="self-end text-sm text-green-300 hover:text-green-400 underline"
            >
              Forgot Password?
            </Link>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-md bg-green-400/20 text-white font-semibold border-2 border-green-400 transition-transform hover:scale-105 hover:bg-green-400/40 shadow-[2px_2px_4px_rgba(0,0,0,0.3),1px_1px_6px_rgba(255,255,255,0.2)]"
            >
              Login
            </button>
          </form>

          {/* Google Login */}
          <button
            onClick={handleGoogleLogin}
            type="button"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-md bg-white/90 text-gray-800 font-semibold hover:bg-white/100 shadow-[2px_2px_6px_rgba(0,0,0,0.2)] transition-transform hover:scale-105"
          >
            <FcGoogle className="text-2xl" />
            Continue with Google
          </button>

          <p className="text-sm text-white text-center mt-3">
            Don't have an account?{" "}
            <Link
              to={"/registration"}
              onClick={() => setIsSignup(true)}
              className="underline font-bold cursor-pointer hover:text-green-300"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;
