import React, { Component } from "react";

import { Table } from "semantic-ui-react";

class BidsRevealed extends Component {
  generateHeaders = () => {
    var cols = this.props.cols; // [{key, label}]

    // generate our header (th) cell components
    return cols.map(colData => {
      return (
        <Table.HeaderCell key={colData.key}>{colData.label}</Table.HeaderCell>
      );
    });
  };

  generateRows = () => {
    let cols = this.props.cols, // [{key, label}]
      data = this.props.data;

    return data.map(item => {
      // handle the column data within each row
      let cells = cols.map(colData => {
        return (
          <Table.Cell key={item[colData.key]}> {item[colData.key]}</Table.Cell>
        );
      });
      return <Table.Row key={item.id}>{cells}</Table.Row>;
    });
  };

  render() {
    let headerComponents = this.generateHeaders(),
      rowComponents = this.generateRows();
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>{headerComponents}</Table.Row>
        </Table.Header>
        <Table.Body>{rowComponents}</Table.Body>
      </Table>
    );
  }
}

export default BidsRevealed;
