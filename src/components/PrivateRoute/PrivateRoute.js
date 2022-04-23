import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({ children }) => {
    // const {children,...rest}=props;
    const { user } = useAuth();
    return user.displayName ? children : <Navigate to='/login'></Navigate>;
};

export default PrivateRoute;