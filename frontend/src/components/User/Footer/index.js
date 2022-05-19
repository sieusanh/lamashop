import { Facebook, Instagram, Twitter, Pinterest, Room, Phone, MailOutlined } from '@material-ui/icons'
import { Container, Left, Logo, Desc, SocialContainer, SocialIcon, Center, 
        Title, List, ListItem, Right, ContactItem, Payment } from './StyledComponents'

function Footer() {
    return (
        <Container>
            <Left>
                <Logo>LAMA.</Logo>
                <Desc>
                    There are many variations of passages of Lorem Ipsum available, but 
                    the majority have suffered alteration in some form, by injected 
                    humour, or randomised words which don't look even slightly believable.
                </Desc>
                <SocialContainer>
                    <SocialIcon color='3B5999'>
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color='E4405F'>
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color='55ACEE'>
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color='E60023'>
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>WishList</ListItem>
                    <ListItem>WishList</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight: '10px'}}/>
                    622 Dixie Path, South Tobinchester 98336
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight: '10px'}}/>
                    +1 234 56 78
                </ContactItem>
                <ContactItem>
                    <MailOutlined style={{marginRight: '10px'}}/>
                    contact@lama.dev
                </ContactItem>
                <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
            </Right>
        </Container>
    )
}

export default Footer 