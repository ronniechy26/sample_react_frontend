import React, { Component } from 'react';
import styled from '@emotion/styled';

class BadgeHolder extends Component {
  render() {
    const { children, statusColor, lineHeight } = this.props;
    return (
      <Holder statusColor={ statusColor } lineHeight={ lineHeight }>
        { children }
      </Holder>
    )
  }
}

export default BadgeHolder;

const Holder = styled.div(
    props => ({
        lineHeight: props.lineHeight,

        '.ant-badge-status-dot': {
            height: '10px',
            width: '10px',
            top: '-2px'
        },

        '.ant-badge-status-text' : {
            color: props.statusColor,
            fontFamily: 'Nunito Semi'
        }
    })
)