const Component = require('./component')
const { formatDate } = require('./date')

class Header extends Component {
    render() {
        const todaysDate = formatDate(new Date())
        return `<header class="header"><h1>Todo Today</h1><p>${todaysDate}</p></header>`
    }
}

module.exports = Header