const Component = require('../lib/components.js')

describe('Component Class', () => {
    it('render() throws an error when called directly', () => {
        // act
        const component = new Component()
        const makeComponentRender = () => component.render()

        // assert
        expect(makeComponentRender).toThrow(new Error('Child class must implement render() method.'))
    }) 
})