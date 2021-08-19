canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d");
rover_width=100
rover_height=90
rover_x=10
rover_y=10
marsarray=["img1.jpg","img2.jpg","img3.jpg","img4.jpg"]
background_img="mars.jpg"
rover_img="rover.png"
random_number=Math.floor(Math.random()*4)
background_img=marsarray[random_number]

function add(){
    background_img_tag=new Image();
    background_img_tag.onload=UploadBackgroud;
    background_img_tag.src=background_img

    rover_img_tag=new Image();
    rover_img_tag.onload=UploadRover;
    rover_img_tag.src=rover_img
}

function UploadBackgroud(){
    ctx.drawImage(background_img_tag,0,0,canvas.width,canvas.height)
}

function UploadRover(){
    ctx.drawImage(rover_img_tag,rover_x,rover_y,rover_width,rover_height)
}

window.addEventListener("keydown",My_Keydown)
function My_Keydown(e){
    key=e.keyCode
    console.log(key)
    if(key=="38"){
        console.log("up")
        Up()
    }
    if(key=="40"){
        console.log("down")
        Down()
    }
    if(key=="37"){
        console.log("left")
        Left()
    }
    if(key=="39"){
        console.log("right")
        Right()
    }
}

function Up() {
   if (rover_y>=0){
    rover_y -= 10
    console.log("when up arrow is pressed " + rover_x + "," + rover_y)
    UploadBackgroud()
    UploadRover()
   } 
}
function Down() {
    if (rover_y<=500){
     rover_y += 10
     console.log("when down arrow is pressed " + rover_x + "," + rover_y)
     UploadBackgroud()
     UploadRover()
    } 
 }
 function Left() {
    if (rover_x>=0){
     rover_x -= 10
     console.log("when left arrow is pressed " + rover_x + "," + rover_y)
     UploadBackgroud()
     UploadRover()
    } 
 }
 function Right() {
     if (rover_x<=700){
      rover_x += 10
      console.log("when right arrow is pressed " + rover_x + "," + rover_y)
      UploadBackgroud()
      UploadRover()
     } 
  }