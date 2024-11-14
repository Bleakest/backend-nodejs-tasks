import React from "react";

const UserInfo = ({user}) => {

  const formatDate = user.createdAt.slice(0, 10).replaceAll('-', '.')
  
  return (
    <tr className="font-normal">
      <th className="border-2 p-2 border-black">{formatDate}</th>
      <th className="border-2 p-2 border-black">{user.name}</th>
      <th className="border-2 p-2 border-black">{user.number}</th>
      <th className="border-2 p-2 border-black">{user.problem}</th>
    </tr>
  );
};

export default UserInfo;
