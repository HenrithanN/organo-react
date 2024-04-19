import React, { ReactElement } from 'react';
import './CustomButton.css';

interface CustomButtonProps {
    children: ReactElement
}
const CustomButton = ({children} : CustomButtonProps) => {
    return (
        <button className='custom-button'>
            { children }
        </button>
    )
}

export default CustomButton;