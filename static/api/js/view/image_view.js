window._bd_share_main.F.module("view/image_view",function(e,t,i){var c=e("base/tangram").T,o=e("base/class").Class,s=e("conf/const"),n=e("view/view_base");t.View=o.create(function(l){function o(e){var t=e.target;!function(e){var t=!0;(l.bdMinHeight&&l.bdMinHeight>e.offsetHeight||l.bdMinWidth&&l.bdMinWidth>e.offsetWidth||e.offsetWidth<100||e.offsetHeight<100)&&(t=!1);return t}(t)||(f.element=t,f.start())}function n(){f.abort()}function e(e){e&&function(e){if(l.bdCustomStyle){var t=document.createElement("link");t.href=l.bdCustomStyle,t.rel="styleSheet",t.type="text/css",t.onLoad=function(){e&&e()},document.getElementsByTagName("head")[0].appendChild(t)}else window._bd_share_main.F.use(["imgshare.css","share_style0_"+l.viewSize+".css"],function(){e&&e()})}(function(){(function(e){if("list"==l.viewType)for(var t={16:{lbl:53,pright:8,item:18},24:{lbl:57,pright:8,item:28},32:{lbl:61,pright:8,item:38}}[l.viewSize],i=Math.floor((e.offsetWidth-t.lbl-t.pright-10)/t.item),o=d.find(".bdimgshare-icon"),n=0,s=o.length-1;n<s;n++)n<i-1?c(o[n]).show():c(o[n]).hide();var a={width:d.offsetWidth,height:d.offsetHeight},r={width:e.offsetWidth,height:e.offsetHeight},h=function(e,t,i){return"list"==l.viewType?{top:e.top+("bottom"==l.viewPos?t.height-i.height:0),left:e.left}:"collection"==l.viewType?{top:e.top+(-1<l.viewPos.toLowerCase().indexOf("bottom")?t.height-i.height-5:5),left:e.left+(-1<l.viewPos.toLowerCase().indexOf("left")?5:t.width-i.width-5)}:{top:e.top+("bottom"==l.viewPos?t.height-i.height:0),left:e.left+(t.width-i.width)}}(c(e).offset(),r,a),f={position:"absolute",top:h.top+"px",left:h.left+"px"};"list"==l.viewType&&(f.width=r.width+"px"),d.css(f)})(e),d.show(),t=!1,i=e})}var r=this,h="bdimgshare_"+(new Date).getTime(),d=null,t=!1,i=null,f=new function(e){var t=!1,i=!1;this.clearAbort=function(){i=i&&clearTimeout(i)},this.start=function(){i=i&&clearTimeout(i),t=t||setTimeout(function(){e.startFn&&e.startFn(),t=!1},e.time)},this.abort=function(){t=t&&clearTimeout(t),i=i||setTimeout(function(){e.abortFn&&e.abortFn(),i=!1},e.time)}}({time:200,startFn:function(){e(f.element)},abortFn:function(){t||d.hide()}});r.render=function(e){var i;i=l.tag||"",c("img").each(function(e,t){if(!i||c(t).attr(s.CONFIG_TAG_ATTR)==i){if(1==c(t).attr("data-bd-imgshare-binded"))return;c(t).on("mouseenter",o).on("mouseleave",n),c(t).attr("data-bd-imgshare-binded",1)}}),function(){var e=["<div id='#{id}' class='sr-bdimgshare sr-bdimgshare-#{type} sr-bdimgshare-#{size} sr-bdimgshare-#{color}' style='height:#{height}px;line-height:#{lineHeight}px;font-size:#{fontSize}px;width:#{width}px;display:none;'>","<div class='bdimgshare-bg'></div>","<div class='bdimgshare-content bdsharebuttonbox bdshare-button-style#{style}-#{size}'>","<label class='bdimgshare-lbl'>#{text}</label>","#{list}","</div>","</div>"].join(""),i="<a href='#' onclick='return false;' class='bds_#{icon}' data-cmd='#{icon}' hidefocus></a>",t="list"==l.viewType,o=[];t&&c.each(l.viewList,function(e,t){o.push(c.string(i).format({icon:t}))}),o.push(c.string(i).format({icon:"more"}));var n={16:"36",24:"42",32:"48"},s={16:"33",24:"39",32:"45"},a=c.string(e).format({id:h,text:l.viewText||(t?"图片分享":"分享"),type:l.viewType,style:l.viewStyle,size:l.viewSize,color:l.viewColor,width:t?"auto":{16:"60",24:"71",32:"82"}[l.viewSize],height:(t?n:s)[l.viewSize],lineHeight:(t?n:s)[l.viewSize]-10,fontSize:{16:"12",24:"14",32:"14"}[l.viewSize],list:o.join("")});c("body").insertHTML("beforeEnd",a),r._entities=d=c("#"+h),d.on("mouseleave",function(){f.abort()}).on("mouseenter",function(){f.clearAbort()})}()},r._init=function(){},r._keepBarVisible=function(){f.clearAbort(),t=!0},r._getImageSrc=function(){return i.src},r._distory=function(){d.remove();var i=l.tag||"";c("img").each(function(e,t){i&&c(t).attr(s.CONFIG_TAG_ATTR)!=i||(c(t).off("mouseenter",o).off("mouseleave",n),c(t).removeAttr("data-bd-imgshare-binded"))})}},n.ViewBase)});