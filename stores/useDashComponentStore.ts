import { defineStore } from 'pinia';

export const useDashComponentStore = defineStore('component', () => {
	let dashComponentValue = $ref<DashComponentType>('dash');

	const setDashComponentValue = (value: DashComponentType) => {
		dashComponentValue = value;
	};

	const getDashComponentValue = computed(() => dashComponentValue);

	return $$({
		setDashComponentValue,
		getDashComponentValue,
	});
});

export type DashComponentType = 'create' | 'edit' | 'dash' | 'details';
