import React, { useContext } from "react";
import auth_star from "../../assets/auth_images/auth_star.png";
import auth_image from "../../assets/auth_images/auth_image.png";
import ButtonBold from "../../components/ButtonBold/ButtonBold";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";

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
    console.log(data);
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
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="primary-bg relative">
          <div className="absolute right-0 w-1/2">
            <img className="" src={auth_star} alt="Auth_Star_Image" />
          </div>
          <div className="absolute w-3/5 top-1/4 left-1/4">
            <img className="" src={auth_image} alt="Auth_Image" />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center my-16">
            <div className="border rounded-lg p-10 text-center w-3/4">
              <div>
                <h5 className="font-bold text-[30px] mb-5">
                  Sign in to Doc House
                </h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* NAME */}
                  <div className="flex flex-col text-left mb-3">
                    <label className="text-xl font-semibold mb-3">Name</label>
                    <input
                      type="text"
                      className="text-[#9D9C9C] p-5 bg-[#F3F3F3] placeholder-[#9D9C9C] rounded-lg focus-visible:outline-none"
                      placeholder="Enter Your Name"
                      {...register("name", { required: true })}
                    />
                    {errors.name && (
                      <span className="text-red-600">Name is required</span>
                    )}
                  </div>
                  {/* USERNAME */}
                  <div className="flex flex-col text-left mb-3">
                    <label className="text-xl font-semibold mb-3">
                      Username
                    </label>
                    <input
                      type="text"
                      className="text-[#9D9C9C] p-5 bg-[#F3F3F3] placeholder-[#9D9C9C] rounded-lg focus-visible:outline-none"
                      placeholder="Enter your username"
                      {...register("userName", { required: true })}
                    />
                    {errors.userName && (
                      <span className="text-red-600">
                        User Name is required
                      </span>
                    )}
                  </div>
                  {/* EMAIL */}
                  <div className="flex flex-col text-left mb-3">
                    <label className="text-xl font-semibold mb-3">Email</label>
                    <input
                      type="text"
                      className="text-[#9D9C9C] p-5 bg-[#F3F3F3] placeholder-[#9D9C9C] rounded-lg focus-visible:outline-none"
                      placeholder="Enter your Email"
                      {...register("email", { required: true })}
                    />
                    {errors.email && (
                      <span className="text-red-600">Email is required</span>
                    )}
                  </div>
                  {/* PASSWORD */}
                  <div className="flex flex-col text-left mb-3">
                    <label className="flex justify-between mb-3">
                      <span className="text-xl font-semibold ">Password</span>
                      <span className="text-[#F7A582]">Forget Password?</span>
                    </label>
                    <input
                      type="password"
                      className="text-[#9D9C9C] p-5 bg-[#F3F3F3] placeholder-[#9D9C9C] rounded-lg focus:ring-0 focus-visible:outline-none"
                      placeholder="Enter your Password"
                      {...register("password", { required: true })}
                    />
                    {errors.password && (
                      <span className="text-red-600">password is required</span>
                    )}
                  </div>
                  <ButtonBold
                    title={"Create Account"}
                    type={"submit"}
                  ></ButtonBold>
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
      </div>
    </div>
  );
};

export default SignUp;
