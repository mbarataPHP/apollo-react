import React from 'react';
import createUser from '../query/createUser.graphql';
import {Mutation} from "react-apollo";

export default class CreateUser extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            username:'',
            firstname:'',
            lastname:'',
        };

        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangeFirstname = this.handleChangeFirstname.bind(this);
        this.handleChangeLastname = this.handleChangeLastname.bind(this);
    }

    handleChangeUsername(event){
        this.setState({username: event.target.value});
    }

    handleChangeFirstname(event){
        this.setState({firstname: event.target.value});
    }

    handleChangeLastname(event){
        this.setState({lastname: event.target.value});
    }
    render() {
        return (
            <div>
                <Mutation mutation={createUser}>
                    {(createUser, { data }) => (

                        <form
                            onSubmit={e => {
                                e.preventDefault();
                                if(this.state.username !== ''){
                                    createUser({ variables: {
                                        username: this.state.username,
                                            firstname: this.state.firstname,
                                            lastname: this.state.lastname
                                    } });

                                    this.setState({
                                        username:'',
                                        firstname:'',
                                        lastname:'',
                                    })
                                }


                            }}
                        >
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input onChange={this.handleChangeUsername} value={this.state.username} type="text" className="form-control" id="username" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="firstname">Prénom</label>
                                <input onChange={this.handleChangeFirstname} value={this.state.firstname} type="text" className="form-control" id="firstname" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastname">Nom</label>
                                <input onChange={this.handleChangeLastname} value={this.state.lastname}  type="text" className="form-control" id="lastname" />
                            </div>
                            <input className="btn btn-primary" type="submit" value="Envoyer" />
                        </form>
                    )}
                </Mutation>
            </div>
        );
    }
}