import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div className="section slide-personal-Intro-first">
                <section className="banner-section s1" id="home">
                    <div className="container">
                    <div className="content-text position-relative">
                        <div className="animate-element wow delay5 fadeInDown" data-wow-delay="0.3s">
                        <h1 className="cd-headline clip is-full-width title mg-b29 text-white">
                            <span>I'm </span>
                            <span className="cd-words-wrapper color-d4">
                            <b className="is-visible">&nbsp;Mishal</b>
                            <b>&nbsp;a Designer!</b>
                            <b>&nbsp;an Artist!</b>
                            
                            </span>
                        </h1>
                        <p className="lt-sp03 mg-b60 text-white">
                        Hi! I am a designer turned social media enthusiast who is very much into art, photography, food <br/>and spreading positivity through my blog.
                        </p>
                        </div>
                        <div className="animate-element wow delay5 fadeInUp" data-wow-delay="0.5s">
                            <div className="fl-btn btn-general btn-hv-border">
                                <a 
            href="https://drive.google.com/file/d/1PxfQXOAB3N7QCryFXkkHjwC_kgYq7nun/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="border-corner5 f-w500 lt-sp095 text-white"
        >
           Download Resume
        </a>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Banner;

