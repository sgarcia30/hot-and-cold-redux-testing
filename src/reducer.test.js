import reducer from './reducer.js';
import {generateAuralUpdate, restartGame, makeGuess} from './actions.js'

describe ('gameReducer', () => {
  const guess1 = 12;
  const guess2 = 37;
  const correctAnswer1 = 27;

  it('Should set the curent state on an unknown action', () => {
    let currentState = {
      guesses: [],
      feedback: 'Make your guess!',
      auralStatus: '',
      correctAnswer: 4
    };

    const state = reducer(currentState, {type: '_UNKNOWN'});
    expect(state).toEqual({
      guesses: [],
      feedback: 'Make your guess!',
      auralStatus: '',
      correctAnswer: 4
    })
  })
  describe('makeGuess', () => {
    it('Should make a guess', () => {
      let state;
      state = reducer(state, makeGuess(guess1));
      state = reducer(state, makeGuess(guess2));
      expect(state.guesses).toEqual(
        [guess1, guess2]
      )
    })
  })
  describe('restartGame', () => {
    it('Should restart the game', () => {
      let state;
      state = reducer(state, restartGame(correctAnswer1));
      expect(state.guesses).toEqual([]);
      expect(state.feedback).toEqual('Make your guess!');
      expect(state.auralStatus).toEqual('');
      expect(state.correctAnswer).toEqual(correctAnswer1);
    })
  })
  describe('generateAuralUpdate', () => {
    it('Should update the aural status', () => {
      let state = {
        guesses: [34],
        feedback: "You're hot!",
        auralStatus: `anything I want`,
        correctAnswer: 33
      };
      state = reducer(state, generateAuralUpdate());
      expect(state).toEqual({
        guesses: [34],
        feedback: "You're hot!",
        auralStatus: `Here's the status of the game right now: You're hot! You've made 1 guess. It was: 34`,
        correctAnswer: 33
      })
    })
  })
})
