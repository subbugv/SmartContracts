import React, { Component, Fragment } from "react";

import web3 from "./components/SlockItApp/web3";
import slockit from "./components/SlockItApp/SlockItApp";
import BidsRevealed from "./components/BidsRevealed";

let cols = [
  { key: "transactionHash", label: "TxHash" },
  { key: "blockNumber", label: "Block" },
  { key: "event", label: "Event Name" }
];

class App extends Component {
  state = {
    bids: {},
    isLoading: true,
    error: null
  };

  componentDidMount = async () => {
    try {
      const bids = await slockit.getPastEvents("BidRevealed", {
        fromBlock: (await web3.eth.getBlockNumber()) - 12343, // apprx 12343 blocks every 2 days
        toBlock: "latest"
      });
      this.setState({
        bids,
        isLoading: false
      });
    } catch (error) {
      this.setState({
        error,
        isLoading: false
      });
    }
  };

  render() {
    if (this.state.isLoading) {
      return <h1> Loading... </h1>;
    }
    // console.log(this.state.bids);
    return (
      <Fragment>
        <BidsRevealed data={this.state.bids} cols={cols} />
      </Fragment>
    );
  }
}

export default App;
