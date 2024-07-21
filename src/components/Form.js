// src/components/Form.js
function Form(props) {
    var form = document.createElement('form');
    form.className = 'basic-form';
    form.onsubmit = props.onSubmit;
  
    for (var i = 0; i < props.children.length; i++) {
      form.appendChild(props.children[i]);
    }
  
    return form;
  }
  
  module.exports = Form;
  