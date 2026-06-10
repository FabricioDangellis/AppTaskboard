import { createContext, useContext, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

type AuthContextData = {
  user: User | null;
  setUser: (user: User | null) => void;
};

const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}