import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const UserDashboard = () => {
  const { currentUser } = useSelector((state) => state.users);
  const { others } = currentUser;
  useEffect(() => {}, [currentUser]);
  return (
    <div>
      <p className="font-bold text-2xl my-4">
        <span className="uppercase">Welcome </span>
        <span className="italic">{others?.firstName}</span>
      </p>
      <div className="md:hidden mx-1">
        <div className="text-xl flex gap-1">
          <p className="font-bold uppercase">first name: </p>
          <p className="">{others?.firstName}</p>
        </div>

        <div className="text-xl flex gap-1">
          <p className="font-bold uppercase">last name: </p>
          <p>{others?.lastName}</p>
        </div>

        <div className="text-xl flex gap-1">
          <p className="font-bold uppercase">email: </p>
          <p>{others?.email}</p>
        </div>

        <div className="text-xl flex gap-1">
          <p className="font-bold uppercase">address: </p>
          <p>{others?.address}</p>
        </div>
      </div>
      <div className="hidden md:flex flex-col">
        <table className="border mx-auto ">
          <thead className=" border-b-2">
            <tr>
              <th className="w-1/4 border-r-2">firstname</th>
              <th className="w-1/4 border-r-2">lastname</th>
              <th className="w-1/4 border-r-2">email</th>
              <th className="w-1/4 border-r-2">address</th>
            </tr>
          </thead>

          <tbody className="">
            <tr>
              <td className="w-1/4 border-r-2">{others.firstName}</td>
              <td className="w-1/4 border-r-2">{others.lastName}</td>
              <td className="w-1/4 border-r-2">{others.email}</td>
              <td className="w-1/4 border-r-2">{others.address}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDashboard;
