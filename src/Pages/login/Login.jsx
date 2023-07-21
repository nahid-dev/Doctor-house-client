import React, { useContext } from "react";
import auth_star from "../../assets/auth_images/auth_star.png";
import auth_image from "../../assets/auth_images/auth_image.png";
import ButtonBold from "../../components/ButtonBold/ButtonBold";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    signInUser(data.email, data.password)
      .then((result) => {
        const loginUser = result.user;
        console.log(loginUser);
        Swal.fire({
          icon: "success",
          title: "Successfully Login",
        });
        reset();
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="primary-bg h-screen">
          <div className="relative h-screen">
            <img
              src={auth_star}
              className="absolute right-0 w-1/2 top-0"
              alt="Auth_Star_Image"
            />
            <img
              src={auth_image}
              className="absolute w-2/3 top-1/4 left-20"
              alt="Auth_Image"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center h-screen justify-center">
            <div className="border rounded-lg p-10 text-center w-3/4">
              <div>
                <h5 className="font-bold text-[30px] mb-5">
                  Sign in to Doc House
                </h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-col text-left mb-3">
                    <label className="text-xl font-semibold mb-3">
                      Username or Email Address
                    </label>
                    <input
                      type="text"
                      className="text-[#9D9C9C] p-5 bg-[#F3F3F3] placeholder-[#9D9C9C] rounded-lg focus-visible:outline-none"
                      placeholder="Enter your username or address"
                      {...register("email", { required: true })}
                    />
                    {errors.email && (
                      <span className="text-red-600">Email is required</span>
                    )}
                  </div>
                  <div className="flex flex-col text-left mb-3">
                    <label className="flex justify-between mb-3">
                      <span className="text-xl font-semibold ">Password</span>
                      <span className="text-[#F7A582]">Forget Password?</span>
                    </label>
                    <input
                      type="password"
                      className="text-[#9D9C9C] p-5 bg-[#F3F3F3] placeholder-[#9D9C9C] rounded-lg focus:ring-0 focus-visible:outline-none"
                      placeholder="Enter your Password"
                      {...register("password", {
                        required: true,
                      })}
                    />
                    {errors.password?.type === "required" && (
                      <p className="text-red-600">Password is required</p>
                    )}
                  </div>
                  <ButtonBold title={"Sign In"} type={"submit"}></ButtonBold>
                </form>
                <div className="text-center">
                  <p>
                    Please register at first. Go to{" "}
                    <Link
                      to="/authentication/signUp"
                      className="text-[#F7A582]"
                    >
                      SIGN UP
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

export default Login;
