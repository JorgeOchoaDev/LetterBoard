import React from 'react'



export default function MovieCard(props){
    return(
        <div class="col-md-6 col-lg-4">
            <div class="card text-white bg-secondary my-3">
                <img
                    src={props.source}
                    class="card-img-top"
                    alt="..."/>
                <div class="card-body">
                    <div class="row">
                        <div class="col-4 field-label">
                            ID
                        </div>
                        <div class="col-8">
                            {props.id}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4 field-label">
                            Title
                        </div>
                        <div class="col-8">
                            {props.title}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4 field-label">
                            Director
                        </div>
                        <div class="col-8">
                            {props.director}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4 field-label">
                            Release
                        </div>
                        <div class="col-8">
                            {props.release}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4 field-label">
                            Exit
                        </div>
                        <div class="col-8">
                            {props.exit}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}