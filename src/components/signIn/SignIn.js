import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../scss/SignIn.scss';

const SignIn = () => {
    const [username, setUserName] = useState('');

    return (
        <div className="signIn_page">
            <p>Welcome to gallery!</p>
            <input
                type="text"
                value={username}
                placeholder={'Enter your name...'}
                onChange={e => setUserName(e.target.value)}
                required
            />
                {username !== '' ?
                    <Link
                        style={{ textDecoration: 'none', color: 'black', marginTop: 20 }}
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