function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md fixed top-0 left-0 w-full flex justify-between items-center">
      <h1 className="text-lg font-bold">📊 InsightFlow</h1>
      <div>
        <button className="bg-white text-blue-600 px-4 py-2 rounded-md">
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
