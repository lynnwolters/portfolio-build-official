var cursor = document.querySelector('.cursor');
var a = document.querySelectorAll('a');
var button = document.querySelectorAll('button');

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






