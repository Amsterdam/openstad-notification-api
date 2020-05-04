import { appRoutes } from '../routes/appRoutes';

export function registerRoutes(app) {
  appRoutes.forEach((route) => {
    app[route.method](route.path, (request, response, next) => {
      if (route.action) {
        return route.action(request, response);

        // TODO: error handling
        // .then(() => next)
        // .catch((err: any) => next(err));
      }
    });
  });
}
