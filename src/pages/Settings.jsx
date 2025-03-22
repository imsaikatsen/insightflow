import { useState } from 'react';

function Settings() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    profilePic: '',
    notifications: true,
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser({ ...user, profilePic: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-6 sm:ml-64 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">⚙️ Settings</h1>

      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <label className="cursor-pointer">
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleFileChange}
            />
            <img
              src={user.profilePic || 'https://via.placeholder.com/100'}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
            />
          </label>
          <div className="w-full">
            <input
              type="text"
              placeholder="Name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              className="border p-3 rounded-md w-full"
            />
            <input
              type="email"
              placeholder="Email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="border p-3 rounded-md w-full mt-3"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <label className="text-lg">Enable Notifications</label>
          <input
            type="checkbox"
            checked={user.notifications}
            onChange={() =>
              setUser({ ...user, notifications: !user.notifications })
            }
            className="h-6 w-6 cursor-pointer"
          />
        </div>

        <button
          className="mt-6 bg-blue-500 text-white px-5 py-3 rounded-lg hover:bg-blue-600 w-full"
          onClick={() => alert('Settings Saved!')}
        >
          Save Settings
        </button>
      </div>
    </div>
  );
}

export default Settings;
