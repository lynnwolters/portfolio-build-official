/**********/
/* ROTATE */
/**********/

/* CONTROLLER */
var controller = new ScrollMagic.Controller();

/* RIGHT 1 */
var scene1 = new ScrollMagic.Scene({
    triggerHook: 0,
    reverse: false
})
scene1.setClassToggle(".right-1", "visible-right-1");

/* RIGHT 2 */
var scene2 = new ScrollMagic.Scene({
    triggerElement: "main section:nth-of-type(1)",
    reverse: false
})
scene2.setClassToggle(".right-2", "visible-right-2");

/* RIGHT 3 */
var scene3 = new ScrollMagic.Scene({
    triggerElement: ".right-3",
    reverse: false
})
scene3.setClassToggle(".right-3", "visible-right-3");

/* RIGHT 4 */
var scene4 = new ScrollMagic.Scene({
    triggerElement: ".right-4",
    reverse: false
})
scene4.setClassToggle(".right-4", "visible-right-4");

/* RIGHT 5 */
var scene5 = new ScrollMagic.Scene({
    triggerElement: ".right-5",
    reverse: false
})
scene5.setClassToggle(".right-5", "visible-right-5");

/* LEFT 1 */
var scene6 = new ScrollMagic.Scene({
    triggerElement: ".left-1",
    reverse: false
})
scene6.setClassToggle(".left-1", "visible-left-1");

/* LEFT 2 */
var scene7 = new ScrollMagic.Scene({
    triggerHook: 0,
    reverse: false
})
scene7.setClassToggle(".left-2", "visible-left-2");

/* LEFT 3 */
var scene8 = new ScrollMagic.Scene({
    triggerHook: 0,
    reverse: false
})
scene8.setClassToggle(".left-3", "visible-left-3");

/* LEFT 4 */
var scene9 = new ScrollMagic.Scene({
    triggerElement: ".left-3",
    reverse: false
})
scene9.setClassToggle(".left-4", "visible-left-4");

/* LEFT 5 */
var scene10 = new ScrollMagic.Scene({
    triggerElement: ".left-5",
    reverse: false
})
scene10.setClassToggle(".left-5", "visible-left-5");

/* ADD SCENES TO THE CONTROLLER */
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
    scene10
]);

