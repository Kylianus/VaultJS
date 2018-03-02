<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<title>JS</title>
</head>
<body>

<div id="header"></div>
<audio id="unlockAudio">
	<source src="audio/unlockAudio.mp3" type="audio/mpeg">
</audio>
<audio id="lockedAudio">
	<source src="audio/lockedAudio.mp3" type="audio/mpeg">
</audio>
<div id="mainContainer">

	<div id="unlocked">	</div>
	<div id="locked">	</div>

<button class="button" value="1" onclick="getValue(this)">1</button>
<button class="button" value="2" onclick="getValue(this)">2</button>
<button class="button" value="3" onclick="getValue(this)">3</button>

<div id="output"><a></a></div>
<div id="trueorfalse"></div>
<div id="counter">Won: 0 Lost:0</div>

</div>

<?php include 'inc/footer.php';?>

<script type="text/javascript" src="js/main.js"></script>
</body>
</html>
