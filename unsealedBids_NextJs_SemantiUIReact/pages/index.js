import React, { Component, Fragment } from "react";

import web3 from "../components/SlockItAppNextJs/web3";
import slockit from "../components/SlockItAppNextJs/SlockItAppNextJs";
import BidsRevealed from "../components/BidsRevealed/BidsRevealed";

let cols = [
  { key: "transactionHash", label: "TxHash" },
  { key: "blockNumber", label: "Block" },
  { key: "event", label: "Event Name" }
];

class App extends Component {
//   state = {
//     bids: {},
//     isLoading: true,
//     error: null
//   };

  static async getInitialProps() {    
      const bids = await slockit.getPastEvents("BidRevealed", {
        fromBlock: (await web3.eth.getBlockNumber()) - 12343, // apprx 12343 blocks every 2 days
        toBlock: "latest"
      });    
   return {bids};
  }

  render() {    
    return (
      <Fragment>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css"></link>
        <BidsRevealed data={this.props.bids} cols={cols} />
      </Fragment>
    );
  }
}

export default App;
