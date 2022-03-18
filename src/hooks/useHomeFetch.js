//
//

import { useState, useEffect } from 'react';

// API
import API from '../API.js';

const InitialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [state, setState] = useState(InitialState);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // console.log(searchTerm);

  const fetchMovies = async (page, searchTerm = '') => {
    try {
      setError(false);
      setLoading(true);

      const movies = await API.fetchMovies(searchTerm, page);

      setState((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  // Initial and Search
  useEffect(() => {
    setState(InitialState);
    fetchMovies(1, searchTerm);
  }, [searchTerm]);

  return {
    state: state,
    loading,
    error,
    searchTerm,
    setSearchTerm,
  };
};
