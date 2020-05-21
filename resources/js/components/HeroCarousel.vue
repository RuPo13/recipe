<template>
            <section class="hero is-medium has-carousel">
			<div id="carousel-demo" class="hero-carousel">
				<div class="item-1">
					<!-- Slide Content -->
				</div>
				<div class="item-2">
					<!-- Slide Content -->
				</div>
				<div class="item-3">
					<!-- Slide Content -->
				</div>
			</div>
			<div class="hero-head"></div>
			<div class="hero-body"></div>
			<div class="hero-foot"></div>
		</section>
</template>		


		<script src="https://cdn.jsdelivr.net/npm/bulma-carousel@4.0.4/dist/js/bulma-carousel.min.js"></script>
		<script>
			bulmaCarousel.attach('#carousel-demo', {
				slidesToScroll: 1,
				slidesToShow: 4
			});
		</script>