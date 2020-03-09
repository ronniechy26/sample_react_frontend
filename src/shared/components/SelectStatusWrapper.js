import React, { Component } from 'react';
import styled from '@emotion/styled';

class SelectStatusWrapper extends Component {
    render() {
        const { children } = this.props;
        return(
            <StyledDiv>
                { children }
            </StyledDiv>
        )
    }
}

export default SelectStatusWrapper;

const StyledDiv = styled.div(
    {
        '.ant-select': {
            width: '200px'
        },

        '.ant-select-arrow' : {
            color: '#45B2E6', 
        }, 
    }
)