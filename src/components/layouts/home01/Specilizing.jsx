import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Design, NumberCount} from './specilizing/index';

class Specilizing extends Component {
    constructor(props){
        super(props);
        this.state = {
            design : [
                {
                    id: 1,
                    img: './images/skills/00.png',
                    iconbox: 'iconbox-s1 d-sm-flex align-items-center',
                    iconcolor: 'iconbox-icon color1',
                    spanicon: 'icon-ruler',
                    title: 'Visual Communication',
                    text01: "Specialized in crafting compelling visuals that tell your brands story ",
                    text02: 'and resonate with your target audience.'
                },
                {
                    id: 2,
                    img: './images//skills/01.png',
                    iconbox: 'iconbox-s1 d-sm-flex justify-content-lg-center align-items-center mgl-iconbox-s1',
                    iconcolor: 'iconbox-icon color2 color1',
                    spanicon: 'icon-megaphone',
                    title: 'Social Media Managment',
                    text01: "Crafting dynamic digital campaigns that elevate brand visibility",
                    text02: 'and engagement through compelling content and data-driven strategies.'
                },
                {
                    id: 3,
                    img: './images//skills/02.png',
                    iconbox: 'iconbox-s1 d-sm-flex justify-content-lg-end align-items-center mgr-iconbox-s1',
                    iconcolor: 'iconbox-icon color3',
                    spanicon: 'icon-brand',
                    title: 'Digital Marketing',
                    text01: "Data-driven campaigns for real results, optimizing online presence,",
                    text02: 'running targeted ads, and reaching the right audience at the right time.'
                },
            ]
        }
    }
    render() {
        return (
            <div className="section slide-personal-Intro-third slide-dark bg-white">
                <section className="specilizing-in s1" id="services">
                    <div className="container">
                        <div className="flat-title">
                            <h2 className="title-section color-d12 animate-element wow delay5 fadeInDown" data-wow-delay="0.5s">I am Specialized in</h2>
                        </div>
                        <div className="row position-relative z-index1">
                            {
                                this.state.design.map(data => (
                                    <Design key={data.id} data={data}/>
                                    
                                ))
                                
                            }
                            
                            <div className="flat-spacer" data-desktop="0" data-mobile="0" data-smobile="0"></div>
                            <div className="fact">
                                <NumberCount />
                                <div className="btn-contact bg-s1 text-center">
                                    <h4 className="title color-d12">Got a project? Let's talk.</h4>
                                    <Link to="#" className="email color-s1 color-d14">mishal-adnan@hotmail.com</Link>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="featured-post animate-element wow delay5 fadeInRight" data-wow-delay="0.5s">
                        <img src="images/section/09.png" alt="images" />
                    </div>
                </section>
            </div>
        );
    }
}

export default Specilizing;
