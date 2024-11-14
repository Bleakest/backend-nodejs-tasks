import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const Form = () => {
  const FormSchema = yup.object().shape({
    name: yup
      .string()
      .required("Заполните Фио")
      .matches(/\w+$/, "Неверный логин"),
    number: yup
      .string("Заполните номер")
      .matches(/^-?\d+(\.\d+)?$/, "Неверно заполнен номер")
      .min(10, "Минимум 10 символов")
      .max(12, "Максимум 12 символов"),
    problem: yup
      .string("Заполните проблему")
      .matches(/\w+$/, "Неверно заполнена проблема")
      .min(5, "Минимум 5 символов")
      .max(30, "Максимум 30 символов"),
  });

  const onSubmit = async ({ name, number, problem }) => {
    await fetch("/form", {
      method: "POST",
      headers: {
        "Content-type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        name,
        number,
        problem,
      }),
    }).then(() => reset());
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      number: "",
      problem: "",
    },
    resolver: yupResolver(FormSchema),
  });

  const formError =
    errors?.name?.message ||
    errors?.number?.message ||
    errors?.problem?.message;

  return (
    <div className="flex justify-center items-center">
      <div className="mt-52 text-center w-[400px]">
        <h1 className="text-xl pb-4">Запись к врачу</h1>
        <div className="p-4 border border-black rounded-sm">
          {formError && <div className="text-red-800">{formError}</div>}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <h3 className="pb-2">Фио</h3>
              <input
                {...register("name")}
                name="name"
                className="border border-black rounded-sm"
              />
            </div>

            <div>
              <h3 className="pb-2">Номер телефона</h3>
              <input
                {...register("number")}
                name="number"
                className="border border-black rounded-sm"
              />
            </div>

            <div>
              <h3 className="pb-2">Опишите вашу проблему</h3>
              <textarea
                {...register("problem")}
                name="problem"
                cols={35}
                rows={4}
                className="border border-black rounded-sm"
              />
              <button
                type="submit"
                className="border-2 py-2 px-16 bg-black text-white rounded-md hover:bg-neutral-700"
              >
                Отправить
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
