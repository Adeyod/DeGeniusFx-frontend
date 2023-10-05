import { useState } from 'react';

const OAuth = () => {
  const [loading, setLoading] = useState(false);
  const googleLogin = async () => {
    setLoading(true);
    const res = window.open(
      'https://degeniusfx-backend.onrender.com/auth/google',
      '_self'
    );
    // const res = window.open('http://localhost:3035/auth/google', '_self');
    await res.json();
    setLoading(false);
  };

  return (
    <div>
      <button
        className="w-full mt-2 bg-red-600 uppercase rounded-lg p-2 text-white font-bold h-12"
        onClick={googleLogin}
      >
        {loading ? 'LOADING' : 'Continue with google'}
      </button>
    </div>
  );
};

export default OAuth;
