import {Message} from '../Class/Message'
import crypto from 'crypto';
import crudDate from "../../date/service/crud";

export default {
    /**
     *
     * @param {string} content
     * @param {User} user
     */
    createMesssage(content, user){
        let id = crypto.randomBytes(10).toString('hex');


        let message = new Message(id, content, crudDate.createDate());

        user.messages.push(message);


        return {
            message:message,
            user:user
        };
    }
}