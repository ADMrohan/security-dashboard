import useFetch from "../hooks/useFetch"
import {BASE_URL} from "../api/config"
import { useNavigate, useParams } from "react-router-dom"

function AlertDetail(){
    const {id} = useParams();
    const navigate = useNavigate();
    const {data,loading,errors} = useFetch(`${BASE_URL}/api/alerts/${id}`);

    if(loading) return <div>Loading...</div>
    if(errors) return <div>Error: {errors}</div>

    return(
        <>
        <ul>Alert Details:
            <div>AlertId: {data.id} </div>
            <div>Alert Type:{data.type} </div>
            <div>Alert Severity: {data.severity}</div>
            <div>Alert source IP: {data.source}</div>
            <div>Alert Current Status: {data.status}</div>
        </ul>
        <button onClick={()=>{ return navigate(`/alerts`)}}>Back to Alerts</button>
        </>
    )

}
export default AlertDetail