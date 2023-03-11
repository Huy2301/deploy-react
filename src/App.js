
import './App.css';
import Header from './components/header';

import './theme/theme.scss';
import { useState, createContext } from 'react';


export const themeContext = createContext({
  themeValue: null,
  setThemeValue: (bolValue) => { },
  
});
function Appbar() {
  const [theme, setTheme] = useState(true);
  
  return (
    <themeContext.Provider value={{
      themeValue: theme,
      setThemeValue: (bolValue) => { setTheme(bolValue) },
      
    }}>
      <div className={`App ${theme ? 'light' : 'dark'}`}>
        <Header />
      </div>
    </themeContext.Provider>
  );
}

export default Appbar;
