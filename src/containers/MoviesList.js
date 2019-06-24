import React from 'react';
import { connect } from 'react-redux';
import { getPopularMovies } from '../actions/movies';

class MoviesList extends React.Component {

    componentDidMount() {
        this.props.getPopularMovies();
    }
    render() {
        return (
            <h1> Movies List</h1>
        )
    }
}

const mapStateToProps = (state) => {
    const { movies } = state;
    console.log('movies', movies)
    return {
        movies
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPopularMovies : () => dispatch(getPopularMovies())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList)