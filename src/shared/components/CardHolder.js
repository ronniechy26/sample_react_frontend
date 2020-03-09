import React,{ PureComponent } from 'react';
import styled from '@emotion/styled';

class CardHolder extends PureComponent {
    render() {
        const { children } = this.props;
        return(
            <Card>
                { children }
            </Card>
        )
    }
}

export default CardHolder;

const Card = styled.div(
    {
        '.ant-collapse-item': {
            marginBottom: '15px',
            borderRadius: '5px',
            border: 'solid 1px rgba(112, 112, 112, 0.13)',
            boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
        }, 
        '.ant-collapse > .ant-collapse-item > .ant-collapse-header': {
            fontSize: '17px', 
            paddingTop: '20px', 
            color: '#415A85', 
            fontWeight: '900',
            letterSpacing: '1.14px',
            marginLeft: '10px',
            fontFamily: 'Nunito Extra'
        }, 
        '.anticon.anticon-right.ant-collapse-arrow' : {
            marginLeft: '92%',
            fontSize: '20px'
        }, 
        '.ant-collapse-extra' : {
            marginRight: '8%',
            fontSize: '18px'
        },
        '.text-title' : {
            color: '#9BA9C0', 
            fontWeight: '500'
        }, 
        '.text-job' : {
            color: '#70CCF9',
            fontWeight: '900', 
        },
        '.text-render' : {
            color: '#415A85', 
            fontWeight: '900', 
        }, 
        '.card-margin': {
            padding: '0px 22px',
            marginLeft: '-10px'
        }, 
        '.ant-collapse.ant-collapse-borderless.ant-collapse-icon-position-left': {
            margin: '5px 10px'
        }, 
        '.row-padding' : {
            padding: '5px 0px'
        }, 
        '.border' : {
            borderBottom: '1px dashed #9BA9C0', 
        },
        '.ant-row.border' : {
            border: '0.5px dashed rgba(112, 112, 112, 1)'
        }, 
        '.ant-card-body' : {
            boxShadow: 'none',  
        },
        '.ant-card-bordered' : {
            border: 'none'
        },
        '.row-top-padding': {
            paddingTop: '15px'
        },
        '.row-padding' : {
            padding: '5px 0px'
        }, 
        '.text-title1': {
            color: '#9BA9C0', 
        }, 
        '.text-title2': {
            color: '#071C39', 
            fontWeight: '900', 
        }, 
        '.text-title3': {
            color: '#70CCF9', 
            fontWeight: '900', 
        }, 
       '.ant-card-head-title' : {
            fontSize: '17px', 
            paddingTop: '15px', 
            color: '#415A85', 
            fontWeight: '900', 
            fontFamily: 'Nunito Extra',
            letterSpacing: '1.14px',
        }, 
        '.header': {
            fontSize: '15px', 
            paddingTop: '15px', 
            color: '#415A85', 
            fontWeight: '900', 
        }, 
        '.anticon.anticon-plus-circle' : {
            
        },
        '.ant-card.balances.ant-card-bordered' : { 
            border: 'solid',
            borderColor: '#1FB6FF',
            borderRadius: '5px'
        },
       '.ant-card-bordered' : {
            border: 'none'
        },
        '.row-top-padding': {
            paddingTop: '15px'
        },
        '.row-padding' : {
            padding: '5px 0px'
        }, 
        '.text-title1': {
            color: '#9BA9C0', 
        }, 
        '.text-title2': {
            color: '#071C39', 
            fontWeight: '900', 
        }, 
        '.text-title3': {
            color: '#70CCF9', 
            fontWeight: '900', 
        }, 
        '.text-edit': {
            fontWeight: 'bold', 
            color: '#E4E4E4', 
            '&:hover': {
                color: '#70CCF9',
            }
        },
        '.ant-form-item > .ant-form-item-label > .ant-form-item-no-colon' : {
            color: '#9BA9C0',
            marginLeft: '-1px'
        }
    }
)