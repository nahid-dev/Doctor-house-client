import React, { useContext } from "react";
import auth_star from "../../assets/auth_images/auth_star.png";
import auth_image from "../../assets/auth_images/auth_image.png";
import ButtonBold from "../../components/ButtonBold/ButtonBold";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { ArrowLeftIcon } from "lucide-react";

const INPUT_FIELD_STYLE =
  "text-[#9D9C9C] p-3 bg-[#F3F3F3] placeholder-[#9D9C9C] rounded-lg focus-visible:outline-none";
const INPUT_LABEL_STYLE = "text-lg font-semibold mb-3";

const SignUp = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // ======================================CreateUser User
    createUser(data.email, data.password)
      .then((result) => {
        const registeredUser = result.user;
        console.log(registeredUser);
        // ======================================Update User
        updateUser(data.name).then(() => {
          const saveUser = {
            name: data.name,
            userName: data.userName,
            email: data.email,
            role: "user",
          };
          fetch("https://server-nahid-dev.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.insertedId) {
                reset(),
                  Swal.fire({
                    icon: "success",
                    title: "Sign Up Successfully",
                  });
                navigate("/");
              }
            });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ">
      <div className="primary-bg relative hidden md:block">
        <div className="md:absolute right-0 w-1/2">
          <img className="" src={auth_star} alt="Auth_Star_Image" />
        </div>
        <div className="md:absolute w-3/5 top-1/4 left-1/4 mx-auto md:mx-0">
          <img className="" src={auth_image} alt="Auth_Image" />
        </div>
      </div>
      <div className="grid-cols-2 md:grid-cols-1 md:w-3/4 mx-auto my-auto py-5 md:py-10">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100 mb-5"
        >
          <ArrowLeftIcon />
          <span>Back to Home</span>
        </button>
        <div className="flex items-center justify-center">
          <div className="border rounded-md w-full p-5 md:p-8">
            <h5 className="font-bold text-[30px] mb-5">Sign in to Doc House</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* NAME */}
              <div className="flex flex-col text-left mb-3">
                <label className={INPUT_LABEL_STYLE}>Name</label>
                <input
                  type="text"
                  className={INPUT_FIELD_STYLE}
                  placeholder="Enter Your Name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              {/* USERNAME */}
              <div className="flex flex-col text-left mb-3">
                <label className={INPUT_LABEL_STYLE}>Username</label>
                <input
                  type="text"
                  className={INPUT_FIELD_STYLE}
                  placeholder="Enter your username"
                  {...register("userName", { required: true })}
                />
                {errors.userName && (
                  <span className="text-red-600">User Name is required</span>
                )}
              </div>
              {/* EMAIL */}
              <div className="flex flex-col text-left mb-3">
                <label className={INPUT_LABEL_STYLE}>Email</label>
                <input
                  type="text"
                  className={INPUT_FIELD_STYLE}
                  placeholder="Enter your Email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              {/* PASSWORD */}
              <div className="flex flex-col text-left mb-3">
                <label
                  className={`${INPUT_LABEL_STYLE} flex items-center justify-between`}
                >
                  <span className="text-xl font-semibold ">Password</span>
                  <span className="text-[#F7A582] text-base font-normal">
                    Forget Password?
                  </span>
                </label>
                <input
                  type="password"
                  className={INPUT_FIELD_STYLE}
                  placeholder="Enter your Password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-600">password is required</span>
                )}
              </div>
              <ButtonBold title={"Create Account"} type={"submit"}></ButtonBold>
            </form>
            <div className="text-center">
              <p>
                Already have account? Go to{" "}
                <Link to="/authentication/login" className="text-[#F7A582]">
                  SIGN IN
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
