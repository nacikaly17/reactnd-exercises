import React, { Component } from 'react';


class ListMovies extends Component {
    render() {
        const { users, movieInfos, usersByMovie } = this.props;
        return (
            <ul>
                <h2>Exercise 2: All Movies and users, who likes that movie</h2>
                {movieInfos.map(movie => {
                    const movieKey = movie.key;
                    const movieName = movie.movieInfo.name;
                    const usersWhoLikedMovie = usersByMovie[movieKey];
                    console.log("usersWhoLikedMovie" + usersWhoLikedMovie);
                    return (
                        <li key={movieKey}>
                            <p>{`${movieKey} - ${movieName}.`}</p>
                            <h3>Liked By:</h3>
                            {!usersWhoLikedMovie || usersWhoLikedMovie.length === 0 ? (
                                <p>None of the current users liked this movie.</p>
                            ) : (
                                    <ul>
                                        {usersWhoLikedMovie &&
                                            usersWhoLikedMovie.map(userId => {
                                                return (
                                                    <li key={userId}>
                                                        <p>{users[userId].name}</p>
                                                    </li>
                                                );
                                            })}
                                    </ul>
                                )
                            }
                        </li>
                    );
                })}
            </ul>
        )
    }
}

export default ListMovies;