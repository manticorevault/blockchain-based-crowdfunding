import React, { Component } from "react";
import Layout from "../../components/Layout"
import Campaign from "../../ethereum/campaign";
import { Card, Grid, Button } from "semantic-ui-react";
import web3 from "../../ethereum/web3";
import ContributeForm from "../../components/ContributeForm";
import { Link } from "../../routes";

class CampaignShow extends Component {

    static async getInitialProps(props) {
        //Show the address of the campaign you want to display
        const campaign = Campaign(props.query.address);

        const summary = await campaign.methods.getSummary().call();

        return {
            address: props.query.address,
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
                meta: "Endereco do Gerente",
                description: "Gerentes criaram essa campanha, e eles podem criar requisicoes para retirar tokens do saldo",
                style: { overflowWrap: "break-word" }
            },
            {
                header: minimumContribution,
                meta: "Contribuicao Minima (Wei)",
                description: "Essa deve ser a quantidade minima da contribuicao para se tornar parte do projeto"
            },
            {
                header: requestsCount,
                meta: "Numero de Requisicoes",
                description: "Uma requisicao para retirar tokens do saldo do projeto. Deve ser aprovada pelos membros"
            },
            {
                header: approversCount,
                meta: "Numero de Aprovacoes",
                description: "Numero de pessoas que ja contribuiram com esse projeto"
            },
            {
                header: web3.utils.fromWei(balance, "ether"),
                meta: "Saldo do Projeto (Wei)",
                description: "O saldo representa a quantidade de tokens ainda disponiveis dentro do projeto"
            }
        ];

        return <Card.Group items={items} />
    }

    render() {
        return (
            <Layout>
                <h3> Projeto </h3>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            {this.renderCards()}
                        </Grid.Column>

                        <Grid.Column width={6}>
                            <ContributeForm address={this.props.address} />
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>
                            <Link route={`/campaigns/${this.props.address}/requests`}>
                                <a>
                                    <Button primary> Ver Requisicoes </Button>
                                </a>
                            </Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>


            </Layout>
        )
    }
}

export default CampaignShow;