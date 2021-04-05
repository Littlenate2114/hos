<link href="https://fonts.googleapis.com/css?family=Lato:300,400,900" rel="stylesheet">
<script>
	import { onMount } from 'svelte';
	let date = new Date();
	$: hour = date.getHours();
	$: min = date.getMinutes();
	let AMorPM = 'AP';
	
	onMount( () => {
		const interval = setInterval(() => {
			date = new Date();
			AMorPM = (hour >= 12) ? "PM" : "AM";
		}, 1000);
	});
</script>

<body id="body">
	<div class="time">
		<h1 id="time">{hour - 12}:{min}{AMorPM}</h1>
		<h1 id="msg">Welcome To HOS</h1>
	</div>
</body>