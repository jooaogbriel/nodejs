import express, { Application, json}  from "express";
import {createList, deleteItem, getList, getListId, updateItem} from "./logic";

const app: Application = express();
app.use(json());

app.post("/create",createList)
app.get("/purchaseList",getList)
app.get("/purchaseList/:id", getListId)
app.delete('/purchaseList/:id/:name', deleteItem)
app.patch('/purchaseList/:id/:name', updateItem)

const PORT: number = 3001;
const runningMsg: string = `Server running on port ${PORT}`
app.listen(PORT, ()=> console.log(runningMsg))