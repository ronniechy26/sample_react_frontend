import { css } from '@emotion/core';

export const custom_tags = () => {
    return css(
        {
            '.ant-select-selection__choice' : {
                backgroundColor: '#BAE8FF',
                borderRadius: '19px',
                fontFamily: 'Nunito Semi',

                '> *' : {
                    color: '#45B2E6'
                }
            },

            '.ant-select-selection__choice__content' : {
                marginRight: '3px'
            }
        }
    )
}