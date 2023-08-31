import Cookies from "js-cookie";

export function isAuthenticated() {
    const accessToken = Cookies.get('access_token');
    return !!accessToken;
}