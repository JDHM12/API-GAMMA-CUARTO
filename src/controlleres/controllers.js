9mport mongoose from 'mongoose';
import { RolloSchema } from '../models/models.js';

const Rollo = mongoose.model('Rollo',RolloSchema);

/*el valor de fecha de salida se calcula tomando la fecha de ingreso y sumandole las horas arrojadas por el modelo, la funcion parser convierte los valores de la suma 
en milisegundo a formato fecha, de esta manera se obtiene este dato*/

export const addRollo = (req,res)=>{
    let newRollo = new Rollo(req.body)
      newRollo['fechaSalida']=Date.parse(new Date(Date.now()+(19.83*newRollo["durezaSalida"]-19.53*newRollo["durezaEntrada"]+1.15*newRollo["elevado"]
                                                              +0.2*newRollo["familiaRef"]+0.5*newRollo["zona"]+3.97*newRollo["hueco"])*3.6e+6))
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
