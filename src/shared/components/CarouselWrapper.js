import React,{ Component } from 'react';
import styled from '@emotion/styled';

class CarouselWrapper extends Component {
    render() {
        const { children } = this.props;
        return(
            <Carousel>
                { children }
            </Carousel>
        )
    }
}

export default CarouselWrapper;

const Carousel = styled.div(
    {
    //    '.ant-card.ant-card-bordered': {
    //         boxShadow: '1px 1px 6px #D1D1D1', 
    //         borderRadius: '5px', 
    //         marginTop: '54px',
    //    },
    //    '.ant-card-head-title' : {
    //         fontSize: '17px', 
    //         paddingTop: '15px', 
    //         color: '#415A85', 
    //         fontWeight: '900', 
    //     }, 

    // '.ant-carouselslick-slide > .slick-slider > .slick-list > .lick-track > .slick-slide': {
    //     textAalign: 'center',
    //     height: '160px',
    //     lineHeight: '160px',
    //     background: 'green',
    //     overflow: 'hidden',
    //   },

    //   '.ant-carousel.slick-slide h3': {
    //     color: '#fff'
    //   }
    }
)
