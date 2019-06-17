import React from 'react';
import users from './../query/users.graphql';
import {Query} from "react-apollo";
import { Route, NavLink } from "react-router-dom";
import Messages from "../../message/components/Messages";

export default class List extends React.Component {

    constructor(props){
        super(props);
        this.state={
            refetchList:null
        }


    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <Query pollInterval={1500} query={users}>
                        {({ loading, error, data, refetch }) => {
                            if (loading) return <p>Loading...</p>;
                            if (error) return <p>Error :(</p>;

                            //this.satte.refetch = refetch
                            const listItems = data.users.map((item) =>
                                <NavLink
                                    to={{pathname:this.props.match.url+"/"+item.id+"/message", search:'?token='+item.token}}
                                    key={item.id}
                                    activeClassName="active"
                                    className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                                >
                                    {item.username}
                                    <span className="badge badge-primary badge-pill">{item.lengthMessages}</span>
                                </NavLink>
                            );
                            return (
                                <ul className="list-group">
                                    {listItems}
                                </ul>
                            );
                        }}
                    </Query>
                </div>
                <div className="col-md-8">
                    <Route
                        path={this.props.match.url+"/:id/message"}
                        exact
                        render={(props) => <Messages {...props} />}
                       />
                </div>
            </div>
        );
    }
}