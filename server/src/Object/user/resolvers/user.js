import {AuthenticationError} from 'apollo-server';
import crud from '../service/crud';
import users from '../../../data';


export default {
    Query: {
        users: () => users.users(),
        length: () => users.users().length
    },

    Mutation:{
        createUser:(parent, args) => {

            let lastname, firstname = null;

            if(typeof args.input.username === 'undefined'){
                throw new AuthenticationError('username not exist');
            }

            if(typeof args.input.lastname !== 'undefined'){
                lastname = args.input.lastname;
            }

            if(typeof args.input.firstname !== 'undefined'){
                firstname = args.input.firstname;
            }
            let user = crud.createUser(args.input.username, lastname, firstname);

            users.addUser(user);


            return user;
        }
    }
}