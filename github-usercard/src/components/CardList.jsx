import React from "react";
import axios from "axios";
import UserCard from "./UserCard";

export default class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      followersData: [],
      searchText: ""
    };
  }

  setSearchText = () => event => {
    this.setState({
      searchText: event.target.value
    });
  };

  getGithubData = user => {
    axios.get(`https://api.github.com/users/${user}`).then(res => {
      this.setState({
        userData: res.data,
        followersData: []
      });
    });
  };

  getGithubFollowersData = user => {
    axios.get(`https://api.github.com/users/${user}/followers`).then(res => {
      res.data.forEach(follower => {
        axios
          .get(`https://api.github.com/users/${follower.login}`)
          .then(res => {
            console.log(res.data);
            this.state.followersData.concat(res.data);
          })
          .catch(err => console.log(err));
      });
    });
  };

  componentDidMount() {
    this.getGithubData("domeccleston");
    this.getGithubFollowersData("domeccleston");
  }

  handleSubmit = () => event => {
    event.preventDefault();
  };

  render() {
    console.log(this.state.followersData);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="search"
            onChange={this.setSearchText}
          />
        </form>

        <UserCard userData={this.state.userData} />
      </div>
    );
  }
}
