import jsonLogic from 'json-logic-js';

function match(ruleset, data) {
  return jsonLogic.apply(JSON.parse(ruleset.body), data)
}

export default {
  match,
};
