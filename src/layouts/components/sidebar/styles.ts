import styled from 'styled-components/macro'
import theme from 'styled-theming'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'

const Drawer = styled(SwipeableDrawer)`
  z-index: 1001;

  .MuiDrawer-paper {
    padding: 35px 27px;
    background: var(--widget);
    box-shadow: var(--shadow);
    color: var(--text);
    border: none;

    // iPhone XR
    @media screen and (min-width: 414px) {
      width: 320px;
    }

    .menu {
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      gap: 20px;

      &_item {
        height: 44px;
        border-radius: 6px;
        padding: 0 18px 0 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 11px;
        font-size: 16px;
        font-family: var(--heading-font);
        font-weight: 700;
        cursor: pointer;
        border: 1px solid transparent;
        transition: all var(--transition);
        color: var(--header);

        &:hover,
        &:focus,
        &.active {
          background-color: var(--body);
          color: #3d56f0;
          border-color: var(--border);

          .icon {
            color: var(--header);
          }
        }

        &.active .icon-caret-right-solid {
          transform: rotate(90deg);
        }

        .icon {
          font-size: 18px;
          color: var(--header);
          transition: all var(--transition);
          will-change: transform;

          &-caret-right-solid {
            font-size: 16px;
            color: var(--accent) !important;
            display: block;
          }
        }
      }

      &_divider {
        height: 1px;
        background: var(--border);
      }
    }

    .submenu {
      margin-top: 14px;
      padding-left: 40px;

      &_item {
        font-size: 14px;
        color: ${theme('theme', {
          light: 'var(--label)',
          dark: 'var(--text)'
        })};

        .icon {
          font-size: 6px;
          color: var(--gray);
        }
      }
    }

    &_divider {
      height: 1px;
      width: 100%;
      display: block;
      background: red;
    }
  }
`

export default Drawer
