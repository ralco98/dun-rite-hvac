/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          light: 'hsl(var(--primary-light))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        accent: 'hsl(var(--accent))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        border: 'hsl(var(--border))',
        success: 'hsl(var(--success))',
      },
      borderRadius: {
        'stadium-hero': '200px 200px 160px 160px',
      },
      boxShadow: {
        'card-hover': '0 16px 48px rgba(0, 0, 0, 0.08)',
        'stat': '0 12px 40px rgba(0, 0, 0, 0.10)',
        'elevated': '0 20px 50px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}
