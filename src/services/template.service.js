function preview(request, response) {
  return response.json(request.ruleset);
}

function resolve(template, data) {
  return template;
}

export default {
  resolve,
};
