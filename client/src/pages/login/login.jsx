import React from "react";

export const Login = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="mt-52 text-center w-[400px]">
        <div className="p-4 border border-black rounded-sm">
          <h1 className="text-xl pb-4 font-bold">Login</h1>
          <form>
            <div className="pb-4">
              <h3 className="pb-2">Электронная почта</h3>
              <input
                type="login"
                placeholder="Введите логин"
                className="border text-center py-1 px-10 border-black rounded-md"
              />
            </div>
            <div className="pb-4">
              <h3 className="pb-2">Пароль</h3>
              <input
                type="password"
                placeholder="Введите пароль"
                className="border text-center py-1 px-10 border-black rounded-md"
              />
            </div>
            <button
              type="submit"
              className="border-2 py-2 px-16 bg-black text-white rounded-md hover:bg-neutral-700"
            >
              Войти
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
