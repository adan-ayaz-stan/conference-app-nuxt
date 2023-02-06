import { DefaultConfigOptions } from '@formkit/vue';
import { createAutoAnimatePlugin } from '@formkit/addons';
import { applicationIcons, ethereum } from '@formkit/icons';

const config: DefaultConfigOptions = {
	plugins: [createAutoAnimatePlugin()],
	icons: {
		...applicationIcons,
		ethereum,
	},
};

export default config;
