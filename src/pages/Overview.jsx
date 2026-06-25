import useFetch from "../hooks/useFetch"
import {BASE_URL} from "../api/config"

function Overview(){
    const {data,loading,errors} = useFetch(`${BASE_URL}/api/alerts`);

    if(loading) return <div>Loading...</div>
    if(errors) return <div>Error: {errors}</div>

    return (
        <div>
            <div>No of Alerts:{data.length}</div>
        </div>
    )
}
export default Overview