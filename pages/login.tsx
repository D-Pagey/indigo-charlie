import type { NextPage } from "next";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  username: string;
  password: string;
};

const Login: NextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data: any) => console.log(data);

  return (
    <main className="">
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
              A username is required
            </span>
          )}
        </label>

        <label className="flex flex-col text-white mb-4">
          Password
          <input
            placeholder="Enter your password..."
            className="mt-2 p-2 rounded text-lg text-black"
            {...register("password", { required: true })}
          />
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
