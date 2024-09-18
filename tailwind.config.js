/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '330px',
        sm: '415px',
        sml: '500px',
        md: '667px',
        mdl: '769px',
        lg: '960px',
        lgl: '1025px',
        xl: '1280px'
      },

      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem'
        }
      },

      maxWidth: {
        container: '1440px',
        contentContainer: '1260px',
        containerSmall: '1024px',
        containerxs: '768px'
      },

      backgroundImage: {
        'gradient-blue': 'linear-gradient(-150deg,rgba(85,125,254,.549) 24%,rgba(101,53,185,.541) 91%);',
        'gradient-contact':
          'linear-gradient(#091a34,rgba(9,26,52,0)),url(https://global-uploads.webflow.com/6418f5b…/6498eac…_Ellipse%20blur.webp)',
        'gradient-feedback': 'linear-gradient(135deg,#9a7bff,#de7cff 47%,#ffc37e)',
        'gradient-intro':
          'linear-gradient(135deg,rgba(180,157,255,0) 11%,#b49dff 26%,#e4a7f9 45%,#ffd9ae 72%,rgba(255,217,174,0) 89%);'
      },

      fontFamily: {
        dmFont: ['DM Sans', 'sans-serif'],
        exoFont: ['Exo 2', 'sans-serif'],
        joinFont: ['Lilita One', 'sans-serif'],
        interFont: ['Inter', 'sans-serif'],
        CalliFont: ['Calligraffitti', 'cursive'],
        poppinsFont: ['Poppins', 'sans-serif'],
        monsterratFont: ['Montserrat', 'sans-serif'],
        body: 'var(--body-font)',
        heading: 'var(--heading-font)'
      },

      colors: {
        body: 'var(--body)',
        'body-text': 'var(--text)',
        widget: 'var(--widget)',
        header: 'var(--header)',
        border: 'var(--border)',
        'input-border': 'var(--input-border)',
        'input-bg': 'var(--input-bg)',
        highlight: 'var(--highlight)',
        'highlight-inverse': 'var(--highlight-inverse)',
        accent: 'var(--accent)',
        red: 'var(--red)',
        green: 'var(--green)',
        'green-darker': '#02A189',
        orange: 'var(--orange)',
        yellow: 'var(--yellow)',
        gray: 'var(--gray)',
        'gray-light2': '#9696a5',
        'gray-light3': '#edf5ff',
        'gray-light4': '#F5F5F5',
        'gray-red': 'var(--text-dark)',
        purple: '#b982f8',
        blue: '#006dfa',
        'blue-light2': '#1495e6',
        'blue-light3': '#5bc0ff',
        'blue-light4': '#dbebff',
        black: '#081934',
        white: '#fff',
        black: '#0c131f',
        dark: 'rgba(24,33,50,0.4)',
        pink: '#c17fff33',
        blue: '#006dfa',
        'search-home': 'rgb(241, 241, 241, 0.7)',

        special: {
          DEFAULT: '#00F8FF'
        },

        primary: {
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#3D56F0',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          DEFAULT: '#3D56F0'
        }
      },

      boxShadow: {
        black: '0 3px 2px rgba(20,45,82,.01)',
        purple: '0 4px 24px rgba(82, 146, 232, 0.8)',
        blue: 'inset -1px -1px rgba(85,125,254,.549), inset 1px 1px rgba(101,53,185,.541)',
        DEFAULT: 'var(--shadow)',
        switch: 'inset 0 1px 3px rgba(170, 170, 183, 0.57)',
        'switch-dark': 'inset 0 1px 3px rgba(2, 2, 6, 0.57)'
      },

      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping-slow': 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite'
      }
    }
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true }), require('daisyui')]
}
