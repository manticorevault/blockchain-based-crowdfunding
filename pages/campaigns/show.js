import React, { Component } from "react";
import Layout from "../../components/Layout"

class CampaignShow extends Component {

    static async getInitialProps(props) {
        //Show the address of the campaign you want to display
        props.query.address;
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