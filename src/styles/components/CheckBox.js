import { css } from '@emotion/core';

export const box = css({
    '.ant-checkbox-wrapper + span, .ant-checkbox + span': {
        color: '#9BA9C0',
        fontFamily: 'Nunito',
        fontSize: '12px'
    },
    
    '.ant-checkbox-checked': {
        '.ant-checkbox-inner': {
            backgroundColor: '#70CCF9',
            borderColor: '#70CCF9'
        },
    }
});