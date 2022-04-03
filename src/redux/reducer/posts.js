import  { ADD_POST, DELETE_POST }  from "../../actions";

const INITIAL_POSTS_STATE = [];

const posts = (state = INITIAL_POSTS_STATE, { type, payload }) => {
  switch (type) {
    case ADD_POST:
      return [ ...state, { id: +1, payload } ];
    case DELETE_POST:
      return state.filter(post => post.id !== payload.id);
    default:
      return state;
  }; 
};

export default posts;