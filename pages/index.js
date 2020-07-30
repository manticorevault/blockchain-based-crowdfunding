import React, { Component } from "react";
import factory from "../ethereum/factory";

//Shows all the deployed Campaigns
class CampaignIndex extends Component {
    //Defines a class function within NextJS
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();

        //Object to be provided in the component as props
        return { campaigns };
    }

    render() {
    // Retrieve the Campaigns object
    return <div>{ this.props.campaigns[0] }</div>
    }
}

export default CampaignIndex;