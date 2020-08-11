import React, { Component } from "react";
import Layout from "../../components/Layout"
import Campaign from "../../ethereum/campaign";
import { Card } from "semantic-ui-react";
import web3 from "../../ethereum/web3";

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
                description: "Manager created this campaign and they can create requests to withdraw money",
                style: { overflowWrap: "break-word" }
            },
            {
                header: minimumContribution,
                meta: "Minium Contribution (Wei)",
                description: "This is the minium amount you need to contribute to become an approver"
            },
            {
                header: requestsCount,
                meta: "Number of requests",
                description: "A request tries to withdraw money from the contract. It must be approved by the approvers"
            },
            {
                header: approversCount,
                meta: "Number of approvers",
                description: "Number of people that already donated to this campaign"
            },
            {
                header: web3.utils.fromWei(balance, "ether"),
                meta: "Campaign Balance (In Ether)",
                description: "The balance is how much money this campaign still has available to spend"
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