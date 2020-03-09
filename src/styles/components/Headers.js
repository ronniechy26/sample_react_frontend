import { css } from '@emotion/core';

const headers = css({
    fontFamily: 'Nunito Extra',
    fontSize: '27px',
    display: 'flex',
    flexDirection: 'row'
});

const makeItWhite = css({
    backgroundColor: 'white'
})

export const header_main = (isCollapsed) => {
    // let rotate = isCollapsed ? '180deg' : '-180deg';
    
    return css(
        {
            position: 'sticky',        
            boxShadow: 'rgba(0,0,0,0.1) 0px 0px 5px 3px',
            padding: '0 15px',
            display: 'flex',
            justifyContent: 'space-between',
            zIndex: '55',
    
            'button.menu-toggle-btn': {
                position: 'relative',
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: '24px',
                border: 'none',
                outline: '0 !important',
                padding: '0px !important',
            },
    
            'button.right-side-options': {
                position: 'relative',
                top: '15%',
                transform: 'translateY(-50%)',
                height: '28px',
                paddingLeft: '6px !important',
                paddingRight: '6px !important',
                border: 'solid 1.5px #A9A9A9',
    
                '.anticon': {
                    transform: 'translateY(2px)',
                    color: '#A9A9A9'
                }
            },
    
            '.ant-badge': {
                marginLeft: '20px',
            },
    
            'button.invisi-btn': {
                border: 'none',
                boxShadow: 'none',
                padding: '0',
                height: '28px',
                width: '28px',
                transform: 'translateY(-2px)',
    
                '.anticon': {
                    transform: 'translateY(2px)',
                    color: '#A9A9A9'
                },
            },
    
            'button.profile-btn': {
                border: 'none',
                boxShadow: 'none',
                padding: '0',
                width: '32px',
                marginLeft: '25px',
                transform: 'translateY(-4px)',
            },
            'i.anticon.anticon-menu-fold' : {
                fontSize: '23px'
            },
            'i.anticon.anticon-menu-unfold' : {
                fontSize: '23px'
            }

        // 'button i' : {
        //     transition: 'transform 0.3s !important',
        //     transform: `rotate(${rotate}) translateY(5px)`
        // }
    },
    headers,
    makeItWhite,
)
};

export const svg_transform = () => {
    return css({
        'svg' : {
            transform: 'scale(2) translateY(1px)'
        }
    })
}

export const side_menu_header = (isCollapsed, fSize, padLeftVal, iconTrans) => {
    let titleColor = 'white';
    let iconColor = 'white';
    let iconTransform = 'translateX(-5px)';
    let titleTransform = 'none';
    let padLeft = padLeftVal ? padLeftVal : 'auto';
    let iconTransalte = iconTrans ? iconTrans : '10px'
    
    if(isCollapsed) {
        titleColor = 'transparent'; 
        titleTransform = 'translateX(10px)';
        iconColor = '#FCD21B';
        iconTransform = `translateX(${iconTransalte}) scale(1.2)`;
    }  

    return css(
        {
            backgroundColor: 'transparent',
            height: '64px',
            padding: '16px',
            display: 'flex',
            flexDirection: 'row',
    
            'div.ant-divider.ant-divider-vertical' : {
                display: 'none'
            },

            'div.ant-page-header-back, div.ant-page-header-title-view' : {
                paddingLeft: padLeft
            },
            
            'span.ant-page-header-title-view-title' : {
                color: titleColor,
                fontSize: fSize,
                padding: '0px',
                transition: 'transform 0.3s',
                transform: titleTransform
            },
            'span.ant-page-header-heading-title' : {
                color: titleColor,
                fontSize: fSize,
                paddingLeft: '5px',
                transition: 'transform 0.3s',
                transform: titleTransform
            },
    
            'i.anticon' : {
                fontSize: fSize,
                color: iconColor,
                transition: 'transform 0.3s',
                transform: iconTransform,
            }
        }
    )
}

export const action_button = css({
    color: '#ABABAB',
    fontFamily: 'Nunito Semi'
})