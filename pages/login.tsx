import axios from "axios";
import type { NextPage } from "next";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";

import { useAuth } from "../contexts";
import { useEffect, useState } from "react";

type Inputs = {
  username: string;
  password: string;
};

const Login: NextPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { username, setUsername } = useAuth();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<Inputs>();

  useEffect(() => {
    if (username !== "") {
      router.push("/");
    }
  }, [router, username]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await axios.post("/api/auth", data);

      setUsername(data.username);

      router.push("/");
    } catch (error) {
      setError("username", {
        type: "manual",
        // @ts-expect-error not going to type error
        message: error.response.data.error,
      });
    }
  };

  return (
    <main>
      <h1 className="text-3xl mb-4">Login</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col text-black"
      >
        <label className="flex flex-col text-white mb-4">
          Username
          <input
            placeholder="Enter your username..."
            className="mt-2 p-2 rounded text-lg text-black"
            {...register("username", { required: true })}
          />
          {errors.username && (
            <span className="text-red-500 text-sm mt-2">
              {errors.username.type === "required"
                ? "A username is required"
                : errors.username.message}
            </span>
          )}
        </label>

        <label className="flex flex-col text-white mb-4">
          Password
          <div className="flex items-center mt-2">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password..."
              className="p-2 rounded text-lg text-black flex-grow"
              {...register("password", { required: true })}
            />
            <button
              type="button"
              className="text-primary border border-primary px-4 py-2 rounded ml-4"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {errors.password && (
            <span className="text-red-500 text-sm mt-2">
              A password is required
            </span>
          )}
        </label>

        <input
          type="submit"
          className="text-white bg-primary p-2 rounded-lg mt-4 cursor-pointer"
          value="Login"
        />
      </form>
    </main>
  );
};

export default Login;
