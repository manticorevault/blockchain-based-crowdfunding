import React, { Component } from "react";
import Layout from "../../components/Layout"
import Campaign from "../../ethereum/campaign";

class CampaignShow extends Component {

    static async getInitialProps(props) {
        //Show the address of the campaign you want to display
        const campaign = Campaign(props.query.address);

        const summary = await campaign.methods.getSummary().call();

        return { 
            minimumContribution: summary[0],
            balance: summary[1],
            requestsCount: summary[2],
            approversCount: summary[3],
            manager: summary[4]
         };
    }

    render() {
        return (
            <Layout>
                <h3> Single Page </h3>
            </Layout>
        )
    }
}

export default CampaignShow;