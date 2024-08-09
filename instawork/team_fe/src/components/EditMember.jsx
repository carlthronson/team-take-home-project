// `components/EditMember.jsx`

export default function EditMember({showList, member}) {
  return <div>Edit Member: {member.first_name} {member.last_name}
        <button onClick={showList}>Done</button>
  </div>
  }
