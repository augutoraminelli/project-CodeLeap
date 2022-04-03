import  { ADD_POST }  from "../../actions";

const INITIAL_POSTS_STATE = {
  data: [],
}

const posts = (state = INITIAL_POSTS_STATE, action) => {
  switch (action.type) {
    case ADD_POST:
      return { ...state, data: [...state.data, action.payload] };
    default:
      return state;
  };
};

export default posts;