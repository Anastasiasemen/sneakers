import axios from "axios";

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
});


export const fetchSneakers = ( sortBy, categories) => ( dispatch ) => {
    dispatch(setLoaded(false));
    axios.get(`/sneakers?${categories !== null ? `category=${categories}` : ''}&_sort=${sortBy}&_order=desc`)
      .then(({ data }) => {
        dispatch(setSneakers(data))
    })
};

export const setSneakers = ( items ) => ({
    type: 'SET_SNEAKERS',
    payload: items,
});
