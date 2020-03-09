import { css } from '@emotion/core';

export const formWrap = css({
    '.ant-form-item-label': {
        '> label': {
            color: '#9BA9C0',
            fontFamily: 'Nunito',
            fontSize: '12px',

            '&::after': {
                content: 'none !important'
            }
        }
    },

    '.ant-row .ant-form-item': {
        margin: '0px'
    }
});