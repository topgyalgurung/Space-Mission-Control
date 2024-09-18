import {useState} from 'react';

import MissionCard from './MissionCard';
import MissionAction from './MissionAction';
import MissionFilter from './MissionFilter';

import './MissionControl.css';

export default function MissionControl({initialMissions}) {
    // updates displayed missions based on selected filter 
    const [filter, setFilter] = useState("All");
    const [missions, setMissions] = useState(initialMissions);
    
    // filters the missions array based on the current filter state.
    const filteredMissions = missions.filter(mission => filter === "All" || mission.status === filter)

    function updateMissionStatus(id, newStatus){
        // with given id, update newStatus
        // if mission id matches, create new mission object with updated status to rerender otherwise returns original
        setMissions(prevMissions => prevMissions.map(mission => mission.id === id ?{...mission, status:newStatus}:mission))
        // setMissions(prevMissions => {
			// return prevMissions.map(mission => {
			// 	if (mission.id === id) {
			// 		return {...mission, status: newStatus};
			// 	}
			// 	return mission;
			// });
    }

    return(
        <div>
            <h1> Space Mission Control</h1>
            <div className="MissionControl-filter">
                <MissionFilter setFilter = {setFilter}/>
            </div>
            {
                //based on filtered mission need to display list of missions 
                filteredMissions.map(mission=>
                {
                    // destruct to get id, name, status, crew from mission
                    const {id, name, status, crew} = mission;
                    return(
                        <div key ={id}
                            className="MissionControl-card"
                        >
                            <div>
                                <MissionCard 
                                    name={name} 
                                    status={status} 
                                    crew={crew}
                                />
                            </div>
                            <div>
                                <MissionAction
                                    missionId = {id}
                                    // pass function as props 
                                    onUpdate = {updateMissionStatus}/>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
    
}