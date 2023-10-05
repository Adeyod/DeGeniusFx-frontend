import { Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import Register from './pages/Register';
import UserDashboard from './pages/UserDashboard';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import VerifyEmail from './pages/verifyEmail';
import ForgotPassword from './pages/ForgotPassword';
import NotFound from './pages/NotFound';
import ResetPassword from './pages/ResetPassword';
import { loginSuccess } from './redux/userSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const loginSuccessApi = () => {
      fetch('https://degeniusfx-backend.onrender.com/auth/login/success', {
        method: 'GET',
        // credentials: 'include',
        headers: {
          // Accept: 'application/json',
          'Content-Type': 'application/json',
          // 'Access-Control-Allow-Credentials': true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error('Authentication failed');
        })
        .then((resObject) => {
          // setUser(resObject.user);
          dispatch(loginSuccess(resObject));
          navigate('/user-dashboard');
          toast.success('google login successful');
        })
        .catch((err) => {
          console.log(err);
        });
    };
    loginSuccessApi();
  }, []);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password/:id/:token" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/register" element={<Register />} />
        <Route path="/users/:id/confirm/:token" element={<VerifyEmail />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/user-dashboard" element={<UserDashboard />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
