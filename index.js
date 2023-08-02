const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name= form.name.value;
  console.log(name)
  const email= form.email.value;
  console.log(email)
  const message= form.message.value;
  console.log(message);
  window.location.href = 'mailto:abhishek.btech.ec18@iiitranchi.ac.in?subject=Hi, I am -' + name + ' (' + email + ')' + '&body=' + message +'&cc=Abhishek@letskhabar.com&bcc='+email;
  // swal("Sucess!");
})
document.querySelector('.twitter').addEventListener('click', () => window.location.href = "https://twitter.com/abhishek42124")
// document.querySelector('.facebook').addEventListener('click', () => window.location.href = "https://www.facebook.com/AmazingAK")
document.querySelector('.github').addEventListener('click', () => window.location.href = "https://github.com/Abhi1966")
document.querySelector('.instagram').addEventListener('click', () => window.location.href = "https://www.instagram.com/abhishek190606/")
// document.querySelector('.dev').addEventListener('click', () => window.location.href = "https://dev.to/amazing__ak")
document.querySelector('.linkedin').addEventListener('click', () => window.location.href = "https://www.linkedin.com/in/abhishek-kumar-singh-a7722a276/")
document.querySelector('.mail').addEventListener('click', () => window.location.href = 'mailto:abhishekkumar231@lpu.in')



// gsap.timeline({
//   scrollTrigger: {
//     trigger: ".about",
//     pin: false,   // pin the trigger element while active
//     start: "top center", // when the top of the trigger hits the top of the viewport
//     end: "bottom center", // end after scrolling 500px beyond the start
//     scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
//     markers: true,
//   }
// })
// .from(".about", {opacity: 0})

gsap.timeline({
    scrollTrigger: {
      trigger: ".main",
      pin: false,   // pin the trigger element while active
      start: "top bottom", // when the top of the trigger hits the top of the viewport
      end: "bottom center", // end after scrolling 500px beyond the start
      scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      markers: false,
    }
  })
  .from(".main", {scale:0.8})
  .from(".main", {opacity:0.5})

  gsap.timeline({
    scrollTrigger: {
      trigger: ".project",
      pin: false,   // pin the trigger element while active
      start: "top bottom", // when the top of the trigger hits the top of the viewport
      end: "bottom center", // end after scrolling 500px beyond the start
      scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      markers: false,
    }
  })
  .from(".project", {scale:0.8})
  .from(".project", {opacity:0.5})

 gsap.timeline({
    scrollTrigger: {
      trigger: "footer",
      pin: false,   // pin the trigger element while active
      start: "top bottom", // when the top of the trigger hits the top of the viewport
      end: "bottom center", // end after scrolling 500px beyond the start
      scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      markers: false,
    }
  })
  .from("footer", {scale:0.8})
  .from("footer", {opacity:0.5})


  gsap.from(".right", {y: -500, duration: 3});
  gsap.from(".left", {x: -500, duration: 2, delay : 1});