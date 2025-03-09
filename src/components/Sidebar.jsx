import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaChartLine, FaCog, FaBars } from 'react-icons/fa';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', icon: <FaHome />, path: '/admin/dashboard' },
    { name: 'Analytics', icon: <FaChartLine />, path: '/admin/analytics' },
    { name: 'Settings', icon: <FaCog />, path: '/admin/settings' },
  ];

  return (
    <div
      className={`bg-gray-800 text-white h-screen fixed top-0 left-0 transition-all duration-300 ${
        isOpen ? 'w-64' : 'w-16'
      }`}
    >
      <button
        className="p-4 focus:outline-none text-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars />
      </button>

      <ul className="mt-4">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className={`flex items-center gap-3 p-4 hover:bg-gray-700 transition-all ${
                location.pathname === item.path ? 'bg-gray-700' : ''
              }`}
            >
              {item.icon}
              {isOpen && <span>{item.name}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
