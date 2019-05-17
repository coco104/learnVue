var app5 = new Vue({
    el: '#example',
    data: {
        message: '你是年少的欢喜'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})
new Vue({
    el: '#list',
    data: {
        object: {
            firstthing: '学习Vue',
            secondthing: '作业',
            thirdthing: '睡觉'
        }
    }
})
Vue.component('todo-item', {
    template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">Remove</button>\
    </li>\
  ',
    props: ['title']
})

new Vue({
    el: '#try_todo-list',
    data: {
        newTodoText: '',
        todos: [
            {
                id: 1,
                title: '作业',
            },
            {
                id: 2,
                title: '任务',
            },
            {
                id: 3,
                title: '睡觉'
            }
        ],
        nextTodoId: 4
    },
    methods: {
        addNewTodo: function () {
            this.todos.push({
                id: this.nextTodoId++,
                title: this.newTodoText
            })
            this.newTodoText = ''
        }
    }
})