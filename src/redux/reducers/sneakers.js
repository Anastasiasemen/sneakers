const initialState = {
    items: [],
    isLoaded: false,
};

const sneakers = ( state = initialState, action ) => {
  switch (action.type){
      case 'SET_SNEAKERS':
          return {
              ...state,
              items: action.payload,
              isLoaded: true,
          };
      case 'SET_LOADED':
          return {
              ...state,
              isLoaded: action.payload,
          }
      default:
          return state;
  }

};

export default sneakers;
