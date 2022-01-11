import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import { useState } from 'react'
import { MyLink } from '../../GlobalStyles'

import { Container, Arrow, Wrapper, Slide, ImageContainer, Image, 
        InfoContainer, Title, Desc, Button } from './StyledComponents'
import { sliderItems } from '../../data'

function Slider() {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = direction => {
        if (direction === 'left')
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        else 
            setSlideIndex(slideIndex < 2 ? slideIndex + 1: 0)
    }

    return (
        <Container>
            <Arrow direction='left' onClick={() => handleClick('left')}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(item => (    
                    <Slide bg={item.bg} key={item.id}>
                        <ImageContainer>
                            <Image src={item.img} />
                        </ImageContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>
                                <MyLink to='/productlist'>SHOP NOW</MyLink>
                            </Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction='right' onClick={() => handleClick('right')}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider