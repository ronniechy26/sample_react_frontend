import React, { PureComponent } from 'react';
import styled from '@emotion/styled';

class CardProfileWrapper extends PureComponent {
    render() {
        const { children } = this.props;
        return(
            <CardHolder>
                { children }
            </CardHolder>
        )
    }
}

export default CardProfileWrapper

const CardHolder = styled.div(
    {
        '.ant-card-cover': {
            img: {
                width: '135px',
                height: '135px',
                borderRadius: '75px',
                textAlign: 'center', 
                display: 'block',
                margin: 'auto'
            }
        }, 
        '.anticon.anticon-edit' : {
            paddingTop: '5px',
            fontSize: '15px', 
            color: '#9BA9C0',
        },
        '.card-header' : {
            textAlign: 'center',
            color: '#415A85',
            fontFamily: 'Nunito Semi'
        }, 
        '.card-body' : {
            padding: '20px 5px'
        }, 
        '.card-title': {
            color: '#9BA9C0',
            textAlign: 'left'
        }, 
        '.card-text': {
            color: '#415A85',
            fontFamily: 'Nunito Bold',
            textAlign: 'left',
        }, 
        '.ant-row.card-img' : {
            marginTop: '30px'
        },
        '.ant-card-meta' : {
            float: 'left'
        },
        '.ant-card-meta-description' : {
            marginLeft: '20px',
            fontFamily: 'Nunito Bold',
        },
        '.ant-card-meta-title' : {
            color: '#415A85',
            fontFamily: 'Nunito Bold',
            fontSize: '15px'
        },
        '.ant-avatar.ant-avatar-circle.ant-avatar-image' : {
            width: '45px',
            height: '45px',
        },
        '.ant-col.ant-col-4' : {
            float: 'right'
        },
        '.hr_line' : {
            backgroundColor: '#E4E4E4',
            color: '#E4E4E4',
            height: '1px',
            border: 'none'
        }
    }
)