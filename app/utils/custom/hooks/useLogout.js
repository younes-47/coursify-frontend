import { axiosCredentials } from '../api/axios';
import useAuth from './useAuth';

const useLogout = () => {
  const { setAuth, setUserInfo, setPersist } = useAuth();

  const logout = async () => {
    setAuth({});
    setUserInfo(null);
    setPersist(false);
    try {
      await axiosCredentials.post('/Auth/logout');
    } catch (error) {
      console.error(error);
    }
  };
  return logout;
};

export default useLogout;
