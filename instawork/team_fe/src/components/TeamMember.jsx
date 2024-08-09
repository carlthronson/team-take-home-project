// `components/TeamMember.jsx`

export default function TeamMember({ teamMember, editMember }) {

  const editThisMember = () => {
    editMember(teamMember);
  }

  return (
    <div style={{
      height: 75,
      borderBottomWidth: 2, borderBottomStyle: "solid", borderBottomColor: "black",
      margin: 15
    }}>
      <div onClick={editThisMember}>
        <div>{teamMember.first_name} {teamMember.last_name}{teamMember.admin ? ' (admin)' : ''}</div>
        <div>{teamMember.phone_number}</div>
        <div>{teamMember.email}</div>
      </div>
    </div>
  );
}
