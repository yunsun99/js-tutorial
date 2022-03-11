const colors = ['white', '#3498db', '#9b59b6', '#f39c12'];

// 파랑 보라 노랑 순으로 커짐
// colors[0] = 파랑
// colors[1] = 보라
// colors[2] = 노랑

const body = document.querySelector('body');

function handleWindowResize() {
  let intViewportWidth = window.innerWidth;
  if (intViewportWidth < 700) {
    if (body.classList.contains('medium')) body.classList.remove('medium');
    body.classList.add('small');
  } else if (intViewportWidth < 1000) {
    if (body.classList.contains('large')) body.classList.remove('large');
    body.classList.add('medium');
  } else {
    body.classList.add('large');
  }
}

window.addEventListener('resize', handleWindowResize);
