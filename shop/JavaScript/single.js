(function(){
    var oSmallpic=document.getElementById("small-pic");
    var aImg=oSmallpic.getElementsByTagName("img");
    var oBigpic=document.getElementById("big-pic");
    var aIMg=oBigpic.getElementsByTagName("img");
    var oLeft=document.getElementById("left");
    var oRight=document.getElementById("right");
    var nowIndex=0;
    for(var i=0;i<aImg.length;i++){
        aImg[i].index=i;
        aImg[i].onclick=function(){
            nowIndex=this.index;
            changeImg();
        }
    }
    oLeft.onclick=oRight.onclick=function(){
        if(this===oLeft){
            nowIndex--;
            if(nowIndex==-1){
                nowIndex=aImg.length-1;
            }

        }
        else{
            nowIndex++;
            if(nowIndex==aImg.length){
                nowIndex=0;
            }
        }
     changeImg();
    };
         function changeImg(){

             aIMg[0].src=aImg[nowIndex].src;

             for(var i=0;i<aImg.length;i++){
                 aImg[i].className="";
             }
             aImg[nowIndex].className="select";

             var left=0;
             if(nowIndex==0){
                 left=0;
             }
             else{left=1;}
             animate(oSmallpic, {
                 left: -(aImg[0].offsetWidth + 10) * left
             });


         }
})();