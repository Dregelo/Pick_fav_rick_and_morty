import { fetchData } from './axiosActions';

export const fetchDataAction = async (dispatch: Dispatch) => {
  const data = await fetchData();
  return dispatch({
    type: 'FETCH_DATA',
    payload: data
  });
};

export const toggleFavAction = (
  state: IState,
  dispatch: any,
  episode: IEpisode | any
): IAction => {
  const episodeInFav = state.favourites.includes(episode);
  let dispatchObject = {
    type: 'ADD_FAV',
    payload: episode
  };

  if (episodeInFav) {
    const favWithoutEpisode = state.favourites.filter(
      (favourite: IEpisode): boolean => {
        return favourite.id !== episode.id;
      }
    );
    dispatchObject = {
      type: 'REMOVE_FAV',
      payload: favWithoutEpisode
    };
  }

  return dispatch(dispatchObject);
};
