import  { ADD_POST }  from "../../actions";

const INITIAL_POSTS_STATE = [];

const posts = (state = INITIAL_POSTS_STATE, { type, payload }) => {
  switch (type) {
    case ADD_POST:
      return [ ...state, payload ];
    default:
      return state;
  }; 
};

export default posts;