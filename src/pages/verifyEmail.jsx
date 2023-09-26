import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { GoVerified } from 'react-icons/go';

const VerifyEmail = () => {
  const param = useParams();

  const [validEmail, setValidEmail] = useState(false);

  const verifyUserEmail = async () => {
    // const response = await fetch(
    //   `http://localhost:3035/api/auth/${param.id}/confirm/${param.token}`
    // );
    const response = await fetch(
      `https://degeniusfx-backend.onrender.com/api/users/${param.id}/confirm/${param.token}`
    );
    await response.json();
    setValidEmail(true);
  };

  useEffect(() => {
    verifyUserEmail();
  }, [param]);
  return (
    <div>
      {validEmail ? (
        <div className="flex flex-col items-center justify-center m-auto mt-20">
          <GoVerified className="text-8xl" />
          <p className="text-3xl mt-4 text-green-600 italic">
            Email Verification Successful. You can login...
          </p>
          <Link to="/login">
            <button className="text-2xl border p-2 rounded-2xl bg-slate-500 text-white font-bold uppercase mt-5 italic">
              Login
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <p>404, Notfound</p>
        </div>
      )}
    </div>
  );
};

export default VerifyEmail;
