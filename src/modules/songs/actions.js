import * as actionTypes from './actionTypes';
import { createAction } from 'redux-actions';

export const getRequest = createAction(actionTypes.GET_REQUEST);
export const getSuccess = createAction(actionTypes.GET_SUCCESS);
export const getFailure = createAction(actionTypes.GET_FAILURE);
export const addToFavorites = createAction(actionTypes.ADD_TO_FAVORITES);

export const asyncGetRequest = (url) => async (dispatch) => {
  dispatch(getRequest());
  
  try {
    let requestUrl = `https://blooming-retreat-21036.herokuapp.com/song/${url}`;
    let requestResult = await axios.get(requestUrl);

    dispatch(getSuccess({
      id: requestResult.data.id,
      fileType: requestResult.data.fileType,
      nameSlug: requestResult.data.nameSlug,
      artistsSlug: requestResult.data.artistsSlug,
      genreSlug: requestResult.data.genreSlug,
      name: requestResult.data.name,
      artists: requestResult.data.artists,
      genres: requestResult.data.genres,
      authors: requestResult.data.authors,
      thumbnail: requestResult.data.thumbnail,
      downloadUrls: requestResult.data.downloadUrls
    }));
  } catch (error) {
    console.log(error);
    dispatch(getFailure());
  }
}