import React, { useEffect, useState } from 'react';
import Tool from '../Tool/Tool';
import Bounce from 'react-reveal/Bounce';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from 'react-slick/lib/slider';



const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/tool')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])

    //*******  slick  *********//
    // var settings = {
    //     dots: true,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
    //     initialSlide: 0,
    //     responsive: [
    //         {
    //             breakpoint: 980,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 3,
    //                 infinite: true,
    //                 dots: true
    //             }
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2,
    //                 initialSlide: 2
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // };


    return (
        <div className='container'>


            <Bounce top>
                <div className='grid lg:grid-cols-3 md:grid-cols-1 gap-4'>
                    {
                        tools.map(tool => <Tool
                            key={tool._id}
                            tool={tool}
                        >
                        </Tool>)
                    }
                </div>
            </Bounce>
            {/* <div>

                    <Slider {...settings}>
                        <div >
                        </div>     </Slider>
                </div> */}

        </div>
    );
};

export default Tools;