import axios from 'axios';


const API_KEY = 'AIzaSyAuFK4rVYxeD3cE44sGoXQ9ghQVutGA9Y0';
export async function  createUser(email, password) {
    const data = {
        email: String(email),
        password: String(password),
        returnSecureToken: true
    };
    const res = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}` , data);
    return res;
}
export async function  loginUser(email, password) {
    const data = {
        email: String(email),
        password: String(password),
        returnSecureToken: true
    };
    const res =  await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, data);

    return res;}
