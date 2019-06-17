import crud from '../service/crud';
import data from '../../../data';

export default {
    Query: {
        messages:(parent, args, context, info)=>{

            let messages = [];

            let user = data.getUser(args.idUser);

            if(user!==null){
                messages = user.messages;
            }

            return messages;
        }
    },
    Mutation:{
        sendMessage:(parent, args, context) => {

            if(context.user===null){
                throw new Error('le user est null');
            }
            let message = crud.createMesssage(args.input.content, context.user);

            data.modifyUser(context.user.id, message.user);

            return message.message;
        }
    }

};