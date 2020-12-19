import React from 'react';

import User from '../../components/User';

const authIndexPage = (props) => (
    <div>
        <h1>The Auth Index Page - {props.appName}</h1>
        <User name="Alex" age={34} />
    </div>
);

authIndexPage.getInitialProps = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                appName: 'Super App (Auth)'
            });
        }, 1000);
    });
};

export default authIndexPage;
