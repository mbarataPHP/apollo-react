import React from 'react';
import lengthGql from './../../user/query/length.graphql';
import {Query} from "react-apollo";


export default class Index extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col">
                    <Query  query={lengthGql}>

                        {({ loading, error, data }) => {
                            if (loading) return <p>Loading...</p>;
                            if (error) return <p>Error :(</p>;

                            return (
                                <p className="h6">{ data.length } {data.length>1? 'utilisateurs':'utilisateur'}</p>
                            );
                        }}
                    </Query>
                </div>
            </div>
        );
    }
}