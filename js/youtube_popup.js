;window.onload=function () {
    var youTubeSvg='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve" ><path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4  C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1  c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"/><polygon fill="#FFFFFF" points="20,31 20,17 32,24 "/></svg>';
    var loaderSvg='<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-double-ring"><circle cx="50" cy="50" ng-attr-r="{{config.radius}}" ng-attr-stroke-width="{{config.width}}" ng-attr-stroke="{{config.c1}}" ng-attr-stroke-dasharray="{{config.dasharray}}" fill="none" stroke-linecap="round" r="40" stroke-width="4" stroke="#ffffff" stroke-dasharray="62.83185307179586 62.83185307179586" transform="rotate(330 50 50)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></circle><circle cx="50" cy="50" ng-attr-r="{{config.radius2}}" ng-attr-stroke-width="{{config.width}}" ng-attr-stroke="{{config.c2}}" ng-attr-stroke-dasharray="{{config.dasharray2}}" ng-attr-stroke-dashoffset="{{config.dashoffset2}}" fill="none" stroke-linecap="round" r="35" stroke-width="4" stroke="#fff" stroke-dasharray="54.97787143782138 54.97787143782138" stroke-dashoffset="54.97787143782138" transform="rotate(-330 50 50)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;-360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></circle></svg>';
    var closeSvg='<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAH6SURBVGhD7Zk7TgMxFEXTgEQPNIg1QMdCIFW2wg5o2Af/jmXw7RBrYAEow7F5N0yUmWhixh4n8pEsT17s+96RSFIwKhQKhc1iOp2esE7tZVKqqtqm9zlrx0phOAnCvti/2cdWToJJPLBX7I/BMpJwQY6UMvSZSYhgGS6d2fAz7HVUGfIXJBzU3tl27dhqcHGcUobcVgnWvh0Lg5wkMuTFkxDkRZUhJ76EIDeKDPfTSQjye5XhXnoJQZ9eZDg/nISg379kODe8hKBvkAzv5yMh6L+SDPX8JARzdJLhdb4SgnmWyrDnLyGYq1GGNWGth4RgvgWZJrKWEMy5VGYtJASDTmzuOah/ro0E8zZ+sB3UZ18AWcOQrRIiexmGcxL3ftoa1Nyf08K3GVt+MgzlJO78lDWo+Q82j51+NAeFYdok3pyEHXPn8pVhiE4Sgrfyk6G5k7j109RokxAcyUeGpk7ixk9RwyT27FgrHB1ehmZtEq9dJARXhpOhSS8SgqvpZQh3Ete+Ww1qLyESgoh0MoRuxZAQRMWXISyqhCAyngwhTuLKp9ag9tynhCC6fxkuJ5UQtOhXhsuXvzF/UHuKKSFo1SjDOrIj3eHSIevDcpJJCFrOyfB8YW+tDpe9DCuphGB+L8MKlxCEHBAY9p+iHqD3sT0WCoXCxjAa/QDuHENY6TckiAAAAABJRU5ErkJggg==">';



    function Youtube_popup() {

        //items container
        this.items=[];
        this.imgItems=[];

        var tags=document.querySelectorAll("[data-youtube='true']");
        for (var i=0;i<tags.length;i++){

            if( tags[i].dataset['youtubeimg']==true){
                tags[i].style.cursor='pointer';
                tags[i].children[0].style.position='relative';
                var ico=document.createElement('span');
                ico.innerHTML=youTubeSvg;
                ico.setAttribute('style','width:70px;position:absolute; top:50%;left:50%;transform:translate(-50%,-50%);');
                tags[i].children[0].appendChild(ico);
                tags[i].children[0].addEventListener('mouseover',function () {
                    this.lastChild.style.width="90px";
                });
                tags[i].children[0].addEventListener('mouseleave',function () {
                    this.lastChild.style.width="70px";
                });
            }
            tags[i].addEventListener("click",this.popUp);




        }

        tags=document.querySelectorAll("[data-youtube-img]");

        for (var i=0;i<tags.length;i++){

            // this.imgItems.push(tags[i]);
            tags[i].setAttribute('src','//img.youtube.com/vi/'+ tags[i].getAttribute('data-youtube-img')+'/mqdefault.jpg');

        }

        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/player_api";
        document.body.appendChild(tag);

    }



    Youtube_popup.prototype.popUp=function () {

        var iFrameSize=youPU.setVideoSize();
        var canvas;
        var iFrameWrap;
        var self=this;
        var closePopUp;
        var loader;

        canvas=document.createElement('div');
        canvas.setAttribute('style','position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.9);z-index:9999;');

        iFrameWrap=document.createElement('div');
        iFrameWrap.setAttribute('id','ytplayer');
        iFrameWrap.setAttribute('style','position:absolute; top:50%;left:50%;transform:translate(-50%,-50%);');

        loader=document.createElement('span');
        loader.innerHTML=loaderSvg;
        loader.setAttribute('style','position:absolute; top:50%;left:50%;transform:translate(-50%,-50%);');

        closePopUp=document.createElement('span');
        closePopUp.innerHTML=closeSvg;
        closePopUp.setAttribute('style','position:absolute;top:10px;right:10px;cursor:pointer');

        canvas.appendChild(iFrameWrap);
        canvas.appendChild(closePopUp);
        canvas.appendChild(loader);
        canvas.addEventListener("click",function () {
            this.remove();
        });
        document.body.appendChild(canvas);

        var player;
        function onYouTubePlayerAPIReady() {
            player = new YT.Player('ytplayer', {
                height: iFrameSize.height,
                width: iFrameSize.width,
                videoId: self.getAttribute('data-video-id'),
                events: {
                    'onReady': onPlayerReady
                }
            });
        }
        function onPlayerReady(event) {
            event.target.playVideo();
            loader.remove();
        }
        onYouTubePlayerAPIReady();


    };
    Youtube_popup.prototype.setVideoSize=function () {

        var iFrameSize={};
        var currentW=document.documentElement.clientWidth;
        var currentH=document.documentElement.clientHeight;

        if(currentW>1920 && currentH>1080){
            iFrameSize.width=1920;
            iFrameSize.height=1080;
        }else if(currentW>1280 && currentH > 720 ){
            iFrameSize.width=1280;
            iFrameSize.height=720;
        }else if(currentW>854 && currentH > 480 ){
            iFrameSize.width=854;
            iFrameSize.height=480;
        }else if(currentW>640 && currentH > 360 ){
            iFrameSize.width=640;
            iFrameSize.height=360;
        }else if(currentW>426 && currentH > 240 ){
            iFrameSize.width=426;
            iFrameSize.height=240;
        }else{
            iFrameSize.width=320;
            iFrameSize.height=240;
        }

        return iFrameSize;
    };

    var youPU = new Youtube_popup();

};