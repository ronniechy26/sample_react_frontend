import React, { Component } from 'react';
import styled from '@emotion/styled';

class ActionButton extends Component {
  handleOnClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  }

  render() {
    const { children, showOnHover } = this.props;

    return (
      <StyledDiv onClick={ this.handleOnClick } showOnHover={showOnHover}>
        { children }
      </StyledDiv>
    )
  }
}

export default ActionButton;

const StyledDiv = styled.div(
  {
    textAlign: 'right',
    height: '37px',
    position: 'absolute',
    right: '0px',
    transform: 'translate(0, -50%)',
    display: 'flex',
    flexDirection: 'row',
    borderRadius: '5px 0 0 5px',
    backgroundColor: 'white',

    '> *:not(:first-child)': {
      marginLeft: '5px',
    },

    '.anticon-check': {
      color: 'rgba(146,230,136,1)', 
      fontSize: '900'
    },
    '.anticon-close': {
      color: 'red', 
      fontSize: '900'
    },
    '.anticon-edit': {
      color: 'gray', 
      opacity: '.7',
      fontSize: '900'
    }
  },
  props => ({
    '.ant-btn': {
      border: 'none',
      height: '37px',
      backgroundColor: 'transparent',
      boxShadow: 'none',
      outline: 'none !important',
      display: props.showOnHover ? 'none' : 'block'
    },
  })
)