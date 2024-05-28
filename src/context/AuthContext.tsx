import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import { getCurrUserData, queryLogIn, queryRegister, refreshAccessToken } from '../services/backend/queries/userData';

interface CurrentUserData {
  id: string
  name?: string
  email: string
  isConfirmed: boolean
}

export interface IAuthContext {
  currentUserData: CurrentUserData | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
}

export const AuthContext = createContext<IAuthContext>({
  currentUserData: null,
  isLoading: false,
  register: () => {return null},
  login: () => {return null},
  logout: () => {}
})

export function AuthProvider({children}: {children: ReactNode}): JSX.Element {
  const [currentUserData, setCurrentUserData] = useState<CurrentUserData | null>(null);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function checkUserData() {
      setIsLoading(true);
        
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) {
        setCurrentUserData(null);
        setIsLoading(false);
            
        return;
      }
        
      const refreshToken = localStorage.getItem('refreshToken');
      if (!refreshToken) {
        setCurrentUserData(null);
        setIsLoading(false);
        
        return;
      }
        
      try {
        const {refresh, access} = await refreshAccessToken(refreshToken);
        localStorage.setItem('accessToken', access)
        localStorage.setItem('refreshToken', refresh)
        
        const data = await getCurrUserData();
        setCurrentUserData(data);
            
      } catch (error) {
        setCurrentUserData(null);
        setIsLoading(false);
      }
      setIsLoading(false);
    }
    
    checkUserData();
  }, [])


  const login = async (email: string, password: string) => {
    try {
      const {me, refresh, access} = await queryLogIn({email: email, password: password})
      localStorage.setItem('accessToken', access)
      localStorage.setItem('refreshToken', refresh)
      
      setCurrentUserData(me);
          
    } catch (error) {
      setCurrentUserData(null);
      throw error
    }
  }

  const logout = () => {
    localStorage.setItem('accessToken', '')
    localStorage.setItem('refreshToken', '')
    setCurrentUserData(null)
  }

  const register = async (name: string, email: string, password: string) => {
    try {
      const {me, refresh, access} = await queryRegister({name: name, email: email, password: password})
      localStorage.setItem('accessToken', access)
      localStorage.setItem('refreshToken', refresh)
      
      setCurrentUserData(me)
          
    } catch (error) {
      setCurrentUserData(null)
      throw error
    }
  }

  const value: IAuthContext = {
    currentUserData,
    isLoading,
    login,
    logout,
    register
  }

  const providerContent = isLoading ? null : children
  return <AuthContext.Provider value={value}>{providerContent}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}