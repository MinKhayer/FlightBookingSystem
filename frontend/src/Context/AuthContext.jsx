import { jwtDecode } from "jwt-decode";

import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [uid, setUid] = useState(null);
  const [token, setToken] = useState(null);

  const [userLoading, setUserLoading] = useState(true);

  useEffect(() => {
    setUserLoading(true);
    const saveToken = localStorage.getItem("Authorization");
    // console.log(saveToken);
    if (saveToken) {
      const decodedTokenInfo = jwtDecode(saveToken);
      // console.log(decodedTokenInfo?._id);
      setUser(decodedTokenInfo);
      setUid(decodedTokenInfo?._id);
      setUserLoading(false);
    }
  }, [token]);

  const authValue = {
    user,
    uid,
    token,
    userLoading,
    setUser,
    setToken,
  };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export const UseAuth = () => {
  return useContext(AuthContext);
};
