import React from 'react';
import axios from 'axios';
import UserCard from './Card';

export default class CardList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: [],
            followersData: [],
            searchText: "",
        }
    }

    setSearchText = () => event => {
        this.setState({
            searchText: event.target.value
        })
    }

    componentDidMount() {
        axios.get('http://api.github.com/users/domeccleston')
            .then(res => 
                this.setState({
                    userData: res.data
                }))
            .then(res => 
                axios.get(this.state.userData.followers_url)
                    .then(res => {
                        res.data.forEach((follower) => {
                            axios.get(follower.url)
                                .then(res => {
                                    this.setState(currentState => {
                                        
                                    }
                                })
                        })
                    })
                )
    }

    handleSubmit = () => event => {
        event.preventDefault();
    }


    render() {
        console.log(this.state.followersData)
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="search" onChange={this.setSearchText}/>
            </form>

            {this.state.followersData.map(follower => (
                <UserCard userData={follower} />
            ))}
            </div>
        )
    }
}