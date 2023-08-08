const Header = require('../lib/header')
const { formatDate } = require('../lib/date')

describe('Header Class', () => {
    it('renders correctly with the date', () => {
        // arrange
        const todaysDate = formatDate(new (Date()))
        const innerHTML = `<header class="header"><h1>Todo Today</h1><p>${todaysDate}</p></header>`
        const header = new Header()
        // act
        const headerHTML = header.render()
        // assert
        expect(headerHTML).toBe(innerHTML)
    })
})