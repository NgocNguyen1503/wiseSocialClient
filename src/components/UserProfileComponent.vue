<template>
    
<div class="user-data full-width">
    <div class="user-profile">
        <div class="username-dt">
            <div class="usr-pic">
                <img v-if="!this.users.avatar" src="../assets/images/resources/user-pic.png" alt="">
                <img v-else :src="this.users.avatar" alt="">
            </div>
        </div>
        <!--username-dt end-->
        <div class="user-specs">
            <h3>{{ this.users.name }}</h3>
            <span>{{ this.users.overview }}</span>
        </div>
    </div>
    <!--user-profile end-->
    <ul class="user-fw-status">
        <li>
            <!-- Following -->
            <h4>フォロー中</h4>
            <span>{{ this.users.following }}</span>
        </li>
        <li>
            <!-- Followers -->
            <h4>フォロワー</h4>
            <span>{{ this.users.followers }}</span>
        </li>
        <li>
            <a :href="'/my-profile?user_id=' + this.users.id" title="">プロフィールを表示</a>
        </li>
    </ul>
</div>
</template>

<script>
    //import Vue from 'vue'
    import axios from 'axios'
    // import component1 from 'component1'
    // import component2 from 'component2'

    export default {
        /***********************************************************************************************************
         ******************************* Pass data to child component **********************************************
         **********************************************************************************************************/
        // props: [variable1, variable2],
        // components: {component1, component2},
        data() {
            /***********************************************************************************************************
             ******************************* Initialize global variables ***********************************************
             **********************************************************************************************************/
            return {
                msg: 'Hello world!',
                users: {},
                token: sessionStorage.getItem("token"),
            }
        },
        created() {
            /***********************************************************************************************************
             *********************** Initialize data when this component is used. **************************************
             **********************************************************************************************************/
            this.callAPI();
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
                    let callAPI = await axios.get('http://localhost/wise_api2/public/api/my-infor', {
                        /************ Attach param for request here ***************/
                        headers: {
                            "Content-type" : "application/json",
                            "Authorization": "Bearer " + this.token, 
                        }
                    });
                    if (callAPI.data.code == 200) {
                        this.users = callAPI.data.data;
                    } else {
                        alert("Call api failed, please check again!");
                    }
                    console.log(callAPI.data);
                } catch (err) {
                    console.log(err);
                }
            },
            async deleteUser(id) {
                try {
                    const callAPI = await axios.delete('http://localhost/DemoAPI/public/api/delete-user/' + id, {
                        /************ Attach param for request here ***************/
                        headers: {
                            "Content-type" : "application/json",
                            "Authorization": "Bearer 28|TK2GDxdOitONowsftHVRRJhZeYFBZR2tQwdJjoSKfe2d9037" 
                        }
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