<template>
	<div class="root" :style="{ fontSize: height, marginBottom }">
		{{ optOne }}
		<div class="wrapper" :style="{ height: height, width: width }" @click="flip">
			<div class="switch" :style="{ height: height }" :class="{ flipped: state }"></div>
		</div>
		{{ optTwo }}
	</div>
</template>

<script>
export default {
	name: "FlipperSwitch",
	data() {
		return {
			state: false
		};
	},
	methods: {
		flip: function() {
			this.state = !this.state;
			this.$emit("flipped", this.state);
		}
	},
	props: {
		height: {
			type: String,
			default: "20px"
		},
		width: {
			type: String,
			default: "100px"
    },
    marginBottom: {
			type: String,
			default: "40px"
		},
		defaultState: Boolean,
		optOne: {
			type: String,
			default: ""
		},
		optTwo: {
			type: String,
			default: ""
		}
	},
	mounted() {
		this.state = this.defaultState;
	}
};
</script>

<style scoped>
.root {
	display: flex;
	align-items: center;
	justify-content: center;
  margin-bottom: 40px;
}

.wrapper {
	margin: 0px 10px;
	display: inline-block;
	width: 100px;
	height: 40px;
	border: 2px solid var(--highlight);
	border-radius: 15px;
	cursor: pointer;
}

.switch {
	position: relative;
	width: 50%;
	height: 40px;
	background: var(--highlight);
	margin-left: 0px;
	transition: all 0.2s ease;
	border-radius: 15px 0px 0px 15px;
}

.switch:hover {
	opacity: 0.8;
}

.flipped {
	margin-left: 50%;
	border-radius: 0px 15px 15px 0px;
}

@media screen and (max-width: 768px) {
	.root {
		justify-content: center;
	}
}
</style>
