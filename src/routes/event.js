export const restDir = 'event';

export function eventRoutes(eventController) {
  const restDir = `/${eventController.restDir()}`;

  return [
    {
      path: `${restDir}/publish`,
      method: "post",
      action: eventController.publish
    },
  ];
}
