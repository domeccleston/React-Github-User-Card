import React from 'react';

export default class Card extends React.Component {

    render() {
        return (
            <div>
                <h2>{this.props.userData.login}</h2>
            </div>
        )
    }
}