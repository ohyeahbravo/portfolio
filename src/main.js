import { createApp } from 'vue';
import App from './App.vue';
import './assets/styles/tailwind.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faArrowDown,
	faLink,
	faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faArrowDown, faLink, faExternalLinkAlt, faLinkedin, faGithub);

createApp(App)
	.component('fa', FontAwesomeIcon)
	.mount('#app');
