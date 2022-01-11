import { Container, Wrapper, Title, Form, Input, Button, Link } from './StyledComponents'

function Login() {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder='Username' />
                    <Input placeholder='Password' />
                    <Button>LOGIN</Button>
                    <Link>FORGET PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login