export default defineNuxtRouteMiddleware((to, from) => {
	const user = useSupabaseUser();

	// Function run on server side to check user session

	if (!user.value && to.path === '/dashboard') {
		return navigateTo('/signup');
	} else if (user.value && to.path === '/') {
		return navigateTo('/dashboard');
	} else if (user.value && to.path === '/signup') {
		return navigateTo('/dashboard');
	}
});
