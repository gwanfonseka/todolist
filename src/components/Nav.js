import { Navbar } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { setTheme } from '../reducers/themeReducer'

const Nav = () => {
    const dispatch = useDispatch()
    const theme = useSelector(state => state.theme)
    document.querySelector('html').setAttribute('data-theme', theme)

    // toggle theme and update state
    const toggleTheme = () => {
        dispatch(setTheme(theme === 'dark' ? 'light' : 'dark'))
        document.querySelector('html').setAttribute('data-theme', theme)
    }

    return (
        <Navbar className="bg-body-tertiary navigationBar">
            <Navbar.Brand className="brandName">
                <i className="bi bi-check2-square"></i> <span className="brnadText">Do-it</span>
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <i className="bi bi-lightbulb-fill themeLight" onClick={() => toggleTheme()}></i>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Nav