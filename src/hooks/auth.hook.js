import {useState, useCallback, useEffect} from "react";

const storageName = "userData";

export const useAuth = () => {
  const [token, setToken] = useState(null);

  const login = useCallback((token) => {
    setToken(token);

    const expirationDate = new Date(new Date().getTime() + 3600 * 1000).getTime();  //3600 - 1 hour

    localStorage.setItem(storageName, JSON.stringify({token: token, exDate: expirationDate}));
  }, []);

  const logout = useCallback(() => {
    setToken(null);

    localStorage.removeItem(storageName);
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));

    if (data) {
      const exDate = data.exDate;
      if (exDate <= new Date().getTime()) {
        logout();
      } else {
        login(data.token);
      }
    } else {
      logout();
    }
  }, [login, logout]);

  return {login, logout, token};
};
