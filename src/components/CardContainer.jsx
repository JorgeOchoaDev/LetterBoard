import React, { Component } from'react'

import MovieCard from './MovieCard'

class CardContainer extends Component{
    render(){
        return(
            <div class="container my-5 mx-auto">
                <div class="row d-flex justify-content-between">
                    {
                        this.props.movies.map((movie) => {
                            return <MovieCard
                                source={movie.source}
                                id={movie.id}
                                title={movie.title}
                                director={movie.director}
                                release={movie.release}
                                exit={movie.exit}
                            />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default CardContainer