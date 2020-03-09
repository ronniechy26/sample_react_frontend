import { css } from '@emotion/core';

export const radioGroup = () => {
    return css(
        {
            display: 'block',
            height: '30px',
            lineHeight: '30px',

            '.ant-radio-checked .ant-radio-inner': {
                border: 'solid 3px rgba(112, 204, 249, 1)'
            },

            '.ant-radio-inner::after': {
                top: '2px',
                left: '2px',
                width: '6px',
                height: '6px',
                backgroundColor: 'rgba(112, 204, 249, 1)'
            }
        }
    )
}

export const radioColor = () => {
    return css ({
        '.ant-radio-button-wrapper.ant-radio-button-wrapper-checked' : {
            backgroundColor: '#70CCF9',
            border: 'solid 1px #70CCF9'
        }, 
    })
}

export const radioCircle = () => {
    return css ({
        '.ant-radio-button': {
            width: '190px', 
        }, 
        '.ant-radio-button-wrapper': {
            borderColor: '#DBDBDB', 
            color: '#ABABAB'
        }, 
        '.ant-radio-button-wrapper.ant-radio-button-wrapper-checked': {
            borderColor: '#70CCF9', 
            color: '#70CCF9'
        }
    })
}

export const coloredWhole = () => {
    return css({
        '.ant-radio-wrapper': {
            color: '#9BA9C0',
            fontSize: '12px !important',
            fontFamily: 'Nunito'
        },
        
        '.ant-radio-checked .ant-radio-inner': {
            border: 'solid 1px #70CCF9'
        },

        '.ant-radio-inner::after': {
            top: '0px',
            left: '0px',
            width: '14px',
            height: '14px',
            backgroundColor: '#70CCF9'
        }, 
    })
}


