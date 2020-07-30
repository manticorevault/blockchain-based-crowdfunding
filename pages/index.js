import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import factory from "../ethereum/factory";


//Shows all the deployed Campaigns
class CampaignIndex extends Component {
    //Defines a class function within NextJS
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();

        //Object to be provided in the component as props
        return { campaigns };
    }

    renderCampaigns() {
        // Iterate over list of Campaign Address to create an object
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: <a>View Campaign</a>,
                fluid: true // Stretches all the width of the container
            };
        });

        // Render the objects as a new card component
        return <Card.Group items={ items } />

    }

    render() {
    // Retrieve the Campaigns object
        return <div>{ this.renderCampaigns() }</div>;
    }
}

export default CampaignIndex;