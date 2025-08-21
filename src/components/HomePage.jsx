import React from "react";
import Header from "./Header";
import Selection from "./Selection";
import ExpertGrid from "./ExpertGrid";

export default function HomePage() {
  const [selectedTeam, setSelectedTeam] = React.useState([]);
  return (
    <div className="container mx-auto">
      <div className="my-5">
        <Header />
      </div>
      <div className="my-5">
        <div className="flex gap-5">
          <div className="w-3/4 ">
            <ExpertGrid setSelectedTeam={setSelectedTeam} selectedTeam={selectedTeam}/>
          </div>
          <div className="w-1/4 ">
            <Selection selectedTeam={selectedTeam} setSelectedTeam={setSelectedTeam}/>
          </div>
        </div>
      </div> 
    </div>
  );
}
