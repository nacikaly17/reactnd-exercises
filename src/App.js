import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import ListUsers from './ListUsers';
import ListMovies from './ListMovies';

/*
Display a list of movies where each movie contains a list of users that favorited it.

For detailed instructions, refer to instructions.md.
*/

const profiles = [
    {
        id: 1,
        userID: '1',
        favoriteMovieID: '1',
    },
    {
        id: 2,
        userID: '2',
        favoriteMovieID: '1',
    },
    {
        id: 3,
        userID: '4',
        favoriteMovieID: '5',
    },
    {
        id: 4,
        userID: '5',
        favoriteMovieID: '2',
    },
    {
        id: 5,
        userID: '3',
        favoriteMovieID: '5',
    },
    {
        id: 6,
        userID: '6',
        favoriteMovieID: '4',
    },
];

const users = {
    1: {
        id: 1,
        name: 'Jane Jones',
        userName: 'coder',
    },
    2: {
        id: 2,
        name: 'Matthew Johnson',
        userName: 'mpage',
    },
    3: {
        id: 3,
        name: 'Autumn Green',
        userName: 'user123',
    },
    4: {
        id: 3,
        name: 'John Doe',
        userName: 'user123',
    },
    5: {
        id: 5,
        name: 'Lauren Carlson',
        userName: 'user123',
    },
    6: {
        id: 6,
        name: 'Nicholas Lain',
        userName: 'user123',
    },
};

const movies = {
    1: {
        id: 1,
        name: 'Planet Earth',
    },
    2: {
        id: 2,
        name: 'Selma',
    },
    3: {
        id: 3,
        name: 'Million Dollar Baby',
    },
    4: {
        id: 4,
        name: 'Forrest Gump',
    },
    5: {
        id: 5,
        name: 'Get Out',
    },
};

/**
* Determine ,  movies with favoritizes users
*/

function usersByMovie() {
    const result = {};
    profiles.forEach(profile => {
        const movieID = profile.favoriteMovieID;
        if (result[movieID]) {
            result[movieID].push(profile.userID);
        } else {
            result[movieID] = [profile.userID];
        }
    });
    return result;
}

function movieInfos() {
    const result = Object.keys(movies).map(id => (
        { key: id, movieInfo: movies[id] }
    ));
    return result;
}

class App extends Component {

    constructor(props) {
        super(props);
        this.usersByMovie = usersByMovie();
        this.movieInfos = movieInfos();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">ReactND - Coding Practice</h1>
                </header>
                <ListUsers users={users} movies={movies} profiles={profiles} />
                <ListMovies
                    users={users}
                    movieInfos={this.movieInfos}
                    usersByMovie={this.usersByMovie}
                />
                <hr />

            </div>
        );
    }
}

export default App;
