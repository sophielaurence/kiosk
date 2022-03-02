// const form = document.querySelector('form');

// form.addEventListener('submit',function(e){
//   e.preventDefault();
//   alert('Form submitted. Thanks, ' + firstname.value + ' ' + lastname.value);
// })


if( document.querySelector('.page-login') ){

  const form = document.querySelector('.submit-names');
  const nameField = form.querySelector('.submit-names input');
  const btnSubmit = form.querySelector('.submit-names button');

  // initial form state
  form.reset();
  btnSubmit.disabled = true;

  btnSubmit.addEventListener('click',function(e){
    e.preventDefault();
    location.href = 'step1.html';
  })
  
  form.addEventListener('change',stateHandle);
  
  function stateHandle() {
    if(nameField.value === '') {
      btnSubmit.disabled = true;
    } else {
      btnSubmit.disabled = false;
    }
  }
  
}

if( document.querySelector('.page-newacc') ){

  const form = document.querySelector('.newaccform');
  const nameField = form.querySelector('.newaccform input');
  const btnSubmit = form.querySelector('.newaccform button');

  // initial form state
  form.reset();
  btnSubmit.disabled = true;

  btnSubmit.addEventListener('click',function(e){
    e.preventDefault();
    location.href = 'step1.html';
  })
  
  form.addEventListener('change',stateHandle);
  
  function stateHandle() {
    if(nameField.value === '') {
      btnSubmit.disabled = true;
    } else {
      btnSubmit.disabled = false;
    }
  }
  
}


// summary

let heading = document.querySelectorAll('h5');
let accordionContent = document.querySelector('.accordion-content');

heading.forEach(function(h){
  h.addEventListener('click',function(){
    if( h.classList.contains('curr') ){
      // if current selection is open, close accordion
      h.nextElementSibling.classList.remove('more');
      // and then remove current status
      h.classList.remove('curr');
    } else {
      // if current selection is not open
      // remove current class from all headings
      h.classList.remove('curr');
      // add class to the current selection
      h.classList.add('curr');
      // remove class from all accordion content
      accordionContent.classList.remove('more');
      // add class to the current accordion content
      h.nextElementSibling.classList.add('more');
    }
  })
})