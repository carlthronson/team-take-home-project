// `components/TeamMember.jsx` is the UI for one team member

export default function TeamMember({ teamMember, index }) {

  return (
    <div style={index == 0 ? {
      height: 75,
      borderTopWidth: 2, borderTopStyle: "solid", borderTopColor: "black",
      borderBottomWidth: 2, borderBottomStyle: "solid", borderBottomColor: "black",
      margin: 25
    } : {
      height: 75,
      borderBottomWidth: 2, borderBottomStyle: "solid", borderBottomColor: "black",
      margin: 25
    }}>
      <div>
        <div>{teamMember.first_name} {teamMember.last_name}{teamMember.admin ? ' (admin)' : ''}</div>
        <div>{teamMember.phone_number}</div>
        <div>{teamMember.email}</div>
      </div>
    </div>
  );
}
