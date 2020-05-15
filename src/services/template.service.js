function preview(request, response) {
  return response.json(request.ruleset);
}

function resolve(template, data) {

}

export default {
  resolve,
};
