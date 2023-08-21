import express from 'express'
import { app } from './init.js'
import morgan from 'morgan';
import 'dotenv/config.js'

const config = () =>{
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(morgan('dev'));
    app.listen(process.env.PORT, () =>{
        console.log('Listening at port', process.env.PORT)
    })
}

export { config }
