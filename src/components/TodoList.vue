<template lang="pug">
  v-ons-page
    v-ons-toolbar
      .left
        v-ons-back-button
      .center
        h5 Week1. Todolist
    .todolist
      .nav
        ul
          li
            a(
              @click="isActive = 'all'"
              :class="{'active': isActive === 'all'}"
            ) My Tasks
          li
            a(
              @click="isActive = 'progress'"
              :class="{'active': isActive === 'progress'}"
            ) In Progress
          li
            a(
              @click="isActive = 'completed'"
              :class="{'active': isActive === 'completed'}"
            ) Completed
      .items
        .additem(v-on:click="addTodo")
          font-awesome-icon(:icon="['fas', 'plus']")
        .item_row(v-for="(item, key) in filteredItems" :key="key" :style="{'height: 200px': item.id === cacheTodo.id}")
          .title
            .texts(v-if="item.id !== cacheTodo.id")
              label(
                :for="item.id"
                :class="{'completed': item.completed}"
              ) {{item.title}}
            .editing(v-if="item.id === cacheTodo.id")
              input(
                type="text"
                v-model="cacheTitle"
                v-on:keyup.enter="doneEdit(item)"
              )
            // 固定不變的東西
            .checkbox(v-on:click="item.completed = !item.completed")
              input(type="checkbox" :id="key" v-model="item.completed")
            .star
              font-awesome-icon(:icon="['far', 'star']")
            .edit(@click="editTodo(item)")
              font-awesome-icon(:icon="['fas', 'pencil-alt']")
          hr
          .content
            .texts(v-if="item.id !== cacheTodo.id")
              .date
                font-awesome-icon(:icon="['far', 'calendar-alt']")
                span {{item.time}}
              .file
                font-awesome-icon(:icon="['far', 'file']")
              .comment
                font-awesome-icon(:icon="['far', 'comment-dots']")
            .editing(v-if="item.id === cacheTodo.id")
              .date
                font-awesome-icon(:icon="['far', 'calendar-alt']")
                span Deadline
                input(type="datetime-local")
              .file
                font-awesome-icon(:icon="['far', 'file']")
                span File
                input(type="file" id="file")
                label(for="file")
                  font-awesome-icon(:icon="['fas', 'plus-square']")
              .comment
                font-awesome-icon(:icon="['far', 'comment-dots']")
                span comment
                textarea(v-model="cacheComment")
          .btns(v-if="item.id === cacheTodo.id")
            button.cancel(v-on:click="cancelEdit()") Cancel
            button.add(v-on:click="doneEdit(item)") Add Task
</template>

<script>
const items = [
  {
    id: '1',
    title: 'type something here...',
    time: '01/01',
    file: '',
    comment: '123',
    completed: false
  },
  {
    id: '2',
    title: 'type something here...',
    time: '07/07',
    file: '',
    comment: '456',
    completed: false
  },
  {
    id: '3',
    title: 'type something here...',
    time: '12/31',
    file: '',
    comment: '789',
    completed: false
  }
]

var filters = {
  all (items) {
    return items
  },
  progress (items) {
    return items.filter(function (item) {
      return !item.completed
    })
  },
  completed (items) {
    return items.filter(function (item) {
      return item.completed
    })
  }
}

export default {
  name: 'TodoList',
  data () {
    return {
      items: items,
      completed: false,
      isActive: 'all',
      cacheTodo: {},
      cacheTitle: '',
      cacheComment: ''
    }
  },
  methods: {
    push (Page) {
      this.$emit('push-page', Page)
    },
    addTodo () {
      const timestamp = Math.floor(Date.now())
      this.items.unshift(
        {
          id: timestamp,
          title: '',
          time: '',
          file: '',
          comment: '',
          completed: false
        }
      )
      this.newTodo = ''
    },
    editTodo (item) {
      console.log(item)
      this.cacheTodo = item
      this.cacheTitle = item.title
      this.cacheComment = item.comment
    },
    doneEdit (item) {
      if (!this.cacheTitle.trim()) {
        return
      }
      item.title = this.cacheTitle.trim()
      item.comment = this.cacheComment
      this.cacheTodo = {}
    },
    cancelEdit () {
      this.cacheTodo = {}
      this.cacheTitle = ''
      this.cacheComment = ''
    }
  },
  computed: {
    filteredItems () {
      return filters[this.isActive](this.items)
    }
  }
}
</script>

<style lang="sass">

</style>
