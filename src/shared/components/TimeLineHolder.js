import React, { Component } from 'react';
import styled from '@emotion/styled'

class TimeLine extends Component {
    render() {
        const { children } = this.props;

        return(
            <StyledDiv>
                { children }
            </StyledDiv>
        )
    }
} 

export default TimeLine;

const StyledDiv = styled.div (
    {
        '.ant-timeline': {
            color: '#9BA9C0'
        }, 
    }
)
