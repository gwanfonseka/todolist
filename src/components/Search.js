import { Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { setSearch } from '../reducers/searchReducer'

const Search = () => {
    const dispatch = useDispatch()

    // change state of search filter
    const handleSearch = (event) => {
        event.preventDefault()
        const content = event.target.value
        dispatch(setSearch(content.toLowerCase()))
    }

    return (
        <Form className="searchInput">
            <Form.Control type="text" placeholder="Search tasks" onChange={handleSearch} />
        </Form>
    )
}

export default Search