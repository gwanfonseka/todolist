import axios from 'axios'

const generateName = async () => {
    const name = await axios.get('https://www.boredapi.com/api/activity')
    return name.data
}

let obj = { generateName }

export default obj