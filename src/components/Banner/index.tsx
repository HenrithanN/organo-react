import './Banner.css';
import React from 'react';

interface BannerProps {
    url: string,
    descricao?: string,
}

const Banner = ({url, descricao}: BannerProps) => {
    return (
        <header className="banner">
            <img src={url} alt={descricao}/>
        </header>
    )
}

export default Banner