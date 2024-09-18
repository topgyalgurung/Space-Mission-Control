import "./MissionFilter.css";
// view missions by specific criteria influence the mission list rendered by missioncontrol 
export default function MissionFilter ({setFilter}){
    // offer buttons to set current mission filter state 
    const STATUS = ["All", "Planned", "Active", "Completed"]
    return(
        <div>
        {
            STATUS.map((stat, index) => (
                <button
                    key={index}
                    onClick={() => setFilter(stat)}
                    className="MissionFilter-button">
                        {stat}
                    </button>
            ))
        }
        </div>
    )
}