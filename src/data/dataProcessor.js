import data from './data.json'

const procData = []
const keys = Object.keys(data)

keys.forEach((key) => {
    data[key]['License/Permit'] = key
    procData.push(data[key])
})

export default procData