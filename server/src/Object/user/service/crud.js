import crypto from 'crypto';
import {User} from '../Class/User';
import users from '../../../data';

export default {
    /**
     *
     * @param {string} username
     * @param {string|null} lastname
     * @param {string|null} firstname
     * @returns {User}
     */
    createUser: (username, lastname, firstname) => {

        let id = users.users().length+1;
        let token = crypto.randomBytes(10).toString('hex');

        return new User(id, username, [], token, lastname, firstname);

    },
    /**
     *
     * @param {string} token
     * @returns {User}
     */
    getUserByToken: (token)=>{
        let user = null;

        users.users().forEach(function(element) {


            if(element.token===token){
                user = element;
            }
        });
        return user;
    }

}