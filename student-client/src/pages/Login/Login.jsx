import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [error, setError] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  //passwordShown ==========================
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  // form onSubmit=======================
  const onSubmit = async (data) => {
    setError(false);
    try {
      const res = await axios.post("/auth/login", {
        username: data.username,
        password: data.password,
      });
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className=" flex justify-center items-center ">
      <div className="lg:w-[30vw] my-10 text-center ">
        <div className="min-h-fit lg:p-10 rounded-lg shadow-2xl ">
          <div className="card-body">
            <h2 className="text-2xl font-bold py-3">Login</h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 gap-2"
            >
              <input
                type="email"
                className="border-b-2  slate-700 outline-0 py-2"
                placeholder="Email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "email is required",
                  },
                })}
              />
              <p className="text-red-500 text-left text-xs">{errors.email?.message}</p>

              <div className=" relative">
                <input
                  type={passwordShown ? "text" : "password"}
                  className="border-b-2  w-full slate-700 outline-0 py-2"
                  placeholder="Password"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                    pattern: {
                      value:
                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,
                      message:
                        "must contain at least 1 uppercase[A-Z], 1 lowercase[a-z], and 1 number",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be at least 6 characters long",
                    },
                  })}
                />
                {passwordShown ? (
                  <AiFillEye
                    onClick={togglePassword}
                    className="absolute right-3 top-4 text-xl text-primary"
                  />
                ) : (
                  <AiFillEye
                    onClick={togglePassword}
                    className="absolute right-3 top-4 text-xl hover:text-primary"
                  />
                )}
              </div>
              <p className="text-red-500 text-left text-xs">{errors.password?.message}</p>

              <input
                type="submit"
                value={"login"}
                className="bg-primary transition duration-150 ease-in-out hover:scale-[0.97] text-white py-3 mb-5 rounded"
              />
              {error && (
                <p className="text-red-500 text-sm text-center">
                  No user found
                </p>
              )}
            </form>

            <Link to="" className=" py-5 text-secondary mt-5">
              Forgot Password?
            </Link>
            <p className="text-center py-5 text-slate-700">
              Don&apos;t Have Account?
              <Link to="/signup">
                <span className="text-secondary"> Sign Up</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
