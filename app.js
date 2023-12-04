new Vue({
    el: '#app',
    data: {
        newTodo: '',
        todos: []
    },
    methods: {
        addTodo: function() {
            if (this.newTodo.trim() !== '') {
                this.todos.push({ text: this.newTodo });
                this.newTodo = '';
            }
        },
        deleteTodo: function(index) {
            this.todos.splice(index, 1);
        },
        editTodo: function(index) {
            const newTodoText = prompt('Edit Todo:', this.todos[index].text);
            if (newTodoText !== null) {
                this.$set(this.todos, index, { text: newTodoText.trim() });
            }
        }
    }
});
