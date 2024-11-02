<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h2 :class="clsColor">{{ demo }}</h2>
    <h3 :class="clsColor" v-on:click="changeColor()">{{ demo }}</h3>
    <button v-on:click="plus()">Count</button>: <p>{{ count }}</p>
    <br>
    <input type="text" placeholder="Nhập dữ liệu tại đây" v-model="txt_data" v-on:keyup="updateTxtData">
    <p style="color: rgb(8, 4, 128);">{{ txt_data }}</p>
    <p style="color: rgb(85, 4, 128);">length: {{ word_count }}</p>
    <p class="red" v-if="mgs_error == true">Bạn nhập quá 255 kí tự</p>
    <p class="green" v-else>Bạn có thể nhập tối đa 255 kí tự</p>
    <br>
    <h3>Danh sách người dùng</h3>
    <table border="1">
      <thead>
          <td>id</td>
          <td>email</td>
          <td>name</td>
          <td>action</td>
      </thead>
      <tbody>
        <tr v-for="user in list_user">
          <td>{{ user.id }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.name }}</td>
          <td><button v-on:click="removeUser(user.id)">Remove</button></td>
        </tr>
      </tbody>
    </table>
    <br>
    <input type="text" name="email" placeholder="Nhập email" v-model="email">
    <input type="text" name="name" placeholder="Nhập tên" v-model="name">
    <button v-on:click="store()">Add new</button>
  </div>
</template>

<script>
    // import Vue from 'vue'
    // import axios from 'axios'
    // import component1 from 'component1'
    // import component2 from 'component2'

    export default {
        /***********************************************************************************************************
         ******************************* Pass data to child component **********************************************
         **********************************************************************************************************/
        // prop: [variable1, variable2],
        // components: {component1, component2},
        data() {
            /***********************************************************************************************************
             ******************************* Initialize global variables ***********************************************
             **********************************************************************************************************/
            return {
                msg: 'Hello world!',
                demo: 'This is a demo.',
                clsColor: 'red',
                count: 0,
                txt_data: '',
                word_count: 0,
                mgs_error: false,
                list_user: [
                    {
                        id: 1,
                        email: "feyd153@gmail.com",
                        name: "Fey",
                        age: 21,
                        gender: 'male'
                    },
                    {
                        id: 2,
                        email: "nguyengoc0315@gmail.com",
                        name: "Ngoc",
                        age: 21,
                        gender: 'female'
                    },
                ],
                email: '',
                name: '',
            }
        },
        created() {
            /***********************************************************************************************************
             *********************** Initialize data when this component is used. **************************************
             **********************************************************************************************************/
            console.log('Init created component and call to function get data from api server.');
        },
        mounted() {
            /***********************************************************************************************************
             ******************** Once created, the interface is displayed and calls mounted. **************************
             **********************************************************************************************************/
        },
        watch: {
            /***********************************************************************************************************
             ********************************* Methods change value for a variable *************************************
             **********************************************************************************************************/
            msg() {
                console.log("When the value of the msg variable changes, this method will be executed.");
            },
            word_count() {
              if (this.word_count > 255) {
                this.mgs_error = true;
              } else {
                this.mgs_error = false;
              }
            },
        },
        computed: {
            appendMsg() {
                return msg + "Process the value and assign the value to the corresponding variable the var has changed.";
            }
        },
        methods: {
            /***********************************************************************************************************
             ******************************* Default functions that handle local data **********************************
             **********************************************************************************************************/

            /**
             * Example default function not using param
             */
            defaultFunction() {
                this.msg = "Replace message here!";
            },
            changeColor () {
              if (this.clsColor === 'red') {
                this.clsColor = 'green';
              } else {
                this.clsColor = 'red';
              }
            },
            plus () {
              this.count += 1;
            },
            updateTxtData () {
              this.word_count = this.txt_data.length;
            },
            removeUser (id) {
              alert('Remove user with id: ' + id);
              for (let i = 0; i < this.list_user.length; i++) {
                if (id == this.list_user[i].id) {
                  this.list_user.splice(i, 1);
                }
              }
            },
            store() {
              // Get max value
              let max = 0;
              for (let i = 0; i < this.list_user.length; i++) {
                if (this.list_user[i].id > max) {
                  max = this.list_user[i].id;
                }
              }
              let newUser = {
                id: max + 1,
                email: this.email,
                name: this.name,
              };
              this.list_user.push(newUser);
              this.email = '';
              this.name = '';
            },

            /**
             * Example default function using param 
             *
             * @param int pageNum number of page
             * @return boolean
             */
            defaultFunctionUsingParam(pageNum) {
                console.log(pageNum);
                return false;
            },

            /***********************************************************************************************************
             ******* Async and await functions for manipulating server-side data through internal API protocols ********
             **********************************************************************************************************/

            /**
             * Call API sample
             */
            async callAPI() {
                try {
                    const callAPI = await axios.get('/apiendpoint', {
                        /************ Attach param for request here ***************/
                    });
                    console.log(callAPI.data);
                } catch (err) {
                    console.log(err);
                }
            },
        },
    }
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}

.red {
  color: red;
}

</style>
