import React from "react";
import UserInfo from "./components/userInfo";

export const Application = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="mt-52 text-center w-[400px]">
        <h1 className="pb-4 text-2xl">Заявки с формы</h1>
        <table className="border-2 border-black ">
          <tbody>
            <tr className="border-2 border-black w-full">
              <th className="border-2 p-2 border-black">Дата отправки</th>
              <th className="border-2 p-2 border-black">Фио</th>
              <th className="border-2 p-2 border-black">Телефон</th>
              <th className="border-2 p-2 border-black">Проблема</th>
            </tr>
          </tbody>
          <tbody>
            <UserInfo />
          </tbody>
        </table>
      </div>
    </div>
  );
};
