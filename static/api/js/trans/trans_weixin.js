window._bd_share_main.F.module("trans/trans_weixin",function(n,i){function e(){var o;a.attr("data-url")!=c&&(d.html("正在加载"),c.length,o=c,window._bd_share_main.F.use("component/qrcode",function(n){var i=new n.QRCode(-1,n.QRErrorCorrectLevel.L);i.addData(o),i.make();var e=_(i.modules);u(e).appendTo(d.empty()),f(p),l(),a.attr("data-url",o)}))}function o(n){n=function(n){var i="10006-weixin-1-52626-6b3bffd01fdde4900130bc5a2751b6d1";if("off"===s.sign)return n;if("normal"!==s.sign)return n.replace(/#.*$/g,"")+"#"+i;var e=n.indexOf("#"),o=n.indexOf("?");return-1==e?n+(-1==o?"?":"&")+i:n.replace("#",(-1==o?"?":"&")+i+"#")}(n);var e=[];return u.each(n,function(n,i){/[^\x00-\xff]/.test(i)?e[n]=encodeURI(i):e[n]=i}),e.join("")}var a,r,d,t="bdshare_weixin_qrcode_dialog",c="",p=0,s={},u=n("base/tangram").T,_=(n("conf/const").URLS,function(n){var e=Math.round(200/n.length),o=['<table style="direction:ltr;border: 0; width:'+(p=(e=e<2?2:e)*n.length)+'px; border-collapse: collapse;background-color:#fff;margin:0 auto;" align="center">'],d="";return u.each(n,function(n,i){o.push("<tr>"),u.each(i,function(n,i){d='<td style="width:'+e+"px;height:"+e+"px;padding:0;margin:0;border:none;background:#"+(i?"000":"FFF")+'"></td>',o.push(d)})}),o.push("</table>"),o.join("")}),f=function(n){var i=(220<n?n:220)+20,e=u(".bd_weixin_popup_foot").height()+u(".bd_weixin_popup_head").height()+n+30;a.css({width:i,height:e})},h=function(){a.find(".bd_weixin_popup_close").click(b),u("body").on("keydown",function(n){27==n.keyCode&&b()}),u(window).resize(function(){l()})},l=function(){var n=u(window).scrollTop(),i=a.outerWidth(),e=a.outerHeight(),o=u(window).width(),d=(u(window).height()-e)/2+n,t=(o-i)/2;d=d<0?0:d,t=t<0?0:t,r.width(i).height(e).css({left:t,top:d}),a.css({left:t,top:d})},w=function(){a.show(),r.show(),l()},b=function(){a.hide(),r.hide()};i.run=function(n){c=o((s=n).url),window._bd_share_main.F.use("weixin_popup.css",function(){window._bd_share_main.F.use("component/pop_dialog",function(n){n.Dialog.hide()}),function(){if(a=u("#"+t),r=u("#"+t+"_bg"),a.length<1){var n=['<div id="'+t+'" class="bd_weixin_popup">','<div class="bd_weixin_popup_head">',"<span>分享到微信朋友圈</span>",'<a href="#" onclick="return false;" class="bd_weixin_popup_close">&times;</a>',"</div>",'<div id="'+t+'_qr" class="bd_weixin_popup_main"></div>','<div class="bd_weixin_popup_foot">打开微信，点击底部的“发现”，<br>使用“扫一扫”即可将网页分享至朋友圈。</div>',"</div>"].join("");r=u('<iframe id="bdshare_weixin_qrcode_dialog_bg" class="bd_weixin_popup_bg"></iframe>').appendTo("body"),a=u(n).appendTo("body"),h()}d=a.find("#"+t+"_qr"),w()}(),e()})}});