(function () {
   "use strict"

   var clickToOpen = function () {

      /**
      * Replace link, button and submit element label
      *
      * @param data – extension status data
      * @return void
      */

      this.rewrite = function(data){

         if(data.status && data.status==="on"){

            // Link alements
            var elements = document.getElementsByTagName('a')
            for (var i = 0; i < elements.length; i++) {
               var element = elements[i]
               element.innerHTML = "Click to open " + element.innerHTML
            }

            // Button alements
            var elements = document.getElementsByTagName('button')
            for (var i = 0; i < elements.length; i++) {
               var element = elements[i];
               element.innerHTML = "Click to " + element.innerHTML
            }

            // Input type button alements
            var elements = document.querySelectorAll('[type="submit"]')
            for (var i = 0; i < elements.length; i++) {
               var element = elements[i];
               element.innerHTML = "Click to " + element.innerHTML
            }
         }

      }

      chrome.extension.sendMessage({action: "status"}, this.rewrite)

   }

   var clickToOpen = new clickToOpen()

}())
