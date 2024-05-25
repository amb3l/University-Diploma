import { useEffect } from "react";
import { User, useUser } from "./useUser";
import { useLocalStorage } from "./useLocalStorage";

export const useAuth = () => {
  // we can re export the user methods or object from this hook
  const { user, addUser, removeUser, addUserToContext, removeUserFromContext } = useUser();
  const { getItem } = useLocalStorage();

  useEffect(() => {
    const user = getItem("user");
    if (user) {
      addUser(JSON.parse(user));
    }
  }, []);

  const login = (user: User) => {
    addUser(user)
    console.log('auth!')
    console.log(user)
  };

  const logout = () => {
    removeUser();
  };

  return { user, login, logout, addUserToContext, removeUserFromContext };
};