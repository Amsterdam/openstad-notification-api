// import { RestFulController } from '../utils/RestFulController';
// import { restDir } from '../routes/event';
// import db from '../config/database';
//
//
// export class EventController extends RestFulController {
//   restDir() {
//     return restDir;
//   }
//
//   /**
//    *
//    * @param request
//    * @param response
//    */
//   async publish(request, response) {
//     const Event = db.Event;
//
//     try {
//       const userFoundResponse = await User.findById(id);
//
//       if (!userFoundResponse) {
//         const e = new Error('User does not exist');
//         e.status = httpStatus.NOT_FOUND;
//         return next(e);
//       }
//
//       req.user = userFoundResponse;
//
//       return next();
//     } catch (error) {
//       return next(error);
//     }
//
//     // return response.send('create');
//   };
// }
