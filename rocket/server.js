// NATIVO NODEJS

// import { createServer } from 'node:http'

// const server = createServer((request, response) => {
//     response.write('oi')
//     console.log('server running')
//     return response.end()
// })

// server.listen(3334)

// FRAMEWORK 👇🏻
import { fastify } from "fastify";
import { DataBaseMemory } from "./database-memory";

const database = DataBaseMemory()

const server = fastify()

server.post('/videos',(request, response)=>{
    database.create({
        title: 'Video 81',
        description: 'Este é o vídeo 81',
        duration: 100
    })
    return response.status(201).send()
})

server.get('/videos',()=>{
    return 'Hello World'
})

// ID ATRAVÉS DO ROUTE PARAM
server.put('/videos/:id',()=>{
    return 'Hello World'
})

server.delete('/videos/:id',()=>{
    return 'Hello World'
})

server.listen({
    port: 3333
})