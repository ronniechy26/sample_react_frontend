import React,{ Component } from 'react';
import styled from '@emotion/styled';

class GroupButtonWrapper extends Component {
    render() {
        const { children } = this.props;
        return(
            <StyledDiv>
                {children}
            </StyledDiv>
        )
    }
}

export default GroupButtonWrapper;

const StyledDiv = styled.div (
    {
        '.ant-radio-button-wrapper': {
            backgroundColor: 'white', 
            color: '#CECECE', 
            border: 'solid 1px #E1F5FE',
            borderWidth: '1px'
        }, 
        '.ant-radio-button-wrapper-checked': {
            backgroundColor: '#BAE8FF', 
            color: '#45B2E6', 
            fontWeight: '900', 
            border: 'solid 1px #E1F5FE'
        }, 
    }
)