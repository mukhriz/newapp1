/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  Back */
    $(document).on("click", ".uib_w_9", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  .uib_w_1 */
    $(document).on("click", ".uib_w_1", function(evt)
    {
         /*global activate_page */
         activate_page("#info"); 
         return false;
    });
    
        /* button  Start */
    $(document).on("click", ".uib_w_12", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($(".uib_w_1"));  
         return false;
    });
    
        /* button  Gallery */
    $(document).on("click", ".uib_w_2", function(evt)
    {
         /*global activate_page */
         activate_page("#gallery"); 
         return false;
    });
    
        /* button  Text */
    $(document).on("click", ".uib_w_3", function(evt)
    {
         /*global activate_page */
         activate_page("#Text"); 
         return false;
    });
    
        /* button  .uib_w_24 */
    $(document).on("click", ".uib_w_24", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  .uib_w_21 */
    $(document).on("click", ".uib_w_21", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  .uib_w_2 */
    $(document).on("click", ".uib_w_2", function(evt)
    {
         /*global activate_page */
         activate_page("#aboutus"); 
         return false;
    });
    
        /* button  .uib_w_5 */
    $(document).on("click", ".uib_w_5", function(evt)
    {
         /*global activate_page */
         activate_page("#googlechart"); 
         return false;
    });
    
        /* button  .uib_w_4 */
    $(document).on("click", ".uib_w_4", function(evt)
    {
         /*global activate_page */
         activate_page("#video"); 
         return false;
    });
    
        /* button  .uib_w_11 */
    $(document).on("click", ".uib_w_11", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  .uib_w_16 */
    $(document).on("click", ".uib_w_16", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  .uib_w_9 */
    $(document).on("click", ".uib_w_9", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  .uib_w_15 */
    $(document).on("click", ".uib_w_15", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  .uib_w_19 */
    $(document).on("click", ".uib_w_19", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  .uib_w_21 */
    $(document).on("click", ".uib_w_21", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  .uib_w_6 */
    $(document).on("click", ".uib_w_6", function(evt)
    {
         /*global activate_page */
         activate_page("#findus"); 
         return false;
    });
    
        /* button  .uib_w_25 */
    $(document).on("click", ".uib_w_25", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  .uib_w_7 */
    $(document).on("click", ".uib_w_7", function(evt)
    {
        document.location.href = 'tel:+60132498282';
        /* your code goes here */ 
         return false;
    });
    
        /* button  .uib_w_28 */
    $(document).on("click", ".uib_w_28", function(evt)
    {
        alert("Look it pops up :D");
        /* your code goes here */ 
         return false;
    });
    
        /* button  .uib_w_29 */
    $(document).on("click", ".uib_w_29", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $(".uib_w_30").modal("toggle");  
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
