$(function(){var e=new SineWaves({el:document.getElementById("waves"),speed:4,width:function(){return $(document).width()<768?2*$("#waves").parent().width():1.4*$("#waves").parent().width()},height:function(){return $("#waves").parent().height()},wavesWidth:"100%",ease:"Linear",waves:[{timeModifier:.25,lineWidth:20,amplitude:120,wavelength:200,segmentLength:1,type:"sine"}],initialize:function(){},resizeEvent:function(){var e=this.ctx.createLinearGradient(0,0,this.width,0);e.addColorStop(0,"rgba(51, 51, 51, 0.1)"),e.addColorStop(.5,"rgba(51, 51, 51, 0.1)"),e.addColorStop(1,"rgba(51, 51, 51, 0.1)");for(var t=-1,n=this.waves.length;++t<n;)this.waves[t].strokeStyle=e;t=void 0,n=void 0,e=void 0}}),t=$("#waves"),n=$(document).scrollTop(),i=$(document).scrollTop()+$(window).height(),o=t.offset().top+t.height(),d=t.offset().top;(n>o||i<d)&&(e.running=!1,e.update()),$(window).bind("scroll",function(){n=$(document).scrollTop(),i=$(document).scrollTop()+$(window).height(),o=t.offset().top+t.height(),d=t.offset().top,n>o||i<d?(e.running=!1,e.update()):(e.running=!0,e.update())})});