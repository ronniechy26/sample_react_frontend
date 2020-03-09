import React, { Component } from 'react';
import styled from '@emotion/styled';

class ProfileTable extends Component {
  render() {
    const { children } = this.props;
    return (
      <StyledTable>
        { children }
      </StyledTable>
    )
  }
}

export default ProfileTable;

const StyledTable = styled.div(
    {
        '.ant-table-wrapper > *' : {
            fontFamily: 'Nunito',
            color: '#838383',
            fontSize: '9px'
        },
        '.ant-table-thead > tr > th' : {
            color: '#415A85',
            background: 'white',
            borderBottomColor: '#77A1C1'
        },
        '.ant-table-row.ant-table-row-level-0:hover .ant-btn' : {
            display: 'block',
            border: 'none'
        },
     
        '.ant-table-expanded-row.ant-table-expanded-row-level-1': {
            backgroundColor: '#ECF9FF'
        },
      
        '.ant-table-column-title': {
          color:'rgba(131, 131, 131, 0.8)',
          fontSize: '14px',
          //fontFamily: 'Nunito Bold'
        }

    }
)

// DON'T DELETE CODE!!! 
      // This code works for manipulating border bottom for time off(pending, upcoming)
      //   '.ant-table-row.ant-table-row-level-0 > .ant-table-row-expand-icon-cell' : {
      //     borderBottomStyle: 'dotted',
      //     borderBottomColor: 'orange'
      // },