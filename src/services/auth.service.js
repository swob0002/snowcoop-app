// Use Axios to make a POST request to server API
import Axios from 'axios'

const AuthService = {
    login(credentials) {
        return Axios.post('http://localhost:3000/auth/login', credentials).then(
            response => {
                if (response.status === 200 || response.status === 201) { // If response has status code of 200 or 201 (successful)
                    const {payload} = response.data // ... extract payload from response.data
                    return payload // ... and return it as a promise
                } // payload will contain token and user objects, store them later in state management and localStorage
            }
        )
    },
    register(newUser) {
        return Axios.post('http://localhost:3000/auth/register', newUser).then(
            response => {
                if (response.status === 200 || response.status === 201) {
                    const {payload} = response.data
                    return payload
                }
            }
        )
    },
    
    // set header with authorization token to send out all the requests with a token included
    setHeader(access_token) {
        Axios.defaults.headers.common["Authorization"] = `bearer ${access_token}`
    },

    // sets token and user into localStorage with keywords 'token' and 'user'
    storeToken(token) {
        localStorage.setItem('token', JSON.stringify(token))
    },
    storeUser(user) {
        localStorage.setItem('user', JSON.stringify(user))
    }
};
export default AuthService