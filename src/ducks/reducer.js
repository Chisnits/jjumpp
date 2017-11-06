import getTwitterDataAction from './action';

const GET_TWITTER_DATA = 'GET_TWITTER_DATA'

const initialState = {
  followers: 0,
  friends: 0,
  statuses: 0,
  showChart: false
}

export default function reducer(state = initialState, action){
  switch (action.type) {
    case GET_TWITTER_DATA + '_PENDING':
      return Object.assign({}, state, {showChart: false})
    case GET_TWITTER_DATA + '_FULFILLED':
      return Object.assign({}, state, {
        followers: action.payload.followers_count,
        friends: action.payload.friends_count,
        favorites: action.payload.favourites_count,
        statuses: action.payload.statuses_count,
        showChart: true
      });
    default: 
    return state;
  } 
}

export function getTwitterData(user){
  return {
    type: GET_TWITTER_DATA,
    payload: getTwitterDataAction(user)
  }
}

