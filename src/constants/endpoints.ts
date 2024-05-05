const enum Endpoints {
  root = '/',
  signup = '/signup',
  signin = '/signin',
  signout = '/signout',
  current = '/current',
  restorePass = '/restore-password',
  dynamicRestorePassToken = 'restorePasswordToken',
  updatePass = `${restorePass}/:${dynamicRestorePassToken}`,
  dynamicId = 'id',
}

export default Endpoints;
