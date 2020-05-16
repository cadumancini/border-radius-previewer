var advanced = false;

const topLeft = document.getElementById('input_tl');
const topRight = document.getElementById('input_tr');
const bottomRight = document.getElementById('input_br');
const bottomLeft = document.getElementById('input_bl');

const box = document.getElementById('box-div');

const adv_tl_rx = document.getElementById("adv-tl-rx");
const adv_tr_rx = document.getElementById("adv-tr-rx");
const adv_br_rx = document.getElementById("adv-br-rx");
const adv_bl_rx = document.getElementById("adv-bl-rx");
const adv_tl_ry = document.getElementById("adv-tl-ry");
const adv_tr_ry = document.getElementById("adv-tr-ry");
const adv_br_ry = document.getElementById("adv-br-ry");
const adv_bl_ry = document.getElementById("adv-bl-ry");

function changeBorderRadius() {
  
  box.style.borderRadius = "";
  box.style.borderTopLeftRadius = topLeft.value + "px";
  box.style.borderTopRightRadius = topRight.value + "px";
  box.style.borderBottomRightRadius = bottomRight.value + "px";
  box.style.borderBottomLeftRadius = bottomLeft.value + "px";
}

function copyToClipboard() {
  
  var textArea = document.createElement("textarea");

  if(advanced) {
    textArea.value = "border-radius: " + adv_tl_rx.value + "% " + 
                              adv_tr_rx.value + "% " + 
                              adv_br_rx.value + "% " + 
                              adv_bl_rx.value + "% / " + 
                              adv_tl_ry.value + "% " + 
                              adv_tr_ry.value + "% " + 
                              adv_br_ry.value + "% " + 
                              adv_bl_ry.value + "%";
  } else {
    textArea.value = "border-top-left-radius: " + topLeft.value + ";\n";
    textArea.value += "border-top-right-radius: " + topRight.value + ";\n";
    textArea.value += "border-bottom-right-radius: " + bottomRight.value + ";\n";
    textArea.value += "border-bottom-left-radius: " + bottomLeft.value + ";";
  }
  
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

function toggleAdvanced() {
  advanced = !advanced;
  enableInputs(advanced);

  if(advanced) {
    document.getElementById("footer").style.visibility = "visible";
    changeBorderAdvanced();
  }
  else {
    document.getElementById("footer").style.visibility = "hidden";
    changeBorderRadius();
  }
}

function enableInputs(enable) {
  topLeft.disabled = enable;
  topRight.disabled = enable;
  bottomRight.disabled = enable;
  bottomLeft.disabled = enable;
}

function changeBorderAdvanced() {
  box.style.borderTopLeftRadius = "";
  box.style.borderTopRightRadius = "";
  box.style.borderBottomRightRadius = "";
  box.style.borderBottomLeftRadius = "";

  const border = adv_tl_rx.value + "% " + 
                  adv_tr_rx.value + "% " + 
                  adv_br_rx.value + "% " + 
                  adv_bl_rx.value + "% / " + 
                  adv_tl_ry.value + "% " + 
                  adv_tr_ry.value + "% " + 
                  adv_br_ry.value + "% " + 
                  adv_bl_ry.value + "%";

  box.style.borderRadius = border;
}