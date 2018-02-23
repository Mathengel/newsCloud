// import data from './sentenceList.json';
//
// //no matter how many actions we dispatch, we will always have this static bit of data...?
// export default () => data;

import {
    INPUT_CHANGED,
    BAD_INPUT,
    SPLIT_SENTENCE,
    BUTTON_PRESSED
} from '../actions/types';

import stopWords from './stopWords.js';

const INTIAL_STATE = {
    showing: false,
    words: [],
    input: '',
    error: ''
};

const isStopWord = (word) => {
    let isStopWord = false;

    stopWords.forEach((stopWord) => {
        if (word === stopWord) {
            isStopWord = true;
        }
    });

    return isStopWord;
};

const createWordCountPairsArray = (news) => {
    const words = news.split(' ');
    const wordsForCloud = [];
    const counts = {};

    words.forEach((word) => {
        counts[word] = (counts[word] || 0) + 1;
    });

    for (const [word, value] of Object.entries(counts)) {
        if (value > 1) {
            if (!isStopWord(word)) {
                const newObj = { text: word, value: value * 5 };
                wordsForCloud.push(newObj);
            }
        }
    }

    return wordsForCloud;
};

export default(state = INTIAL_STATE, action) => {
    console.log('ACTION: ', action);
    switch (action.type) {
        case INPUT_CHANGED:
            return { ...state, input: action.payload, error: '' };
        case BAD_INPUT:
            return { ...state, error: 'Not a Country I know of...', input: '', words: [] };
        case BUTTON_PRESSED:
            return { ...state, showing: true };
        case SPLIT_SENTENCE:
            return { ...state, words: createWordCountPairsArray(action.payload) };
        default:
            return state;
    }
};
