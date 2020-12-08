<template>
	<div class="flex flex-row w-7/12 py-10">
		<div class="w-96 flex flex-none justify-center items-start">
			<img
				:src="require(`@/assets/projects/${project}.png`)"
				ref="img"
				onerror="onImageError"
			/>
		</div>
		<div class="flex flex-col ml-7 text-left">
			<h4
				class="text-lg font-semibold text-gray-400 tracking-wide"
				style="font-family: 'Quicksand', sans-serif"
			>
				{{ time }}
			</h4>
			<div class="flex flex-row mt-1 items-start">
				<h2
					class="text-xl font-medium text-gray-700 tracking-wide"
					style="font-family: 'Quicksand', sans-serif"
				>
					{{ title }}
				</h2>
				<a
					:href="link"
					target="_blank"
					class="text-lg ml-3 pt-1 text-red-400 hover:text-red-300"
				>
					<fa :icon="['fas', 'external-link-alt']"></fa>
				</a>
			</div>
			<p
				class="text-lg font-normal mt-3 text-gray-600 leading-tight tracking-normal"
				style="font-family: 'Quicksand', sans-serif"
			>
				{{ desc }}
			</p>
			<ul class="flex mt-5 flex-wrap tracking-wide">
				<li :key="tool.id" v-for="tool in tools">
					<div
						class="py-1 px-3 mb-2 mr-2 rounded-md border border-yellow-400 text-yellow-400 font-semibold text-xs"
						style="font-family: 'Quicksand', sans-serif"
					>
						{{ tool }}
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { ref } from "vue";

export default {
	name: "ProjectCard",
	props: {
		project: String,
	},
	data: () => ({}),
	beforeCreate() {
		const contents = require(`@/assets/projects/${this.project}.js`)
			.contents;
		this.time = contents.time;
		this.title = contents.title;
		this.link = contents.link;
		this.desc = contents.desc;
		this.tools = contents.tools;
	},
	setup() {
		const count = ref(0);

		const increment = () => {
			count.value++;
		};

		return {
			count,
			increment,
		};
	},
	methods: {
		onImageError() {
			console.log("firing onImageError");
			this.$refs.img.src = require(`@/assets/projects/default.png`);
		},
	},
};
</script>

<style scoped>
</style>
