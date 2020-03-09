import React, { Component } from 'react';
import styled from '@emotion/styled';

class HistoryTable extends Component {
  render() {
    const { children } = this.props;
    return (
      <StyledTable>
        { children }
      </StyledTable>
    )
  }
}

export default HistoryTable;

const StyledTable = styled.div(
    {
        '.ant-table-content' : {
            borderRadius: '8px',
            boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.1)'
        },
        '.ant-table-wrapper > *' : {
            fontFamily: 'Nunito',
            color: '#838383',
            fontSize: '9px'
        },
        '.ant-table-thead > tr > th' : {
            color: '#415A85',
            background: '#E2F4FF'
        },
        '.ant-table-row.ant-table-row-level-0:hover .ant-btn' : {
          display: 'block',
          border: 'none'
        }
    }
)