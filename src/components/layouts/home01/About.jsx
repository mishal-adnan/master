import React, { Component } from 'react';


class About extends Component {
    constructor(props){
        super(props);
        this.state = {
            profile: [
                {
                    id: 1,
                    classname: 'profile-link border-corner2 d-flex align-items-center',
                    images: './images/section/05.png',
                    alt: 'images',
                    name: 'LinkedIn',
                    normal: 'Connect with me',
                    link: 'https://www.linkedin.com/in/mishal-adnan/'
                },
                {
                    id: 2,
                    classname: 'profile-link border-corner2 d-flex align-items-center',
                    images: './images/section/06.png',
                    alt: 'images',
                    name: 'Behance',
                    normal: 'See My Design',
                    link: 'https://www.behance.net/mishaladnan'
                },
                {
                    id: 3,
                    classname: 'profile-link border-corner2 d-flex align-items-center',
                    images: './images/section/07.png',
                    alt: 'images',
                    name: 'Facebook',
                    normal: 'Follow My Page',
                    link: 'https://www.facebook.com/notyouraverageblogger1'
                },
                {
                    id: 4,
                    classname: 'profile-link border-corner2 d-flex align-items-center',
                    images: './images/section/08.png',
                    alt: 'images',
                    name: 'Instagram',
                    normal: 'See My Art',
                    link: 'https://www.instagram.com/regalstudio.pk/'

                }
            ]
        }
    }
    render() {
        return (
            <div className="background-white">
                <div className="d-lg-flex">
                    <div className="col-left">
                        <div className="featured-post animate-element wow delay5 fadeInUp" data-wow-delay="0.5s">
                            <img src="images/page-title/mishal.png" alt="images"/>
                        </div>
                    </div>
                    <div className="col-right">
                        <div className="flat-spacer" data-desktop="105" data-mobile="50" data-smobile="50"></div>
                        <div className="flat-title t1">
                            <div className="animate-element wow delay5 fadeInDown" data-wow-delay="0.5s">
                                <h4 className="sub-title mg-b22">About Me</h4>
                                <h2 className="title-section mg-b26 color-d12">Hi, I am here to <span className="color-d4">help you.</span></h2>
                                <p>
                                Experienced, forward-thinking creative person with a diverse background in design, art, and communication, specializing in driving engagement and business objectives. Proficient in leveraging analytics, SEO, and AI for targeted solutions. Seeking new challenges to drive growth in your team. Let's connect!                                </p>
                            </div>
                            <div className="animate-element wow delay5 fadeInUp" data-wow-delay="0.5s">
                                <div className="fl-btn btn-general">
                                <a 
            href="https://www.linkedin.com/in/mishal-adnan/"
            target="_blank"
            rel="noopener noreferrer"
            className="f-w500 color-1 lt-sp07"
        >
            Hire Me
        </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile-list" style={{ marginTop: '4px' }}>
                    <div className="flat-carousel-box data-effect clearfix" data-gap="40" data-column="4" data-column2="3" data-column3="2" data-column4="1" data-column5="1" data-dots="true" data-auto="false" data-nav="false" data-loop="true">
                        <div className="owl-carousel">
                            {
                                this.state.profile.map(data => (
                                    <div className={data.classname} key={data.id}>
                                        <div className="featured-post">
                                            <img src={data.images} alt={data.alt}/>
                                        </div>
                                        <div className="content-inside">
                                            <h3>
                                            <a href={data.link} target="_blank" rel="noopener noreferrer">
                                    {data.name}
                                </a></h3>
                                            <span className="t-normal">{data.normal}</span>
                                        </div>
                                    </div>    
                                ))
                            }                                                          
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
