// import {
//     HANDLE_CHANGED,
//     BAD_HANDLE
// } from '../actions/types';
//
// const INTIAL_STATE = {
//     handle: '',
//     // showing: false,
//     error: ''
// };
//
// export default(state = INTIAL_STATE, action) => {
//     console.log(action);
//     switch (action.type) {
//         case HANDLE_CHANGED:
//             return { ...state, handle: action.payload, error: '' };
//         case BAD_HANDLE:
//             return { ...state, error: 'Something is wrong' };
//         default:
//             return state;
//     }
// };


// api(q="#Trump",count=5){
//     RNTweet.api({
//         endpoint: 'search/tweets.json',
//         q: encodeURI(`${q}`),
//         count
//       }).then(apiData=>{
//         console.log(" api: ",apiData);
//         if(apiData&&apiData.statuses)this.setState({tweets:apiData.statuses})
//       })
//     .catch((e)=>{console.warn("e",e)})
//   }
