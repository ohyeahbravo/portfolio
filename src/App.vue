<template>
	<div class="flex flex-col">
		<Nav />
		<Intro />
		<ProjectList />
	</div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Intro from "./components/Intro.vue";
import ProjectList from "./components/ProjectList.vue";

export default {
	name: "App",
	components: {
		Nav,
		Intro,
		ProjectList,
	},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Karla:wght@600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lekton&display=swap");

#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
