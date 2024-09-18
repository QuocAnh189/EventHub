import styled from 'styled-components/macro'
import { DatePicker } from 'antd'

const { RangePicker } = DatePicker

const StyledRangePicker = styled(RangePicker)`
  box-shadow: none !important;
  cursor: pointer;

  .ant-picker-input {
    width: 85px !important;
  }

  .ant-picker-input > input,
  .ant-picker-range-separator {
    font-family: var(--heading-font);
    font-weight: 700;
    font-size: 14px;
    color: var(--header) !important;
  }

  .ant-picker-input > input::placeholder {
    color: var(--text) !important;
  }

  .ant-picker-active-bar {
    display: none;
  }

  .ant-picker-suffix {
    margin-left: auto;
  }
`

export default StyledRangePicker
