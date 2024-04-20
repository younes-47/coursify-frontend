import { axiosCredentials } from '../api/axios';
import useAuth from './useAuth';

// This hook is used to refresh the access token if it is expired.
// It returns a function that can be called to refresh the token.
// It also updates the access token in the auth context.

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axiosCredentials.post('/Auth/refresh');
    setAuth((prev) => ({
      ...prev,
      role: response.data.role,
      accessToken: response.data.accessToken,
    }));
    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
