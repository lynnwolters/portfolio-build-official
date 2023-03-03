/**********/
/* ROTATE */
/**********/

var rotate = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: '.badge',
})
.setClassToggle('.badge', 'rotate')
.addTo(rotate)  
