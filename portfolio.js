var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

// Define the opentab function
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove('active-link');
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}

// Media Queries Javascript
var menus = document.getElementById('side-menu')

function openmenu(){
    menus.style.right = '0';
}  
function closemenu(){
    menus.style.right = '-200px';
}

// Google Sheets
const scriptURL = 'https://script.google.com/macros/s/AKfycbx22Zfryo7rp8QzsUbLKGLBTZUUZqMFDdmp8V23u8DUg3YWSM7ti2Hz9_qaJF-TYBkt/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = 'Message Sent!'
        setTimeout(function(){
            msg.innerHTML = ''
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  }) 