import React, { PureComponent } from 'react';
import { Typography, Divider } from 'antd';
import styled from '@emotion/styled';

const { Title } = Typography;

class LandingHeader extends PureComponent {
    render() {
        const { title, children, withDivider } = this.props;
        return (
            <StyledDiv>
                <div className="title-div">
                    <Title level={4}>{title}</Title>
                    <div className="actions-div">
                        { children }
                    </div>
                </div>
                {
                    withDivider ? 
                        <Divider></Divider> 
                        : 
                        <div style={{ height: '5px' }}></div>
                }
            </StyledDiv>
        )
    }
}

export default LandingHeader;

const StyledDiv = styled.div(
    {
        backgroundColor: 'white',
        padding: '30px 30px 0 30px',
        position: 'sticky',
        top: '-15px',
        zIndex: 50,

        '.title-div': {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
        },

        '.actions-div': {
            minHeight: '32px',

            '> *:not(:first-child)' : {
                marginLeft: '10px'
            },
            '.ant-btn': {
                color: '#9BA9C0',
                fontFamily: 'Nunito Semi'
            },
            '.ant-btn.grey' : {
                color: '#CECECE',
                borderColor: '#CECECE',
                '&:hover' : {
                    color: '#70CCF9',
                    borderColor: '#70CCF9'
                }
            }
        },

        '.ant-typography': {
            color: '#676767',
            margin: '0px'
        },

        '.ant-divider': {
            margin: '10px 0 0 0'
        }, 
        '.ant-btn.back-btn' : {
            backgroundColor: '#DDEFF9', 
            borderColor: '#DDEFF9',  
            color: '#70CCF9'
        }

    },
    props => ({
        fontSize: props.fontSize
    })
)