<script>
	import { Router, Link, Route } from "svelte-routing";
	import Quiz from "./Quiz.svelte"
	import Cart from "./Cart.svelte"
	import Video from "./Video.svelte"
	import CartCapture from "./CartCapture.svelte"

	export let url = "/";

	function flipIt(e) {
		document.querySelectorAll('nav > a > img').forEach(element => {
			element.removeAttribute("class");
			element.setAttribute("src", element.getAttribute("data-src"))
		});

		if (e.target.getAttribute("class") == "cardActive") {
			e.target.removeAttribute("class");
		} else {
			e.target.setAttribute("class", "cardActive")
			e.target.setAttribute("src", "https://sweetclipart.com/multisite/sweetclipart/files/check_mark_green.png")
		}
	}

</script>
<style>
	:global(nav > a > img) {
		width: 110px;
		transform: rotateY(180deg);
		transition: transform 0.4s;
		transform-style: preserve-3d;
	}

	:global(nav > a) {
			display: inline-block;
			text-align: center;
			border: solid 1px black;
			padding: 1rem;
		}

	:global(.cardActive) {
		transform: rotateY(0);
		min-height: 110px;
	}


</style>



<Router {url}>
	<nav>
		<Link to="/quiz">
			<img id="quiz" class="cardActive" on:click={() => flipIt(event)} alt="Quiz" data-src="https://www.clker.com/cliparts/j/i/d/Z/7/l/quiz-2-hi.png" src="https://sweetclipart.com/multisite/sweetclipart/files/check_mark_green.png" />
			<label for="quiz">Form Capture</label>
		</Link>
		<Link to="/cartcapture">
			<img id="cartcapture"  on:click={() => flipIt(event)} alt="cartcapture" data-src="https://purepng.com/public/uploads/large/purepng.com-shopping-cartshoppingcarttrolleycarriagebuggysupermarkets-1421526532323sy0um.png" src="https://purepng.com/public/uploads/large/purepng.com-shopping-cartshoppingcarttrolleycarriagebuggysupermarkets-1421526532323sy0um.png" />
			<label for="cartcapture">Form Capture + Cart Script</label>
		</Link>
		<Link to="/cart">
			<img id="cart" on:click={() => flipIt(event)} alt="Cart" data-src="https://purepng.com/public/uploads/large/purepng.com-shopping-cartshoppingcarttrolleycarriagebuggysupermarkets-1421526532323sy0um.png" src="https://purepng.com/public/uploads/large/purepng.com-shopping-cartshoppingcarttrolleycarriagebuggysupermarkets-1421526532323sy0um.png" />
			<label for="cart">Cart Script</label>
		</Link>
		
		<!-- <Link to="/video">
			<img id="video" on:click={() => flipIt(event)} alt="Video" data-src="https://purepng.com/public/uploads/large/purepng.com-shopping-cartshoppingcarttrolleycarriagebuggysupermarkets-1421526532323sy0um.png" src="https://purepng.com/public/uploads/large/purepng.com-shopping-cartshoppingcarttrolleycarriagebuggysupermarkets-1421526532323sy0um.png" />
			<label for="video">Video</label>
		</Link> -->
	</nav>
	<div>
		<Route path="/"><Quiz /></Route>
		<Route path="/cart" component={Cart} />
		<Route path="/video" component={Video} />
		<Route path="/cartcapture" component={CartCapture} />
	</div>
</Router>
