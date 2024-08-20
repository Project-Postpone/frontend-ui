
import image4 from "../assets/images/image4.jpg"
// import { useState } from "react"
// import { useNavigate } from "react-router-dom"
// import { useForm } from "react-hook-form"
// import { apiLogin, apiSignUp } from "../services/auth";


// function Copyright() {
//   return (
//     <p className="text-center text-gray-600 text-sm mt-5">
//       {'Copyright © '}
//       <a className="text-blue-500" href="">
//         Postpone
//       </a>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </p>
//   );
// }

export default function SignUp() {
// const [isSubmitting,setIsSubmitting] = useState(false);
// //   // const [isUsernameLoading, setIsUsernameLoading] = useState(false);
//   const navigate = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     // watch,
//     formState: { errors },
//   } = useForm({ reValidateMode: "onBlur", mode: "all" });

//   const LocalStorage = (accessToken) => {
//     localStorage.setItem("accessToken", accessToken);

  
//   const onSubmit = async (data) => {
//     console.log(data);
//     setIsSubmitting(true);

//     try {
//       const res = await apiSignUp({
//         firstName: data.firstName,
//         lastName: data.lastName,
//         userName: data.username,
//         password: data.password,
//         email: data.email,
//       });
//       console.log(res.data);
//     } catch (error) {
//       console.log(error);
//       // toast.error("An error occured")
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

  return (
    <div className="bg-gray-100 min-h-screen flex box-border justify-center items-center">
      <div className="bg-blue-200 rounded-2xl flex max-w-3xl p-5 items-center">
        <div className="md:w-1/2 px-8">

          <h1 className="text-center text-2xl font-bold mb-6">Sign up</h1>

          <form >

            <div className="grid grid-cols-1 gap-4 mb-4">

              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  required
                  autoComplete="given-name"
                  autoFocus
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#63AFFF]"
                  // {...register("firstName", { required: "FirstName is required" })}
                />
                {/* {errors.email && <p className="text-red-500">{errors.email.message}</p>} */}
              </div>

              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  required
                  autoComplete="family-name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#63AFFF]"
                  // {...register("lastName", { required: "LastName is required" })}
                />
                {/* {errors.email && <p className="text-red-500">{errors.email.message}</p>} */}
              </div>

              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#63AFFF]"
                  // {...register("email", { required: "Email is required" })}
                />
                {/* {errors.email && <p className="text-red-500">{errors.email.message}</p>} */}
              </div>

              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="userName"
                >
                  UserName
                </label>
                <input
                  id="userName"
                  type="text"
                  placeholder="Username"

                  className="peer h-11 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 placeholder-transparent focus:border-[#63AFFF] focus:outline-none"
                  // {...register("userName", { required: "UserName is required" })}
                />
                {/* {errors.email && <p className="text-red-500">{errors.email.message}</p>} */}
              </div>

              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  autoComplete="new-password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#63AFFF]"
                  // {...register("password", { required: "Password is required" })}
                />
                {/* {errors.email && <p className="text-red-500">{errors.email.message}</p>} */}
              </div>

              <div className="flex items-center">
                <input
                  name="allowExtraEmails"
                  type="checkbox"
                  className="mr-2 leading-tight"
                />
                <label className="text-gray-700 text-sm font-bold">
                  I want to receive inspiration and updates via email.
                </label>
              </div>

            </div>

            <button
              type="submit"
              className="bg-blue-400 border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 hover:bg-blue-300 font-medium"
            >
              Sign Up
            </button>

            <div className="flex justify-end mt-4">
              <a href="/login" className="text-sm text-blue-500 hover:text-blue-700">
                Already have an account? Log in
              </a>
            </div>

          </form>

        </div>

        <div className="md:block hidden w-1/2">
          <img
            className="rounded-2xl h-[500px] w-[500px]"
            src={image4}
            alt="signup form"
          />
        </div>

        {/* <Copyright /> */}
      </div>

    </div>
  );
}
// };
