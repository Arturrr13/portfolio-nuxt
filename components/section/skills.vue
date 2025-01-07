<template>
	<section class="section-wr">
		<h3 class="h3-style">
			{{ $t('skills.title') }}
			<span class="color-main">{{ $t('skills.titleY') }}</span>
		</h3>

		<div class="cards-wr">
			<div 
				class="cards-wr__el" 
				v-for="item in 
				[
					{ name: 'JavaScript', from:  Date.UTC(2021, 11)}, 
					{ name: 'TypeScript', from:  Date.UTC(2022, 3)},
					{ name: 'Vue.js', from:  Date.UTC(2022, 5)},
					{ name: 'Nuxt.js', from:  Date.UTC(2024, 0)}, 
					{ name: 'jQuery', from:  Date.UTC(2021, 11)},
					'Pinia', 'Vuex', 'i18n', 'HTML', 'Pug', 'CSS', 'SASS/SCSS', 'Bootstrap', 'Vuetify', 'Pixi.js', 'GSAP', 'Three.js', 'Leaflet', 'Chart.js', 'Vite', 'Webpack', 'Gulp', 'Figma', 'Photoshop', 'Node.js', 'Express.js', 'PostgreSQL', 'MySQL', 'MongoDB', 'WebSocket', 'Soket.io', 'JWT', 'Sequelize', 'oAuth2', 'GitHub', 'Gitlab'
				]" 
				:key="typeof item === 'object'? item.name : item"
			>
				<p class="cards-wr__el--icon">ICON</p>
				<p class="cards-wr__el--name tx-style-2">{{ typeof item === 'object'? item.name : item }}</p>
				<p class="cards-wr__el--time tx-style-3" v-if="typeof item === 'object'">{{ ((Date.now() - item.from) / (1000 * 3600 * 24 * 30.41 * 12)).toFixed(1) }}</p>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.cards-wr{
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(rem(150), auto));
	gap: rem(20) rem(15);
	padding-top: rem(30);

	&__el{
		@include flex(column, center, false, rem(10));
		background: $bg-g-2;
		padding: rem(15);
		border-radius: rem(10);

		&--icon{
			width: rem(50);
			height: rem(50);
			background: $tx-y;
		}
	}
}
</style>