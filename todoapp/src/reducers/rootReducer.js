const initState = {
  posts: [
    {id: 1, title: "First Post", body: "I think this is my first post ever!"},
    {id: 2, title: "Second Post", body: "I think this is my second time posting."},
    {id: 3, title: "Third Post", body: "I think this is my Third and final post."},
  ]
}

const rootReducer = (state = initState, action) => {
  return state;
}

export default rootReducer
