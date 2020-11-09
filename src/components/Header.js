import React from 'react'
// import headerImg from '../images/header.jpg'
import {ProductConsumer} from '../Context/Context'

export default function Header() {
    return (
        <ProductConsumer>
            {(value)=>{
                return(
                    <section className="header">
                        {/* <img src={headerImg} alt="headerPic"/> */}
                        <div className="inside-container">
                            <div className="texts">
                                <h1>Hello I am Musa Mdaka</h1>
                                <h2>Full Stack Developer</h2>
                                <br/>
                                <p>A dedicated and energetic individual with 2 years experience seeking to join a fast pased organisation as a
                                   Software Developer to contribute to the delivery of quality software solutions by applying 
                                   interpersonal skills and knowledge of program design.
                                </p>
                                
                                <a className="contactBtn" href="mailto:mdakamm@gmail.com">CONTACT</a>
                                
                            </div>
                        </div>
                    </section>
                )
            }}
        </ProductConsumer>
    )
}
