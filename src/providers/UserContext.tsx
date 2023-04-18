import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { kenzieApi } from '../services/api';
import { TLoginFormValues } from '../components/Form/LoginForm/loginFormSchema';

interface IUserProviderProps {
  children: React.ReactNode;
}

interface IUser {
  accessToken: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

interface IUserContext {
  user: IUser[] | null;
  setUser: React.Dispatch<React.SetStateAction<IUser[] | null>>;
  userLogin: (data: TLoginFormValues) => Promise<void>;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser[] | null>(null);
  const navigate = useNavigate();

  const userLogin = async (data: TLoginFormValues) => {
    try {
      const response = await kenzieApi.post('/login', data);
      setUser(response.data);
      localStorage.setItem('@kBurguerUserToken', response.data.accessToken);
      navigate('/shop');
    } catch (error: any) {
      toast.error(error.response.data);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, userLogin }}>
      {children}
    </UserContext.Provider>
  );
};
