import React, { Component } from 'react';
import styled from '@emotion/styled';

class TitleWrapper extends Component {
    render() {
        const { title, color } = this.props;

        return(
            <Span color={ color }>{ title }</Span>
        )
    }
}

export default TitleWrapper;

const Span = styled.span(
    {
        fontFamily: 'Nunito Bold',
    },
    props => ({
        color: props.color
    })
)