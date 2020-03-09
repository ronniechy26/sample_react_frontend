import React, { Component } from 'react';
import styled from '@emotion/styled';

class SwitchWrapper extends Component {
  render() {
    const { children, minWidth } = this.props;
    return (
      <StyledDiv minWidth={minWidth}>
        { children }
      </StyledDiv>
    )
  }
}

export default SwitchWrapper;

const StyledDiv = styled.div(
    props =>
    ({
        '.ant-switch.ant-switch-checked' : {
            backgroundColor: 'rgba(146, 230, 136, 1)'
        },

        '.ant-switch' : {
            backgroundColor: 'rgba(228, 228, 228, 1)',
            minWidth: props.minWidth ? props.minWidth : '35px'
        }
    })
)