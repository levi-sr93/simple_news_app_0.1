import { FETCH_ARTICLES, TOGGLE_FAVORITES } from "../actions/newsActions";

const initialState = {
  articles: [],
  favorites: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLES:
      return {
        ...state,
        articles: action.payload,
      };

    case TOGGLE_FAVORITES:
      //logic to add or remove items from favorites

      const index = state.favorites.findIndex(
        (article) => article.url === action.payload
      ); //will return the item index case it exists

      //if the item is not found it will return -1
      if (index >= 0) {
        const favorites = [...state.favorites];
        favorites.splice(index, 1);
        return {
          ...state,
          favorites: favorites,
        };
      } else {
        const article = state.articles.articles.find(article => article.url === action.payload);

        return {
          ...state,
          favorites: state.favorites.concat(article)
        }
      }
  }

  return state;
}

