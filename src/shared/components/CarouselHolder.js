import React, { Component } from 'react';
import styled from '@emotion/styled';

class CarouselHolder extends Component {
  render() {
    const { children } = this.props;
    return (
      <StyledTable>
        { children }
      </StyledTable>
    )
  }
}

export default CarouselHolder;

const StyledTable = styled.div(
    {
        '.ant-carousel .slick-slide': {
            textAlign: 'center',
            height: '160px',
            lineHeight: '160px',
            overflow: 'hidden',
        }, 
        '.ant-carousel .slick-dots li.slick-active ': {
            backgroundColor: 'red', 
        }, 
        '.ant-carousel .slick-dots li ': {
            backgroundColor: 'red',
        }, 
        
    }
)