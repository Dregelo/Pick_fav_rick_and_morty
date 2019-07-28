import React from 'react';

const EpisodeList = (props: any): JSX.Element => {
  const { store, episodes, toggleFavAction, favourites } = props;
  const { state, dispatch } = store;

  return episodes.map((episode: IEpisode) => {
    return (
      <section key={episode.id} className="episode-box">
        <img
          src={episode.image && episode.image.medium}
          alt={`Rick and Morty ${episode.name}`}
        />
        <div>{episode.name}</div>
        <section style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            Season: {episode.season} Episode: {episode.number}{' '}
          </div>
          <button
            type="button"
            onClick={() => toggleFavAction(state, dispatch, episode)}
          >
            {favourites.find((fav: IEpisode) => fav.id === episode.id)
              ? 'Unfavourite'
              : 'Favourite'}
          </button>
        </section>
      </section>
    );
  });
};

export default EpisodeList;
