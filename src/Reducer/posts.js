import * as Types from '../Constants/ActionTypes'
var initialState = [];
var x;
var posts = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_POSTS_DATA:
      state = action.posts;
      return [...state]
    case Types.ADD_POST:
      var newPost = {
        _id: action.id,
        title: action.post.title,
        content: action.post.content,
        author: action.post.author,
        time_created: action.post.time_created
      }
      state.push(newPost);
      return [...state];
    case Types.UPDATE_POST:
      for (x in state) {
        if (state[x]._id === action.post.id) {
          state[x].title = action.post.title;
          state[x].author = action.post.author;
          state[x].content = action.post.content;
          break
        }
      }
      return [...state];
    case Types.DELETE_POST:
      for (x in state) {
        if (state[x]._id === action.id) {
          break;
        }
      }
      state.splice(x, 1);
      return [...state];
    default: return [...state];
  }
}


export default posts;