import React, { useEffect, useContext } from 'react';
import { Store } from '../Store';
import { fetchDataAction, toggleFavAction } from '../actions/actions';

const EpisodeList = React.lazy<any>(() => import('./EpisodeList'));

const HomePage = (): JSX.Element => {
  const { state, dispatch } = useContext(Store);
  useEffect(() => {
    fetchDataAction(dispatch);
  }, [dispatch]);

  const props: IEpisodeProps = {
    episodes: state.episodes,
    store: { state, dispatch },
    toggleFavAction: toggleFavAction,
    favourites: state.favourites
  };

  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        <section className="episode-layout">
          <EpisodeList {...props} />
        </section>
      </React.Suspense>
    </>
  );
};

export default HomePage;
