import useFetch from "../hooks/useFetch"
import {BASE_URL} from "../api/config"

function Overview(){
    const {data,loading,errors} = useFetch(`${BASE_URL}/api/alerts`);

    if(loading) return <div>Loading...</div>
    if(errors) return <div>Error: {errors}</div>

    const alertsByType = data.reduce((acc,a) => { acc[a.type] = (acc[a.type] || 0) + 1; return acc;},{});
    return (
        <div>
            <div>No of Alerts:{data.length}</div>
            <div>Open Alerts: { data.reduce((acc,a)=> a.status === "open"? acc + 1: acc,0)}</div>
            <div>Alert count by type: { Object.entries(alertsByType).map(([type, count]) => (
  <div key={type}>{type}: {count}</div>))} </div>
        </div>
    )
}
export default Overview