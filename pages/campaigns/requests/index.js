import React, { Component } from "react";
import { Button, Table } from "semantic-ui-react";
import { Link } from "../../../routes";
import Layout from "../../../components/Layout";
import Campaign from "../../../ethereum/campaign";
import RequestRow from "../../../components/RequestRow";

class RequestIndex extends Component {
    static async getInitialProps(props) {
        const { address } = props.query;
        const campaign = Campaign(address);
        const requestCount = await campaign.methods.getRequestsCount().call();
        const approversCount = await campaign.methods.approversCount().call();

        const requests = await Promise.all(
            Array(parseInt(requestCount)).fill().map((element, index) => {
                return campaign.methods.requests(index).call();
            })
        );

        console.log(requests);

        return { address, requests, requestCount, approversCount };
    }

    renderRows() {
        return this.props.requests.map((request, index) => {
            return <RequestRow
                request={request}
                id={index}
                key={index}
                address={this.props.address}
                approversCount={this.props.approversCount}
            />;
        });
    }

    render() {
        const { Header, Row, HeaderCell, Body } = Table;

        return (
            <Layout>
                <h3>Requests</h3>
                <Link route={`/campaigns/${this.props.address}/requests/new`}>
                    <a>
                        <Button primary floated="left" style={{ marginBottom: 10 }}> Criar Requisicao </Button>
                    </a>
                </Link>

                <Table>
                    <Header>
                        <Row>
                            <HeaderCell>
                                ID
                            </HeaderCell>

                            <HeaderCell>
                                Descricao
                            </HeaderCell>

                            <HeaderCell>
                                Quantidade
                            </HeaderCell>

                            <HeaderCell>
                                Recipiente
                            </HeaderCell>

                            <HeaderCell>
                                Aprovacao
                            </HeaderCell>

                            <HeaderCell>
                                Aprovar
                            </HeaderCell>

                            <HeaderCell>
                                Finalizar
                            </HeaderCell>
                        </Row>
                    </Header>

                    <Body>
                        {this.renderRows()}
                    </Body>
                </Table>
                <div>
                    Existem {this.props.requestCount} requisicoes
                </div>
            </Layout>
        );
    }
}

export default RequestIndex;