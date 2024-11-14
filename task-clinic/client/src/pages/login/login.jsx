import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

export const Login = () => {
  const navigate = useNavigate();
  const FormSchema = yup.object().shape({
    login: yup
      .string()
      .required("Заполните логин")
      .matches(/\w+$/, "Неверный логин")
      .min(3, "Минимум 3 символа")
      .max(15, "Максимум 15 символов"),
    password: yup
      .string("Заполните пароль")
      .matches(/^[\w#%]+$/, "Неверно заполнен пароль")
      .min(5, "Минимум 5 символов")
      .max(30, "Максимум 30 символов"),
  });

  const onSubmit = async ({ login, password }) => {
    await fetch("/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        login,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) =>
        sessionStorage.setItem("userData", JSON.stringify(data.user))
      )
      .then(() => navigate("/application"));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
    resolver: yupResolver(FormSchema),
  });

  const formError = errors?.login?.message || errors?.password?.message;
  
  return (
    <div className="flex justify-center items-center">
      <div className="mt-52 text-center w-[400px]">
        <div className="p-4 border border-black rounded-sm">
          {formError && <div className="text-red-800">{formError}</div>}
          <h1 className="text-xl pb-4 font-bold">Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="pb-4">
              <h3 className="pb-2">Электронная почта</h3>
              <input
                name="login"
                {...register("login")}
                placeholder="Введите логин"
                className="border text-center py-1 px-10 border-black rounded-md"
              />
            </div>
            <div className="pb-4">
              <h3 className="pb-2">Пароль</h3>
              <input
                type="password"
                name="password"
                {...register("password")}
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
