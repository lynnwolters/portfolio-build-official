/*************/
/* VARIABLES */
/*************/

var cursor = document.querySelector('.cursor');

var a = document.querySelectorAll('a');
var button = document.querySelectorAll('button');

var work = document.querySelectorAll('main section:nth-of-type(4) ul li a');
var workOne = document.querySelectorAll('main section:nth-of-type(4) ul li:nth-of-type(1) > a');
var workTwo = document.querySelectorAll('main section:nth-of-type(4) ul li:nth-of-type(2) > a');
var workThree = document.querySelectorAll('main section:nth-of-type(4) ul li:nth-of-type(3) > a');
var workFour = document.querySelectorAll('main section:nth-of-type(4) ul li:nth-of-type(4) > a');

/**************/
/* MOUSE MOVE */
/**************/

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
});

/**************************/
/* A LINKS + BUTTON HOVER */
/**************************/

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
    cursor.textContent = 'go';
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
    cursor.textContent = '';
  });
})

button.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
    cursor.textContent = 'copy';
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
    cursor.textContent = '';
  });
})

/*************/
/* WORK HOVER */
/*************/

work.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover-work');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover-work');
  });
})

/********************/
/* WORK ITEMS HOVER */
/********************/

workOne.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover-work-1');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover-work-1');
  });
})

workTwo.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover-work-2');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover-work-2');
  });
})

workThree.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover-work-3');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover-work-3');
  });
})

workFour.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover-work-4');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover-work-4');
  });
})






