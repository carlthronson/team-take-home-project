// `components/Team.jsx`

import { useState, useEffect } from "react";
import TeamHeader from "./TeamHeader";
import TeamMember from "./TeamMember";

export default function Team({ showCreateMember, showEditMember }) {
  // console.log(showCreateMember);
  const [teamMembers, setTeamMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // const url = "/api/teammember/?format=json";
    // const url = API_URL;
    const url = "http://localhost:8000/api/teammember/?format=json";
    console.log("url: " + url);
    fetch(url)
      .then((response) => {
        const json = response.json();
        const body = response.body;
        return json;
      })
      .then((data) => {
        setTeamMembers(data);
        setIsLoading(false);
      });
  }, []);

  const editMember = (member) => {
    showEditMember(member);
  }

  return (
    <div>
      <button onClick={showCreateMember}>Add</button>
      {isLoading ? '' : <TeamHeader count={teamMembers.length}></TeamHeader>}
      {isLoading ? 'Please wait' : teamMembers.map((item, index) => (
        <TeamMember key={index} index={index} teamMember={item} total={teamMembers.length} editMember={editMember}/>
      ))}
    </div>
  );
}