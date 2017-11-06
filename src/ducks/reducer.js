import getTwitterDataAction from './action';

const GET_TWITTER_DATA = 'GET_TWITTER_DATA'

const initialState = {
  followers: 0,
  friends: 0,
  statuses: 0,
  displayChart: false
}

export default function reducer(state = initialState, action){
  console.log(action.payload)
  switch (action.type) {
    case GET_TWITTER_DATA + '_PENDING':
      return Object.assign({}, state, {displayChart: false})
    case GET_TWITTER_DATA + '_FULFILLED':
      return Object.assign({}, state, {
        followers: action.payload.followers_count,
        friends: action.payload.friends_count,
        statuses: action.payload.statuses_count,
        displayChart: true
      });
    default: 
    return state;
  } 
}

export function getTwitterData(user){
console.log(user)
  return {
    type: GET_TWITTER_DATA,
    payload: getTwitterDataAction(user)
  }
}