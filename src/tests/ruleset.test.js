import rulesetService from '../services/ruleset.service';
const newIdeaFeedbackToUser = require('../db/factories/json/newIdeaFeedbackToUser.json')

test('TEST: ruleset.matches method rejects rulesets which do not match the data', () => {
  const data = {
  };

  expect(rulesetService.matches(JSON.stringify(newIdeaFeedbackToUser), {})).toBe(false);
  expect(rulesetService.matches(JSON.stringify(newIdeaFeedbackToUser), data)).toBe(false);
  expect(rulesetService.matches('', data)).toBe(false);
});

test('TEST: ruleset.matches method rejects rulesets which do not match the data', () => {
  const data = {

  }
  expect(rulesetService.matches(JSON.stringify(newIdeaFeedbackToUser), data)).toBe(true);
});
