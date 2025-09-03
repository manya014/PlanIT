import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom"; // <-- use react-router-dom
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import PageLoader from './components/PageLoader';
import useAuthUser from "./hooks/useAuthUser.js";
import Dashboard from './pages/Dashboard.jsx';

const App = () => {
    const { isLoading, authUser } = useAuthUser();

    if (isLoading) return <PageLoader />;

    const isAuthenticated = Boolean(authUser);

    return (
        <Routes>
            {/* Redirect authenticated users from public pages */}
            <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <HomePage />} />
            <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <LoginPage />} />
            <Route path="/signup" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <SignUpPage />} />
            <Route path="/logout" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <HomePage />} />

            {/* Protected routes */}
            <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/" replace />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to={isAuthenticated ? "/dashboard" : "/"} replace />} />
        </Routes>
    );
}

export default App;
