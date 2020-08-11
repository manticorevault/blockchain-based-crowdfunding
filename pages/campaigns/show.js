import React, { Component } from "react";
import Layout from "../../components/Layout"
import Campaign from "../../ethereum/campaign";
import { Card } from "semantic-ui-react";

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

    renderCards() {

        const {
            balance,
            manager,
            minimumContribution,
            requestsCount,
            approversCount
        } = this.props;

        const items = [
            {
                header: manager,
                meta: "Manager's Address",
                description: "Manager created this campaign and they can withdraw money",
                style: { overflowWrap: "break-word" }
            }
        ];

        return <Card.Group items={items} />
    }

    render() {
        return (
            <Layout>
                <h3> Single Page </h3>
                {this.renderCards()}
            </Layout>
        )
    }
}

export default CampaignShow;