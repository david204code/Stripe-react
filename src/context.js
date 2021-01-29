import React, { useState, useContext } from 'react';
import sublinks from './data';

const AppContext = React.createContext();

// the provider
export const AppProvider = ({children}) => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openSubmenu = () => {
    setIsSubmenuOpen(true);
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return(
    <AppContext.Provider 
      value ={{
        isSubmenuOpen, 
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu, 
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext)
};