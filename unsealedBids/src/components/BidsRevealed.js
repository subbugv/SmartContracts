import React, { Component } from "react";

import classes from "./BidsRevealed.css";

class BidsRevealed extends Component {
  generateHeaders = () => {
    var cols = this.props.cols; // [{key, label}]

    // generate our header (th) cell components
    return cols.map(colData => {
      return (
        <th className={classes.Td} key={colData.key}>
          {colData.label}
        </th>
      );
    });
  };

  generateRows = () => {
    var cols = this.props.cols, // [{key, label}]
      data = this.props.data;

    return data.map(item => {
      // handle the column data within each row
      var cells = cols.map(colData => {
        return (
          <td className={classes.Td} key={item[colData.key]}>
            {" "}
            {item[colData.key]}
          </td>
        );
      });
      return (
        <tr className={classes.Tr} key={item.id}>
          {cells}
        </tr>
      );
    });
  };

  render() {
    let headerComponents = this.generateHeaders(),
      rowComponents = this.generateRows();
    return (
      <table>
        <thead>
          <tr className={classes.Tr}>{headerComponents}</tr>
        </thead>
        <tbody>{rowComponents}</tbody>
      </table>
    );
  }
}

export default BidsRevealed;
