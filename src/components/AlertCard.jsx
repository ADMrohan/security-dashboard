import { useNavigate } from "react-router-dom";
import SeverityBadge from "./SeverityBadge";


function AlertCard({id,type,severity,source,status}){
    const navigate = useNavigate();
    return (
    <div onClick={()=>{ return navigate(`/alerts/${id}`)}} style={{ cursor: "pointer" }}>
        <ul><b>Alert</b>
            <div>Alert Id: {id}</div>
            <div>Alert Severity:<SeverityBadge severity= {severity}/> </div>
        </ul>
    </div>
    );
}
export default AlertCard;