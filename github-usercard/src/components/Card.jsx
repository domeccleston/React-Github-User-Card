import React from 'react';
import { Card, Image} from 'semantic-ui-react'
import axios from 'axios';

export default class UserCard extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            detailedUserData: []
        }
    }

    render() {
        console.log(this.props.userData.url)
        return (
            <Card className="semantic-card">
                <Card.Header>Card</Card.Header>
            </Card>
        )
    }
}