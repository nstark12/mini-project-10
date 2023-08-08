const TaskListItem = require('../lib/task-list-item')

describe('TaskListItem Class', () => {
    it('renders correctly', () => {
        const listItemText = 'Test'
        const priorityClass = 'tasks-item-priority'
        const innerHTML = `<li class="tasks-item" ${priorityClass}">${listItemText}</li>`

        const listItem = new TaskListItem([listItemText], true)
        const listItemHTML = listItem.render()

        expect(listItemHTML).toBe(innerHTML)
    })
})