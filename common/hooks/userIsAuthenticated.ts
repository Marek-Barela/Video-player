import { useEffect, useState } from 'react';

export const useUserIsAuthenticated = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('Token');
    const expire = localStorage.getItem('TokenExpiresDate');

    if (!expire || !token) {
      setIsAuthenticated(false);
      return;
    }

    const expireAsString = JSON.parse(expire);
    const currentTime = new Date(Date.now());
    const expirationTime = new Date(expireAsString);

    if (currentTime.getTime() > expirationTime.getTime()) {
      localStorage.removeItem('Token');
      localStorage.removeItem('TokenExpiresDate');
      setIsAuthenticated(false);
    }

    if (currentTime.getTime() < expirationTime.getTime() && token && expire) {
      setIsAuthenticated(true);
    }
  });

  return { isAuthenticated };
};
