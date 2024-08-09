// `app/page.jsx` is the UI for the `/` URL
'use client'

import { useState, useEffect } from "react";
import TeamMember from "@/components/TeamMember"
import TeamHeader from "@/components/TeamHeader";

export default function Page() {
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

  return (
    <div>
      {isLoading ? '' : <TeamHeader count={teamMembers.length}></TeamHeader>}
                {isLoading ? 'Please wait' : teamMembers.map((item, index) => (
                    <TeamMember key={index} index={index} teamMember={item} total={teamMembers.length}/>
                ))}
    </div>
  );
}

