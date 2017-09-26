<!DOCTYPE html>
<html>
<head>
	<title>Labyrinth | hathix games</title>
	
	<style type="text/css">
		body{
			font-family: "Lao UI",Calibri,"Trebuchet MS",Helvetica,Arial,Verdana,sans-serif;
		}
		#stuff{
			width: 450px;
		}
		#field{
			border-collapse: collapse;
			background-color: #FFF;
		}
		
		#field td{
			/*border: 1px solid #000;*/
			width: 29px;
			height: 29px;
			text-align: center;
		}
		
		#buttons{
			width: 150px;
			text-align: center;
		}
		
		.up{
			margin-left: auto;
			margin-right: auto;
		}
		.down{
			margin-left: auto;
			margin-right: auto;
		}
		.left{float: left;}
		.right{float: right;}
		div#leftdiv{
			/*not the button, the actual div*/
			float: left;
		}
		div#rightdiv{
			float: right;
			width: 200px;
		}
		
		div#advice{
			width: 250px;
		}
		
		h1#msgheader{			
			font-size: 120%;		
		}
		h1#invheader{
			font-size: 120%;
		}
		div#messages{
			min-height: 50px;
		}
		
		img#yourpic{
			height: 25px;
		}
		
		div#inventory img{
			vertical-align: middle;
		}
	</style>
	<script type="text/javascript" src="script.js"></script>

</head>
<body onload="init();start(false)" onkeypress="moveWithLetter(event)">
<div id="stuff">
	<div id="rightdiv">
		Your Moves: <span id="moves"></span>
		<h1 id="msgheader">Messages</h1>
			<div id="messages">Eh?</div>
		
		<h1 id="invheader">Inventory</h1>
			<div id="inventory"></div>
	</div>
	<div id="leftdiv">
	<table id="field">
		<tr>
			<td id="00"></td>
			<td id="01"></td>
			<td id="02"></td>
			<td id="03"></td>
			<td id="04"></td>
			<td id="05"></td>
			<td id="06"></td>
		</tr>
		<tr>
			<td id="10"></td>
			<td id="11"></td>
			<td id="12"></td>
			<td id="13"></td>
			<td id="14"></td>
			<td id="15"></td>
			<td id="16"></td>
		</tr>
		<tr>
			<td id="20"></td>
			<td id="21"></td>
			<td id="22"></td>
			<td id="23"></td>
			<td id="24"></td>
			<td id="25"></td>
			<td id="26"></td>
		</tr>
		<tr>
			<td id="30"></td>
			<td id="31"></td>
			<td id="32"></td>
			<td id="33"></td>
			<td id="34"></td>
			<td id="35"></td>
			<td id="36"></td>
		</tr>
		<tr>
			<td id="40"></td>
			<td id="41"></td>
			<td id="42"></td>
			<td id="43"></td>
			<td id="44"></td>
			<td id="45"></td>
			<td id="46"></td>
		</tr>
		<tr>
			<td id="50"></td>
			<td id="51"></td>
			<td id="52"></td>
			<td id="53"></td>
			<td id="54"></td>
			<td id="55"></td>
			<td id="56"></td>
		</tr>
		<tr>
			<td id="60"></td>
			<td id="61"></td>
			<td id="62"></td>
			<td id="63"></td>
			<td id="64"></td>
			<td id="65"></td>
			<td id="66"></td>
		</tr>		
	</table>
	
	<!--<div id="buttons">
		<img src="arrows.png" alt="Move around" style="border: none;" usemap="#arrowmap">
		<map name="arrowmap">
			<area shape="rect" coords="85,3,149,75" title="Up" onclick="move(-1,0)" onmouseover="this.style.cursor='pointer'">
			<area shape="rect" coords="154,76,233,143" title="Right" onclick="move(0,1)" onmouseover="this.style.cursor='pointer'">
			<area shape="rect" coords="85,134,149,222" title="Down" onclick="move(1,0)" onmouseover="this.style.cursor='pointer'">
			<area shape="rect" coords="3,76,80,143" title="Left" onclick="move(0,-1)" onmouseover="this.style.cursor='pointer'">
		</map>
	</div>
-->	
	<div id="advice"></div>
		<br><br><br>
		<input type="button" value="Go to level 1" onclick="curLevel = 5;start(false);">
		<input type="button" value="Skip to next level" onclick="skipLevel();">
	</div>
</div>
</body>
</html>