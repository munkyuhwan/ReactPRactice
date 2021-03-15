import React from 'react';
import { connect } from 'react-redux';

import MovieList from './MovieList'

const App = ({like, handleLike}) => {
    return(
        <>
            <MovieList/>
        </>
    )
}
export default App;