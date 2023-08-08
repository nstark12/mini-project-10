const Component = require('./component.js')

class TaskList extends Component {
    render(children) {
        super(children)

    }
    render() {
        return `<ul>class="tasks">${this.renderInnerHTML()}</ul>`
    }

}

module.exports = TaskList