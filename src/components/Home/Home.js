import React from 'react';
import useAuth from '../../Hooks/useAuth';

const Home = () => {
    const { user } = useAuth();
    return (
        <div>
            <h2>This is home</h2>
            <p>User: {user.displayName}</p>
        </div>
    );
};

export default Home;