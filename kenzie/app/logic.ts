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

const getListId = (request: Request, response: Response) => {
    const getId = parseInt(request.params.id)
    const purchase = clients.find((item) => item.id === getId);
    if (purchase) {
        return response.status(200).json(purchase);
    } else {
        return response.status(404).json({ error: 'Compra não encontrada' });
    }
}

const deleteItem = (request: Request, response: Response) => {
    const getId = parseInt(request.params.id)
    const getName = request.params.name
    const purchase = clients.findIndex((item) => item.id === getId);
    const purcheseName = clients.find((item) => item.listName === getName)
    if (purchase !== -1 && purcheseName) {
        clients.splice(purchase, 1)
        return response.status(204).send();
    } else {
        return response.status(404).json({ error: 'Compra não encontrada' });
    }
}

const updateItem = (request: Request, response: Response) => {
    const getId = parseInt(request.params.id)
    const getName = request.params.name
    const purchase = clients.find((item) => item.id === getId);
    const purcheseName = clients.find((item) => item.listName === getName)

    if (purchase && purcheseName){
        const { name, quantity } = request.body;
        if (name) {
            purchase.data.name = name;
        }
        if (quantity) {
            purchase.data.quantity = quantity;
        }
        return response.status(200).json(clients);
    } else {
        return response.status(404).json({ error: 'Compra não encontrada ou dados inválidos' });
    }
}

export {createList, getList, getListId, deleteItem, updateItem} ;