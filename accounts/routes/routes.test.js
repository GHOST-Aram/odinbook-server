import request from 'supertest'
import  accountsRouter from './routes.js'
import express from 'express'
import { User } from '../models/user.js'

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json());


describe('User registration POST route' , () =>{
    
    test('User registration POST  route works', async()=>{
        const createUser = jest.fn().mockImplementation(
            (model, data) =>({
                first_name: data.first_name,
                last_name: data.last_name,
                username: data.username,
                email: data.email,
                password: data.password
            })
        )
        app.use(accountsRouter({ createUser }))
        
        const response = await request(app)
            .post('/user')
            .send({
                first_name: 'John', 
                last_name: 'Legend', 
                username: 'johnlegend',
                password: 'legionofwebdevs',
                password_confirm:'legionofwebdevs',
                email: 'johnlegend@gmail.com'
            })
            .set('Accept', 'application/json')
            
        expect(createUser).toHaveBeenCalled()
        expect(createUser).toHaveBeenCalledTimes(1)
        expect(createUser).toHaveBeenCalledWith(User,{
            first_name: 'John', 
            last_name: 'Legend', 
            username: 'johnlegend',
            password: 'legionofwebdevs',
            email: 'johnlegend@gmail.com'
        })
        expect(createUser).toHaveReturned()
        expect(createUser).toHaveReturnedWith({
            first_name: 'John', 
            last_name: 'Legend', 
            username: 'johnlegend',
            password: expect.any(String),
            email: 'johnlegend@gmail.com'
        })
        expect(response.headers['content-type']).toMatch(/json/)
        expect(response.status).toEqual(200)
        expect(response.body).toStrictEqual({
            first_name: 'John', 
            last_name: 'Legend', 
            username: 'johnlegend',
            email: 'johnlegend@gmail.com'
        })

    })
})



