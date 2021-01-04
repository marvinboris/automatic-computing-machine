import React from 'react';

import './Logo.css';

import Image from '../../../assets/images/Logo@2x.png';
import Dark from '../../../assets/images/Group 10@2x.png';

export default ({ big, dark, width = 163.91, height = 28.11 }) => (
    <div className="Logo mb-0 text-white" >
        {dark ?
            <img src={Dark} style={{ width, height }} />
            :
            <img src={Image} style={{ width, height }} />
        }
    </div>
);