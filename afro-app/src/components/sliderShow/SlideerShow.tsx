import React from 'react'
import "./slider.css"

function SlideerShow() {
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n){

    }

    function currentSlide(n){
        showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
      }

  return (
    <div>
        <div className="slideshow-container">

            <div className="mySlides fade">
            <div className="numbertext">1 / 3</div>
            <img src="img2.jpg" style={{width:"100%"}}/>
            <div className="text">Caption Text</div>
            </div>

            <div className="mySlides fade">
            <div className="numbertext">2 / 3</div>
            <img src="img2.jpg" style={{width:"100%"}}/>
            <div className="text">Caption Two</div>
            </div>

            <div className="mySlides fade">
            <div className="numbertext">3 / 3</div>
            <img src="img21.jpg" style={{width:"100%"}}/>
            <div className="text">Caption Three</div>
            </div>

            <a className="prev" onClick={plusSlides(-1)}>&#10094;</a>
            <a className="next" onClick={plusSlides(1)}>&#10095;</a>
            </div>
            <br/>

            <div style={{textAlign:"center"}}>
            <span className="dot" onClick={currentSlide(1)}></span>
            <span className="dot" onClick={currentSlide(2)}></span>
            <span className="dot" onClick={currentSlide(3)}></span>
            </div>
            
    </div>
  )
}

export default SlideerShow