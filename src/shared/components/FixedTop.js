import React, { Component } from 'react'
import styled from '@emotion/styled';

class FixedTop extends Component {
    render() {
        const { children } = this.props
        return (
            <Top>
                { children }
            </Top>
        )
    }
}

export default FixedTop;

const Top = styled.div(
    {
        '.fixed-top' : {
            position: 'fixed',
            zIndex: '1'
        }, 
    }
)