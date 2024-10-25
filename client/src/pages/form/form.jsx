import React from "react";

export const Form = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="mt-52 text-center w-[400px]">
        <h1 className="text-xl pb-4">Запись к врачу</h1>
        <div className="p-4 border border-black rounded-sm">
          <form method="POST" action="/form" >
            <div>
              <h3 className="pb-2">Фио</h3>
              <input
                type="text"
                name="name"
                className="border border-black rounded-sm"
              />
            </div>

            <div>
              <h3 className="pb-2">Номер телефона</h3>
              <input name="number" className="border border-black rounded-sm" />
            </div>

            <div>
              <h3 className="pb-2">Опишите вашу проблему</h3>
              <textarea
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
