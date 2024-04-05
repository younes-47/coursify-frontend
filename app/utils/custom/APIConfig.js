const DevConfig = {
  BACKEND_SERVER_PROTOCOL: 'https',
  BACKEND_SERVER_IP: 'localhost',
  BACKEND_SERVER_PORT: '7142',
};
const ProdConfig = {
  BACKEND_SERVER_PROTOCOL: '',
  BACKEND_SERVER_IP: '',
  BACKEND_SERVER_PORT: '',
};
const TestConfig = {
  BACKEND_SERVER_PROTOCOL: '',
  BACKEND_SERVER_IP: '',
  BACKEND_SERVER_PORT: '',
};
/// //////////////////////////// ///
/// /////Change value below///// ///
/// //////////////////////////// ///
const environement = 'DEV';
/// //////////////////////////// ///
/// /////Change value above///// ///
/// //////////////////////////// ///
const backendAdress = () => {
  let config;
  if (environement === 'PROD') {
    config = ProdConfig;
  }
  if (environement === 'DEV') {
    config = DevConfig;
  }
  if (environement === 'TEST') {
    config = TestConfig;
  }
  const address = `${config.BACKEND_SERVER_PROTOCOL}://${config.BACKEND_SERVER_IP}:${config.BACKEND_SERVER_PORT}/api/`;
  return address;
};

export default backendAdress;
