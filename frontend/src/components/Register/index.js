import { Container, Wrapper, Title, Form, Input, Agreement, Button } from './StyledComponents'

function Register() {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder='First name' />
                    <Input placeholder='Last name' />
                    <Input placeholder='Username' />
                    <Input placeholder='Email' />
                    <Input placeholder='Password' />
                    <Input placeholder='Confirm password' />
                    <Agreement>
                        By creating an account, i consent to the processing of my personal data 
                        in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register