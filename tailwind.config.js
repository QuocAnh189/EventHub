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
        'gradient-white': 'linear-gradient(270deg,#f2f2f2 0%,rgba(242,242,242,0) 100%)',
        'gradient-purple': 'linear-gradient(135deg,#9a7bff,#de7cff 47%,#ffc37e)',
        'gradient-primary':
          'linear-gradient(135deg,rgba(180,157,255,0) 11%,#b49dff 26%,#e4a7f9 45%,#ffd9ae 72%,rgba(255,217,174,0) 89%);',
        'gradient-middlefooter':
          'linear-gradient(135deg,#7d4dbc 12%,#5e4282 13%,#8460af 44%,#c594ff 50%,#2a1141 90%,#3c195c 97%)',
        'gradient-bgmiddlefooter':
          'linear-gradient(#091a34,rgba(9,26,52,0)),url(https://global-uploads.webflow.com/6418f5b…/6498eac…_Ellipse%20blur.webp)',
        'gradient-titleheaderfooter': 'linear-gradient(135deg,#9a7bff,#de7cff 47%,#ffc37e)',
        'gradient-footerIntro':
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
        'gray-red': 'var(--text-dark)',
        lilac: 'rgb(136,84,192)',
        textGray: '#9696a5',
        textPurple: '#a157f6',
        textPurpleBorder: '#b982f8',
        textPurpleHover: '#DFCCFB ',
        textBlue: '#006dfa',
        blueLight: '#1495e6',
        textGreen: '#16d982',
        textYellow: '#f5b218',
        textBlack: '#081934',
        textWhite: '#fff',
        textError: '#f21b7d',
        textFog: '#2c2c39',
        bgBlack: '#0c131f',
        textBrown: 'rgb(35, 34, 34)',
        textSweet: '#fde9ff',
        textResult: '#F9f1cc',
        bgBlackLight: '#56566f',
        bgBlackHover: '#2c2c39',
        bgBlackType: '#1c1d28',
        bgGray: '#edf5ff',
        bgPurple: '#ac52ff',
        bgSwitch: '#f4faff',
        bgPurplePower: '#933ff4',
        bgBlueLight: '#dbebff',
        bgDark: 'rgba(24,33,50,0.4)',
        bgPink: '#c17fff33',
        bgBlue: '#5bc0ff',
        bgInput: '#171822',
        bgError: '#ff43981a',
        bgGrayLight: '#F5F5F5',
        bgModel: 'rgba(105,105,105, 0.6)',
        bgWaiting: '#3a4f7a',
        bgUser: '#fbeee0',
        bgBorderUser: '#422800',
        bgPurpleLight: '#D0BFFF',
        bgQuestion: 'rgba(223, 215, 230, 0.8)',
        bgBorderQuestion: 'rgba(105,105,105, 0.4)',
        bgResultTitle: '#6868AC',
        bgAnswerIncorrect: '#ff0000',
        bgAnswerCorrect: '#16FF00',
        bgBorderError: '#D80032',
        bgPoint: '#FFACAC',
        lightPrimary: '#F4F7FE',
        blueSecondary: '#4318FF',
        brandLinear: '#868CFF',
        bgAnswerTriangle: '#F03440',
        bgAnswerDiamond: '#2E64D1',
        textOrange: '#EFA920',
        bgAnswerSquare: '#00D164',
        bgSearchHome: 'rgb(241, 241, 241, 0.7)',

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
        boxheaderfooter: 'inset -1px -1px #3c195c, inset 1px 1px #7d4dbc',
        DEFAULT: 'var(--shadow)',
        banner: '0 2px 13px rgba(0, 54, 139, 0.44)',
        switch: 'inset 0 1px 3px rgba(170, 170, 183, 0.57)',
        'switch-dark': 'inset 0 1px 3px rgba(2, 2, 6, 0.57)',
        bannerHome: '0px 10px 25px rgb(114, 114, 114)',
        bannerHomeTwo: '0px 20px 25px -10px rgb(165, 165, 165)',
        searchHome: '0px 20px 25px -10px rgb(165, 165, 165)'
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
