// `components/CreateMember.jsx`

import CustomForm from "./CustomForm";


export default function CreateMember({ showList }) {

  return (
    <div>
      <div style={{
        height: 75,
        borderBottomWidth: 2, borderBottomStyle: "solid", borderBottomColor: "black",
        margin: 25
      }}>
        <div>Add a team member</div>
        <div>Set email, location and role.</div>
      </div>

      <CustomForm showList={showList} member={{}}></CustomForm>


    </div >
  );
}
