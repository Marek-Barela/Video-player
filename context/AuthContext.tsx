import { createContext, useState } from 'react';
import axios from 'axios';
import uniqid from 'uniqid';

const AuthContext = createContext({} as any);

export default AuthContext;

interface AuthProviderProps {
  children?: JSX.Element | JSX.Element[];
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  // Use type of to block behavior of next.js server side rendering
  const [authToken, setAuthToken] = useState(
    (typeof window === 'object' && localStorage.getItem('Token')) || null
  );
  const [authRefreshToken, setAuthRefreshToken] = useState(
    (typeof window === 'object' && localStorage.getItem('RefreshToken')) || null
  );
  const [user, setUser] = useState(
    (typeof window === 'object' && localStorage.getItem('User')) || null
  );

  const loginUser = async (username: string, password: string) => {
    const userID = uniqid() + uniqid() + uniqid();

    const res = await axios({
      method: 'post',
      url: 'https://thebetter.bsgroup.eu/Authorization/SignIn',
      headers: { 'Content-Type': 'application/json' },
      data: {
        Username: username,
        Password: password,
        PlatformCode: 'WEB',
        Name: userID,
      },
    });

    if (res.status === 200) {
      const data = await res.data;

      setAuthToken(data.AuthorizationToken.Token);
      setAuthRefreshToken(data.AuthorizationToken.RefreshToken);
      setUser(data.User);

      localStorage.setItem(
        'Token',
        JSON.stringify(data.AuthorizationToken.Token)
      );
      localStorage.setItem(
        'RefreshToken',
        JSON.stringify(data.AuthorizationToken.RefreshToken)
      );
      localStorage.setItem('User', JSON.stringify(data.User));
    } else {
      alert('User not found');
    }
  };

  const anonymouUser = async () => {
    const anonymousUserID = uniqid() + uniqid() + uniqid();
    const res = await axios({
      method: 'post',
      url: 'https://thebetter.bsgroup.eu/Authorization/SignIn',
      headers: { 'Content-Type': 'application/json' },
      data: {
        Device: {
          PlatformCode: 'WEB',
          Name: anonymousUserID,
        },
      },
    });

    if (res.status === 200) {
      const data = await res.data;

      setAuthToken(data.AuthorizationToken.Token);
    }
  };

  const logout = () => {
    setAuthToken(null);
    setAuthRefreshToken(null);
    setUser(null);

    localStorage.removeItem('Token');
    localStorage.removeItem('RefreshToken');
    localStorage.removeItem('TokenExpiresDate');
    localStorage.removeItem('User');
  };

  const contextData = {
    anonymousUser: anonymouUser,
    loginUser: loginUser,
    logout: logout,
    user: user,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
