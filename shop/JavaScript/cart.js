/**
 * Created by Shinelon on 2017/6/24.
 */
(function(){
    var aClose = document.getElementsByClassName("close");
    var aCartDetail = document.getElementsByClassName("cart-detail");
    var oCartMine = document.getElementById("cart-mine");
    for(var i=0; i<aClose.length; i++){
        aClose[i].index = i;//0 1
        aClose[i].onclick = function(){
            console.log(aClose[this.index]);
            // aCartDetail[this.index].style.display = "none";
            oCartMine.removeChild(aCartDetail[this.index]);
            for(var i=0; i<aClose.length; i++){
                aClose[i].index = i;
            }
        };
    }
})();