var curLevel=0;
var levels=new Array();
var rloc;
var cloc;
var moves=0;
var yourMoves=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var key=false;
var red,blue,green;
var lantern;
var stick;
var numPlanks;
var treasure;
var x=0;
var y=0;
var inv=new Array();
var invpics=new Array();
function init(){
     levels[0]=	[['f','f',000,000,000,000,000,000,000,000,000,000,000,000,000],[000,'f',000,000,000,000,000,'T',000,000,000,000,000,000,000],[000,'f','f','f',000,000,000,'h',000,000,000,000,000,000,000],[000,000,000,'f',000,000,000,'h',000,000,000,000,000,000,000],[000,000,000,'f','f','f',000,'f','f','f',000,000,000,000,000],[000,000,000,'f',000,000,000,000,'f',000,000,000,000,000,000],[000,000,000,'f','f','f','f','f','f','f',000,000,000,000,000],[000,000,000,000,000,000,'f',000,000,000,'f','f','E',000,000],[000,000,000,000,000,000,'f',000,000,000,'f',000,000,000,000],[000,000,000,'f','f','f','f',000,'K',000,'f',000,000,000,000],[000,000,000,'f',000,000,'f',000,'f',000,'f',000,000,000,000],[000,000,000,'f',000,000,'f',000,'f',000,'f',000,000,000,000],[000,000,000,'f',000,000,'f',000,'f','f','f','f','f',000,000],[000,000,000,'f',000,000,000,000,'f',000,'f',000,000,000,000],[000,000,000,'f','f','f','f','f','f','f','f',000,000,000,000]];
     levels[1]=[["f","f",000,000,000,000,000,000,000,'T','h','h',000,000,000],[000,"f",000,000,000,000,000,000,000,000,000,'f',000,000,000],[000,"f","f",000,000,000,000,000,000,000,000,'f',000,000,000],[000,000,"f","f","f",000,000,000,000,000,000,'f',000,000,000],[000,000,'f',000,"L","f","f",000,000,000,'f','f','f','f',000],[000,000,'f',000,000,000,"f",000,000,000,'f',000,000,'f',000],['f','f','f',000,000,000,"f",000,000,000,'f',000,000,'f','f'],[000,000,'f',000,000,000,"f",000,000,000,'f',000,000,000,'f'],[000,000,'f',000,000,000,"f","f","f","f","f",000,000,000,'f'],[000,000,"f",000,'K',"f","f",000,'f',000,"f","f",000,000,'f'],[000,000,"f",000,"f",000,000,000,'f',000,000,"f",000,000,'f'],[000,'f',"f","f","f",000,000,000,'f',000,000,"f",000,000,'f'],[000,'f',000,000,000,000,000,000,'f',000,000,"f",000,000,'f'],[000,'f',000,000,000,000,000,000,'f',000,000,"f","f","E",'f'],[000,'f','f','f','f','f','f','f','f',000,000,000,000,000,000]];
     levels[2]=[['f','f','f','f','f',000,000,'f',000,000,000,000,000,000,000],['f',000,000,000,'f','f','f','f','b','f','f','f','f','f','T'],['f',000,000,000,'f',000,000,000,000,000,000,'f',000,000,000],['f','f','f','f','f',000,000,000,000,000,000,000,000,000,000],[000,'f',000,000,000,'R','f','f','f','f','f','f','f',000,000],[000,'f',000,000,000,'f',000,000,000,000,'f',000,'f',000,000],[000,'f',000,000,000,'f',000,000,000,000,'f',000,'f','f',000],[000,'f',000,000,000,'f','f','f',000,000,'f',000,000,'f',000],[000,'B','f','f','f','f',000,'f',000,000,'K','f',000,'f',000],[000,000,000,000,'f',000,000,'f',000,000,000,'f','f','f',000],[000,000,000,000,'f',000,000,'f',000,000,000,000,'f',000,000],[000,000,000,000,000,000,'f','f','f',000,000,000,'f',000,000],[000,000,000,000,000,000,'f',000,'f',000,000,000,'f',000,000],[000,000,'f','f','f','f','f',000,'f','f',000,'f','f','E',000],[000,000,'L',000,000,000,000,000,'r',000,000,000,000,000,000]];
     levels[3]=	[['f','f',000,000,000,000,000,000,'f',000,000,000,000,000,000],[000,'f',000,000,000,000,000,000,'f',000,000,000,000,000,000],[000,'f','f','f','f','f','f','f','f','f','f','G','f','f',000],[000,000,'f',000,'h',000,000,'f',000,000,000,'f',000,'f',000],[000,000,'g',000,'h',000,000,'f',000,000,000,'f',000,'f',000],[000,000,'f',000,'h',000,000,'f',000,000,000,'f',000,'f',000],[000,000,'f','h','T','h','h','f','f','f','f','S',000,'f',000],[000,000,'f',000,'h',000,000,'f',000,000,'f',000,000,'f',000],[000,000,000,000,'h',000,000,'f','f',000,'f',000,000,'f',000],[000,000,000,000,'h',000,000,000,'L',000,'G',000,000,'f',000],[000,000,000,000,'f','f','f',000,000,000,'s','f','f','f',000],[000,000,000,000,'E',000,'f',000,000,000,'f',000,000,000,000],[000,000,000,000,000,000,'f','K','f','f','f',000,000,000,000],[000,000,000,000,'f',000,'f',000,000,000,000,000,000,000,000],[000,000,000,000,'f','f','f',000,000,000,000,000,000,000,000]];
     levels[4]=[['f','f',000,000,000,000,000,000,000,000,000,000,000,000,000],[000,'f','f','f','f',000,000,000,000,000,000,000,000,000,000],[000,'f',000,000,'f','f','f','f','p',000,000,000,000,000,000],[000,'f',000,'S','B',000,000,000,000,000,000,'T',000,000,000],[000,'f',000,000,000,000,000,000,000,000,000,'h',000,000,000],[000,'f',000,000,000,000,'w','w','w','h','h','h',000,000,000],[000,'f','f','f','f','s','w','K','w','f','E','h',000,000,000],[000,000,'f',000,000,000,'w','w','w',000,000,000,000,000,000],[000,000,'f',000,000,000,000,000,000,000,000,000,'L',000,000],[000,000,'f',000,000,000,000,000,000,000,000,'f','f',000,000],[000,000,'f','f','f','f','f',000,000,000,'f','f',000,000,000],[000,000,000,000,000,000,'f','f','f','f','f',000,000,000,000],[000,000,000,000,'f','f','f',000,000,'f',000,000,000,000,000],[000,000,000,000,'f',000,'f',000,000,'p',000,000,000,000,000],[000,000,000,'b','f','f',000,000,000,000,000,000,000,000,000]];
     levels[5]=[['f','K','f','f','f','f','f','s','L','f','f','f','f','f',000],['f',000,000,000,000,000,'f',000,000,000,000,000,000,'f',000],['f','f',000,'f','S',000,'f',000,000,000,000,000,000,'f',000],[000,'f',000,'f',000,000,'f',000,000,000,000,000,000,'f',000],['f','f','f','f','f',000,000,000,000,000,'T','h','h','f','f'],['f',000,000,'f',000,'s','g','f',000,000,000,'f',000,'f',000],['f','S',000,'f',000,'f',000,'f',000,000,000,'f',000,'f',000],[000,000,000,'S','f','f',000,'s','f','f','f','f',000,'f',000],[000,'f','f','f',000,000,000,000,000,'f',000,'f','f','f',000],[000,'f',000,'f',000,000,'E','B','G','R',000,000,'f',000,000],['f','f',000,'f','f',000,000,000,000,'s',000,000,'f',000,000],['f',000,000,000,'f',000,000,000,000,'f',000,'f','S','f','f'],['f','s',000,000,'f',000,000,'f','f','f','f','b',000,'f',000],[000,'r',000,000,'f','f','S','f',000,000,000,000,000,000,000],[000,000,000,000,000,000,000,000,000,000,000,000,000,000,000]];
     levels[6]=[['f','f','f',000,000,'f','h','h','h','h','T',000,000,000,000],[000,000,'f',000,000,'f',000,000,000,000,'h',000,000,000,000],[000,000,'f','f','f','f','f','f','f','f','f','f','f',000,000],['p','f','f',000,000,000,'R',000,000,000,000,000,'f',000,000],[000,000,'f',000,'w','w','w','w','w','w',000,000,'f',000,000],[000,000,'f',000,'w','t','t','t','t','w',000,000,'f',000,000],[000,000,'f',000,'w','t','K','t','t','w',000,000,'h',000,000],['p','f','f',000,'w','t','t','t','t','w',000,000,'h',000,000],[000,'f',000,000,'w','t','t','t','t','w',000,000,'h',000,000],[000,'f',000,000,'w','w','w','w','w','w',000,000,'h',000,000],[000,'f','f','f',000,000,'R',000,000,000,000,000,'h',000,000],[000,000,000,'f',000,000,'f',000,000,000,000,000,'h',000,000],[000,'f','f','f',000,'f','f','f','f','f','f','f','f','G','E'],[000,'f',000,000,000,'f',000,000,000,000,000,000,000,000,000],[000,'r','h','h','h','g',000,000,000,000,000,000,000,000,000]];
     levels[7]=[['f','f','f','f',000,000,'f','f','f','f',000,000,000,000,'g'],[000,000,000,'f',000,000,'f',000,000,'f','f',000,'f','f','f'],['E','f',000,'f','f','f','f','f','f',000,'f',000,'f',000,000],[000,'f',000,'h',000,000,000,000,'f',000,'f','f','f','h','h'],[000,'f',000,'r','f','f','f','w','w','f','f',000,'f',000,000],[000,'K',000,'w','f','h','w','w','f','f',000,000,'f','f',000],[000,'f','h','T','w','f','w','w','f',000,000,000,000,'f',000],[000,'f',000,'f','w','f','f','w','f','f','w','f','f','f','f'],['f','f',000,'K','w','w','f','w','w','f','w','f',000,'f',000],['f',000,000,'R','B',000,'f','f','w','f','w','w',000,'f',000],['f',000,000,'f',000,000,000,'f','h','b','h','f',000,'f',000],['f',000,000,'f',000,000,000,000,000,000,'f','f',000,'f',000],['f','f','f','f',000,'f','f','f','f','f',000,'f','f','f','f'],[000,000,000,'f','f','f',000,'f','f',000,000,'f',000,000,'G'],[000,'E',000,000,000,000,000,000,'f','f','f','f',000,000,'L']];
     levels[8]=[['f',000,000,000,000,000,000,000,000,000,000,000,000,000,000],['p',000,'f','f','f','f','f','f',000,000,'f','f','f','f',000],['f',000,000,000,'f',000,000,'f','f','f','f',000,000,'f','L'],['f',000,'p','f','f',000,000,'f',000,000,'f','f',000,000,000],['f',000,000,000,000,'f','f','f','f',000,000,'f',000,000,000],['f',000,'t','w','f','f',000,'f',000,000,'f','f','f','f','f'],['f',000,'t',000,000,000,000,'f',000,000,000,'f',000,000,'f'],['f','t','t','w','f','f','f','f','f','h','h','s',000,000,'f'],[000,000,'t',000,000,000,'f','s','f','f','f','f','E',000,'f'],[000,000,'t','w','f',000,'f',000,000,'s',000,000,000,'f','f'],[000,000,000,000,'f',000,'f',000,000,'f',000,000,000,'f',000],[000,'S',000,'T','f',000,'f','f','f','f','f','f','f','f',000],[000,'K','f','f','f',000,'f',000,000,'f',000,'f',000,000,000],[000,'f',000,000,000,000,'h',000,000,'f','f','K',000,000,000],[000,'f','f','f','f','f','f',000,000,000,000,000,000,000,000]];
     levels[9]=[['t','t','t','t','t','t','s','t','L','t','s','s','t','t','t'],['t',000,000,'t',000,000,'s',000,000,'t',000,000,'t',000,'s'],['g',000,000,'G',000,000,'s',000,000,'t',000,000,'t',000,'b'],['t','t','s','t','t','t','t','t','t','t','s','s','s','s','t'],['t',000,000,'s',000,000,'s',000,000,'t',000,000,'s',000,'t'],['t',000,000,'s',000,000,'s',000,000,'t',000,000,'s',000,'t'],['t','t','t','s','t','t','s','t','t','t','t','t','t','t','t'],['t',000,000,'t',000,000,'t',000,000,'t',000,000,'s',000,'s'],['t',000,000,'t',000,000,'t',000,000,'t',000,000,'t',000,'t'],['t','t','t','r','t','s','R','t','t','t','t','t','s','s','s'],['t',000,000,'t',000,000,'K',000,000,'t',000,000,'h','T','s'],['t',000,000,'t',000,000,'s',000,000,'t',000,000,'h','h','s'],['t','s','t','s','t','t','t','t','t','t','s','s','t','s','s'],['t',000,000,'s',000,000,'t',000,000,'t',000,000,'t',000,000],['t','s','t','s','t','t','t','s','s','t','t','t','B','t','E']];
     levels[10]=[['f','f','f','f','f','f',000,000,'f','h','T','h',000,000,000],['w','f','E','w',000,'f','f','f','f',000,000,'f','f','f',000],[000,'f','w','w',000,'f',000,000,000,000,'f','f',000,'f',000],[000,'f','f','f',000,'f','f','f','f','f','f',000,'w','w','w'],[000,'w',000,'f',000,'f',000,000,'f',000,000,000,'w','g','w'],[000,000,000,'f','f','f',000,000,'f','f','f','f','f','w','w'],[000,000,000,'f',000,000,000,000,'f',000,000,'f',000,000,000],[000,'f','f','f',000,000,000,'f','f',000,000,'f','f','f','S'],[000,'G',000,'f','f','f','f','f',000,000,000,'f',000,000,000],[000,'s',000,'f',000,'f',000,000,000,'w',000,'f',000,000,'f'],[000,'K',000,'f',000,'f',000,000,000,000,000,'f',000,000,'f'],[000,000,000,'f','w','f','f','f','f','f','f','f','w',000,'f'],[000,000,000,'f',000,000,000,000,'f',000,000,'f','f','f','f'],[000,000,000,'f','f','f',000,000,'f',000,'w',000,'f',000,000],[000,000,000,000,000,000,'p','f','f',000,000,000,'f','w',000]];
     levels[11]=[['f','f',000,000,000,000,000,000,000,000,000,000,'p',000,000],[000,'f','f','f',000,'f','f','f','f','f','f','f','f','f',000],[000,'f',000,'f','f','f',000,000,'w','f','w',000,000,'f','S'],[000,'f',000,'f',000,000,'w','w','w','R','w','w','w',000,000],[000,'f',000,'f','w','w','w','w','w','t','t','w','w',000,000],[000,'f','f','f','w','t','t','t','w','w','t','t','w',000,000],[000,000,'f','w','w','t','E','t','w','w','t','T','t','w',000],[000,000,'f','f','w','t','t','t','w','w','w','t','w','w','w'],[000,'f',000,'f','w','w','s','w','w','w','w','w','w','w','w'],[000,'f',000,'f','f','w','t','w','w','w','w',000,000,000,000],[000,'f',000,000,'f','f','f','f','f','w','w',000,000,000,000],['K','f',000,000,000,000,000,000,'f','f','w','L',000,000,000],['f',000,000,000,000,000,000,'f','f','f','w','w','w','w',000],['f','f','f',000,'f','f','f','f',000,'f',000,000,000,'w','p'],[000,000,'f','f','f',000,000,000,000,'f','h','h','h','h','p']];
     levels[12]=[['f','f',000,000,000,000,000,000,'L',000,000,000,000,000,'S'],[000,'f',000,000,'w','w','w',000,'f',000,000,'f','f','f','f'],[000,'f','f','f','s','g','w',000,'f',000,000,'f',000,000,'f'],['w','s','w','f','w','w','w','f','f','f','f','f',000,'f','f'],['w','r','w','f',000,000,000,'f',000,000,000,000,000,'f',000],['w','w','w','f',000,000,000,'f',000,000,000,000,000,'f',000],[000,000,000,'f','f','f','f','f',000,000,'f','S',000,'f',000],[000,000,'w','s','w',000,000,'f',000,'f','f',000,'f','f','f'],[000,000,'w','b','w',000,000,'f','f','f',000,'E','f',000,'f'],[000,000,'w','w','w','f','f','f',000,'f',000,000,'f',000,'f'],[000,'p','f','f','f','f',000,'f',000,'f','f',000,'f','f','f'],[000,000,000,'f',000,'f','f',000,000,'w','f','f',000,000,'S'],[000,000,000,'f',000,000,'f','w','w','w','w','f','w',000,000],[000,'f','f','f','s',000,'w','w','K','R','G','B','w',000,000],[000,'S',000,000,'T',000,000,'w','w','w','w','w','w',000,000]];
     levels[13]=[['t','S','t','w','t','t','t','t','t','t','t','t','t','t','t'],[000,000,'t',000,'R',000,'G',000,'B',000,'R',000,'G',000,'B'],['r','s','t',000,'f',000,'f',000,'f',000,'f',000,'f',000,'f'],[000,000,'t',000,'f',000,'f','f','f',000,'f',000,000,000,'f'],['g','s','t',000,'f','f',000,000,'f',000,'f',000,'f','f','f'],[000,000,'p',000,000,'f',000,000,'f',000,'f',000,'f',000,'f'],['b','s','t',000,'f','f',000,'f','f','f','f','f','f',000,'f'],[000,000,'E',000,000,000,'f','f',000,'f',000,'f',000,'f','f'],[000,000,000,000,000,'f','f',000,000,000,000,000,'f','f','f'],[000,000,000,000,000,'f',000,000,'f','f','f',000,'f',000,'f'],['f','f','f','f',000,'f',000,'f','f',000,'f','f',000,'f',000],[000,'f',000,'f','f','f',000,'f',000,'f',000,000,'f','f','f'],[000,'f','f',000,000,'f','f','f','f',000,'f','f','f',000,'f'],[000,000,'f',000,'f','f',000,000,'f',000,000,'f',000,'f','f'],['f','K','f',000,000,'f','f',000,'f','f','f','f','f',000,'f']];
     levels[14]=[['t','t',000,000,000,'t','t','t','t','t',000,000,'L','t',000],[000,'t',000,'t','t','t',000,'t',000,'s','s','g',000,'t',000],[000,'t','t','t',000,'t',000,'p',000,000,000,000,000,'t',000],[000,000,'t',000,000,'t',000,'t','t','t',000,000,000,'t',000],['t','t','t','t',000,000,'w',000,000,'t','t','w','t','p','p'],['t',000,000,'t','t','w','S','w',000,000,000,000,000,000,000],['t','t',000,000,'t',000,'w',000,000,'t','t','t','t','t','t'],[000,000,'t',000,'t','t','t','G','t','c','c','c','c','c','E'],[000,000,'t',000,'t',000,000,000,000,'t','t','t','t','t','t'],[000,'t','t','t','t',000,000,000,000,000,000,000,000,000,000],['t','t',000,000,'t','t','t','t','t','t',000,'S',000,000,000],['t',000,'R','t','t',000,000,'w',000,'t','t','B','t','t','t'],['t',000,'b',000,'t','t',000,'w',000,'t',000,000,000,000,'t'],['t','t','G',000,000,000,000,'r',000,'t',000,'w','w','w','t'],[000,'t','t','w','p','p','w',000,000,'t','G','K','T','w','S']];
}
function start(restart){
     if(!restart){
          levels[curLevel].push([000,000,000,000,000,000,000,000,000,000,000,000,000,000,000],[000,000,000,000,000,000,000,000,000,000,000,000,000,000,000],[000,000,000,000,000,000,000,000,000,000,000,000,000,000,000]);
          levels[curLevel].splice(0,0,[000,000,000,000,000,000,000,000,000,000,000,000,000,000,000],[000,000,000,000,000,000,000,000,000,000,000,000,000,000,000],[000,000,000,000,000,000,000,000,000,000,000,000,000,000,000]);
          for(var i=0;
          i<levels[curLevel].length;
          i++){
               levels[curLevel][i].push(000,000,000);
               levels[curLevel][i].splice(0,0,000,000,000);
          }
     }
     var node=document.getElementById("inventory");
     while(node.firstChild){
          node.removeChild(node.firstChild);
     }
     set("33","<img src='you.png' id='yourpic' alt='X'>");
     if(curLevel>4)message("Welcome to level "+(curLevel-4)+"!");
     else message("Welcome to tutorial level "+(curLevel+1)+"!");
     moves=0;
     set("moves",moves);
     rloc=3;
     cloc=3;
     key=false;
     red=false;
     blue=false;
     green=false;
     lantern=false;
     stick=false;
     numPlanks=0;
     treasure=false;
     inv=[];
     invpics=[];
     look();
     if(curLevel==0)set("advice","<p>So you're just minding your business when, poof, a huge sinkhole appears in the middle of the street. You fall down the sinkhole and end up in a huge abandoned cavern. You're cold, wet, and hungry, and, more importantly, you have a dentist appointment in an hour.You have to get out of this place, and quick. Although getting some treasure while you're at it wouldn't be a bad idea.</p><p>Just one problem, though. There's a door at the end of each level of the cave,and it's locked. You have to find out how to unlock it in order to get to the next level. You just need a key. Preferably a big gold one. Use w, a, s,and d to move. Walk onto a key to pick it up. Once you have the key, walk over to the door and go to the next level.</p>");
     else if(curLevel==1)set("advice","<p>Well,this stinks.It just got colder and darker.It's like the visibility got cut due to the fog.Oh wait,it did.You'd do well to walk onto a lantern and pick it up.Maybe then you'd be able to see.</p>");
     else if(curLevel==2)set("advice","<p>Lately you've started noticing colorful locked doors everywhere.As if you didn't have to deal with enough doors already.You'll have to pick up a blue key in order to get through the blue door,and the same goes for the red.Did I notice a blue key over to the right? I dunno.</p>");
     else if(curLevel==3)set("advice","<p>For some reason,whoever was in this cave left a lot of big barrels lying around.Really big barrels.Good thing they also left huge sticks that look like they can destroy those barrels.Pick up a stick and walk next to a barrel,then use the drop-down menu to destroy it.</p>");
     else if(curLevel==4)set("advice","<p>You find yourself going deeper and deeper underground,and you find nature calling.Good thing there are plenty of water puddles around here.The puddles are pretty deep,though,so you can't just walk into them willy-nilly.Fortunately,you've found big planks of wood,which should be able to support your weight.Walk next to the water and try to put a plank down.</p>");
     else set("advice","");
}

