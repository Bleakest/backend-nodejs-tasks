import React, { useEffect, useState } from "react";
import UserInfo from "./components/userInfo";
import { useNavigate } from "react-router-dom";

export const Application = () => {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  const callBackendAPI = async () => {
    const response = await fetch("/users");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  useEffect(() => {
    const currentUserDataJson = sessionStorage.getItem("userData");

    if (!currentUserDataJson) {
      navigate("/login");
    }
    callBackendAPI()
      .then((res) => setUsers(res.users))
      .catch((err) => console.log(err));
  }, []);

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
            {users.map((user) => (
              <UserInfo key={user._id} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
