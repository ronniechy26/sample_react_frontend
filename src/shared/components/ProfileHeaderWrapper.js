import React, { Component } from 'react';
import styled from '@emotion/styled';

class ProfileHeaderWrapper extends Component {
    render() {
        const { title, color } = this.props;

        return(
            <Span color={ color }>{ title }</Span>
        )
    }
}

export default ProfileHeaderWrapper;

const Span = styled.span(
    {
        fontFamily: 'Nunito Bold',
        letterSpacing: '1.14px'
    },
    props => ({
        color: props.color
    })
)