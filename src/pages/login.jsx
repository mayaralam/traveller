import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import logpic from "../assets/logpic.jpg";
export default function Login() {
  const navigate = useNavigate();
  const validationSchema = yup.object({
    email: yup
      .string()
      .required("Required")
      .test("is-valid", "Enter a valid email", (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10,15}$/;
        return emailRegex.test(value) || phoneRegex.test(value);
      }),
    password: yup.string().required("Required"),
  });

  const handleLogin = (values, { resetForm }) => {
    const { email, password } = values;
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
      (u) => (u.email === email || u.phone === email) && u.password === password
    );

    if (foundUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
      toast.success("Login successful!");
      resetForm();
      navigate("/");
    } else {
      toast.error("Invalid Email or Password");
    }
  };
  return (
    <div
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center "
      style={{ backgroundImage: `url(${logpic})` }}
    >
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleLogin}
        validationSchema={validationSchema}
      >
        <Form className="flex flex-col gap-4 bg-opacity-50 p-10 rounded-lg bg-black/30 text-white w-80 sm:w-96">
          <div className="flex flex-col items-center text-center gap-3">
            <svg
              className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <path
                fill="#fff"
                d="m19.67 8.11l-2.776 2.777l-3.837-.86c.362-.506.916-1.684.464-2.136c-.517-.516-1.978.28-2.304.605l-.913.913l-2.69-.604l-2.02 2.02l2.232 1.062l-.082.082l1.7 1.7l.69-.686l3.163 1.504L9.57 18.21H6.414l-1.137 1.138l3.6.948l1.83 1.83l.947 3.598l1.137-1.137V21.43l3.725-3.725l1.504 3.164l-.688.686l1.702 1.7l.08-.08l1.063 2.23l2.02-2.02l-.604-2.688l.912-.912c.326-.326 1.12-1.79.604-2.306c-.453-.452-1.63.1-2.136.464l-.86-3.838l2.776-2.777c.947-.948 3.6-4.863 2.62-5.84c-.977-.978-4.892 1.673-5.84 2.62z"
              />
            </svg>
            <h1 className="font-sans text-white text-4xl opacity-70 ">
              Welcome Back
            </h1>
            <p className="text-sm mb-4">
              Sign in to your travel account to continue your journey
            </p>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field
              className="input focus:outline-none  px-2 py-1 rounded text-black dark:text-white"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-400 text-sm"
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <Field
              className="input focus:outline-none px-2 py-1 rounded text-black dark:text-white"
              id="password"
              name="password"
              placeholder="Enter your password"
              type="password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-400 text-sm"
            />
          </div>
          <button
            type="submit"
            className="cursor-pointer bg-gradient-to-br from-[#FF7A00] to-[#FF4D88] hover:bg-blue-600 text-white py-2 px-4 rounded mt-4"
          >
            Login
          </button>
          <div className="flex gap-2">
            <p className="text-white">Don’t have an account? </p>
            <a href="/register" className="text-transparent bg-clip-text bg-gradient-to-br from-[#FF7A00] to-[#FF4D88]">
              Sign Up
            </a>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
