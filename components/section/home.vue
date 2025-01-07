<script setup lang="ts">

</script>

<template>
	<section class="section-wr">
		<div class="content">
			<div class="main-info">
				<p class="main-info__hello tx-style-1">
					HELLO, MY NAME IS
				</p>
				<h1 class="h1-style">
					<span class="color-main">Artur</span> Lishchyshyn 
				</h1>
				<p class="tx-style-1">
					Frontend Developer
				</p>
				<p class="tx-style-2">
					From Khmelnytskyi, Ukraine. I have a lot of experience
					in the development cycle of dynamic web projects using Vue.js and Nuxt.js.
				</p>

				<div class="main-info__buttons">
					<button class="btn-style-1" type="button" title="Download Resume in .pdf format">
						Download Resume
					</button>
					<button class="btn-style-2" type="button" title="Download Resume in .pdf format">
						Download Resume
					</button>
				</div>

				<div class="main-info__socials">

				</div>
			</div>
		</div>
	</section>
</template>


<style lang="scss" scoped>
.main-info{
	@include flex(column, false, false, rem(20));

	&__buttons{
		@include flex(false, false, false, rem(20))
	}
}
</style>