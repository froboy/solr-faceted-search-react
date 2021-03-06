const initialState = {
  suggestionsPending: false,
  docs: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "SET_SUGGESTIONS":
      return {
        ...state,
        docs: action.data.response ? action.data.response.docs : [],
        suggestionsPending: false
      };

    case "SET_SUGGESTIONS_PENDING":
      return {
        ...state, suggestionsPending: true
      };
  }

  return state;
}
