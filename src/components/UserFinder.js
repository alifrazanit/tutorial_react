import { Fragment, useState, useEffect, Component } from 'react';
import classes from './UserFinder.module.css';

import Users from './Users';



export class UserFinder extends Component {
    constructor() {
        super();
        this.state = {
            filteredUsers: [],
            searchTerm: ''
        }
    }

    componentDidMount(){
        this.setState({ filteredUsers: []})
    }


    componentDidUpdate(prevProp, prevState) {
        if (prevState.searchTerm !== this.state.searchTerm) {
            this.setState({
                filteredUsers: DUMMY_USERS.filter((user) => user.name.includes(this.state.searchTerm))
            })
        }
    }

    searchChangeHandler(event) {
        this.setState(data => {
            return { searchTerm: event.target.value }
        })
    }
    render() {
        return (
            <Fragment>
                <div className={classes.finder}>
                    <input type='search' onChange={this.searchChangeHandler.bind(this)} />
                    <Users users={this.state.filteredUsers} />
                </div>
            </Fragment>
        );
    }
}

export default UserFinder;