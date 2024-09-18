import "./MissionAction.css";
export default function MissionAction({missionId, onUpdate}){
    return(
        <>
        <button
            className="MissionAction-button"
            // when clicked change status to active 
            onClick = {() => onUpdate(missionId, "Active")}
        >
            Launch
        </button>
        <button
            className="MissionAction-button"
            onClick={() => onUpdate(missionId, "Completed")}
        >
            Complete
        </button>

        </>
    )
}