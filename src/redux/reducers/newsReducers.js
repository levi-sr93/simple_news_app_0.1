import { FETCH_ARTICLES } from "../actions/newsActions";

const initialState = {
  articles: [],
  favorites: []
}

export default function(state = initialState, action){
  switch(action.type) {
    case FETCH_ARTICLES:
      return {
        ...state, 
        articles: action.payload
      }
  }

  return state;
}