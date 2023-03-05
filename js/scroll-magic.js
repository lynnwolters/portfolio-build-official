// scene.addIndicators();

/**************/
/* CONTROLLER */
/**************/

var controller = new ScrollMagic.Controller();

/**********/
/* SCENES */
/**********/

/* 1 */

var scene1 = new ScrollMagic.Scene({
})
scene1.setClassToggle(".right-1", "visible-right-1");

var scene2 = new ScrollMagic.Scene({
    triggerHook: "onEnter",
    reverse: false,
})
scene2.setClassToggle(".left-1", "visible-left-1");

/* ----------------------------------------------------------- */

/* 2 */

var scene3 = new ScrollMagic.Scene({
    triggerHook: "onEnter",
    reverse: false,
})
scene3.setClassToggle(".right-2", "visible-right-2");

var scene4 = new ScrollMagic.Scene({
})
scene4.setClassToggle(".left-2", "visible-left-2");

/* ----------------------------------------------------------- */

/* 3 */

var scene5 = new ScrollMagic.Scene({
})
scene5.setClassToggle(".right-3", "visible-right-3");

var scene6 = new ScrollMagic.Scene({
    triggerHook: "onEnter",
    reverse: false,
})
scene6.setClassToggle(".left-3", "visible-left-3");

/* ----------------------------------------------------------- */

/* 4 */

var scene7 = new ScrollMagic.Scene({
})
scene7.setClassToggle(".right-4", "visible-right-4");

var scene8 = new ScrollMagic.Scene({
    triggerElement: "main section:nth-of-type(1)",
    triggerHook: "onEnter",
    offset: 0,
    reverse: false,
})
scene8.setClassToggle(".left-4", "visible-left-4");

/* ----------------------------------------------------------- */

/* 5 */

var scene9 = new ScrollMagic.Scene({
    triggerElement: "main section:nth-of-type(1)",
    triggerHook: "onEnter",
    offset: 200,
    reverse: false,
})
scene9.setClassToggle(".right-5", "visible-right-5");

var scene10 = new ScrollMagic.Scene({
})
scene10.setClassToggle(".left-5", "visible-left-5");

/* ----------------------------------------------------------- */

/* 6 */

var scene11 = new ScrollMagic.Scene({
    triggerElement: "main section:nth-of-type(2)",
    triggerHook: "onEnter",
    offset: 0,
    reverse: false,
})
scene11.setClassToggle(".right-6", "visible-right-6");

var scene12 = new ScrollMagic.Scene({
})
scene12.setClassToggle(".left-6", "visible-left-6");

/* ----------------------------------------------------------- */

/* 7 */

var scene13 = new ScrollMagic.Scene({
})
scene13.setClassToggle(".right-7", "visible-right-7");

var scene14 = new ScrollMagic.Scene({
    triggerElement: "main section:nth-of-type(2)",
    triggerHook: "onEnter",
    offset: 200,
    reverse: false,
})
scene14.setClassToggle(".left-7", "visible-left-7");

/* ----------------------------------------------------------- */

/* 8 */

var scene15 = new ScrollMagic.Scene({
})
scene15.setClassToggle(".right-8", "visible-right-8");

var scene16 = new ScrollMagic.Scene({
    triggerElement: "main section:nth-of-type(2)",
    triggerHook: "onEnter",
    offset: 400,
    reverse: false,
})
scene16.setClassToggle(".left-8", "visible-left-8");

/* ----------------------------------------------------------- */

/* 9 */

var scene17 = new ScrollMagic.Scene({
    triggerElement: "main section:nth-of-type(2)",
    triggerHook: "onEnter",
    offset: 600,
    reverse: false,
})
scene17.setClassToggle(".right-9", "visible-right-9");

var scene18 = new ScrollMagic.Scene({
})
scene18.setClassToggle(".left-9", "visible-left-9");

/* ----------------------------------------------------------- */

/* 10 */

var scene19 = new ScrollMagic.Scene({
})
scene19.setClassToggle(".right-10", "visible-right-10");

var scene20 = new ScrollMagic.Scene({
    triggerElement: "main section:nth-of-type(3)",
    triggerHook: "onEnter",
    offset: 0,
    reverse: false,
})
scene20.setClassToggle(".left-10", "visible-left-10");

/* ----------------------------------------------------------- */

/* 11 */

var scene21 = new ScrollMagic.Scene({
})
scene21.setClassToggle(".right-11", "visible-right-11");

var scene22 = new ScrollMagic.Scene({
    triggerElement: "main section:nth-of-type(3)",
    triggerHook: "onEnter",
    offset: 400,
    reverse: false,
})
scene22.setClassToggle(".left-11", "visible-left-11");

/* ----------------------------------------------------------- */

/* 12 */

var scene23 = new ScrollMagic.Scene({
})
scene23.setClassToggle(".right-12", "visible-right-12");

