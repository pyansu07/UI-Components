// src/components/Input.js
function Input(props) {
    var input = document.createElement('input');
    input.type = props.type || 'text';
    input.placeholder = props.placeholder || '';
    input.value = props.value || '';
    input.oninput = props.onChange;
    input.className = 'basic-input';
  
    return input;
  }
  
  module.exports = Input;
  