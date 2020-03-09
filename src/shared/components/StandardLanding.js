import React, { Component } from 'react';
import styled from '@emotion/styled';

class StandardLanding extends Component {
  render() {
    const { children, paddingTop } = this.props;
    return (
      <StyledDiv paddingTop={paddingTop}>
        <div className="container-div">
          { children }
        </div>
      </StyledDiv>
    )
  }
}

export default StandardLanding;

const StyledDiv = styled.div(
  {
    backgroundColor: 'white',
    height: '100%',
  },
  props => ({
    fontSize: props.fontSize,
    
    '.container-div' : {
      paddingTop: props.paddingTop ? props.paddingTop : '30px',
      paddingLeft: '30px',
      paddingRight: '30px',
      paddingBottom: '30px',
      height: '100%'
    }
  })
)
