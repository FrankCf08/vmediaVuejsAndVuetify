<template>
    <div id="class11">
        <v-list 
        shaped
            class="mx-auto"
            max-width="600">
        <v-list-item-group
            multiple
        >
            <template 
            v-for="todo in todoPlaceholder">
            <v-divider
                v-if="!todo"
                :key="todo.id"
            ></v-divider>

            <v-list-item
                v-else
                :key="todo.id"
                :value="todo.title"
                active-class="deep-purple--text text--accent-4"
                @click="changeCompleted(todo)"
            >
                <template 
                v-slot:default="{ active }"
                >
                <v-list-item-content
                    >
                    <v-list-item-title 
                    v-text="todo.title"
                    ></v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                    <v-checkbox
                    :input-value="active"
                    :true-value="todo"
                    color="deep-purple accent-4"
                    ></v-checkbox>
                </v-list-item-action>
                </template>
            </v-list-item>
            </template>
        </v-list-item-group>
        </v-list>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: 'Class11',

    data(){
        return{
            jsonPlaceholderURL: 'https://jsonplaceholder.typicode.com/todos/',
            todoPlaceholder: [],
        }
    },
    mounted(){
        this.getJSONPlaceholder()   
    },
    methods:{
    getJSONPlaceholder(){
      axios
        .request({
          method:'get',
          url: this.jsonPlaceholderURL
        })
        .then(response => {
          this.todoPlaceholder = response.data
        })
        .catch(error => {
          console.error('errorGetPeople', error)
        })
    },
    changeCompleted(todo){
      todo.completed = !todo.completed
    }
    }
}
</script>
<style scoped>

</style>