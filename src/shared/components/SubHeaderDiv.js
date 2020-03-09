import React, { Component } from 'react';
import styled from '@emotion/styled';

class SubHeaderDiv extends Component {
  render() {
    const { children } = this.props;
    return (
      <StyledDiv>
        { children }
      </StyledDiv>
    )
  }
}

export default SubHeaderDiv;

const StyledDiv = styled.div({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '25px',
    marginTop: '15px',
    marginLeft : '30px',
    marginRight : '30px',

    '.description' : {
        fontFamily: 'Nunito Semi',
        color:'#9BA9C0',
        lineHeight: '32px'
    },

    '.page-action' : {
        '> *:not(:first-child)' : {
            marginLeft: '10px',
            fontFamily: 'Nunito Semi',
        },

        '.ant-btn' : {
            color: '#ABABAB',

            '&:hover' : {
                color: '#40a9ff'
            }
        }, 

        '.ant-btn.ant-btn-primary' : {
            color: '#fff',
            backgroundColor: '#70CCF9',
            borderColor: '#6CC6F1'
        },
        '.btn-import': {
            color: '#70CCF9',
            borderColor: '#6CC6F1',
            fontFamily: 'Nunito Semi',
        },
            'i.anticon' : {
              fontSize: '10px',
              transform: 'translateY(-1px)',
            }
        }
})