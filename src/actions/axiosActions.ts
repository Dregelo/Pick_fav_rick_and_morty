import axios from 'axios';

export const fetchData = async () => {
  const res = await axios.get(
    'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes'
  );
  return res.data._embedded.episodes;
};
