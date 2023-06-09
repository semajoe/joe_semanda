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
    menus.style.right = '0'
}
function closemenu(){
    menus.style.right = '-200px'
}