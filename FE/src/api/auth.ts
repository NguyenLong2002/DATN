import { axiosService } from "./axiosService";
import { HEADER } from '../constants/index';

const authApi = {
    helloWorld() {
        const url = '/';
        return axiosService.get(url);
    },
    signUp(data: formDataSignUp): Promise<responseSignUp> {
        console.log(data);
        const url = '/v1/api/access/signUp';
        return axiosService.post(url, data);
    },
    login(body: formDataSignIn): Promise<responseToken> {
        const url = '/v1/api/access/login';
        return axiosService.post(url, body);
    },
    reFreshToken(refreshToken: string): Promise<responseToken> {
        const url = '/v1/api/access/handleRefreshToken';
        return axiosService.post(url, undefined, {headers: {[HEADER.REFRESHTOKEN]: refreshToken}});
    },
    logOut({user_id, refreshToken}: { user_id: string, refreshToken: string}): Promise<baseDelete> {
        const url = '/v1/api/access/logout';
        return axiosService.post(url, {user_id}, {headers: {[HEADER.REFRESHTOKEN]: refreshToken}});
    },
    loginProvider(body: any): Promise<responseToken> {
        const url = '/v1/api/access/login-provider';
        return axiosService.post(url, body);
    },
    verifyEmail(token: string): Promise<void> {
        const url = `/v1/api/access/verify-email?token=${token}`;
        return axiosService.get(url);
    },

}

export default authApi;