import {heroui} from '@heroui/theme';
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(card|ripple).js"
  ],
	theme: {
		extend: {
			boxShadow: {
				'glow': '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.8)',
			  },
			fontFamily: {
				robotech: ['robotech', 'sans-serif'],
				azonix: ["Azonix", "sans-serif"],
				batman: ["batman", "sans-serif"]
			},

			transitionDuration: {
				'10000': '10000ms'
			},
			keyframes: {
				gradient: {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' },
				},
				scrollX: {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(-100%)" }
				},
				scrollY: {
					"0%": { transform: "translateY(0)" },
					"100%": { transform: "translateY(-100%)" }
				},
				fadeIn: {
					'0%': { opacity: '0.5' },
					'100%': { opacity: '1' },
				},
		  
			},
			animation: {
				scrollX: "scrollX 15s linear infinite",
				scrollY: "scrollY 15s linear infinite",
				'spin-slow': 'spin 8s linear infinite',
				gradient: 'gradient 8s linear infinite',
				'fade-in': 'fadeIn 0.75s linear infinite',
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
  plugins: [require("tailwindcss-animate"),heroui()],
} satisfies Config;
