import React from 'react';
import messages from "../query/messages.graphql";
import sendMessage from '../query/sendMessage.graphql';
import {Query, Mutation } from "react-apollo";

/**
 *
 */
export default class Messages extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            content:'',
            token:this.props.location.search.replace("?token=", ""),
            refetch:null
        };


        this.handleChangeContent = this.handleChangeContent.bind(this);
    }

    handleChangeContent(event){

        this.setState({content: event.target.value});
    }

    render() {

        return (
            <div>

                <div className="row">

                    <Query  query={messages} variables={{idUser:parseInt(this.props.match.params.id)}}>
                        {({ loading, error, data, refetch }) => {
                            this.state.refetch = refetch;
                            let listItems = [];
                            if(typeof data.messages !== 'undefined'){
                                listItems = data.messages.map((item) =>
                                    <div key={item.id} className="media">
                                        <div className="media-body">
                                            <h5 className="mt-0 mb-1">{item.date.dateFr}</h5>
                                            {item.content.split('\n').map((value, key) => {
                                                return <span key={item.id+'_'+key}>{value}<br/></span>
                                            })}
                                        </div>

                                    </div>
                                );
                            }

                          return (
                              <div>
                                  {listItems}
                              </div>
                          );
                        }}
                    </Query>
                </div>
                <div className="row">
                    <div className="col">
                        <Mutation
                            context={{headers:{
                                    authorization:this.props.location.search.replace("?token=", "")
                                }}}
                            mutation={sendMessage}>
                            {(sendMessage, { data }) => (

                                <form
                                    onSubmit={e => {
                                        e.preventDefault();
                                        sendMessage({ variables: { content: this.state.content } });
                                        this.state.content  = "";
                                        this.state.refetch();
                                    }}
                                >
                                    <div className="form-group">
                                        <label htmlFor="textarea-message">Example textarea</label>
                                        <textarea id="textarea-message" value={this.state.content} onChange={this.handleChangeContent} className="form-control" rows="3"/>
                                    </div>
                                    <input className="btn btn-primary" type="submit" value="Envoyer" />
                                </form>
                            )}
                        </Mutation>
                        <br/>
                    </div>
                </div>
            </div>
        );
    }
}