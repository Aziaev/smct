import React from 'react';
import './Footer.css';

function Footer({title, link}) {
    return (
        <div className="footer">
            <a
                className="link"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
            >
                {title}
        </a>
        </div>
    );
}

export default Footer;