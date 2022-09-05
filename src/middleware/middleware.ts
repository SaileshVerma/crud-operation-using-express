import {Request,Response,NextFunction} from 'express'


export function print(_req:Request,_res:Response,_next:NextFunction){

console.log('Auth COMPleted!!!!')
_next()
}