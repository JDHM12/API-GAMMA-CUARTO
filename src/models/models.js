import mongoose from 'mongoose';

const Schema= mongoose.Schema;

export const RolloSchema= new Schema({
      fechaEntrada:{
        type: Date,
        default:Date.now
      },
      durezaEntrada: {
        type:Number
      },
      durezaSalida: {
        type:Number
      },
      familiaRef: {
        type:Number
      },
      zona:{
        type:Number
      },
      elevado:{
        type:Boolean
      }
      ,
      hueco:{
        type:Boolean
      }
      ,
      fechaSalida:{
        type:Date
      }
})
