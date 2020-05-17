import jsonLogic from 'json-logic-js';
import { isJson } from '../utils/string';

function matches(ruleset, data) {
  const rulesetString = ruleset.body;

  if(!isJson(rulesetString)){
    return false;
  }

  return jsonLogic.apply(JSON.parse(rulesetString), data)
}

export default {
  matches,
};
