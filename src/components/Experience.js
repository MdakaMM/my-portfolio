import React from 'react'
import Title from './Title'
import {ProductConsumer} from '../Context/Context'

export default function Skills() {
    return (
        <ProductConsumer>
            {value=>{
                return(
                    <div className="experience">
                        <div className="container">
                            <Title title="Experience" color="grey"/>

                            {/* <div className="skills-center">
                                <div className="skills-web">
                                    <h4>Web Development Skills</h4>

                                    {value.devSkills.map(item=>{
                                        return(
                                            <li key={item.id}>
                                                <h3>{item.title}</h3>
                                                <span className='bar'>
                                                    <span className={item.percent}>
                                                        <p>{item.number}</p>
                                                    </span>
                                                </span>
                                            </li>
                                        )
                                    })}
                                </div>

                                <div className="skills-more">
                                    <h4>More Skills</h4>

                                    {value.otherSkills.map(item=>{
                                        return(
                                            <li key={item.id}>
                                                <h3>{item.title}</h3>
                                                <span className='bar'>
                                                    <span className={item.percent}>
                                                        <p>{item.number}</p>
                                                    </span>
                                                </span>
                                            </li>
                                        )
                                    })}
                                </div>


                            </div> */}


                                    <div className="experience">

                                        <div className="igt">

                                        <br/>
                                        <ul class="t-timeline">
                                        <li>
                                            <p class="t-timeline-date">01 May 2019 - 22 May 2020</p>
                                            <div class="t-timeline-content">
                                            <h3>Incredible Graphical Technologies &mdash; Software developer(Contract)</h3>
                                            <p className="e-title">Contract Ended</p><br/>
                                            <p>&#959; Collaborate in the planning, design, development, and deployment of new applications, and enhancements to existing applications.</p>
                                            <p>&#959; Troubleshoot issues and propose solutions.</p>
                                            <p>&#959; Integrated new features into existing Web applications.</p>
                                            <p>&#959; Assisted in testing and deploying Web applications.</p>
                                            </div>
                                        </li>
                                        

                                        </ul>

                                        </div>

                                        <br/>
                                        <div className="emalangeni">

                                        <ul class="t-timeline">
                                        <li>
                                            <p class="t-timeline-date">01 May 2019 - 22 May 2020</p>
                                            <div class="t-timeline-content">
                                            <h3>Emalangeni Technologies &mdash; Software developer(Intern)</h3>
                                            <p className="e-title">Internship Ended</p><br/>
                                            <p>&#959; Participated in all stages of the software development life-cycle, 
                                                      from concept, gathering requirements, design, development, 
                                                      testing and deployment.</p>
                                            <p>&#959; Refactoring, debugging, and implementing changes to existing 
                                                      applications to meet project requirements.</p>
                                            <p>&#959; Preparation, drafting, and review of software documentation 
                                                      and project reports to meet senior staff and client requirements.</p>
                                            </div>
                                        </li>

                                        </ul>


                                        </div>
                                    </div>



                        </div>
                    </div>
                )
            }}
        </ProductConsumer>
    )
}
