import React from 'react'
import { useNavigate } from 'react-router-dom';
const Button = ({ label, bgColor, color, isDisabled = false, redirectPath }) => {
    const nevigate = useNavigate();

    const handleClick = () => {
        nevigate(redirectPath);
    };

    return (
        <button onClick={handleClick} disabled={isDisabled} className='button' style={{ background: bgColor, color }}>
            {label}
        </button>
    );
}

export default Button;