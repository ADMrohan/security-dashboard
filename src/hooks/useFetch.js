import {useState , useEffect} from "react"

function useFetch(url){
const [data,setData] = useState([]);
const [loading,setLoading] = useState(true);
const [errors,setError] = useState(null);

useEffect(()=> {
    let cancelled = false
    
    async function fetchdata(){
        try{
            setLoading(true);
            setError(null);

            const res = await fetch(url);

            if(!res.ok) throw new Error(`HTTP ${res.status}`);
            
            const data_recieved = await res.json();

            if(!cancelled) setData(data_recieved);
        }
        catch(err){
            if(!cancelled) setError(err.message);
        }
        finally{
            if(!cancelled) setLoading(false);
        }
    }
    fetchdata();
    return () => { cancelled = true;};
},[url]);

return {data,loading,errors}
}
export default useFetch