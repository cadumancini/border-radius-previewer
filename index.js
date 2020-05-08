function changeBorderRadius() {
  const topLeft = document.getElementById('input_tl');
  const topRight = document.getElementById('input_tr');
  const bottomRight = document.getElementById('input_br');
  const bottomLeft = document.getElementById('input_bl');
  
  const box = document.getElementById('box-div');
  box.style.borderTopLeftRadius = topLeft.value + "px";
  box.style.borderTopRightRadius = topRight.value + "px";
  box.style.borderBottomRightRadius = bottomRight.value + "px";
  box.style.borderBottomLeftRadius = bottomLeft.value + "px";
}