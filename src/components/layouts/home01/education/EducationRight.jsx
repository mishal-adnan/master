import React, { Component } from 'react';

class EducationRight extends Component {
    constructor(props){
        super(props);
        this.state = {
            skill: [
                {
                    id: 1,
                    timeline: 'timeline-inverted color1',
                    info: 'One Group',
                    title: 'Creative Executive',
                    text: 'As a Creative Executive, I lead impactful social media campaigns through compelling visuals, engaging copy, and best practices.'
                },
                {
                    id: 2,
                    timeline: 'timeline-inverted color2',
                    info: 'Ben Dawood Studios',
                    title: 'Visual Communication Designer',
                    text: 'As a Visual Communication Designer, I created engaging visual content for diverse mediums, showcasing expertise in design principles and storytelling.'
                },
                {
                    id: 3,
                    timeline: 'timeline-inverted color3',
                    info: 'Orenda',
                    title: 'Graphic Desinger',
                    text: 'As a Graphic Designer, I crafted captivating visual content across diverse platforms, showcasing proficiency in design principles and effective communication.'
                }
            ]
        }
    }
    render() {
        return (
            <div className="col-right">
                <div className="flat-spacer" data-desktop={0} data-mobile={70} data-smobile={70} />
                <div className="flat-title t1 animate-element wow delay5 fadeInDown">
                    <h4 className="sub-title mg-b13">Career</h4>
                    <h2 className="title-section color-d12">Work Experience</h2>
                </div>
                <div className="timelines position-relative animate-element wow delay5 fadeInUp" data-wow-delay="0.5s">
                    <ul className="timeline">
                        {
                            this.state.skill.map(data => (
                                <li className={data.timeline} key={data.id}>
                                    <div className="timeline-badge" />
                                    <div className="timeline-panel">
                                        <h3 className="f-info">{data.info}</h3>
                                        <div className="s-info">{data.title}</div>
                                        <p>
                                            {data.text}
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                        
                    </ul>
                    <div className="fl-btn btn-general btn-hv-border">
                
                         <a 
            href='https://drive.google.com/file/d/1PxfQXOAB3N7QCryFXkkHjwC_kgYq7nun/view?usp=sharing'    
            target="_blank"
            rel="noopener noreferrer"
            className="f-w500 lt-sp1 border-corner2 text-one"> Download Resume</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default EducationRight;
