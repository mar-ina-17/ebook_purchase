<script lang="ts">
	const { imgSrc, resumeText, altText } = $props();
</script>

<div class="container">
	<h5>{resumeText}</h5>
	<img src={imgSrc} alt={altText} />
	<a href="/" class="go-back">Go back</a>
</div>

<style>
	.container {
		display: grid;
		align-items: center;
		justify-items: center;
		margin-top: 10rem !important;
		padding: 20px;
		border: 1px solid gray;
		width: 300px;
		margin: auto;
		background-color: aliceblue;
		border-radius: 10px;
	}
	.go-back {
		padding: 7px;
		background-color: black;
		color: white;
		margin: auto;
	}
	img {
		width: 60px;
		height: 60px;
		margin: 15px;
	}
</style>
