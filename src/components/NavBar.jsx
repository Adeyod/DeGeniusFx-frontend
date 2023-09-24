import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../redux/userSlice';
import { toast } from 'react-toastify';

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(true);

  const { currentUser } = useSelector((state) => state.users);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleLogout = async () => {
    try {
      await fetch('https://degeniusfx-backend.onrender.com/api/auth/logout');
      dispatch(logoutUser());
      toast.info(
        'Logout successful. Thank you for being our partner. We are expecting you back very soon'
      );
      navigate('/register');
      return;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex fixed top-0 right-0 left-0 items-center text-white bg-red-500 h-[75px] justify-between p-4">
      <Link to="/">
        <img
          src="../../images/AyoLogo.jpg"
          alt="companyLogo"
          className="w-10"
        />
      </Link>
      <div className="hidden md:flex gap-4 font-bold ">
        <Link to="/about-us">About Us</Link>
        <div className="">
          {currentUser && currentUser !== null ? (
            <div className="flex justify-between gap-4">
              <button onClick={handleLogout}>Logout</button>
              <Link to="/user-dashboard">Dashboard</Link>
            </div>
          ) : (
            <div className="flex justify-between gap-4">
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            </div>
          )}
        </div>
      </div>
      <button className="md:hidden text-3xl" onClick={handleToggle}>
        {toggle ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
      <div
        className={
          toggle
            ? 'flex flex-col md:hidden bg-red-200 p-4 absolute top-[75px] right-0 left-0 gap-4 font-bold '
            : 'hidden'
        }
        onClick={handleToggle}
      >
        <div>
          <Link to="/about-us">About Us</Link>

          {currentUser && currentUser !== null ? (
            <div className="flex flex-col justify-between gap-2 mt-2">
              <button onClick={handleLogout}>Logout</button>
              <Link to="/user-dashboard">Dashboard</Link>
            </div>
          ) : (
            <div className="flex flex-col justify-between gap-2 mt-2">
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
