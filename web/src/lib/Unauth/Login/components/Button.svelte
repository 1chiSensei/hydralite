<script lang="ts">
	import axios from 'axios';
	import Google from '../../../assets/Login/Google.svg';
	import Twitter from '../../../assets/Login/Twitter.svg';
	import Github from '../../../assets/Login/Github.svg';
	import Linkedin from '../../../assets/Login/Linkedin.svg';
	export let providerName: string;
	export let provider: string;
	let icon;
	if (provider == 'google') {
		icon = Google;
	} else if (provider == 'github') {
		icon = Github;
	} else if (provider == 'twitter') {
		icon = Twitter;
	} else {
		icon = Linkedin;
	}

	const onClickHandler = () => {
		axios.get(`http://localhost:8000/api/v1/auth/login?provider=${provider}`).then((val) => {
			let { url } = val.data;

			window.location.replace(url);
		});
	};
</script>

<button
	on:click={onClickHandler}
	class="w-full h-full bg-acrylic-100 px-4 py-3 flex items-center justify-center gap-3 rounded-lg cursor-pointer hover:bg-acrylic-200 duration-200 font-bold focus:border-iris-600 focus:ring focus:outline-none"
>
	<img src={icon} alt="" width="20em" />
	{providerName}
</button>
