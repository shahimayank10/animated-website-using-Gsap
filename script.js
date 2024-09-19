function page1(){
    var tl = gsap.timeline();

    tl.from("nav h1, nav h4, nav button", {
      y: -30,
      opacity: 0,
      duration: 0.5,
      delay: 0.5,
      stagger: 0.1,
    });

    tl.from(".center #left h1", {
      x: -300,
      opacity: 0,
      duration: 0.5,
    });
    tl.from(".center #left p", {
      x: -100,
      opacity: 0,
      duration: 0.4,
    });
    tl.from(".center #left button", {
      opacity: 0,
      duration: 0.3,
    });
    tl.from(
      ".center #right img",
      {
        opacity: 0,
        duration: 0.5,
      },
      "-=0.3"
    );

    tl.from(".section1bottom img", {
      opacity: 0,
      y: 30,
      duration: 0.3,
      stagger: 0.1,
    });
}
function page2(){
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section2",
        scroller: "body",
        // markers: "true",
        start: "top 70%",
        end: "top 0%",
        scrub: 2,
      },
    });

    tl.from("#services", {
      y: 100,
      opacity: 0,
      duration: 0.5,
    });

    tl.from(
      "#ele1",
      {
        x: -300,
        opacity: 0,
        duration: 0.5,
      },
      "first"
    );
    tl.from(
      "#ele2",
      {
        x: 300,
        opacity: 0,
        duration: 0.5,
      },
      "first"
    );
    tl.from(
      ".element#ele3",
      {
        x: -300,
        opacity: 0,
        duration: 0.5,
      },
      "second"
    );
    tl.from(
      ".element#ele4",
      {
        x: 300,
        opacity: 0,
        duration: 0.5,
      },
      "second"
    );
}

function page3(){
     var tl = gsap.timeline({
       scrollTrigger: {
         trigger: ".section3",
         scroller: "body",
        //  markers: "true",
         start: "top 70%",
         end: "top 0%",
         scrub: 2,
       },
     });

     tl.from("#upper h3, #upper p", {
       x: 100,
       opacity: 0,
       duration: 1,
       stagger: 0.3,
     });
     tl.from("#upper button", {
       opacity: 0,
       duration: 1,
     });
     tl.from(
       ".right1 img",
       {
         scale: 0.5,
         opacity: 0,
         duration: 0.5,
       },
       "-=1"
     );
     tl.from("#case-study",
       {
         y: 100,
         opacity: 0,
         duration: 0.5,
       });
     tl.from("#lower",
       {
         opacity: 0,
         duration: 0.5,
       });

}
page1();
page2();
page3();