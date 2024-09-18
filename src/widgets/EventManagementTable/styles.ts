import styled from 'styled-components/macro'
import { Table } from 'antd'

const StyledTable = styled(Table)`
  flex-grow: 1;

  .ant-spin-nested-loading,
  .ant-spin-container {
    height: 100%;
  }

  .ant-spin-container {
    display: flex;
    flex-direction: column;
  }

  .ant-table {
    flex-grow: 1;
    background: transparent;
  }

  .ant-table-thead .ant-table-cell {
    background: var(--widget);
    padding: 30px 15px 20px !important;
    border-bottom: 1px solid var(--border) !important;

    &:first-of-type {
      padding-left: 24px !important;
    }

    &:last-of-type {
      text-align: right;
      padding-right: 24px !important;
    }
  }

  .ant-table-tbody .ant-table-cell {
    border: none !important;
    padding: 30px 15px !important;

    &:first-of-type {
      padding-left: 24px !important;
    }

    &:last-of-type {
      padding-right: 24px !important;
    }
  }
`

export default StyledTable
