from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins = ["http://localhost:5173"],
    allow_methods = ["*"],
    allow_headers = ["*"],
)

alerts = [
    {"id": 1,"type": "port_scan","severity": 3,"source": "192.168.1.2","status":"open"},
    {"id": 2,"type": "beacon","severity": 5,"source":"10.0.0.55","status":"open"},
    {"id": 3,"type": "dns_tunnel","severity": 4,"source":"172.16.0.8","status":"closed"},
    {"id": 4,"type": "port_scan","severity": 2,"source":"192.168.1.20", "status":"open"},
    {"id": 5,"type": "beacon","severity": 5,"source":"10.0.0.99","status":"open"},]

@app.get("/api/alerts")
def get_alerts(type: str = None):
    if type and type!="all":
        return [a for a in alerts if a["type"] == type]
    return alerts

@app.get("/api/alerts/{alert_id}")
def get_alert(alert_id: int):
    alert = next((a for a in alerts if a["id"] == alert_id), None)
    if not alert:
        return {"error": "Alert not found"}
    return alert

@app.delete("/api/alerts/{alert_id}")
def delete_alert(alert_id: int):
    global alerts
    alerts = next((a for a in alerts if a["id"]==alert_id),None)
    if not alerts:
        return {"error": "Alert not found"}
    return {"message": "Deleted"}
