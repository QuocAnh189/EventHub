import styled from 'styled-components/macro'
import theme from 'styled-theming'
import { Table } from 'antd'

const StyledTable = styled(Table)`
  margin-bottom: 26px;
  flex-grow: 1;

  .ant-table-thead {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      height: 1px;
      width: 100%;
      opacity: 0.6;
      background: var(--input-border);
    }

    .ant-table-cell {
      background: var(--widget) !important;
      padding: 30px 26px 24px !important;
      border: none !important;
      text-align: center !important;
    }
  }

  .ant-table-tbody {
    tr:nth-child(odd) .ant-table-cell {
      background: ${theme('theme', {
        light: 'var(--body)',
        dark: 'rgba(39, 50, 65, .2)'
      })} !important;
    }

    tr:nth-child(even) .ant-table-cell {
      background: var(--widget) !important;
    }

    .ant-table-cell {
      border: none;
      padding: 24px 26px 26px;
      text-align: center !important;
    }
  }
`

export default StyledTable
