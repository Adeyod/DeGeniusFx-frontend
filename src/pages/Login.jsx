import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginFailure, loginStart, loginSuccess } from '../redux/userSlice';
import OAuth from '../components/OAuth';
import FAuth from '../components/FAuth';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState('');

  const { loading } = useSelector((state) => state.users);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const response = await fetch(
        'https://degeniusfx-backend.onrender.com/api/auth',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      if (data.success === false) {
        dispatch(loginFailure(data));
        toast(data.message);
        return;
      }
      dispatch(loginSuccess(data));
      toast.success(data.message);
      navigate('/user-dashboard');
      return;
    } catch (error) {
      dispatch(loginFailure());
      console.log(error);
    }
  };

  return (
    <div className="lg:flex justify-evenly  p-4">
      <div>
        <h1 className="uppercase font-bold text-center text-xl underline mt-2">
          login Here
        </h1>
        <form onSubmit={handleSubmit} className="">
          <div className=" justify-center p-5 gap-5">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-justify">
                Email Address
              </label>
              <input
                className="border-2 outline-none w-full lg:w-[500px] rounded-lg pl-2 h-12 "
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                placeholder="Email here..."
                required
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
                onChange={handleChange}
                placeholder="Password here..."
                required
              />
            </div>

            <div className="md:flex gap-4">
              <div className="flex gap-2 font-bold mt-2">
                <p className="text-justify">Dont have an account ?</p>
                <Link className="text-blue-700 hover:underline" to="/register">
                  Register
                </Link>
              </div>

              <div className="flex gap-2 font-bold mt-2">
                <Link className="text-blue-700 hover:underline" to="/login">
                  Forgot Password ?
                </Link>
              </div>
            </div>

            <button className="w-full mt-2 bg-slate-600 rounded-lg p-2 text-white font-bold h-12">
              {loading === true ? 'LOADING...' : 'LOGIN'}
            </button>
            <OAuth />
            <FAuth />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
