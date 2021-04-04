<html lang="en" dir="ltr">

<head>
	<meta charset="utf-8">
	<link href="https://fonts.googleapis.com/css?family=Lato:300,400,900" rel="stylesheet">
</head>

<body id="body">
	<div class="time">
		<h1 id="time">HH:MMAP</h1>
		<h1 id="msg">Welcome To HOS</h1>
	</div>
</body>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script type="text/javascript">
	$(document).ready(function () {
		setInterval(function () {
			var d = new Date();
			var time = d.toLocaleString('en-US', {
				hour: 'numeric',
				minute: 'numeric',
				hour12: true
			})
			$("#time").text(time);
		}, 1000);
	});
</script>

</html>
