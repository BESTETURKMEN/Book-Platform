import axios from 'axios';

function Logindata() {
    try {
        axios.post('https://dummyjson.com/auth/login', {
            username: 'kminchelle',
            password: '0lelplR'
        })
            .then(res => {
                console.log(res.data);
            })
            .catch(error => {
                console.error(error);
            });
    } catch (error) {
        console.error(error);
    }
}

export default Logindata;
