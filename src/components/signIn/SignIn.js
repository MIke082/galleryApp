import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [username, setUserName] = useState('');

    return (
        <div>
            <input
                type="text"
                value={username}
                placeholder={'Enter your name'}
                onChange={e => setUserName(e.target.value)}
                required
            />
            {username !== ''? 
            <Link
                to={{
                    pathname: '/mainPage',
                    state: { username: username }
                }}>
                Go to main page
            </Link>
            : null
            }
        </div>
    );
};

export default SignIn;