
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'rgb(var(--border) / <alpha-value>)',
				input: 'rgb(var(--input) / <alpha-value>)',
				ring: 'rgb(var(--ring) / <alpha-value>)',
				background: 'rgb(var(--background) / <alpha-value>)',
				foreground: 'rgb(var(--foreground) / <alpha-value>)',
				primary: {
					DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
					foreground: 'rgb(var(--primary-foreground) / <alpha-value>)'
				},
				secondary: {
					DEFAULT: 'rgb(var(--secondary) / <alpha-value>)',
					foreground: 'rgb(var(--secondary-foreground) / <alpha-value>)'
				},
				destructive: {
					DEFAULT: 'rgb(var(--destructive) / <alpha-value>)',
					foreground: 'rgb(var(--destructive-foreground) / <alpha-value>)'
				},
				muted: {
					DEFAULT: 'rgb(var(--muted) / <alpha-value>)',
					foreground: 'rgb(var(--muted-foreground) / <alpha-value>)'
				},
				accent: {
					DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
					foreground: 'rgb(var(--accent-foreground) / <alpha-value>)'
				},
				popover: {
					DEFAULT: 'rgb(var(--popover) / <alpha-value>)',
					foreground: 'rgb(var(--popover-foreground) / <alpha-value>)'
				},
				card: {
					DEFAULT: 'rgb(var(--card) / <alpha-value>)',
					foreground: 'rgb(var(--card-foreground) / <alpha-value>)'
				},
				sidebar: {
					DEFAULT: 'rgb(var(--sidebar-background) / <alpha-value>)',
					foreground: 'rgb(var(--sidebar-foreground) / <alpha-value>)',
					primary: 'rgb(var(--sidebar-primary) / <alpha-value>)',
					'primary-foreground': 'rgb(var(--sidebar-primary-foreground) / <alpha-value>)',
					accent: 'rgb(var(--sidebar-accent) / <alpha-value>)',
					'accent-foreground': 'rgb(var(--sidebar-accent-foreground) / <alpha-value>)',
					border: 'rgb(var(--sidebar-border) / <alpha-value>)',
					ring: 'rgb(var(--sidebar-ring) / <alpha-value>)'
				},
				bde: {
					void: 'rgb(var(--bde-void) / <alpha-value>)',
					frost: 'rgb(var(--bde-frost) / <alpha-value>)',
					deep: 'rgb(var(--bde-deep) / <alpha-value>)',
					raised: 'rgb(var(--bde-raised) / <alpha-value>)',
					haze: 'rgb(var(--bde-haze) / <alpha-value>)',
					mist: 'rgb(var(--bde-mist) / <alpha-value>)',
					cloud: 'rgb(var(--bde-cloud) / <alpha-value>)',
					violet: {
						lightest: 'rgb(var(--bde-violet-lightest) / <alpha-value>)',
						soft: 'rgb(var(--bde-violet-soft) / <alpha-value>)',
						light: 'rgb(var(--bde-violet-light) / <alpha-value>)',
						DEFAULT: 'rgb(var(--bde-violet) / <alpha-value>)',
						muted: 'rgb(var(--bde-violet-muted) / <alpha-value>)',
						dark: 'rgb(var(--bde-violet-dark) / <alpha-value>)',
						darker: 'rgb(var(--bde-violet-darker) / <alpha-value>)',
					},
					orange: {
						lightest: 'rgb(var(--bde-orange-lightest) / <alpha-value>)',
						soft: 'rgb(var(--bde-orange-soft) / <alpha-value>)',
						light: 'rgb(var(--bde-orange-light) / <alpha-value>)',
						DEFAULT: 'rgb(var(--bde-orange) / <alpha-value>)',
						dark: 'rgb(var(--bde-orange-dark) / <alpha-value>)',
						darker: 'rgb(var(--bde-orange-darker) / <alpha-value>)',
						darkest: 'rgb(var(--bde-orange-darkest) / <alpha-value>)',
					},
					green: {
						lightest: 'rgb(var(--bde-green-lightest) / <alpha-value>)',
						soft: 'rgb(var(--bde-green-soft) / <alpha-value>)',
						light: 'rgb(var(--bde-green-light) / <alpha-value>)',
						DEFAULT: 'rgb(var(--bde-green) / <alpha-value>)',
						dark: 'rgb(var(--bde-green-dark) / <alpha-value>)',
						darker: 'rgb(var(--bde-green-darker) / <alpha-value>)',
						darkest: 'rgb(var(--bde-green-darkest) / <alpha-value>)',
					},
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'fade-in-right': 'fade-in-right 0.5s ease-out forwards'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace'],
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
