9mport mongoose from 'mongoose';
import { RolloSchema } from '../models/models.js';

const Rollo = mongoose.model('Rollo',RolloSchema);

export const addRollo = (req,res)=>{
    let newRollo = new Rollo(req.body)
      newRollo['fechaSalida']=Date.parse(new Date(Date.now()+9.8*newRollo['familiaRef']+5.8*newRollo['zona']+5.8*newRollo['elevado']))
      newRollo.save((err,rollo)=>{
          if(err){
           res.send(err);
         }
           res.json(rollo);
      })
}

export const getRollo = (req,res)=>{
      Rollo.find({},(err,rollo)=>{
          if(err){
           res.send(err);
         }
           res.json(rollo);
      })}

export const delRollo = (req,res)=>{
      Rollo.deleteOne({_id:req.query.id},(err,rollo)=>{
          if(err){
           res.send(err);
          }
           res.json({message:"Rollo eliminado"});
      })}
