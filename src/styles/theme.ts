import { createGlobalStyle } from 'styled-components'
import theme from 'styled-theming'

export default createGlobalStyle`
  :root {
    --body: ${theme('theme', {
      light: 'var(--body-light)',
      dark: 'var(--body-dark)'
    })};
    --widget: ${theme('theme', {
      light: 'var(--widget-light)',
      dark: 'var(--widget-dark)'
    })};
    --shadow: ${theme('theme', {
      light: 'var(--shadow-light)',
      dark: 'var(--shadow-dark)'
    })};
    --hover-shadow: ${theme('theme', {
      light: '0 0 14px 0 rgba(155, 155, 155, 0.4)',
      dark: '0 0 14px 0 rgba(0, 66, 154, 1)'
    })};
    --header: ${theme('theme', {
      light: 'var(--header-light)',
      dark: 'var(--header-dark)'
    })};
    --text: ${theme('theme', {
      light: 'var(--text-light)',
      dark: 'var(--text-dark)'
    })};
    --label-text: ${theme('theme', {
      light: 'var(--label)',
      dark: 'var(--input-border-light)'
    })};
    --badge-status-text: ${theme('theme', {
      light: '#fff',
      dark: 'var(--header-light)'
    })};
    --badge-status-bg: ${theme('theme', {
      light: 'var(--text-light)',
      dark: '#AEAEAE'
    })};
    --border: ${theme('theme', {
      light: 'var(--border-light)',
      dark: 'var(--border-dark)'
    })};
    --accent: ${theme('theme', {
      light: 'var(--accent-light)',
      dark: 'var(--accent-dark)'
    })};
    --highlight: ${theme('theme', {
      light: 'var(--body-light)',
      dark: 'var(--highlight-dark)'
    })};
    --highlight-alt: ${theme('theme', {
      light: 'var(--body)',
      dark: '#035ecf0f'
    })};
    --highlight-inverse: ${theme('theme', {
      light: 'var(--highlight-dark)',
      dark: 'var(--text-dark)'
    })};
    --chart-dark: ${theme('theme', {
      light: 'var(--header-light)',
      dark: 'var(--highlight-dark)'
    })};
    --input-bg: ${theme('theme', {
      light: 'var(--widget)',
      dark: 'var(--header-light)'
    })};
    --input-border: ${theme('theme', {
      light: 'var(--input-border-light)',
      dark: 'var(--input-border-dark)'
    })};
    --social-btn-color: ${theme('theme', {
      light: 'var(--header)',
      dark: 'var(--accent)'
    })};
    --backdrop: ${theme('theme', {
      light: 'var(--highlight-dark)',
      dark: 'linear-gradient(0deg, rgba(3, 94, 207, 0.20) 0%, rgba(3, 94, 207, 0.20) 100%), #031123'
    })};
  }
`
