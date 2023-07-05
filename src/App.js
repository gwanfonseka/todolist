import { Container, Row, Col } from 'react-bootstrap'
import Nav from './components/Nav'
import Task from './components/Task'
import Summary from './components/Summary'

const App = () => {
    return (
        <>
            <Nav />
            <Container>
                <Row className="mainContent">
                    <Col lg={6} md={6} sm={6} xs={12}>
                        <Task />
                    </Col>
                    <Col lg={6} md={6} sm={6} className="hideOnXs">
                        <Summary />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default App