import express, { Application, json}  from "express";
import {createList, getList} from "./logic";

const app: Application = express();
app.use(json());

app.post("/create",createList)
app.get("/purchaseList",getList)
app.get("/purchaseList/<purchaseListId>", )
const PORT: number = 3001;
const runningMsg: string = `Server running on port ${PORT}`
app.listen(PORT, ()=> console.log(runningMsg))