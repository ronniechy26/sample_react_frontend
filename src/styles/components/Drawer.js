import { css } from '@emotion/core';

export const drawer_fit_content = () => {
    return css(
        {
            '.ant-drawer-header' : {
                backgroundImage: 'linear-gradient(161deg, rgba(157, 233, 246, 1), rgba(38, 132, 255, 0.65))',

                '> *' : {
                    color: 'white'
                }
            },

            '.ant-drawer-body' : {
                height: 'calc(100% - 107px)',
                overflowY: 'auto'
            },
            'label': {
                color: '#8993A4'
            }
        }
    )
}