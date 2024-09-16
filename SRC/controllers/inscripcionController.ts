import { error } from 'console';
import express from 'express';
export const consultarInscripciones=async(req:express.Request,res:express.Response)=>{
    try{
        res.json('consulta Inscripciones')
    }catch (err:unknown){
         if(err instanceof Error){
             res.status(500).send(err.message);
         } 
        
    }
}

export const consultarxAlumno= async(req:express.Request,res:express.Response)=>{
    try{
        res.json('consultarxAlumno')
    }catch (err:unknown){
         if(err instanceof Error){
             res.status(500).send(err.message);
         } 
        
    }
    
}
        
export const consultarxCurso= async(req:express.Request,res:express.Response)=>{
    try{
        res.json('consultarxCurso')
    }catch (err:unknown){
         if(err instanceof Error){
             res.status(500).send(err.message);
         } 
        
    }
    
}

export const inscribir= async(req:express.Request,res:express.Response)=>{
    try{
        res.json('inscribir')
    }catch (err:unknown){
         if(err instanceof Error){
             res.status(500).send(err.message);
         } 
        
    }
    
    
}

export const cancelarIncripcion= async(req:express.Request,res:express.Response)=>{
    try{
        res.json('cancelarIncripcion')
    }catch (err:unknown){
         if(err instanceof Error){
             res.status(500).send(err.message);
         } 
        
    }
    
}
