import * as React from "react";
import { Flex, Box } from "@rebass/grid";
import styled from "styled-components";
import { TransactionGraphPixi } from "../graphs/TransactionGraphPixi";
import { NetworkGraph } from "../graphs/NetworkGraph";
import { SectionTitle } from "../common/typography";
import TransactionsTable from "../TransactionsTable";
import {
    GraphBox,
    CardHeadings,
    Divider
} from "../dashboard/DashboardContainer";

const Row = styled(Flex)`
    margin-bottom: ${props => props.theme.margin.row};
`;

export default class NetworkContainer extends React.Component<{}, {}> {
    public render() {
        return (
            <>
                <Row>
                    <GraphBox width={1 / 2}>
                        <CardHeadings>Network Graph</CardHeadings>
                        <Divider />
                        <NetworkGraph />
                    </GraphBox>
                    <GraphBox width={1 / 2} style={{ marginLeft: "40px" }}>
                        <CardHeadings>Transaction Graph</CardHeadings>
                        <Divider />
                        <TransactionGraphPixi />
                    </GraphBox>
                </Row>
                <Box width={1}>
                    <SectionTitle>Transactions</SectionTitle>
                    <TransactionsTable />
                </Box>
                <Row />
            </>
        );
    }
}
