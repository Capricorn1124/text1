/**
 * Created by Shinelon on 2017/10/12.
 */
   $(function(){       setTimeout(function(){
       $("#loading").remove();
       $("#content").css("display","block");
   },1000);

       $(".typed").typed({
           strings: ["My Name is BaXueyu", "I'm a Web Designer", "Love Simplicity","Everything will be better"],
           typeSpeed: 100,
           backDelay: 800,
           loop: true
       });})();
    

