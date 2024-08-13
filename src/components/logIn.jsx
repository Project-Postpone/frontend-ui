// import React from 'react';

// function Copyright(props) {
//   return (
//     <div className="text-center text-sm text-gray-600" {...props}>
//       {'Copyright © '}
//       <a className="text-blue-600" href="https://mui.com/">
//         Postpone
//       </a>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </div>
//   );
// }

// export default function LogIn() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50">
//       <div className="w-full max-w-xs">
//         <div className="flex flex-col items-center">
//           <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-500 mb-4">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="w-6 h-6 text-white"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M16.5 10.5V21a1.5 1.5 0 01-1.5 1.5h-6A1.5 1.5 0 017.5 21V10.5m9 0V6.75A3.75 3.75 0 0012 3 3.75 3.75 0 008.25 6.75V10.5m9 0h-9m9 0a2.25 2.25 0 01-2.25 2.25H9.75A2.25 2.25 0 017.5 10.5m9 0V6.75A2.25 2.25 0 0014.25 4.5h-4.5A2.25 2.25 0 007.5 6.75V10.5"
//               />
//             </svg>
//           </div>
//           <h1 className="text-2xl font-bold mb-6">Log in</h1>
//           <form className="w-full" onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="email" className="sr-only">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 required
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//                 placeholder="Email Address"
//                 autoComplete="email"
//                 autoFocus
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="password" className="sr-only">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 required
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//                 placeholder="Password"
//                 autoComplete="current-password"
//               />
//             </div>
//             <div className="flex items-center justify-between mb-4">
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   className="h-4 w-4 text-blue-600 border-gray-300 rounded"
//                   value="remember"
//                 />
//                 <span className="ml-2 text-sm text-gray-600">Remember me</span>
//               </label>
//               <a href="#" className="text-sm text-blue-600 hover:underline">
//                 Forgot password?
//               </a>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
//             >
//               Sign In
//             </button>
//             <div className="flex justify-between mt-4">
//               <a href="#" className="text-sm text-blue-600 hover:underline">
//                 Don't have an account? Sign Up
//               </a>
//             </div>
//           </form>
//         </div>
//         <Copyright className="mt-8 mb-4" />
//       </div>
//     </div>
//   );
// }
import React from "react"
import img1 from "../assets/images/img1.jpg"

const Login = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const navigate = useNavigate();


//   const 
//   { register,
//      handleSubmit,
//       formState: { errors }, 
// } = useForm({reValidateMode:"onBlur",mode: "all"});

  return (
    <div className="bg-gray-100 min-h-screen flex box-border justify-center items-center">
      <div className="bg-blue-200 rounded-2xl flex max-w-3xl p-5 items-center">
        <div className="md:w-1/2 px-8">
          <h2 className="font-bold text-3xl text-[#002D74]">Login</h2>
          <p className="text-lg mt-4 text-[#002D74]">
            Welcome Back!
          </p>

          <form className="flex flex-col gap-4">
            <input
              className="p-2 mt-8 rounded-xl border"
              type="email"
              name="email"
              placeholder="Email"
            />
            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="gray"
                id="togglePassword"
                className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer z-20 opacity-100"
                viewBox="0 0 16 16"
              >
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-eye-slash-fill absolute top-1/2 right-3 -z-1 -translate-y-1/2 cursor-pointer hidden"
                id="mama"
                viewBox="0 0 16 16"
              >
                <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
              </svg>
            </div>
            <button
              className="bg-[#002D74] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium"
              type="submit"
            >
              Login
            </button>
          </form>

          <div className="mt-6 items-center text-gray-100">
            <hr className="border-gray-300" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-300" />
          </div>

          <button
            className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 hover:bg-blue-300 font-medium"
            type="button"
          >
            <svg
              className="mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="25px"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              />
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              />
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              />
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              />
            </svg>
            Login with Google
          </button>

          <div className="mt-10 text-sm border-b border-gray-500 py-5">
          <a href="/forgotpassword" class="text-xs text-black hover:text-[#002D74]">Forget Password?</a>
          </div>

          <div className="mt-4 text-sm flex justify-between items-center">
            <p className="mr-3 md:mr-0">
              If you don't have an account..
            </p>
            <button
              className="hover:border text-white bg-[#002D74] hover:border-white rounded-xl py-2 px-5 hover:scale-110 hover:bg-blue-300 font-semibold duration-300 animate-bounce"
            ><a href="/signup" class="text-xs text-black hover:text-[#002D74]">Sign Up</a>
            </button>
          </div>
        </div>
        <div className="md:block hidden w-1/2">
          <img
            className="rounded-2xl max-h-[1600px]"
            src={img1}
            alt="login form"
          />
        </div>
      </div>
    </div>
  );
};

export default Login
