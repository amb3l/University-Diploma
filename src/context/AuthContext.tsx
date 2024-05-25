import { createContext, useState } from "react";
import { User } from "../hooks/useUser";

interface AuthContext {
  user: User | null;
  addUserToContext: (user: User | null) => void;
  removeUserFromContext: () => void;
}

export const AuthContext = createContext<AuthContext>({
  user: null,
  addUserToContext: () => {},
  removeUserFromContext: () => {},
})

export const UserData = ({ children }: {children: React.ReactNode}) => {
  const [user, setUser] = useState<User | null>(null)

  const addUserToContext = (user: User) => { setUser(user) }
  const removeUserFromContext = () => { setUser(null) }

  return (
    <AuthContext.Provider value={{ user, addUserToContext, removeUserFromContext }}>
      { children }
    </AuthContext.Provider>
  )
}

function useEffect(arg0: () => void, arg1: User[]) {
  throw new Error("Function not implemented.");
}
