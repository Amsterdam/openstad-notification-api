import mjml2html from 'mjml'

function preview(request, response) {
  return response.json(request.ruleset);
}

function resolve(template, data) {
  return mjml2html(template, data);
}

export default {
  resolve,
};
