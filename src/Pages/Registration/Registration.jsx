import { use } from "react";
import { Link } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";

const Registration = () => {
  const { createUser, googleSignIn } = use(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("HAndle submit button clicked");

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photoURL.value;
    const password = e.target.password.value;

    const lengthRegex = /^.{6,}$/;
    const lowercaseRegex = /^(?=.*[a-z]).+$/;
    const uppercaseRegex = /^(?=.*[A-Z]).+$/;
    if (!uppercaseRegex.test(password)) {
      toast.error("Password must contain at least one uppercase letter");
      return;
    }
    if (!lowercaseRegex.test(password)) {
      toast.error("Password must contain at least one lowercase lette");
      return;
    }
    if (!lengthRegex.test(password)) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    console.log(name, email, password, photoURL);

    createUser(email, password)
      .then((result) => {
        toast.success("Registration seccesfull");
        e.target.reset();
        console.log(result.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleGoogleRegister = () => {
    console.log("Google Register clicked");
    // Add your Google Auth logic here
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        toast.success("Google Sign In Succesfull");
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

        {/* 🟢 Registration Form */}
        <form
          onSubmit={handleSignUp}
          className="relative w-[360px] p-6 rounded-xl bg-[#2a3a2b] shadow-[4px_4px_12px_rgba(0,0,0,0.3),1px_1px_8px_rgba(255,255,255,0.2)] flex flex-col gap-4"
        >
          <h2 className="text-white text-2xl font-semibold text-center mb-4">
            Register
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full h-12 rounded-md bg-[#334033] text-white px-3 border-2 border-[#334033] focus:scale-105 transition-transform focus:outline-none shadow-[3px_3px_6px_rgba(0,0,0,0.3),1px_1px_6px_rgba(255,255,255,0.2)] placeholder:text-gray-300"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full h-12 rounded-md bg-[#334033] text-white px-3 border-2 border-[#334033] focus:scale-105 transition-transform focus:outline-none shadow-[3px_3px_6px_rgba(0,0,0,0.3),1px_1px_6px_rgba(255,255,255,0.2)] placeholder:text-gray-300"
          />

          <input
            type="text"
            name="photoURL"
            placeholder="Photo URL"
            className="w-full h-12 rounded-md bg-[#334033] text-white px-3 border-2 border-[#334033] focus:scale-105 transition-transform focus:outline-none shadow-[3px_3px_6px_rgba(0,0,0,0.3),1px_1px_6px_rgba(255,255,255,0.2)] placeholder:text-gray-300"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full h-12 rounded-md bg-[#334033] text-white px-3 border-2 border-[#334033] focus:scale-105 transition-transform focus:outline-none shadow-[3px_3px_6px_rgba(0,0,0,0.3),1px_1px_6px_rgba(255,255,255,0.2)] placeholder:text-gray-300"
          />

          {/* Register Button */}
          <button
            type="submit"
            className="mt-2 w-full py-3 rounded-md bg-green-400/20 text-white font-semibold border-2 border-green-400 transition-transform hover:scale-105 hover:bg-green-400/40 shadow-[3px_3px_6px_rgba(0,0,0,0.3),1px_1px_6px_rgba(255,255,255,0.2)]"
          >
            Register
          </button>

          {/* 🌟 Google Register Button */}
          <button
            type="button"
            onClick={handleGoogleRegister}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-md bg-white/90 text-gray-800 font-semibold hover:bg-white/100 shadow-[2px_2px_6px_rgba(0,0,0,0.2)] transition-transform hover:scale-105"
          >
            <FcGoogle className="text-2xl" />
            Continue with Google
          </button>

          <p className="text-sm text-white text-center mt-3">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="underline font-bold cursor-pointer hover:text-green-300"
            >
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registration;
