window.onload=function(){
    const can=document.querySelector("canvas");
    if(can && can.getContext){
        ctx=can.getContext("2d");
        if(ctx){
            ctx.strokeStyle="blue";
            ctx.fillStyle="red";

            ctx.beginPath();
            ctx.moveTo(100,100);
            ctx.lineTo(150,150);
            ctx.lineTo(100,200);
            ctx.lineTo(50,150);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            ctx.fillRect(400,400,50,50);
            ctx.save();

           

            ctx.beginPath();
            ctx.moveTo(300,100);
            ctx.lineTo(350,400);
            ctx.lineTo(350,420);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle="blue"

            ctx.beginPath();
            ctx.moveTo(100,400);
            ctx.lineTo(150,450);
            ctx.stroke();


            ctx.restore();
            ctx.fillRect(300,300,100,100);
           



            

            
        }
    }else{
        alert("les canvas ne sont supporter")
    }
}