/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'display': ['Viaoda Libre', 'ui-sans-serif', 'system-ui', '-apple-system', 'Roboto' ]
			},

			boxShadow: {
				'glass': '0px 4px 24px -1px rgba(0,0,0,0.25)'
			},

			colors: {
				primary: {
					0: '#000000',
					10: ' #2c1700',
					20: ' #492900',
					25: ' #583300',
					30: ' #683d00',
					35: ' #784700',
					40: ' #895100',
					50: ' #ab6701',
					60: ' #ca8023',
					70: ' #e99a3c',
					80: ' #ffb86c',
					90: ' #ffdcbc',
					95: ' #ffeee0',
					98: ' #fff8f4',
					99: '#fffbff',
				},
				white: {
					100: '#fff'
				},
				secondary: {
					0: '#000000',
					10: ' #410001',
					20: ' #5f150e',
					25: ' #6e2018',
					30: ' #7d2b22',
					35: ' #8d362c',
					40: ' #9c4237',
					50: ' #bb5a4d',
					60: ' #db7264',
					70: ' #fb8c7d',
					80: ' #ffb4a9',
					90: ' #ffdad5',
					95: ' #ffedea',
					98: ' #fff8f7',
					99: ' #fffbff,'
				},
				tertiary: {
					0: '#000000',
					10: ' #37003c',
					20: ' #521457',
					25: ' #5f2163',
					30: ' #6c2d70',
					35: ' #7a397c',
					40: ' #874589',
					50: ' #a35ea4',
					60: ' #bf77bf',
					70: ' #dd91dc',
					80: ' #faacf8',
					90: ' #ffd6fa',
					95: ' #ffebfa',
					98: ' #fff7fa',
					99: ' #fffbff',
				},
				neutral: {
					0: ' #000000',
					10: ' #1f1b16',
					20: ' #352f2b',
					25: ' #403a35',
					30: ' #4c4640',
					35: ' #58514c',
					40: ' #645d57',
					50: ' #7d7670',
					60: ' #988f89',
					70: ' #b3a9a3',
					80: ' #cfc5be',
					90: ' #ebe1d9',
					95: ' #faefe7',
					98: ' #fff8f4',
					99: ' #fffbff',
				},
				error: {
					0: '#000000',
					10:' #410002',
					20:' #690005',
					25:' #7e0007',
					30:' #93000a',
					35:' #a80710',
					40:' #ba1a1a',
					50:' #de3730',
					60:' #ff5449',
					70:' #ff897d',
					80:' #ffb4ab',
					90:' #ffdad6',
					95:' #ffedea',
					98:' #fff8f7',
					99:' #fffbff',
				},
			}
		},
	},
	plugins: [],
}
