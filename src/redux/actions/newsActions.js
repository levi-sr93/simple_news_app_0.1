export const FETCH_ARTICLES = "FETCH_ARTICLES";
export const ADD_FAVORITES = "ADD_FAVORITES";

export const fetchArticles = () => {
  return {
    type: FETCH_ARTICLES,
    payload: { id: 1, title: "Sport News", description: "Sport new is on" },
  };
};
