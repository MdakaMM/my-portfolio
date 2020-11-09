import React from 'react';
import Title from './Title';
import AboutLogo from '../images/mmm.jpg';
import {ProductConsumer} from '../Context/Context';

export default function about() {
    return (
        <ProductConsumer>
            {value=>{
                return(
                    <section className="about">
                        <div className="container">
                            <Title title="About" color="#1c2237"/>
                            <div className="about-center">
                                <div className="about-logo">
                                    <img src={AboutLogo} alt="logo"/>
                                </div>

                                <div className="about-texts">
                                    <div className="profile">
                                        <h2>My profile</h2>
                                    </div>

                                    <div className="name">
                                        <p><span>Name: </span>Musa Mdaka</p>
                                    </div>

                                    <div className="age">
                                        <p><span>Age: </span>26</p>
                                    </div>

                                    <div className="address">
                                        <p><span>Address: </span>Mkhuhlu Townsip 180A (Mbombela), Mpumalanga. (Open to Relocate)</p>
                                    </div>

                                    <div className="email">
                                        <p><span>Email: </span><a href="mailto:mdakamm@gmail.com">mdakamm@gmail.com</a></p>
                                    </div>

                                    <div className="phone">
                                        <p><span>Phone: </span>076 512 4625 / 067 713 9266</p>
                                    </div>

                                    <div className="citizenship">
                                        <p><span>Citizenship: </span>South African</p>
                                    </div>

                                    <div className="about-media">

                                        <a href="https://www.linkedin.com/in/musa-mdaka-9a3721185/" target="_blank" rel="noopener noreeferrer">
                                            <i className="fab fa-linkedin"></i>
                                        </a>

                                        <a href="https://github.com/MdakaMM?tab=repositories" target="_blank" rel="noopener noreeferrer">
                                            <i className="fab fa-github"></i>
                                        </a>

                                        {/* <a href="#" rel="noopener noreeferrer">
                                            <i className="fab fa-twitter"></i>
                                        </a>

                                        <a href="#" rel="noopener noreeferrer">
                                            <i className="fab fa-instagram"></i>
                                        </a> */}
                                    </div>
                                </div>
                            </div>

                            <div className="generally">
                                <span>Objective</span>
                                <p>I am an innovative, creative thinker who is adept at coming up with real solutions that work for
                                    clients, with experience in a wide variety of software, system architectures and programming
                                    languages. I am always current with the latest developments in the software development
                                    world through researching and studying. I pride myself on optimizing function and providing
                                    solutions that are intuitive, user-friendly, adaptable and effective. I'm eager to learn and to
                                    encounter new challenges to gain more experience.</p>

                                    <div className="qualifications">
                                        <span>Qualifications</span>
                                        {/* <p>&rarr;<b>Bachelor of Science in Information Technology</b> 2015-2017</p>
                                        <p>&rarr; Higher Certificate in <b>Information Technology(Information Systems)</b> 2013-2014</p>
                                        <p>&rarr; Grade 12 <b>(Matric)</b> 2012</p> */}

                                    <ul class="t-timeline"><br/>
                                        <li>
                                            <p class="t-timeline-date">2015-2017</p>
                                            <div class="t-timeline-content">
                                            <h3>Bachelor of Science in Information Technology</h3>
                                            <p className="e-title">CTI Education Group</p>
                                            <p>Mbombela</p><br/>
                                            </div>
                                        </li>

                                        <li>
                                            <p class="t-timeline-date">2013-2014</p>
                                            <div class="t-timeline-content">
                                            <h3> Higher Certificate in Information Technology(Information Systems)</h3>
                                            <p className="e-title">CTI Education Group</p>
                                            <p>Mbombela</p><br/>
                                            </div>
                                        </li>

                                        {/* <li>
                                            <p class="t-timeline-date">2012</p>
                                            <div class="t-timeline-content">
                                            <h3>Grade 12(Matric)</h3>
                                            <p className="e-title">CTI Education Group</p>
                                            <p>Hazyview Private College</p><br/>
                                            </div>
                                        </li> */}
                                    </ul>
                                    

                                    </div>
                                    

                                    
                                    <div class="wrapper">
                                        
                                    <div class="table">
                                        
                                        <div class="table-row table-header">
                                        <div class="cell">
                                            Skills
                                        </div>
                                        
                                        <div class="cell">
                                            .
                                        </div>
                                        <div class="cell">
                                            .
                                        </div>
                                        <div class="cell">
                                            .
                                        </div>
                                        </div>
                                        
                                        <div class="table-row">
                                        <div class="cell" data-title="Skills">
                                            HTML5
                                        </div>
                                        
                                        <div class="cell" >
                                            JQuery
                                        </div>
                                        <div class="cell" >
                                            React(light)
                                        </div>
                                        <div class="cell" >
                                            Illustrator
                                        </div>
                                        </div>
                                        
                                        <div class="table-row">
                                        <div class="cell" data-title="Skills">
                                            CSS
                                        </div>
                                        <div class="cell">
                                            Bootstrap
                                        </div>
                                        <div class="cell">
                                            Nodejs
                                        </div>
                                        <div class="cell">
                                            Photoshop
                                        </div>
                                        </div>
                                        
                                        <div class="table-row">
                                        <div class="cell" data-title="Skills">
                                            Java
                                        </div>
                                        
                                        <div class="cell" >
                                            MySQL
                                        </div>
                                        <div class="cell" >
                                            MongoDB
                                        </div>
                                        <div class="cell" >
                                            Adobe XD
                                        </div>
                                        </div>
                                        
                                        <div class="table-row">
                                        <div class="cell" data-title="Skills">
                                            Javascript
                                        </div>
                                        
                                        <div class="cell" >
                                            ES6
                                        </div>
                                        <div class="cell" >
                                            Git & Github
                                        </div>
                                        <div class="cell" >
                                            -
                                        </div>
                                        </div>

                                        <div class="table-row">
                                        <div class="cell" data-title="Sills">
                                            PHP
                                        </div>
                                        
                                        <div class="cell" >
                                            Angular(light)
                                        </div>
                                        <div class="cell" >
                                            UI/UX Design
                                        </div>
                                        <div class="cell" >
                                            -
                                        </div>
                                        </div>
                                    
                                    
                                        
                                    </div>
                                    
                                    </div>


  

                            </div>
                        </div>
                    </section>
                )
            }}
        </ProductConsumer>
    )
}
