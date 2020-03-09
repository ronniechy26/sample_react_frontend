import React, { Component } from 'react';
import styled from '@emotion/styled';

class OnRowExpand extends Component {
    render() {
        const { children, showOnHover } = this.props
        return(
            <StyledDiv showOnHover={showOnHover}>
                { children }
            </StyledDiv>
        )
    }
}

export default OnRowExpand;

const StyledDiv = styled.div({
    '.ant-table-expanded-row.ant-table-expanded-row-level-1': {
        backgroundColor: '#ECF9FF'
    }, 
    'input.ant-checkbox-input' : {
        paddingLeft: 'none'
    },
    // '.ant-table-row.ant-table-row-level-0': {
    //     backgroundColor: '#ECF9FF'
    // }
    '.ant-table-row-expand-icon.ant-table-row-collapsed': {
        display: 'none'
    }, 
    '.ant-table-row-expand-icon.ant-table-row-expanded': {
        display: 'none'
    }, 
})
