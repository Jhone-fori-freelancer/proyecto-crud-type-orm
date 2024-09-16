import { error } from 'console';
import express from 'express';
export const consultarTodos=async(req:express.Request,res:express.Response)=>{
    try{
        res.json('Consultar prof')
    }catch (err:unknown){
         if(err instanceof Error){
             res.status(500).send(err.message);
         } 
        
    }
}

export const consultarUno= async(req:express.Request,res:express.Response)=>{
    try{
        res.json('consultar un prof')
    }catch (err:unknown){
         if(err instanceof Error){
             res.status(500).send(err.message);
         } 
        
    }
    
}
        
export const insertar= async(req:express.Request,res:express.Response)=>{
    try{
        res.json('insertar un prof')
    }catch (err:unknown){
         if(err instanceof Error){
             res.status(500).send(err.message);
         } 
        
    }
    
}

export const modificar= async(req:express.Request,res:express.Response)=>{
    try{
        res.json('modificar un prof')
    }catch (err:unknown){
         if(err instanceof Error){
             res.status(500).send(err.message);
         } 
        
    }
    
}

export const eliminar= async(req:express.Request,res:express.Response)=>{
    try{
        res.json('eliminar un prof')
    }catch (err:unknown){
         if(err instanceof Error){
             res.status(500).send(err.message);
         } 
        
    }
    
}
