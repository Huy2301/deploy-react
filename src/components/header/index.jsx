import React, { useContext } from 'react'
import { themeContext } from '../../App';
import './style.scss';

const Header = () => {
    const crrThemeContext = useContext(themeContext);
    console.log(crrThemeContext);
    return (
        <div className="header">
            
            <ul>
                <li>Home</li>
                <li>My profile</li>
                <li>Setting</li>
                <button onClick={() => {
                    crrThemeContext.setThemeValue(!crrThemeContext.themeValue);
                }}>Mode</button>
            </ul>
            
        </div>
    )
}
export default Header;
