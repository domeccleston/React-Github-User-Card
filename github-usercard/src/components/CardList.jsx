import React from 'react';
import axios from 'axios';
import Card from './Card';

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
                    .then(res => 
                        this.setState({
                            followersData: res.data
                        })
                    )
                )
    }

    handleSubmit = () => event => {
        event.preventDefault();
        console.log(this.state.searchText)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevState);
    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="search" onChange={this.setSearchText}/>
            </form>

            {this.state.followersData.map(follower => (
                <Card userData={follower} />
            ))}
            </div>
        )
    }
}