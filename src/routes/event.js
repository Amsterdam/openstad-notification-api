export const restDir = 'event';

export function eventRoutes(eventController) {
  return [
    {
      path: `/${restDir}/create`,
      method: "post",
      action: eventController.create
    }
  ];
}
