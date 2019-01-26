import React, { Component } from 'react';


class ListUsers extends Component {
    render() {
        const users = this.props.users;
        const profiles = this.props.profiles;
        const movies = this.props.movies;

        return (
            <ul>
                <h2>Exercise 1: All Users and their Favorite Movies</h2>
                {profiles.map(profile => {
                    const userName = users[profile.userID].name;
                    const movieName = movies[profile.favoriteMovieID].name;
                    return (
                        <li key={profile.id}>
                            <p>{`${userName}\'s favorite movie is ${movieName}.`}</p>
                        </li>
                    );
                })}
            </ul>
        )
    }
}

export default ListUsers;