var scene24 = new ScrollMagic.Scene({
    triggerElement: "main section:nth-of-type(3)",
    triggerHook: "onEnter",
    offset: 600,
    reverse: false,
})
scene24.setClassToggle(".left-12", "visible-left-12");

/* ----------------------------------------------------------- */

/* 13 */

var scene25 = new ScrollMagic.Scene({
    triggerElement: "main section:nth-of-type(3)",
    triggerHook: "onEnter",
    offset: 200,
    reverse: false,
})
scene25.setClassToggle(".right-13", "visible-right-13");

var scene26 = new ScrollMagic.Scene({
})
scene26.setClassToggle(".left-13", "visible-left-13");

/* ----------------------------------------------------------- */

/* 14 */

var scene27 = new ScrollMagic.Scene({
})
scene27.setClassToggle(".right-14", "visible-right-14");

var scene28 = new ScrollMagic.Scene({
    triggerElement: "main section:nth-of-type(4)",
    triggerHook: "onEnter",
    offset: 0,
    reverse: false,
})
scene28.setClassToggle(".left-14", "visible-left-14");

/* ----------------------------------------------------------- */

/* 15 */

var scene29 = new ScrollMagic.Scene({
    triggerElement: "main section:nth-of-type(4)",
    triggerHook: "onEnter",
    offset: 400,
    reverse: false,
})
scene29.setClassToggle(".right-15", "visible-right-15");

var scene30 = new ScrollMagic.Scene({
})
scene30.setClassToggle(".left-15", "visible-left-15");

/* ----------------------------------------------------------- */

/* 16 */

var scene31 = new ScrollMagic.Scene({
})
scene31.setClassToggle(".right-16", "visible-right-16");

var scene32 = new ScrollMagic.Scene({
    triggerElement: "main section:nth-of-type(4)",
    triggerHook: "onEnter",
    offset: 400,
    reverse: false,
})
scene32.setClassToggle(".left-16", "visible-left-16");

/* ----------------------------------------------------------- */

/* 17 */

var scene33 = new ScrollMagic.Scene({
    triggerElement: "main section:nth-of-type(4)",
    triggerHook: "onEnter",
    offset: 400,
    reverse: false,
})
scene33.setClassToggle(".right-17", "visible-right-17");

var scene34 = new ScrollMagic.Scene({
})
scene34.setClassToggle(".left-17", "visible-left-17");

/* ----------------------------------------------------------- */

/* 18 */

var scene35 = new ScrollMagic.Scene({
})
scene35.setClassToggle(".right-18", "visible-right-18");

var scene36 = new ScrollMagic.Scene({
    triggerElement: "main section:nth-of-type(4)",
    triggerHook: "onEnter",
    offset: 400,
    reverse: false,
})
scene36.setClassToggle(".left-18", "visible-left-18");

/* ----------------------------------------------------------- */

/* 19 */

var scene37 = new ScrollMagic.Scene({
})
scene37.setClassToggle(".right-19", "visible-right-19");

var scene38 = new ScrollMagic.Scene({
    triggerElement: "main section:nth-of-type(5)",
    triggerHook: "onEnter",
    offset: 200,
    reverse: false,
})
scene38.setClassToggle(".left-19", "visible-left-19");

/* ----------------------------------------------------------- */

/* 20 */

var scene39 = new ScrollMagic.Scene({
    triggerElement: "main section:nth-of-type(5)",
    triggerHook: "onEnter",
    offset: 400,
    reverse: false,
})
scene39.setClassToggle(".right-20", "visible-right-20");

var scene40 = new ScrollMagic.Scene({
})
scene40.setClassToggle(".left-20", "visible-left-20");

/* ----------------------------------------------------------- */

/* 21 */

var scene41 = new ScrollMagic.Scene({
})
scene41.setClassToggle(".right-21", "visible-right-21");

var scene42 = new ScrollMagic.Scene({
    triggerElement: "main section:nth-of-type(5)",
    triggerHook: "onEnter",
    offset: 600,
    reverse: false,
})
scene42.setClassToggle(".left-21", "visible-left-21");

/********************************/
/* ADD SCENES TO THE CONTROLLER */
/********************************/

controller.addScene([
    scene1,
    scene2,
    scene3,
    scene4,
    scene5,
    scene6,
    scene7,
    scene8,
    scene9,
    scene10,
    scene11,
    scene12,
    scene13,
    scene14,
    scene15,
    scene16,
    scene17,
    scene18,
    scene19,
    scene20,
    scene21,
    scene22,
    scene23,
    scene24,
    scene25,
    scene26,
    scene27,
    scene28,
    scene29,
    scene30,
    scene31,
    scene32,
    scene33,
    scene34,
    scene35,
    scene36,
    scene37,
    scene38,
    scene39,
    scene40,
    scene41,
    scene42,
]);

