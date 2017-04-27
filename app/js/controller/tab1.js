/**
 * Created by hlkjsen on 2017/4/26.
 */
app.controller('tab1',['$scope',function ($scope) {


    var myPlayer = videojs('video');
        videojs("video").ready(function(){
        myPlayer.play();
    });

    // (function(d, p){
    //     var a = new XMLHttpRequest(),
    //         b = d.body;
    //     a.open("GET", p, true);
    //     a.send();
    //     a.onload = function(){
    //         var c = d.createElement("div");
    //         c.style.display = "none";
    //         c.innerHTML = a.responseText;
    //         b.insertBefore(c, b.childNodes[0]);
    //     }
    // })(document, "dist/sprite.svg");
    //

}])