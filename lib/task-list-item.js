const Component = require('./component.js')

class TaskListItem extends Component{
    constructor(children) {
        super(children, priority = false)
        this.priority = priority
    }

    render() {

        const priorityClass = this.priority ? 'tasks-item-priority' : ''

        return `<li class="task-item ${priorityClass}">${this.renderInnerHTML()}</li>`
    }

}

module.exports = TaskListItem