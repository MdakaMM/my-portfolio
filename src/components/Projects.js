import React from 'react'
import Title from './Title'
import {ProductConsumer} from '../Context/Context'

export default function Projects() {
    return (
        <ProductConsumer>
            {value=>{
                return(
                    <div className="projects">
                        <div className="container">
                            <Title title="Projects" color='#1c2237' />

                            <div className="projects-center">
                                {value.projects.map(item=>{
                                    return(
                                        <div className="single-project" key={item.id}>
                                            {/* <a href={item.extlink} target="_blank" rel="noopener noreferrer">
                                                <img src={item.img} alt="projectPics"/>
                                            </a> */}

                                            
                                            <p><strong>{item.title}</strong></p>
                                            <p className="para">{item.paragraph}</p>

                                            <div className="items">
                                            <button className="projectBtn">
                                                <a href={item.extlink} target="_blank" rel="noopener noreferrer">
                                                    {item.btnTitle}
                                                </a>
                                            </button>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                )
            }}
        </ProductConsumer>
    )
}
