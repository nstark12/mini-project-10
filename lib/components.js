class Component {
    constructor(children) {
        this.children = children ? children: []
    }

    render() {
        throw new Error('Child class must implement render() method.')
    }

    renderInnerHTML() {
        for (const child of this.children) {
            if (typeof child === 'string') {
                return child
            }
            // else
            child.render()
        }
    }
}

module.exports = Component