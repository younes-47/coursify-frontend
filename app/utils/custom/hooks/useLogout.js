import { axiosCredentials } from '../api/axios';
import useAuth from './useAuth';

const useLogout = () => {
  const { setAuth, setUserInfo } = useAuth();

  const logout = async () => {
    setAuth({});
    setUserInfo(null);
    try {
      await axiosCredentials.post('/Auth/logout');
    } catch (error) {
      console.error(error);
    }
  };
  return logout;
};

export default useLogout;
