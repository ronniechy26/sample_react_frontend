import React, { PureComponent } from 'react'
import styled from '@emotion/styled';

class StepsWrapper extends PureComponent {
    render() {
        const { children } = this.props
        return (
            <StyledDiv>
                {children}
            </StyledDiv>
        )
    }
}

export default StepsWrapper;

const StyledDiv = styled.div(
    {
        '.ant-steps-vertical.ant-steps-small': {
            '.makeMeBlue, .makeMeBlue:hover': {
                '.ant-steps-item-title': {
                    fontFamily: 'Nunito Bold',
                    color: '#1FB6FF'
                }                
            },

            '.ant-steps-item-content': {
                minHeight: '30px',
                paddingBottom: '10px'
            },

            '.ant-steps-item-tail': {
                display: 'none !important'
            },

            '.ant-steps-item-title': {
                lineHeight: '14px',
                fontSize: '12px',
                padding: '0px'
            },

            '.ant-steps-item-icon': {
                width: '14px',
                height: '14px',
                fontSize: '8px',
                fontWeight: '900',
                lineHeight: '14px',
                textAlign: 'center',
                borderRadius: '14px'
            }
        },

        '.ant-steps-item-wait, .ant-steps-item-wait[role="button"]:hover': {
            '.ant-steps-item-icon': {
                '> .ant-steps-icon': {
                    color: 'transparent'
                },
                backgroundColor: 'white',
                borderColor: '#70CCF9'
            },

            '.ant-steps-item-title': {
                fontFamily: 'Nunito Semi',
                color: '#8993A4'
            }
        },

        '.ant-steps-item-process': {
            '.ant-steps-item-icon': {
                '> .ant-steps-icon': {
                    color: 'transparent'
                },
                backgroundColor: '#70CCF9',
                borderColor: '#70CCF9'
            },
        },

        '.ant-steps-item-finish, .ant-steps-item-finish[role="button"]:hover': {
            '.ant-steps-item-icon': {
                '> .ant-steps-icon': {
                    color: 'white'
                },
                backgroundColor: '#63C442',
                borderColor: '#63C442'
            },

            '.ant-steps-item-title': {
                fontFamily: 'Nunito Semi',
                color: '#8993A4'
            }
        }
    }
)