import { List } from './interfaces'
import { Request, Response } from "express";
import clients from "./database";

const createList = (request: Request, response: Response) => {
    const newList: List = request.body
    clients.push(newList)
    return response.status(201).json(newList)
}
const getList = (request: Request, response: Response) => {
    return response.status(200).json(clients)
}
export {createList, getList} ;