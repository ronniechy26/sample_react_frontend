import React, { Component } from 'react';
import styled from '@emotion/styled'

class RequestButton extends Component {
    render() {
        const { children } = this.props;

        return(
            <StyledDiv>
                { children }
            </StyledDiv>
        )
    }
} 

export default RequestButton;

const StyledDiv = styled.div (
    {
        textAlign: 'right',
        display: 'flex',
        flexDirection: 'row',

        '.check-icon': {
            borderRadius: '5px',
            backgroundColor: '#E7FFDC',
            marginRight: '10px',
            fontWeight: '50px',
            width: '45px',
        },

        '.close-icon': {
            borderRadius: '5px',
            backgroundColor: '#FFD9C8',
            marginRight: '120px',
            width: '45px',
        },  
    
        '.anticon-check': {
          color: '#68C451', 
          fontSize: '1000'
        },
        '.anticon-close': {
          color: '#F8896E', 
          fontWeight: 'Nunito Bold',
          fontSize: '900',
                '.svg': {
                    fontWeight: 'Nunito Bold',
                }
        },   
      },
)
