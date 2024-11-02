<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card-body">
                <h1>{{ msg }}</h1>
                <h3>Comment box:</h3>
                <table border="1">
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Email</td>
                            <td>Address</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users">
                            <td>{{ user.id }}</td>
                            <td>{{ user.email }}</td>
                            <td>{{ user.address }}</td>
                            <td><button v-on:click="deleteUser(user.id)">Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    // import Vue from 'vue'
    import axios from 'axios'
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
                user: []
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
            }
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
                    const callAPI = await axios.get('http://localhost/DemoAPI/public/api/list-user', {
                        headers: {
                            "Content-type": "application/json",
                            'Authorization': 'Bearer 1|nnmpUuZbS1ozXar1bpSbnDZizAhn7WH1ZwVAtnaP7856c306'
                        },
                        /************ Attach param for request here ***************/
                    });
                    if (callAPI.data.code === 200) {
                        this.user = callAPI.data.data;
                    } else {
                        alert("Call API failed! Check again!");
                    }
                } catch (err) {
                    console.log(err);
                }
            },
            async deleteUser(id) {
                try {
                    const callAPI = await axios.delete('http://localhost/DemoAPI/public/api/delete-user/' + id, {
                        headers: {
                            "Content-type": "application/json",
                            'Authorization': 'Bearer 1|nnmpUuZbS1ozXar1bpSbnDZizAhn7WH1ZwVAtnaP7856c306'
                        },
                        /************ Attach param for request here ***************/
                    });
                    this.callAPI();
                } catch (err) {
                    console.log(err);
                }
            }
        },
    }
</script>

<style>
/**
* Custom local style css
*/
</style>
