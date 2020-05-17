import mjml2html from 'mjml'
import newIdeaFeedbackToUser from '../resources/mailTemplates/newIdeaFeedbackToUser';

function preview(request, response) {
  return response.json(request.ruleset);
}

function resolve(template, data) {
  return mjml2html(newIdeaFeedbackToUser, data).html;
}

export default {
  resolve,
};
