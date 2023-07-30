import React, { Component } from 'react';

class Testimonial extends Component {
    constructor(props){
        super(props);
        this.state = {
            testimonial: [
                {
                    id: 1,
                    img: './images/testimonial/07.jpg',
                    alt: 'images',
                    text01: 'I am delighted to recommend Mishal Adnan for any creative or communication-related position. I had the pleasure of working with Mishal as her supervisor, where she demonstrated exceptional energy, enthusiasm, and creativity. Mishal\'s ability to',
                    text02: 'effectively communicate and connect with people is remarkable, making her a valuable asset in any team. She consistently ',
                    text03: 'delivers cutting-edge creative solutions, leveraging her diverse background in design, art, and communication. Mishal\'s data-driven approach and expertise in analytics, SEO, and AI ensure measurable outcomes. Her dedication to continuous improvement and passion for innovation are truly inspiring. I highly recommend connecting with Mishal to witness her valuable contributions firsthand.',
                    name: 'Jebraan Bin Dawood',
                    classname: 'testimonial-t1 text-center'
                },
                {
                    id: 2,
                    img: './images/testimonial/10.jpg',
                    alt: 'images',
                    text01: 'Working with Mishal has been an absolute pleasure! ',
                    text02: 'Her unwavering dedication and exceptional design and content creation skills have consistently impressed me.',
                    text03: 'Her hard work and talent shine through in every project she takes on, making her an invaluable asset to our team. I highly recommend her creative expertise! And I am sure she has the spark to make every project a success!',
                    name: 'Alina Ahmed Malik',
                    classname: 'testimonial-t1 text-center'
                },
                {
                    id: 3,
                    img: './images/testimonial/11.jpg',
                    alt: 'images',
                    text01: 'I have had the pleasure of working with Mishal, and it has been an absolute delight! ',
                    text02: 'Her unwavering dedication, along with her exceptional design and content creation skills, have consistently impressed me. ',
                    text03: 'She brings a level of talent and creativity that is truly invaluable to our team. I highly recommend her for any creative project, and I am confident she can turn every challenge into a resounding success',
                    name: 'Muhammad Mohsin',
                    classname: 'testimonial-t1 text-center'
                },
                {
                    id: 4,
                    img: './images/testimonial/12.jpg',
                    alt: 'images',
                    text01: 'Mishal is a true creative genius! Collaborating with her has been an absolute joy. Her creativity and professionalism shine through in every endeavor, making each project a memorable experience. She possesses a unique blend of artistic flair',
                    text02: 'and strategic thinking that sets her apart. Mishal\'s ability to bring ideas to life visually is extraordinary, ',
                    text03: 'attention to detail is commendable. I wholeheartedly endorse Mishal for any creative venture - she is a true visionary!',
                    name: 'Haleema Syed',
                    classname: 'testimonial-t1 text-center'
                },
                {
                    id: 4,
                    img: './images/testimonial/13.jpg',
                    alt: 'images',
                    text01: 'She has a creative and unique approach to any problems she\'s presented with. ',
                    text02: 'Brings out the positive in any situation and is admirably professional. ',
                    text03: ' Working with Mishal has been nothing but absolute pleasure and privilege!',
                    name: 'Humera Malik',
                    classname: 'testimonial-t1 text-center'
                }
            ]
        }
    }
    render() {
        return (
            <div className="container">
                <div className="custom-dot dot-t1 dot-s1 none-nav-default mg-dots-s1">
                    <div className="flat-carousel-box data-effect clearfix" data-gap={0} data-column={1} data-column2={1} data-column3={1} data-column4={1} data-column5={1} data-dots="true" data-auto="false" data-nav="false" data-loop="true">
                        <div className="owl-carousel">
                            {
                                this.state.testimonial.map(data => (
                                    
                                    <div className={data.classname} key={data.id}>
                                                    <div className="avatar mg-b29"><img src={data.img} alt={data.alt} /></div>
                                                    <p className="lt-sp03 mg-b25">
                                                        {data.text01}<br /> {data.text02} <br/>{data.text03}
                                                    </p>
                                        <h3 className="name f-w600">{data.name}</h3>
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

export default Testimonial;
