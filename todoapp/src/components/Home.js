import React, { Component } from 'react';
// import axios from 'axios'; // alternative to fetch
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png'
import { connect } from 'react-redux';

// functional components cannot use lifecycle hooks like "componentDidMount"
// so let's change this.
//const Home = () => {

class Home extends Component {

// REDUX - we're taking this out because now we're using the state in
// ./reducers/rootReducer.js
/*
  state = {
    posts: []
  }

  // lifecycle hook
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        //console.log(res)
        this.setState({
          posts: res.data.slice(0, 3) // we wanna just grab the first 3
        })
      })
  }
*/

  render() {
    // const { posts } = this.state;
    // Let's do it with Redux now:
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={Pokeball} alt="A pokeball"/>
            <div className="cardContent">
              <Link to={'/' + post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts yet</div>
    )

    return (
      <div className="container home">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}
// export default Home
// Let's use Redux:
export default connect(mapStateToProps)(Home)
