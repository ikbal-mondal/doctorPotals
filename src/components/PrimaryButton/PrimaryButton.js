import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button className="btn my-6 bg-gradient-to-r from-primary to-secondary border-0">{children}</button>
    );
};

export default PrimaryButton;