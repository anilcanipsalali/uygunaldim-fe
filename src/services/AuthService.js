import axios from 'axios';

const UYGUNALDIM_AUTH_URL = 'http://localhost:8080/api/auth';

class AuthService {
    login(userRequest) {
        return axios.post(UYGUNALDIM_AUTH_URL+"/login", userRequest);
    }

    register(userRequest) {
        return axios.post(UYGUNALDIM_AUTH_URL+"/register", userRequest);
    }

    refreshToken(userRequest) {
        return axios.post(UYGUNALDIM_AUTH_URL+"/refresh", userRequest);
    }

    validateToken(userRequest) {
        return axios.post(UYGUNALDIM_AUTH_URL+"/validate", userRequest);
    }
}

export default AuthService;