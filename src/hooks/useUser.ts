import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { useLocalStorage } from "./useLocalStorage"


export interface User {
  id: string
  name: string
  email: string
  accessToken: string
  refreshToken: string
}


export const useUser = () => {
  const { user, addUserToContext, removeUserFromContext } = useContext(AuthContext)
  const { setItem } = useLocalStorage()

  const addUser = (u: User) => {
    addUserToContext(u)
    console.log('user context')
    console.log(user)
    setItem("user", JSON.stringify(u))
  }

  const removeUser = () => {
    removeUserFromContext()
    setItem("user", "")
  }

  return { user, addUser, removeUser, addUserToContext, removeUserFromContext }
}