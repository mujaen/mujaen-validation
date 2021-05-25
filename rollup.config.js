import typescript from '@rollup/plugin-typescript';
import serve from "rollup-plugin-serve";

export default {
	input: 'src/js/app.ts',
	output: {
		file: 'src/js/app.js',
		format: 'cjs'
	},
	plugins: [
		typescript({lib: ["es5", "es6", "dom"], target: "es5"}),
		serve({
			open: true,
			verbose: true,
			contentBase: ["", "src"],
			host: "localhost",
			port: 3000,
		})
	]
};