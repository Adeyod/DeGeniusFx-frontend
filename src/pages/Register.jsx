import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import OAuth from '../components/OAuth';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch('http://localhost:3035/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setLoading(false);
      if (data.success === false) {
        toast(data.message);
        return;
      }

      toast.success(data.message);
      navigate('/login');
      return data;
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <div className="lg:flex justify-evenly  px-4">
      <div>
        <h1 className="uppercase font-bold text-center text-xl underline mt-2">
          Register Here
        </h1>
        <form onSubmit={handleSubmit} className="">
          <div className=" justify-center ">
            <div className="flex flex-col">
              <label htmlFor="firstName" className="text-justify">
                First Name
              </label>
              <input
                className="border-2 outline-none w-full lg:w-[500px] rounded-lg pl-2 h-12"
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First name here..."
                required
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName" className="text-justify">
                Last Name
              </label>
              <input
                className="border-2 outline-none w-full lg:w-[500px] rounded-lg pl-2 h-12"
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last name here..."
                required
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-justify">
                Email Address
              </label>
              <input
                className="border-2 outline-none w-full lg:w-[500px] rounded-lg pl-2 h-12 "
                type="email"
                name="email"
                id="email"
                placeholder="Email here..."
                required
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="address" className="text-justify">
                Address
              </label>
              <input
                className="border-2 outline-none w-full lg:w-[500px] rounded-lg pl-2 h-12 "
                type="text"
                name="address"
                id="address"
                placeholder="Address..."
                required
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="text-justify">
                Password
              </label>
              <input
                className="border-2 outline-none w-full lg:w-[500px] rounded-lg pl-2 h-12 "
                type="password"
                name="password"
                id="password"
                minLength={8}
                placeholder="Password here..."
                required
                onChange={handleChange}
              />
            </div>

            <div className="flex gap-2 font-bold mt-2">
              <p className="text-justify">Already have an account ?</p>
              <Link className="text-blue-700 hover:underline" to="/login">
                Login
              </Link>
            </div>

            <button className="w-full mt-2 bg-slate-600 rounded-lg p-2 text-white font-bold h-12">
              {loading === true ? 'LOADING...' : 'Register'}
            </button>
            <OAuth />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
