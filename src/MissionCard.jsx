import "./MissionCard.css";
export default function MissionCard({name, status, crew}){
    return(
        <div>
            <h2 className="MissionCard-title"> {name}</h2>
            <p className="MissionCard-detail">Status: {status} </p>
            {/* returns just the string from the array separated by comma */}
            <p className="MissionCard-detail">Crew: {crew.join(", ")}</p>
        </div>
    )
}