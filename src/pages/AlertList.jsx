import useFetch from "../hooks/useFetch"
import {BASE_URL} from "../api/config"
import { useSearchParams } from "react-router-dom";
import AlertCard from "../components/AlertCard";

function AlertList(){
    const [searchParams,setsearchParams] = useSearchParams();
    const filter = searchParams.get("type") ?? "all";
    const {data,loading,errors} = useFetch(`${BASE_URL}/api/alerts?type=${filter}`);
    

    if(loading) return <div>Loading...</div>
    if(errors) return <div>Error: {errors}</div>
    
    return (
    <div>
        <select value={filter} onChange={o => setsearchParams({type: o.target.value})}>
            <option value="all">All</option>
            <option value="port_scan">Port Scan</option>
            <option value="beacon">Beacon</option>
            <option value="dns_tunnel">DNS Tunnel</option>
        </select>
        <div>{data.map(d => (
            <AlertCard key={d.id} {...d}/>
        ))}
        </div>
    </div>)
}
export default AlertList