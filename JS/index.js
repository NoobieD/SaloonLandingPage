new hoverEffect({
    parent:document.querySelector('.distortion'),
    intensity: 0.2,
    image1: './Assets/img2.svg',
    image2: './Assets/img1.svg',
    displacementImage: './Assets/diss.png',
    imageRatio: 380/300
  })
//Nacbar
TweenMax.staggerFrom(".navbar div", 1.5, {
    delay: 1.5,
    opacity: 0,
    y: "20",
    ease: Expo.easeInOut
}, 0.08);

//Media
TweenMax.staggerFrom(".media ul li",1.5,{
    delay: 1.5,
    opacity: 0,
    x: '-20',
    ease: Expo.easeInOut
},0.08);

//Text
TweenMax.from(".text h1", 1.5, {
   delay: 1,
   y: "-500%",
   ease: Expo.easeInOut 
}, 0.08);

TweenMax.from(".text h2", 1.5, {
    delay: 1.2,
    x: "-150%",
    ease: Expo.easeInOut 
 }, 0.08);

TweenMax.from(".text h3,p", 1.5, {
   delay: 1.2,
   opacity: 0,
   y: "150%",
   ease: Expo.easeInOut 
}, 0.08);

//Distortion
TweenMax.staggerFrom(".distortion",3,{
    delay: 3,
    opacity: 0,
    x: '-20',
    ease: Expo.easeInOut
},0.08);

//Sponsor
TweenMax.staggerFrom(".sponsor img",3,{
    delay: 3,
    opacity: 0,
    x: '-20',
    ease: Expo.easeInOut
},0.08);

//Overlay
TweenMax.to(".first",1.5,{
    delay: 0.5,
    top: '-100%',
    ease: Expo.easeInOut
});

TweenMax.to(".second",1.5,{
    delay: 0.7,
    top: '-100%',
    ease: Expo.easeInOut
});

TweenMax.to(".third",1.5,{
    delay: 0.9,
    top: '-100%',
    ease: Expo.easeInOut
});