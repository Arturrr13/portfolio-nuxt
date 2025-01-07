<template>
	<section class="section-wr">
		<div class="img-wr">
			<img src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp" alt="gigachad" loading="lazy">
		</div>

		<div class="info-wr">
			<p class="tx-style-1">
				About Me
			</p>
			<h3 class="h3-style">
				Fronted <span class="color-main">Developer</span>
			</h3>
			<p class="tx-style-2">
				More than 2.5 years of development experience. A conscientious person who pays attention to details. Very passionate about development, always willing and ready to learn new things/concepts. Adequately perceive criticism, work remarks, advice
			</p>

			<ul class="info-wr__list">
				<li class="info-wr__list--el tx-style-2">
					<span class="color-main">Date of birth:</span> 27.09.2001
				</li>
				<li class="info-wr__list--el tx-style-2">
					<span class="color-main">English level:</span> B1
				</li>
				<li class="info-wr__list--el tx-style-2">
					<span class="color-main">Hobbies:</span> Basketball, Football
				</li>
				<li class="info-wr__list--el tx-style-2">
					<span class="color-main">Travels:</span> Poland, Bulgaria, Romania, Czech Republic, Germany
				</li>
			</ul>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.section-wr{
	width: 100%;
	@include flex(false, false, space-between, rem(50));
}

.img-wr{
	width: rem(650);
	height: rem(780);
	border-radius: rem(30);
	border: rem(15) solid $tx-g;
	flex-shrink: 0;
 
	img{
		border-radius: rem(30);
	}
}

.info-wr{
	@include flex(column, false, false, rem(30));
	padding-top: rem(15);

	&__list{
		@include flex(column, false, false, rem(20));
	}
}

.info-wr__list--el{
	@include flex(false, false, false, rem(10));

	&::before{
		content: '';
		display: block;
		background: $tx-y;
		width: rem(20);
		height: rem(20);
	}
}
</style>