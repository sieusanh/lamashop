import { Remove, Add } from '@material-ui/icons'

import { Container, Wrapper, ImageContainer, Image, InfoContainer, Title, Desc, Price, 
    FilterContainer, Filter, FilterTitle, FilterColor, FilterSize, FilterSizeOption, 
    AddContainer, AmountContainer, Change, Amount, Button } from './StyledComponents'

function ProductInfo() {
    return (
        <Container>
            <Wrapper>
                <ImageContainer>
                    <Image src='https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png'/>
                </ImageContainer>
                <InfoContainer>
                    <Title>Denim Jumpsuit</Title>
                    <Desc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Corrupti vero, velit architecto pariatur natus ad cumque voluptas ex, 
                        animi officiis maiores, molestiae iusto in blanditiis quisquam hic quis illo unde.
                    </Desc>
                    <Price>$ 20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color='black' />
                            <FilterColor color='darkblue' />
                            <FilterColor color='gray' />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Change>
                                <Remove/>
                            </Change>
                            <Amount>1</Amount>
                            <Change>
                                <Add />
                            </Change>
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
        </Container>
    )
}

export default ProductInfo