
import { createContext, useState } from "react";


export const AuthContext = createContext({
  authToken: null,
  isAuthenticated: false,
  login: (token) => {},
  logout: () => {},
});
export function AuthenticationProvider ({children}) {
 const [authToken, setAuthToken] = useState();

 function logout() {
  setAuthToken(null);
 }
    function login(token) { 
    setAuthToken(token);    
    }

  const  value = {
        authToken,
        isAuthenticated: !!authToken,
        login,
        logout,
    };
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );



}
