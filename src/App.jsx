import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';

import { Provider } from 'react-redux';
import store from './store';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';

import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Public Routes (Without Sidebar & Navbar) */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes (Require Login) */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <div className="min-h-screen flex">
                  <Sidebar />
                  <div className="w-full">
                    <Navbar />
                    <Dashboard />
                  </div>
                </div>
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/analytics"
            element={
              <ProtectedRoute>
                <div className="min-h-screen flex">
                  <Sidebar />
                  <div className="w-full">
                    <Navbar />
                    <Analytics /> {/* Add the Analytics Component */}
                  </div>
                </div>
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/settings"
            element={
              <ProtectedRoute>
                <div className="min-h-screen flex">
                  <Sidebar />
                  <div className="w-full">
                    <Navbar />
                    <Settings /> {/* Add the Analytics Component */}
                  </div>
                </div>
              </ProtectedRoute>
            }
          />

          {/* Redirect unknown routes to login */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
