class AuthenticationService {
    registerSuccessfulLogin(username, password) {
      console.log('inside session method...............XXXXXXXXX');
      sessionStorage.setItem('authenticatedUser', username);
    }
    logout() {
      console.log('inside session method...............XXXXXXXXX');
      sessionStorage.removeItem('authenticatedUser');
    }
    isUserLogdin() {
      let user = sessionStorage.getItem('authenticatedUser');
      if (user === null) return false;
      return true;
    }
  }
  export default new AuthenticationService();
  