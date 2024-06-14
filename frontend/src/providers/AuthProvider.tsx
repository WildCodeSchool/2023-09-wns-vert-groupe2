import { useMeLazyQuery } from "@/gql/graphql";
import { gql, useLazyQuery } from "@apollo/client";
import React, { ReactElement, createContext, useEffect, useState } from "react";

interface AuthContextType {
  //signIn: (token: string) => void;
  isLoggedIn: boolean;
  signOut: () => void;
  me?: {
    id?: number;
    email?: string;
  } | null;
}

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: { children: ReactElement }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const [me, setMe] = useState<
    | {
        id?: number;
        email?: string;
      }
    | undefined
    | null
  >(undefined);

  const [loadMe, { data, error }] = useMeLazyQuery({
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          await loadMe();
        } catch (err) {
          console.error("Failed to fetch user data:", err);
          setHasAccess(false);
        }
      } else {
        setHasAccess(false);
      }
    };

    checkLoggedIn();
  }, [isLoggedIn, loadMe]);

  useEffect(() => {
    if (data) {
      setMe({
        id: data.me.id,
        email: data.me.email,
      });
      setHasAccess(true);
      setIsLoggedIn(true);
    } else if (error) {
      setMe(null);
      setHasAccess(false);
    }
  }, [data, error]);

  const signOut = () => {
    localStorage.removeItem("token");
    setHasAccess(false);
    setMe(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        //signIn,
        signOut,
        me,
        isLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
