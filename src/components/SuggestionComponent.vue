<template>
    <div class="suggestions-list">
        <div v-for="friend in suggestFriend" class="suggestion-usd">
            <img v-if="friend.avatar == null" src="../assets/images/resources/s1.png" alt="">
            <img v-else :src="friend.avatar" alt="">
            <div class="sgt-text">
                <h4>{{ friend.name }}</h4>
                <span>{{ friend.experience }}</span>
            </div>
            <span v-on:click="addFriend(friend.id)"><i class="fa fa-plus"></i></span>
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
                user: [],
                token: sessionStorage.getItem("token"),
                suggestFriend: [],
            }
        },
        created() {
            /***********************************************************************************************************
             *********************** Initialize data when this component is used. **************************************
             **********************************************************************************************************/
            this.listSuggestFriend();
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

            async addFriend(friendId) {
                try {
                    const callAPI = await axios.get('http://localhost/wise_api2/public/api/add-friend', {
                        headers: {
                            "Content-type": "application/json",
                            'Authorization': 'Bearer ' + this.token,
                        },
                        params: {
                            friend_id: friendId
                        },
                        /************ Attach param for request here ***************/
                    });
                    if (callAPI.data.code === 200) {
                        this.listSuggestFriend();
                    } else {
                        alert("Call API failed! Check again!");
                    }
                } catch (err) {
                    console.log(err);
                }
            },
            /**
             * Call API sample
             */
            async listSuggestFriend() {
                try {
                    const callAPI = await axios.get('http://localhost/wise_api2/public/api/list-suggest-friend', {
                        headers: {
                            "Content-type": "application/json",
                            'Authorization': 'Bearer ' + this.token,
                        },
                        /************ Attach param for request here ***************/
                    });
                    if (callAPI.data.code === 200) {
                        this.suggestFriend = callAPI.data.data;
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