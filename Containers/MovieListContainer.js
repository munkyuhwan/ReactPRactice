import App from '../Components/App'
import * as action from '../Actions'
import { connect } from 'react-redux';  

const mapStateToProps = (state) => ({
    like: state.like
})

const mapDispatchToProps = (dispatch) => ({
    handleLike:(index) => dispatch(action.like(index))
})

const MovieListContainer = connect(  
    mapStateToProps,  
  mapDispatchToProps  
)(App);  

export default MovieListContainer

