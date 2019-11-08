import React, { Component } from'react'

import MovieCard from './MovieCard'

class CardContainer extends Component{
    render(){
        console.log(this.props)
        return(
            <div class="container my-5 d-flex justify-content-between">
                <div class="row">
                    {
                        this.props.movies.map((movie) => {
                            return <MovieCard
                                name={movie.name}
                                description={movie.description}
                            />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default CardContainer