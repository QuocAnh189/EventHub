import styled from 'styled-components/macro';
import {keyframes} from 'styled-components';
import Select from 'react-select';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const NormalizedSelect = styled(Select)`
  .select {
    &__control {
      cursor: pointer;
      transition: var(--transition);
      border: none;
      min-height: unset;
      border-radius: 4px;
      box-shadow: none;

      &--is-focused, &:hover {
        outline: none;
      }

      &--is-focused .icon {
        transform: rotate(180deg);
      }

      .icon {
        transition: .3s ease-in-out;
      }
    }

    &__single-value {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    &__menu {
      min-width: max-content;
      width: 100%;
      border-radius: 6px;
      z-index: 100;
      animation: ${fadeIn} var(--transition);
      background: var(--widget);
      box-shadow: var(--shadow) !important;

      &.close {
        animation: ${fadeIn} var(--transition) reverse;
      }

      &-list {
        scroll-behavior: smooth;
        z-index: 100;
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding: 18px;

        &::-webkit-scrollbar {
          width: 4px;
        }
      }
    }

    &__option {
      cursor: pointer;
      transition: var(--transition);
      padding: 0;
      width: fit-content;
      font-size: 14px;

      &:hover,
      &--is-focused,
      &--is-selected {
        background: transparent;
        color: var(--header);
      }
    }

    &__indicator, &__indicator-separator {
      display: none;
    }

    &__value-container {
      padding: 0;
    }
  }
`;

const BasicSelect = styled(NormalizedSelect)`
  .select {
    &__control {
      height: var(--element-height);
      padding: 0 20px;
      background: var(--input-bg);
      border-radius: 8px;
      border: 1px solid var(--input-border);
      width: 100%;
      transition: border-color var(--transition);

      &--is-focused, &:hover {
        border-color: var(--accent);
      }
    }

    &__placeholder {
      color: var(--gray);
    }

    &__single-value {
      color: var(--text);
      line-height: 1;
    }

    &__menu {
      box-shadow: var(--widget-shadow);
      background: var(--widget);
      width: 100%;
    }
  }

  &.is-invalid {
    .select__control {
      border-color: var(--red);
    }
  }
`;

const MinimalSelect = styled(NormalizedSelect)`
  width: 200px;

  .select {
    &__control {
      font-weight: 500;
      font-size: 14px;
      padding: 0;
      display: flex;
      gap: 10px;
      align-items: center;
      width: fit-content;
      background: transparent !important;

      // tablet
      @media screen and (min-width: 768px) {
        margin-left: auto;
      }
    }

    &__single-value {
      margin: 0;
      color: var(--header);
    }

    &__indicators {
      display: none;
    }
  }
`;

export {BasicSelect, MinimalSelect}