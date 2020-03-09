import React, { Component } from 'react';
import styled from '@emotion/styled';

class DrawerFooter extends Component {
  render() {
    const { children } = this.props;
    return (
      <FooterDiv>
          <div className='container'>
            { children }
          </div>
      </FooterDiv>
    )
  }
}

export default DrawerFooter;

const FooterDiv = styled.div(
    {
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        borderTop: '1px solid #e9e9e9',
        padding: '10px 16px',
        display: 'flex',
        flexDirection: 'row-reverse',

        '.container > *:not(:first-child)' : {
            marginLeft: '10px',
            fontFamily: 'Nunito Semi',
            color: '#6CC6F1',
            borderColor: '#6CC6F1',
        }
    }
)