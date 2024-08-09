// `components/TeamHeader.jsx` is the UI for one team member

export default function TeamHeader({ count }) {

  return (
    <div style={{
      height: 75,
      borderBottomWidth: 2, borderBottomStyle: "solid", borderBottomColor: "black",
      margin: 25
    }}>
      <div>
        <div>Team Members</div>
        <div>You have {count} team members.</div>
      </div>
    </div>
  );
}
