export const FETCH_ARTICLES = "FETCH_ARTICLES";
export const ADD_FAVORITES = "ADD_FAVORITES";

export const fetchArticles = () => {
  return async (dispatch) => {
    
    //logic to fetch data 
    const result = await fetch('http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=81b613598668492493f4adb02f3e6e1b');

    //converting the result from the API to json format
    const resultData = await result.json();

    dispatch({
      type: FETCH_ARTICLES,
      payload: resultData,
    });
  };
};
