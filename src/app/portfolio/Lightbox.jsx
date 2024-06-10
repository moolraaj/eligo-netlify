// Lightbox.jsx

import React from 'react';
import { emptyImage } from '../../../public/assets/images';
const Lightbox = ({ image, onClose }) => {
    return (
        <div className="lightbox-overlay" onClick={onClose}>
            <div className="lightbox-container">
                <button className="close-btn" onClick={onClose}>X</button>
                <img className="lightbox-image" src={image || emptyImage.src} alt="lightbox" />
            </div>
        </div>
    );
};

export default Lightbox;
