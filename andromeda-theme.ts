import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const andromedaTheme: CustomThemeConfig = {
	name: 'andromeda-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': 'var(--color-surface-700)',
		'--theme-font-color-dark': 'var(--color-surface-300)',
		'--theme-rounded-base': '0px',
		'--theme-rounded-container': '0px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': 'var(--color-surface-900)',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': 'var(--color-surface-900)',
		'--on-surface': 'var(--color-surface-300)',
		// =~= Theme Colors  =~=
		// primary | #1cc7ad
		'--color-primary-50': '221 247 243', // #ddf7f3
		'--color-primary-100': '210 244 239', // #d2f4ef
		'--color-primary-200': '198 241 235', // #c6f1eb
		'--color-primary-300': '164 233 222', // #a4e9de
		'--color-primary-400': '96 216 198', // #60d8c6
		'--color-primary-500': '28 199 173', // #1cc7ad
		'--color-primary-600': '25 179 156', // #19b39c
		'--color-primary-700': '21 149 130', // #159582
		'--color-primary-800': '17 119 104', // #117768
		'--color-primary-900': '14 98 85', // #0e6255
		// secondary | #c74ded
		'--color-secondary-50': '247 228 252', // #f7e4fc
		'--color-secondary-100': '244 219 251', // #f4dbfb
		'--color-secondary-200': '241 211 251', // #f1d3fb
		'--color-secondary-300': '233 184 248', // #e9b8f8
		'--color-secondary-400': '216 130 242', // #d882f2
		'--color-secondary-500': '199 77 237', // #c74ded
		'--color-secondary-600': '179 69 213', // #b345d5
		'--color-secondary-700': '149 58 178', // #953ab2
		'--color-secondary-800': '119 46 142', // #772e8e
		'--color-secondary-900': '98 38 116', // #622674
		// tertiary | #217fc8
		'--color-tertiary-50': '222 236 247', // #deecf7
		'--color-tertiary-100': '211 229 244', // #d3e5f4
		'--color-tertiary-200': '200 223 241', // #c8dff1
		'--color-tertiary-300': '166 204 233', // #a6cce9
		'--color-tertiary-400': '100 165 217', // #64a5d9
		'--color-tertiary-500': '33 127 200', // #217fc8
		'--color-tertiary-600': '30 114 180', // #1e72b4
		'--color-tertiary-700': '25 95 150', // #195f96
		'--color-tertiary-800': '20 76 120', // #144c78
		'--color-tertiary-900': '16 62 98', // #103e62
		// success | #88c86a
		'--color-success-50': '237 247 233', // #edf7e9
		'--color-success-100': '231 244 225', // #e7f4e1
		'--color-success-200': '225 241 218', // #e1f1da
		'--color-success-300': '207 233 195', // #cfe9c3
		'--color-success-400': '172 217 151', // #acd997
		'--color-success-500': '136 200 106', // #88c86a
		'--color-success-600': '122 180 95', // #7ab45f
		'--color-success-700': '102 150 80', // #669650
		'--color-success-800': '82 120 64', // #527840
		'--color-success-900': '67 98 52', // #436234
		// warning | #fed602
		'--color-warning-50': '255 249 217', // #fff9d9
		'--color-warning-100': '255 247 204', // #fff7cc
		'--color-warning-200': '255 245 192', // #fff5c0
		'--color-warning-300': '255 239 154', // #ffef9a
		'--color-warning-400': '254 226 78', // #fee24e
		'--color-warning-500': '254 214 2', // #fed602
		'--color-warning-600': '229 193 2', // #e5c102
		'--color-warning-700': '191 161 2', // #bfa102
		'--color-warning-800': '152 128 1', // #988001
		'--color-warning-900': '124 105 1', // #7c6901
		// error | #f92672
		'--color-error-50': '254 222 234', // #fedeea
		'--color-error-100': '254 212 227', // #fed4e3
		'--color-error-200': '254 201 220', // #fec9dc
		'--color-error-300': '253 168 199', // #fda8c7
		'--color-error-400': '251 103 156', // #fb679c
		'--color-error-500': '249 38 114', // #f92672
		'--color-error-600': '224 34 103', // #e02267
		'--color-error-700': '187 29 86', // #bb1d56
		'--color-error-800': '149 23 68', // #951744
		'--color-error-900': '122 19 56', // #7a1338
		// surface | #23262e
		'--color-surface-50': '222 222 224', // #dedee0
		'--color-surface-100': '211 212 213', // #d3d4d5
		'--color-surface-200': '200 201 203', // #c8c9cb
		'--color-surface-300': '167 168 171', // #a7a8ab
		'--color-surface-400': '101 103 109', // #65676d
		'--color-surface-500': '35 38 46', // #23262e
		'--color-surface-600': '32 34 41', // #202229
		'--color-surface-700': '26 29 35', // #1a1d23
		'--color-surface-800': '21 23 28', // #15171c
		'--color-surface-900': '17 19 23' // #111317
	}
};
