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

function copyToClipboard() {
  const topLeft = document.getElementById('input_tl');
  const topRight = document.getElementById('input_tr');
  const bottomRight = document.getElementById('input_br');
  const bottomLeft = document.getElementById('input_bl');
  
  var textArea = document.createElement("textarea");
  textArea.value = "border-top-left-radius: " + topLeft.value + ";\n";
  textArea.value += "border-top-right-radius: " + topRight.value + ";\n";
  textArea.value += "border-bottom-right-radius: " + bottomRight.value + ";\n";
  textArea.value += "border-bottom-left-radius: " + bottomLeft.value + ";";
  
  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  document.execCommand("copy");
  document.body.removeChild(textArea);
  alert("Properties successfully copied to clipboard!");
}