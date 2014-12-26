var slideId=0,
    slideMax=-1,
    slides
;

(function (){
    
    // set iterative IDs for the slides(wrappers)
    slides=document.getElementsByClassName('slide-wrapper');
    for (var i=0; i<slides.length; i++) {
        slides[i].setAttribute('id', i);
        slideMax++;
    }
    
    // set first slide
    slides[slideId].classList.add('current-slide');
    
    // track arrow-keys and change slides
    document.onkeydown = function (e) {
        e = e || window.event;
        if (e.keyCode=='39') { // right
            if (slideId<slideMax) {
                slides[slideId].classList.remove('current-slide');
                slideId++;
                slides[slideId].classList.add('current-slide');
            } else {
                slides[slideId].classList.remove('current-slide');
                slideId=0;
                slides[slideId].classList.add('current-slide');
            }
        } else if (e.keyCode=='37') { // right
            if (slideId>0) {
                slides[slideId].classList.remove('current-slide');
                slideId--;
                slides[slideId].classList.add('current-slide');
            } else {
                slides[slideId].classList.remove('current-slide');
                slideId=slideMax;
                slides[slideId].classList.add('current-slide');
            }
        }
    }
    
})();