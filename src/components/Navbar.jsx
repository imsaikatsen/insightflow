import { useDispatch } from 'react-redux';
import { logout } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login'); // Redirect to login after logout
  };

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md fixed top-0 left-0 w-full flex justify-between items-center">
      <h1 className="text-lg font-bold">📊 InsightFlow</h1>
      <div>
        <button
          onClick={handleLogout}
          className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-200 transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
