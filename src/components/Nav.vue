<template>
	<nav class="fixed flex flex-row z-10 bg-white w-full mt-0">
		<!-- left white box to hide the box shadow of the main div -->
		<div class="flex-none bg-white z-20 w-10" />
		<!-- main div -->
		<div
			:class="{ scrolled: isScrolledDown }"
			class="nav flex-grow flex items-center justify-between px-5 py-4 border-b"
		>
			<!-- name -->
			<a
				href="#top"
				class="text-2xl text-black"
				style="font-family: 'Karla', sans-serif"
			>
				Hiyeon Kim
			</a>
			<!-- link buttons -->
			<div class="text-2xl flex items-center space-x-7 text-gray-400">
				<a
					href="https://www.linkedin.com/in/hiyeonkim/"
					target="_blank"
					class="hover:text-blue-500"
				>
					<fa :icon="['fab', 'linkedin']"></fa>
				</a>
				<a
					href="https://github.com/ohyeahbravo"
					target="_blank"
					class="hover:text-gray-500"
				>
					<fa :icon="['fab', 'github']"></fa>
				</a>
				<a
					href="CV_HiyeonKim.pdf"
					target="_blank"
					class="text-lg font-bold hover:text-indigo-500"
					style="font-family: 'Quicksand', sans-serif"
				>
					CV
				</a>
			</div>
		</div>
		<!-- right white box to hide the box shadow of the main div -->
		<div class="flex-none bg-white z-20 w-10" />
	</nav>
</template>

<script>
export default {
	name: "Nav",
	data: () => ({
		isScrolledDown: false,
	}),

	beforeMount() {
		window.addEventListener("scroll", this.setIsScrolledDown);
	},

	methods: {
		setIsScrolledDown() {
			// set true, if the user is at the top of the page
			if (window.pageYOffset > 0 && !this.isScrolledDown)
				this.isScrolledDown = true;
			else if (window.pageYOffset <= 0 && this.isScrolledDown)
				this.isScrolledDown = false;
		},
	},
};
</script>

<style scoped>
.nav.scrolled {
	@apply shadow-xl;
	border-bottom: 0px;
}
</style>