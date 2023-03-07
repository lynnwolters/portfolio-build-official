var cursor = document.querySelector('.cursor');
var a = document.querySelectorAll('a');
var button = document.querySelectorAll('button');
var swapfietsHover = document.querySelectorAll('main section:nth-of-type(4) ul li:nth-of-type(1)');
var tablewareBySharonHover = document.querySelectorAll('main section:nth-of-type(4) ul li:nth-of-type(2)');
var cssArtHover = document.querySelectorAll('main section:nth-of-type(4) ul li:nth-of-type(3)');

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

swapfietsHover.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('swapfiets-hover');
    cursor.textContent = 'go';
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('swapfiets-hover');
    cursor.textContent = '';
  });
})

tablewareBySharonHover.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('tableware-by-sharon-hover');
    cursor.textContent = 'go';
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('tableware-by-sharon-hover ');
    cursor.textContent = '';
  });
})

cssArtHover.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('css-art-hover');
    cursor.textContent = 'go';
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('css-art-hover');
    cursor.textContent = '';
  });
})