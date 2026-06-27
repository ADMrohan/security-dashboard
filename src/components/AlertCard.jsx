import { useNavigate } from "react-router-dom";
import SeverityBadge from "./SeverityBadge";


function AlertCard({id,type,severity,source,status}){
    const navigate = useNavigate();
    return (
    <div onClick={()=>{ return navigate(`/alerts/${id}`)}} style={{ cursor: "pointer" }}>
        <ul>Alert Details:
            <div>Alert Id: {id}</div>
            <div>Alert Type:{type} </div>
            <div>Alert Severity:<SeverityBadge severity= {severity}/> </div>
            <div>Alert source IP: {source}</div>
            <div>Alert Current Status: {status}</div>
        </ul>
    </div>
    );
}
export default AlertCard;