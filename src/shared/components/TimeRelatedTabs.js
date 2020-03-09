import React, { Component } from 'react'
import styled from '@emotion/styled';

class TabsWrapper extends Component {
    render() {
        const { children } = this.props
        return ( 
        <StyledDiv>
            {children}
        </StyledDiv>
        )
    }
}

export default TabsWrapper;

const StyledDiv = styled.div(
    {
        '.ant-tabs-tab': {
            padding: '12px 3px',
            fontWeight: '900',
            color: '#1FB6FF'
        },
        '.ant-tabs-ink-bar' : {
            height: '4px',
            backgroundColor: '#1FB6FF',
            borderRadius: '4px',
        }, 
        '.ant-tabs-tab-active.ant-tabs-tab': {
            color: '#1FB6FF'
        }

    }
)