new hoverEffect({
    parent:document.querySelector('.distortion'),
    intensity: 0.2,
    image1: './Assets/img1.svg',
    image2: './Assets/img2.svg',
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
    delay: 1,
    x: "-150%",
    ease: Expo.easeInOut 
 }, 0.08);

TweenMax.from(".text h3,p", 1.5, {
   delay: 1,
   y: "600%",
   ease: Expo.easeInOut 
}, 0.08);