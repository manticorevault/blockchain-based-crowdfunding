import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import factory from "../ethereum/factory";
import Layout from "../components/Layout";
import { Link } from "../routes";

//Shows all the deployed Campaigns
class CampaignIndex extends Component {
    //Defines a class function within NextJS
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();

        //Object to be provided in the component as props
        return { campaigns };
    };

    renderCampaigns() {
        // Iterate over list of Campaign Address to create an object
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: (
                    <Link route={`/campaigns/${address}`}>
                        <a>View Campaign</a>
                    </Link>

                ),
                fluid: true // Stretches all the width of the container
            };
        });

        // Render the objects as a new card component
        return <Card.Group items={items} />

    };

    render() {
        // Retrieve the Campaigns object
        return (
            <Layout>
                <div>
                    <h3> Open Campaigns </h3>

                    <Link route="/campaigns/new">
                        <a>
                            <Button
                                content="Create Campaign"
                                icon="add"
                                floated="right"
                                primary={true}
                            />
                        </a>
                    </Link>

                    {this.renderCampaigns()}
                </div>
            </Layout>
        );

    };
};

export default CampaignIndex;