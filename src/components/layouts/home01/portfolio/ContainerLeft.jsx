import React, { Component } from 'react';


class ContainerLeft extends Component {
    render() {
        return (
            <div className="col-left animate-element wow delay5 fadeInDown" data-wow-delay="0.5s">
                <div className="flat-title t1">
                    <h4 className="sub-title mb-2">Visual Communication</h4>
                    <h2 className="title-section color-d12 mg-b34">Rebranding</h2>
                    <div className="description">
                        <p className="lt-sp01">
                        Reimagine, Reinvent, Redefine. We embraced the spirit of innovation, fostering an environment that encourages curiosity and exploration.
                        </p>
                        <p className="lt-sp01">
                        Through meticulous research and inspired ideation, we uncovered the essence of Regal Studio, distilling its core values and aspirations.
                        </p>
                    </div>
                    <div className="fl-btn btn-general btn-hv-border">
                        <a
            href="https://www.behance.net/mishaladnan"
            target="_blank"
            rel="noopener noreferrer"
            className="f-w500 text-one color-1 lt-sp1 border-corner2"
        >
            View Projects
        </a>
                    </div>
                </div>
          </div>
        );
    }
}

export default ContainerLeft;
