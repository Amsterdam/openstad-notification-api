function preview(request, response) {
  return response.json(request.ruleset);
}

function resolve() {

}

export default {
  resolve,
};
