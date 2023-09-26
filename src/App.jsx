import { Route, Routes } from 'react-router-dom';
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

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
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
