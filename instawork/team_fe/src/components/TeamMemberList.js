import React, { Component } from "react";
import { Table } from "reactstrap";
import NewTeamMemberModal from "./NewTeamMemberModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class TeamMemberList extends Component {
  render() {
    const teammembers = this.props.teammembers;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Admin</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!teammembers || teammembers.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            teammembers.map(teammember => (
              <tr key={teammember.pk}>
                <td>{teammember.first_name}</td>
                <td>{teammember.last_name}</td>
                <td>{teammember.email}</td>
                <td>{teammember.phone_number}</td>
                <td>{teammember.admin}</td>
                <td align="center">
                  <NewTeamMemberModal
                    create={false}
                    teammember={teammember}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={teammember.pk}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default TeamMemberList;
