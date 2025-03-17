'use client'
import React, { useState } from 'react'
import "./slider.css"

function SlideerShow() {
    const [slideIndex, setSlideIndex] = useState(1);
    
  const slides = [
    { src: '/1.png', text: 'Caption Text' },
    { src: '/2.jpg', text: 'Caption Two' },
    { src: '/3.png', text: 'Caption Three' },
  ];

  const plusSlides = (n: number) => {
    const newSlideIndex = (slideIndex + n - 1 + slides.length) % slides.length + 1;
    setSlideIndex(newSlideIndex);
  };

  const currentSlide = (n: number) => {
    setSlideIndex(n);
  };

    return (
        <div>
            <div className="slideshow-container">
            {slides.map((slide, index) => (
                <div
                key={index}
                className={`mySlides fade ${slideIndex === index + 1 ? 'active' : ''}`}
                style={{ display: slideIndex === index + 1 ? 'block' : 'none' }}
                >
                <img src={slide.src} style={{ width: '100%' }} alt={`Slide ${index + 1}`} />
                </div>
            ))}

            <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
            <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
              <div className='selective-slide' style={{ textAlign: 'center' }}>
                {slides.map((_, index) => (
                    <span
                    key={index}
                    className={`dot ${slideIndex === index + 1 ? 'active' : ''}`}
                    onClick={() => currentSlide(index + 1)}
                    ></span>
                ))}
              </div>
            </div>
            
            <br />


        </div>
    );
}

export default SlideerShow