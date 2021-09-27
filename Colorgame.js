var numsquares=6;
var colors=generate6Color(numsquares);
var square=document.querySelectorAll(".square");
var pick=pickColor();
var colordisplay=document.querySelector("#code");
colordisplay.textContent = pick;
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetbutton=document.querySelector("#reset");
var mode=document.querySelectorAll(".mode");
for(var i =0;i<mode.length;i++)
{
  mode[i].addEventListener("click",function(){
   if( this.textContent === "Easy"){
     numsquares=3;
     }
     else {
      numsquares=6;
    }
    resets();

  });
}

function resets(){
  colors=generate6Color(numsquares);
  pick=pickColor();
  colordisplay.textContent=pick;
  message.textcontent="";
  reset.textContent="NEW COLORS";
  for(var i=0;i<square.length;i++)
  {
    if(colors[i]){
      square[i].style.display="block";
      square[i].style.background=colors[i];
    }
    else{
      square[i].style.display="none";
    }
  }
  h1.style.background="steelblue";
}
resetbutton.addEventListener("click",function(){
  colors=generate6Color(numsquares);
  pick=pickColor();
  colordisplay.textContent=pick;
  message.textcontent="";
  this.textContent="NEW COLORS";
  for(var i=0;i<square.length;i++)
  {
    square[i].style.background=colors[i];
  }
  h1.style.background="steelblue";
});

for(var i=0;i<square.length;i++) 
{
	square[i].style.background=colors[i];

	square[i].addEventListener("click",function(){
		var clickedcolor=this.style.backgroundColor;
		if(pick === clickedcolor){
			message.textContent="Correct";
			changecolor(pick);
			h1.style.background=pick;
      resetbutton.textContent="PLAY AGAIN! ";
		}
		else{
			this.style.backgroundColor="#232323";
			message.textContent="TRY AGAIN";
      resetbutton.textContent="New Colors";;

		}
	});
} 
function changecolor(colors)
{
	for(var i=0;i<square.length;i++)
	{
		square[i].style.background=colors;
	}
}            
  function pickColor(){
  	var random = Math.floor(Math.random()*colors.length);
  	return(colors[random]);
  } 
  function generate6Color(num){
  	var arr=[];
  	for(var i=0;i<num;i++)
  	{
        arr.push(randomColor());
  	}
  	return arr;

  } 
  function randomColor(){
  	var r= Math.floor(Math.random()*256);
  	var g= Math.floor(Math.random()*256);
  	var b= Math.floor(Math.random()*256);
  	return "rgb("+r+", "+g+", "+b+")";
  }        