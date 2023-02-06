<template>
	<div>
		<div class="flex items-center justify-center h-screen mx-8">
			<FormKit
				type="form"
				submit-label="Register"
				:actions="false"
				@submit="signUpUser"
				:classes="{
					messages: classes.messages,
					message: classes.message,
				}">
				<div class="mb-10" v-if="isSignUp">
					<h3 class="text-3xl">Welcome</h3>
					<p class="text-xs">Create an account to continue</p>
				</div>
				<div class="mb-10" v-else>
					<h3 class="text-3xl">Welcome Back</h3>
					<p class="text-xs">Log in to your account to continue</p>
				</div>
				<FormKit
					name="email"
					type="email"
					label="Email"
					validation="required|email"
					v-model="formEmail"
					:classes="classes" />
				<FormKit
					type="password"
					name="password"
					label="Password"
					validation="required|length:6"
					v-model="formPassword"
					:classes="classes" />
				<FormKit
					type="submit"
					:label="isSignUp ? 'Sign Up' : 'Sign In'"
					:classes="{
						outer: 'mb-2',
						input: `${
							isLoading
								? 'bg-appRed/70 transition-all cursor-wait'
								: 'bg-appRed'
						} font-bold font-inter w-full rounded-lg h-10`,
					}" />
				<FormKit
					type="button"
					class="mt-5"
					:label="isSignUp ? 'Sign Up with Github' : 'Sign In with Github'"
					@click="login('github')"
					:prefix-icon="githubIcon"
					:classes="{
						outer: 'mb-5',
						input: `${
							isLoading ? 'cursor-wait' : 'cursor-pointer'
						} bg-white font-bold text-black font-inter w-full rounded-lg h-10`,
					}" />
				<div class="mb-5 text-xs">
					{{ isSignUp ? 'Already got an account?' : 'Are you new to the app?' }}
					<span
						@click="isSignUp = !isSignUp"
						class="font-bold underline transition-all cursor-pointer"
						>{{ isSignUp ? 'Sign In' : 'Sign Up' }}</span
					>
				</div>
				<div v-if="validationError" :class="classes.message">
					{{ validationError }}
				</div>
			</FormKit>
		</div>
	</div>
</template>

<script setup lang="ts">
	const client = useSupabaseAuthClient();
	const user = useSupabaseUser();
	let formEmail = $ref('');
	let formPassword = $ref('');
	const isSignUp = $ref(true);
	let validationError = $ref('');
	let isLoading = $ref(false);

	const login = async (provider: 'github') => {
		isLoading = true;
		const { error } = await client.auth.signInWithOAuth({ provider });
		isLoading = false;
		if (error) {
			validationError = error.message;
		}
		navigateTo('/dashboard');
	};

	const signUpUser = async () => {
		isLoading = true;
		if (isSignUp) {
			const { data, error } = await client.auth.signUp({
				email: formEmail,
				password: formPassword,
			});
			if (error) {
				validationError = error.message;
			}
			if (data) {
				isLoading = false;
				validationError = '';
				navigateTo('/dashboard');
				formEmail = '';
				formPassword = '';
			}
		} else {
			const { data, error } = await client.auth.signInWithPassword({
				email: formEmail,
				password: formPassword,
			});
			if (error) {
				validationError = error.message;
			}
			if (data) {
				isLoading = false;
				validationError = '';
				navigateTo('/dashboard');
				formEmail = '';
				formPassword = '';
			}
		}
	};

	watchEffect(() => {
		if (user.value) {
			navigateTo('/dashboard');
		}
	});

	const githubIcon = `<svg class="inline w-5 h-5 mr-3" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`;

	const classes = {
		outer: 'mb-5',
		label: 'block mb-1 font-bold text-sm font-inter',
		inner:
			'max-w-md rounded-lg mb-1 overflow-hidden font-inter text-white border border-gray-400 focus-within:border-2',
		input:
			'w-full h-10 px-3 border-none bg-transparent font-inter text-base text-white placeholder-white',
		help: 'text-xs text-white font-inter',
		messages: 'list-none p-0 mt-1 mb-0 font-inter',
		message: 'text-appRed mb-1 text-xs font-inter',
	};
</script>
