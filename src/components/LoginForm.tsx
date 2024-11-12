import { loginSchema } from "@/types/schema/login";
import { Login } from "@/types/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Login>({ resolver: zodResolver(loginSchema) });
  const onLogin = (data: Login) => {
    console.log(data);
  };
  return (
    <>
      <div className="bg-white py-4 sm:py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form
          onSubmit={handleSubmit(onLogin)}
          className="space-y-4 sm:space-y-6"
          action="#"
          method="POST"
        >
          <div>
            <input
              {...register("email")}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
              placeholder="メールアドレス"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <input
              {...register("password")}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
              placeholder="パスワード"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              ログイン
            </button>
          </div>
        </form>

        <div className="mt-4 sm:mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <hr className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">または</span>
            </div>
          </div>

          <div className="mt-4 sm:mt-6">
            <button
              type="button"
              className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-blue-600 hover:bg-gray-50"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                  clipRule="evenodd"
                />
              </svg>
              ゲストユーザーでログイン
            </button>
          </div>
        </div>

        <div className="mt-4 sm:mt-6">
          <div className="text-center">
            <Link
              href="#"
              className="font-medium text-blue-600 hover:text-blue-500 text-sm"
            >
              パスワードを忘れた場合
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-4 sm:mt-6 bg-white py-4 sm:py-6 px-4 shadow sm:rounded-lg sm:px-10">
        <p className="text-center text-xs sm:text-sm text-gray-600">
          アカウントをお持ちでないですか？{" "}
          <Link
            href="#"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            登録する
          </Link>
        </p>
      </div>
    </>
  );
};

export default LoginForm;
