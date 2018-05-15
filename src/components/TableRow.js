import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TableRow extends Component {

  render() {
    let user = this.props.user;
    return (
      <tr>
        <td>{user._id}</td>
        <td><Link to={`${user._id}`}>{user.name}</Link></td>
      </tr>
    );
  }

}

export default TableRow;
