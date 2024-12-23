import styled from 'styled-components/macro'
import { Table } from 'antd'

const StyledTable = styled(Table)`
  margin-bottom: 30px;
  flex-grow: 1;

  .ant-table {
    padding: 0 26px;
  }

  .ant-table-thead .ant-table-cell {
    padding: 33px 0 28px !important;
    background: var(--widget);

    &:last-child {
      text-align: right;
      text-align: center !important;
    }
  }

  .ant-table-row:last-child .ant-table-cell {
    border-bottom: 0;
  }

  .ant-table-row .ant-table-cell {
    padding: 32px 0;
  }

  .ant-table-cell {
    border-color: var(--input-border) !important;
    text-align: center !important;
  }

  // large desktop
  @media (min-width: 1536px) {
    .product-cell {
      width: 23%;
    }
  }
`

export default StyledTable
