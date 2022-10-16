import { addRollo,getRollo,delRollo} from '../controlleres/controllers.js';


const routes = (app)=> {
  app.route('/inventario')
    .get(getRollo)
    .post(addRollo)

  app.route('/inventario')
      .delete(delRollo)
}

export default routes;
