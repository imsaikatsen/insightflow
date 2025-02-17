import { useState } from 'react';
import { FaHome, FaChartLine, FaCog, FaBars } from 'react-icons/fa'; // Correct import

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`bg-gray-800 text-white h-screen fixed top-0 left-0 transition-all ${
        isOpen ? 'w-64' : 'w-16'
      }`}
    >
      <button className="p-4" onClick={() => setIsOpen(!isOpen)}>
        <FaBars />
      </button>
      <ul className="mt-4">
        <li className="p-4 flex items-center gap-3 hover:bg-gray-700 cursor-pointer">
          <FaHome /> {isOpen && 'Dashboard'}
        </li>
        <li className="p-4 flex items-center gap-3 hover:bg-gray-700 cursor-pointer">
          <FaChartLine /> {isOpen && 'Analytics'}
        </li>
        <li className="p-4 flex items-center gap-3 hover:bg-gray-700 cursor-pointer">
          <FaCog /> {isOpen && 'Settings'}
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
