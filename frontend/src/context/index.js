import React, { Component, createContext } from 'react';
import AUTH_SERVICE from '../services/auth';

export const MyContext = createContext();

export default class MyProvider extends Component {
    state = {
        user:{
            username: 'Juan',
            campus: '',
            course: ''
        },
        loggedUser: null
    }

    logUser = (loggedUser) => {
        this.setState({ loggedUser });
    };
    
    logOut = () => {
        AUTH_SERVICE.logOut()
        .then((response) => {
            console.log(response);
            this.setState({ loggedUser: null });
        })
        .catch((err) => console.log(err));
    };

    render() {
        const{state, logUser, logOut} = this
        return (
            <MyContext.Provider value={{ state, logUser, logOut }}>
            {this.props.children}
            </MyContext.Provider>
        )
    }
}
