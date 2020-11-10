import React from 'react'
import Title from './Title'
import {ProductConsumer} from '../Context/Context'
import {Link} from 'react-router-dom'
import {scroller} from 'react-scroll'

export default function Contact() {

    const scrollToElement=(element)=>{
        scroller.scrollTo(element,{
            duration:1500,
            delay:100,
            smooth:true,
            offset:-80
        })
    }


    return (
        <ProductConsumer>
            {value=>{
                return(
                    <React.Fragment>
                        <Title title="Contact" color="#1c2237" />
                        <div className="contact">
                            <div className="container">
                                <div className="contact-center">
                                    <div className="contact-links">
                                        <h3>Quick Links</h3>
                                        <div className="links-items">
                                            {value.links.map(item=>{
                                                return(
                                                    <li key={item.id}>
                                                        <Link to="/" onClick={()=>scrollToElement(item.scrolling)}>
                                                        {item.link}</Link>
                                                    </li>
                                                )
                                            })}
                                        </div>
                                    </div>

                                    <div className="contact-media">
                                        <h3>Media</h3>
                                        <div className="media-items">
                                            <li><a href="https://www.linkedin.com/in/musa-mdaka-9a3721185/" target="_blank" rel="noopener noreeferrer">
                                            <i className="fab fa-linkedin"></i>
                                            Linkedin</a></li>

                                            <li> <a href="https://github.com/MdakaMM?tab=repositories" target="_blank" rel="noopener noreeferrer">
                                            <i className="fab fa-github"></i>
                                            Github</a></li>

                                            {/* <li> <a href="#" rel="noopener noreeferrer">
                                            <i className="fab fa-twitter"></i>
                                            Twitter</a></li>

                                            <li> <a href="#" rel="noopener noreeferrer">
                                            <i className="fab fa-instagram"></i>
                                            Instagram</a></li> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="created">
                                <p>Designed and created by Musa Mdaka {year()>2020 ?"2019 - ":""}{year()}</p>
                            </div>
                        </div>
                    </React.Fragment>
                )
            }}
        </ProductConsumer>
    )
}

//year function
let year = ()=>{
    let year = new Date().getFullYear();
    return year
}
