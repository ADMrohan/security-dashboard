function SeverityBadge({severity}){
    const severityColors = {
  1: "gray",
  2: "yellow", 
  3: "yellow",
  4: "orange",
  5: "red"
}
    return (
        <div style={{ backgroundColor: severityColors[severity],
                      padding: "2px 8px",
                      borderRadius: "4px",
                      color: "white",
                      display: "inline-block" }}>{severity}</div> 
    );
}
export default SeverityBadge