<template>
	<div class="flex flex-col w-full items-center divide-y divide-gray-100">
		<project-card project="thesis" />
		<project-card project="smm" />
		<project-card project="minidrum" />
		<project-card project="mtwsm" />
		<project-card project="budgetmap" />
		<project-card project="mementen" />
		<project-card project="memotube" />
	</div>
</template>

<script>
import ProjectCard from "./ProjectCard.vue";

export default {
	name: "ProjectList",
	components: {
		ProjectCard,
	},
};
</script>

<style scoped>
h3 {
	margin: 40px 0 0;
}

ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
