import React, { Component } from 'react'
import styled from '@emotion/styled';

class UploadAttachementWrapper extends Component {
    render() {
        const { children } = this.props
        return ( 
        <StyledDiv>
            {children}
        </StyledDiv>
        )
    }
}

export default UploadAttachementWrapper;

const StyledDiv = styled.div(
    {
        '.ant-upload-list-item-name': {
            color: '#1FB6FF'
        }
    }
)