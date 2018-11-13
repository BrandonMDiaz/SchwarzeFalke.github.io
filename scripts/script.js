/**
 * @Author: schwarze_falke
 * @Date:   2018-11-12T22:21:32-06:00
 * @Last modified by:   schwarze_falke
 * @Last modified time: 2018-11-13T00:29:13-06:00
 */
 // Get the modal
 var modal = document.getElementById('myModal');

 // Get the button that opens the modal
 var btn = document.getElementById("myBtn");

 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];

 // When the user clicks on the button, open the modal
 btn.onclick = function() {
     modal.style.display = "block";
 }

 // When the user clicks on <span> (x), close the modal
 span.onclick = function() {
     modal.style.display = "none";
 }

 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }

 var navigation = responsiveNav(".nav-collapse", {
   animate: true,                    // Boolean: Use CSS3 transitions, true or false
   transition: 284,                  // Integer: Speed of the transition, in milliseconds
   label: "Menu",                    // String: Label for the navigation toggle
   insert: "before",                  // String: Insert the toggle before or after the navigation
   customToggle: "",                 // Selector: Specify the ID of a custom toggle
   closeOnNavClick: false,           // Boolean: Close the navigation when one of the links are clicked
   openPos: "relative",              // String: Position of the opened nav, relative or static
   navClass: "nav-collapse",         // String: Default CSS class. If changed, you need to edit the CSS too!
   navActiveClass: "js-nav-active",  // String: Class that is added to <html> element when nav is active
   jsClass: "js",                    // String: 'JS enabled' class which is added to <html> element
   init: function(){},               // Function: Init callback
   open: function(){},               // Function: Open callback
   close: function(){}               // Function: Close callback
 });
 /* ------------------------------------ Click on login and Sign Up to  changue and view the effect
 ---------------------------------------
 */

 function cambiar_login() {
   document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";
 document.querySelector('.cont_form_login').style.display = "block";
 document.querySelector('.cont_form_sign_up').style.opacity = "0";

 setTimeout(function(){  document.querySelector('.cont_form_login').style.opacity = "1"; },400);

 setTimeout(function(){
 document.querySelector('.cont_form_sign_up').style.display = "none";
 },200);
   }

 function cambiar_sign_up(at) {
   document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
   document.querySelector('.cont_form_sign_up').style.display = "block";
 document.querySelector('.cont_form_login').style.opacity = "0";

 setTimeout(function(){  document.querySelector('.cont_form_sign_up').style.opacity = "1";
 },100);

 setTimeout(function(){   document.querySelector('.cont_form_login').style.display = "none";
 },400);


 }



 function ocultar_login_sign_up() {

 document.querySelector('.cont_forms').className = "cont_forms";
 document.querySelector('.cont_form_sign_up').style.opacity = "0";
 document.querySelector('.cont_form_login').style.opacity = "0";

 setTimeout(function(){
 document.querySelector('.cont_form_sign_up').style.display = "none";
 document.querySelector('.cont_form_login').style.display = "none";
 },500);

   }
