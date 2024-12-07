import React from 'react';

const Theme = () => {
    // const [theme, setTheme] = React.useState('light');
    // const toggleTheme = () => {
    //   setTheme(theme === 'dark' ? 'light' : 'dark');
    // };
    // // initially set the theme and "listen" for changes to apply them to the HTML tag
    // React.useEffect(() => {
    //   document.querySelector('html').setAttribute('data-theme', theme);
    // }, [theme]);

    const [theme, setTheme] = React.useState(() => {
        return localStorage.getItem('theme') || 'light';
      });
    
      const changeTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
      };
    
      React.useEffect(() => {
        
        document.querySelector('html').setAttribute('data-theme', theme);
      }, [theme]);






    return (
       <label className="swap swap-rotate">
      <input 
        onClick={changeTheme} 
        type="checkbox" 
        className="toggle theme-controller" 
        checked={theme === 'dark'} 
        readOnly 
      />
      <div className="swap-on my-anchor-element">
      
        DARK
        </div>
      <div className="swap-off my-anchor-element">LIGHT</div>
    </label>
    );
};

export default Theme;