import {
    INPUT_CHANGED,
    SPLIT_SENTENCE,
    BUTTON_PRESSED,
    BAD_INPUT,
    NEWS_API
} from './types';

// ----------------- CONFIG -------------------

const url = 'https://newsapi.org/v2/top-headlines?';
const apikey = NEWS_API;


// -------------- INPUT actions ---------------

export const textChanged = (text) => ({
    type: INPUT_CHANGED,
    payload: text.toLowerCase()
});

// --------- BUTTON and API actions -----------

export const buttonPressedWithInput = (input) => {
    return (dispatch) => {
        dispatch({
            type: BUTTON_PRESSED
        });

        const countries = ['ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu',
         'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr',
          'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru',
          'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za'];

        if (!countries.includes(input)) {
            dispatch({ type: BAD_INPUT });
        }

        fetch(`${url}country=${input}&${apikey}`)
            .then((response) => response.json())
            .then((responseJson) => {
                apiSuccess(dispatch, responseJson);
            });
    };
};

const apiSuccess = (dispatch, response) => {
    dispatch({
        type: SPLIT_SENTENCE,
        payload: getTitlesAndDescriptionsForSentence(response.articles)
    });
};

const getTitlesAndDescriptionsForSentence = (news) => {
    let titlesAndDescriptions = '';

    news.forEach((article) => {
        titlesAndDescriptions += article.title;
        titlesAndDescriptions += article.description;
    });

    return titlesAndDescriptions;
};

//one way to do multiple things in an action, might be to add a bunch of helper functions
//have an action call more than one function...
