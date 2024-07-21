// src/components/Button.js
function Button(props) {
    var button = document.createElement('button');
    button.className = 'basic-button';
    button.innerText = props.children;
    button.onclick = props.onClick;
    return button;
  }
  
  module.exports = Button;
  