<template>
	<section class="section-wr">
		<div class="content">
			<div class="content__lists" v-for="index in ['education', 'experience']" :key="index">
				<h3 class="h3-style">
					{{ $t(`${index}.title`) }}
				</h3>
	
				<div class="list" v-for="item in 3" :key="item">
					<details class="list__details" name="exclusive">
						<summary class="list__details--summary tx-style-1 color-white">
							<span class="tx-hover-anim" :data-content="$t(`${index}.list[${item-1}].name`)">
								{{ $t(`${index}.list[${item-1}].name`) }}
							</span>
						</summary>
					</details>
		
					<div class="list__info">
						<div>
							<span class="list__info--main tx-style-2">
								<span class="color-main">
									{{ $t(`${index}.list[${item-1}].profession`) }}
								</span>
								<span>
									{{ $t(`${index}.list[${item-1}].since`) + ' — ' + $t(`${index}.list[${item-1}].to`) }}
								</span>
							</span>
			
							<p class="list__info--add tx-style-3">
								{{ $t(`${index}.list[${item-1}].add`) }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>	
</template>

<style lang="scss" scoped>
.content{
	@include flex(false, flex-start, space-between, rem(50));
}

h3{
	padding-bottom: rem(40);
}

.list__details[open] + .list__info{
	grid-template-rows: 1fr;

	.list__info--main, .list__info--add{
		@include transform(100%, 0, .5s);
	}
}

.list{
	border: rem(1) solid;
	border-color: $tx-y $tx-y transparent transparent;

	&:last-child{
		border-bottom-color: $tx-y;
	}

	&__details{
		&[open] &--summary::after{
			content: "−";
			background: $bg-g;
			color: $tx-y;
		}

		&[open]:hover{
			.list__details--summary::after{
				background: $tx-y;
				color: $bg-g;
				scale: .85;
			}
		}
		

		&:hover{
			span::before {
    		    width: 100%;
    		    text-decoration: underline;
    		}

			.list__details--summary::after{
				background: $bg-g;
				color: $tx-y;
				scale: 1.15;
			}
		}

		&--summary{
			list-style: none;
			padding: rem(10) rem(10) rem(20) rem(10);
			position: relative;

			&::-webkit-details-marker{
				display: none;
			}

			&::after{
				transition: all .35s ease-in-out;
				content: "+";
				position: absolute;
				right: rem(-20);
				top: rem(-20);
				width: rem(40);
				height: rem(40);
				@include flex(false, center, center, false);
				@include text($bg-g, rem(35), 300, false);
				background: $tx-y;
				border: rem(1) solid $tx-y;
				border-radius: 50%;
			}
		}
	}

	&__info{
		padding: 0 rem(10);
		overflow: hidden;
		display: grid;
		grid-template-rows: 0fr;
		transition: grid-template-rows .35s ease-in-out;

		&--main{
			@include flex(false, center, space-between, false);
			font-style: italic;
		}

		&--add{
			padding: rem(10) 0;
		}

		div{
			min-height: 0;
		}
	}
}
</style>