import React from 'react'



export default function MovieCard(props){
    return(
        <div class="col-md-6 col-lg-4">
            <div class="card text-white bg-secondary my-3">
                <img
                    src="https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX675_CR0,0,675,999_AL_.jpg"
                    class="card-img-top"
                    alt="..."/>
                <div class="card-body">
                    <div class="row">
                        <div class="col-4 field-label">
                            ID
                        </div>
                        <div class="col-8">
                            {props.description}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4 field-label">
                            Title
                        </div>
                        <div class="col-8">
                            {props.description}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4 field-label">
                            Director
                        </div>
                        <div class="col-8">
                            {props.description}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4 field-label">
                            Release
                        </div>
                        <div class="col-8">
                            {props.description}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4 field-label">
                            Exit
                        </div>
                        <div class="col-8">
                            {props.description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}