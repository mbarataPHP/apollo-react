import fs from 'fs';
import {User} from "./Object/user/Class/User";
import {Message} from "./Object/message/Class/Message";
import {DateObject} from "./Object/date/Class/DateObject";
const path = 'dist/';
const filename = 'users.json';



export default {
    addUser(user){
        let users = this.users();

        users.push(user);


        fs.unlinkSync(this.pathFilename());

        fs.writeFileSync(this.pathFilename(), JSON.stringify(users), { flag: 'wx' });
    },

    getUser(id){
        let users = this.users();

        let user = null;
        users.forEach(function (element) {
            if(element.id===id){
                user = element;
            }
        });

        return user;
    },

    getFile(){

        if (!fs.existsSync(this.pathFilename())) {
            //file exists
            fs.writeFileSync(this.pathFilename(), '[]', { flag: 'wx' });
        }

        return fs.readFileSync(this.pathFilename(), 'utf8');
    },

    users(){
        let date, message;
        let users = [];
        let lastname, firstname = null;
        JSON.parse(this.getFile()).forEach(function (element) {
            let messages = [];
            element.messages.forEach(function (elementMessage) {
                date = new DateObject(elementMessage.date.dateTime);
                message = new Message(elementMessage.id, elementMessage.content,  date);

                messages.push(message);
            });


            if(typeof element.lastname !== 'undefined'){
                lastname = element.lastname;
            }

            if(typeof element.firstname !== 'undefined'){
                firstname = element.firstname;
            }

            users.push(new User(element.id, element.username, messages, element.token, lastname, firstname));
        });

        return users;

    },

    modifyUser(id, user){
        let users = this.users();

        for (let k in users){
            if(users[k].id===id){
                users[k] = user;
            }

        }

        fs.unlinkSync(this.pathFilename());

        fs.writeFileSync(this.pathFilename(), JSON.stringify(users), { flag: 'wx' });
    },

    pathFilename(){

        return process.cwd().replace(String.fromCharCode(92),String.fromCharCode(92,92))+'/'+path+filename;
    }
};