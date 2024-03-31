import { Row, Col } from 'react-bootstrap'
import Nav from './components/Nav'
import Board from './components/Board'

const App = () => {
    return (
        <>
            <Nav />
            <Row className="mainContent">
                <Board />
            </Row>
        </>
    )
}

export default App