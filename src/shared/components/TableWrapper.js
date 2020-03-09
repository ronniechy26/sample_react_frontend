import React, { Component } from 'react';
import styled from '@emotion/styled';

class TableWrapper extends Component {
  render() {
    const { children } = this.props;
    return (
      <StyledTable>
        { children }
      </StyledTable>
    )
  }
}

export default TableWrapper;

const StyledTable = styled.div(
    {
        '.ant-table-content' : {
            borderRadius: '8px',
            boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.1)'
        },
        '.ant-table-wrapper > *' : {
            fontFamily: 'Nunito',
            color: '#838383',
            fontSize: '9px', 
            margin: '0px 2px'
        },
        '.ant-table-thead > tr > th' : {
            color: 'rgba(131, 131, 131, 0.8)',
            background: 'white'
        },
        '.ant-table-row.ant-table-row-level-0:hover .ant-btn' : {
          display: 'block',
          border: 'none'
        },
        
    }
)