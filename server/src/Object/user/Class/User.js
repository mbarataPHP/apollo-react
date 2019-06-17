export class User{

    /**
     *
     * @param {int} id
     * @param {string} username
     * @param {Message} messages
     * @param {string} token
     * @param {string|null} lastname
     * @param {string|null} firstname
     */
    constructor(id, username, messages = [], token = '', lastname = null, firstname = null){
        this.id = id;
        this.username = username;
        this.lastname = lastname;
        this.firstname = firstname;
        this.messages = messages;
        this.token = token;
    }

    /**
     *
     * @returns {int}
     */
    lengthMessages(){
        return this.messages.length;
    }

    /**
     * Cette méthode permet de retourner le nom complet
     * @returns {string}
     */
    nameComplet(){
        let name = '';
        if(this.lastname!==null){
            name += this.lastname;
        }

        if(this.firstname!==null){
            if(name!==''){
                name += ' ';
            }
            name += this.firstname;
        }

        return name;
    }
}