function skipLevel(){
	curLevel++;
	start(false);
}

function look(){
     for(var i=-3;
     i<=3;
     i++){
          for(var j=-3;j<=3;j++){
               if((i==-3 || i==3)&& lantern==false && curLevel !=0)document.getElementById((3+i)+""+(3+j)).style.background="#DBDBDB url('haze.png')no-repeat right top";
               else if((j==-3 || j==3)&& lantern==false && curLevel !=0)document.getElementById((3+i)+""+(3+j)).style.background="#DBDBDB url('haze.png')no-repeat right top";
               else document.getElementById((3+i)+""+(3+j)).style.background=interpret((rloc+i),(cloc+j));
          }
     }
}
function interpret(a,b){
     var q=levels[curLevel][a][b];
     if(q==000){
          return "#603500 url('wall.png')no-repeat right top";
     }
     if(q=="f"){
          return "#C6903F url('ground.png')no-repeat right top";
     }
     if(q=="t"){
          return "#D8D8D8 url('tiles.png')no-repeat right top";
     }
     if(q=="c"){
          return "#D80000 url('redcarpet.png')no-repeat right top";
     }
     if(q=="L"){
          return "#C6903F url('lantern.png')no-repeat right top";
     }
     if(q=="s"){
          return "#C6903F url('barrel.png')no-repeat right top";
     }
     if(q=="w"){
          return "#BFE4FF url('water.png')no-repeat right top";
     }
     if(q=="p"){
          return "#C6903F url('wood.png')no-repeat right top";
     }
     if(q=="W"){
          return "#BFE4FF url('wood.png')no-repeat right top";
     }
     if(q=="S"){
          return "#C6903F url('stick.png')no-repeat right top";
     }
     if(q=="h"){
          return "#603500 url('wall.png')no-repeat right top";
     }
     if(q=="T"){
          return "#603500 url('wall.png')no-repeat right top";
     }
     if(q=="r"){
          return "#C6903F url('redkey.png')no-repeat right top";
     }
     if(q=="R"){
          return "#C6903F url('reddoor.png')no-repeat right top";
     }
     if(q=="b"){
          return "#C6903F url('bluekey.png')no-repeat right top";
     }
     if(q=="B"){
          return "#C6903F url('bluedoor.png')no-repeat right top";
     }
     if(q=="g"){
          return "#C6903F url('greenkey.png')no-repeat right top";
     }
     if(q=="G"){
          return "#C6903F url('greendoor.png')no-repeat right top";
     }
     if(q=="K"){
          return "#C6903F url('goldenkey.png')no-repeat right top";
     }
     if(q=="E"){
          return "#C6903F url('finaldoor.png')no-repeat right top";
     }
     return false;
}
function move(down,right){
     message("");
     var r=rloc+down;
     var c=cloc+right;
     var q=levels[curLevel][r][c];
     if(q==000)return;
     if(q=="c"){
          message("Red carpet,huh? Nice.");
     }
     if(q=="h"){
          message("That's funny,it's like you're going through a hidden passageway.");
     }
     if(q=="L"&& !(lantern)){
          message("You found a lantern!");
          levels[curLevel][r][c]='f';
          inventory("a lantern","lantern");
          lantern=true;
     }
     if(q=="S"){
          if(stick){
          message("As if one stick wasn't enough.");}else{message("You found a huge stick.Neato.");levels[curLevel][r][c]='f';
               inventory("a huge stick","stick");
               stick=true;
          }
     }
     if(q=="s"){
          if(stick){
               message("There's a barrel in the way.Don't you just feel like whacking it?");
          }
     else message("There's a huge barrel blocking your path.");return;}if(q=="p"){message("You found a plank of wood.Slightly moldy,but solid.");
	 levels[curLevel][r][c]='f';
          inventory("a plank of wood","wood");
          numPlanks++;
     }
     if(q=="w"){
          if(numPlanks>0){
               message("I think a plank of wood would let you cross here.");
               return;
          }
          else{
          message("The water's pretty deep.You should turn back.");return;}}if(q=="W"){message("You walk across your makeshift bridge.");}if(q=="T" && !(treasure)){message("You found the buried treasure!");levels[curLevel][r][c]='h';
               inventory("the buried treasure","treasure");
               treasure=true;
          }
          if(q=='r' && !(red)){
               message("You found a red key!");
               levels[curLevel][r][c]='f';
               inventory("a red key","redkey");
               red=true;
          }
          if(q=='g'&& !green){
               message("You found a green key!");
               levels[curLevel][r][c]='f';
               inventory("a green key","greenkey");
               green=true;
          }
          if(q=='b'&& !blue){
               message("You found a blue key!");
               levels[curLevel][r][c]='f';
               inventory("a blue key","bluekey");
               blue=true;
          }
          if(q=='R'){
               if(red){
                    message("You opened the red door.");
               }
               else{
                    message("You need the red key.");
                    return;
               }
          }
          if(q=='G'){
               if(green){
                    message("You opened the green door.");
               }
               else{
                    message("You need the green key.");
                    return;
               }
          }
          if(q=='B'){
               if(blue){
                    message("You opened the blue door.");
               }
               else{
                    message("You need the blue key.");
                    return;
               }
          }
          if(q=="K" && !key){
               set("messages","You found the golden key!");
               levels[curLevel][r][c]='f';
               inventory("a golden key","goldenkey");
               key=true;
          }
          if(q=="E"){
               if(key){
                    curLevel++;
                    set("messages","You win!");
                    start(false);
                    return;
               }
               else{
                    message("You need a  golden key.");
                    return;
               }
          }
          rloc+=down;
          cloc+=right;
          moves++;
          yourMoves[curLevel]++;
          set("moves",yourMoves[curLevel]);
          look();
     }
     function set(i,code){
          document.getElementById(i).innerHTML=code;
     }
     function message(msg){
          set("messages",msg);
     }
     function inventory(item,picname){
          inv.push(item);
          invpics.push(picname);
          var node=document.getElementById("inventory");
          while(node.firstChild)node.removeChild(node.firstChild);
          for(var i=0;
          i<inv.length;
          i++){
               var container=document.createElement("div");
               var image=document.createElement("img");
               image.src=invpics[i]+".png";
               container.appendChild(image);
               var text=document.createElement("span");
               text.appendChild(document.createTextNode(inv[i]));
               container.appendChild(text);
               if(inv[i]=="a plank of wood"){
                    container.innerHTML+="<select onchange='placeWood(this.selectedIndex)'><option>Place it:</option>"+"<option onclick='x=-1;y=0;'>Up</option>"+"<option onclick='x=1;y=0;'>Down</option>"+"<option onclick='y=-1;x=0;'>Left</option>"+"<option onclick='y=1;x=0;'>Right</option></select>";
				}
					else if(inv[i]=="a huge stick"){
						var choose=document.createElement("select");container.innerHTML+="<select onchange='hitBarrel(this.selectedIndex)'><option>Hit something:</option>"+"<option onclick='x=-1;y=0;'>Up</option>"+"<option onclick='x=1;y=0;'>Down</option>"+"<option onclick='y=-1;x=0;'>Left</option>"+"<option onclick='y=1;x=0;'>Right</option></select>";
					}
					
					node.appendChild(container);}}
					
			function remove(item){
				for(var i=0;i<inv.length;i++){
					if(inv[i]==item){
						inv.splice(i,1);invpics.splice(i,1);
						var node=document.getElementById("inventory");
						while(node.firstChild)node.removeChild(node.firstChild);
						for(var i=0;i<inv.length;i++){
							var container=document.createElement("div");
							var image=document.createElement("img");
							image.src=invpics[i]+".png";
							container.appendChild(image);
							var text=document.createElement("span");
							text.appendChild(document.createTextNode(inv[i]));
							container.appendChild(text);
						   
						   //refresh inventory
						   if(inv[i]=="a plank of wood"){
								container.innerHTML+="<select onchange='placeWood(this.selectedIndex)'><option>Place it:</option>"+"<option onclick='x=-1;y=0;'>Up</option>"+"<option onclick='x=1;y=0;'>Down</option>"+"<option onclick='y=-1;x=0;'>Left</option>"+"<option onclick='y=1;x=0;'>Right</option></select>";
							}
							else if(inv[i]=="a huge stick"){
								container.innerHTML+="<select onchange='hitBarrel(this.selectedIndex)'><option>Hit something:</option>"+"<option onclick='x=-1;y=0;'>Up</option>"+"<option onclick='x=1;y=0;'>Down</option>"+"<option onclick='y=-1;x=0;'>Left</option>"+"<option onclick='y=1;x=0;'>Right</option></select>";
							}
							
							node.appendChild(container);
						}
						return; //only delete one copy of the item
					}
				}
			}			
			   
			   function placeWood(index){var down=0;var right=0;switch(index){case 0:return;break;case 1:down=-1;break;case 2:down=1;break;case 3:right=-1;break;case 4:right=1;break;}var r=rloc+down;var c=cloc+right;if(levels[curLevel][r][c] !="w"){message("I don't think that would end too well.");
                    return;
               }
               levels[curLevel][r][c]="W";
               numPlanks--;
               remove("a plank of wood");
               message("You put down a plank of wood.That should hold.");
               look();
          }
          function hitBarrel(index){
               var down=0;
               var right=0;
               switch(index){
                    case 0:return;
                    break;
                    case 1:down=-1;
                    break;
                    case 2:down=1;
                    break;
                    case 3:right=-1;
                    break;
                    case 4:right=1;
                    break;
               }
               var r=rloc+down;
               var c=cloc+right;
               if(levels[curLevel][r][c] !="s"){
                    message("As much as I like hitting stuff,that's not a good idea.");
                    return;
               }
               levels[curLevel][r][c]="f";
               stick=false;
               remove("a huge stick");
               message("POW! That barrel is no more.Unfortunately,so is your stick.");
               look();
          }
          function bgcolor(i,color){
               document.getElementById(i).style.backgroundColor=color;
          }
          function moveWithLetter(e){
               var keynum;
               if(window.event)keynum=e.keyCode;
               else if(e.which)keynum=e.which;
               var entered=String.fromCharCode(keynum);
               if(entered=="w"){
                    move(-1,0);
               }
               else if(entered=="d"){
                    move(0,1);
               }
               else if(entered=="s"){
                    move(1,0);
               }
               else if(entered=="a"){
                    move(0,-1);
               }
          }
