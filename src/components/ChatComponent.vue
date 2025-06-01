<template>
    <!--chatbox-list end-->
    <div class="" id="section-chat">
        <div class="col-md-12 row chat-head"></div>
        <div class="col-md-12 chat-content-top">
            <h1 class="font-bold">メッセージ</h1>
        </div>
        <hr>
        <!-- List friends and message -->
        <div class="col-md-12 msgs-list">
            <!--msg-title end-->
            <div class="messages-list">
                <ul>
                    <li v-for="friend in friends" v-on:click="showBoxMsg(friend)">
                        <div class="usr-msg-details">
                            <div class="usr-ms-img">
                                <img v-if="friend.avatar != null" :src="friend.avatar" alt="">
                                <img v-else src="../assets/images/resources/m-img1.png" alt="">
                            </div>
                            <div class="usr-mg-info">
                                <h3>{{ friend.name }}</h3>
                                <p>{{ friend.last_message }} <img src="../assets/images/smley.png" alt=""></p>
                            </div>
                            <!--usr-mg-info end-->
                            <span class="posted_time">{{ friend.last_sent }}</span>
                        </div>
                        <!--usr-msg-details end-->
                    </li>
                </ul>
            </div>
            <!--messages-list end-->
        </div>
        <div class="clear-fix"></div>
        <div class="col-md-12 chat-content-foobar">
            <img class="fl-rgt" src="../assets/images/logo2.png" alt="">
        </div>
    </div>
    <div class="chat-box" v-if="showChatBox">
        <div class="chat-box-head">
            <div class="chat-box-head-friend">
                <img class="chat-box-friend-avatar" src="../assets/images/resources/s1.png" alt="">
                <p>{{ this.selectedFriend?.name }}</p>
            </div>
            <div class="chat-box-close" v-on:click="hideBoxMsg()">
                <p class="fa fa-times"></p>
            </div>
        </div>
        <div class="chat-box-content">
            <div class="listmsg" v-for="msg in listMessage">
                <div class="my-msg" v-if="msg.my_message == 'me'">
                    <p>{{ msg.message }}</p>
                    <span class="send-date">{{ msg._created_at }}</span>
                </div>
                <div class="friend-msg" v-else>
                    <p>{{ msg.message }}</p>
                    <span class="send-date">{{ msg._created_at }}</span>
                </div>
            </div>
        </div>
        <div class="chat-box-send-msg">
            <div class="chat-box-text-field">
                <input type="text" v-model="messageContent" class="form-control cls-text-field"
                    placeholder="type your message">
            </div>
            <div class="chat-box-send-btn">
                <i class="fa fa-send" v-on:click="sendMessage()"></i>
            </div>
        </div>
    </div>
</template>

<script>
//import Vue from 'vue'
import axios from 'axios'
// import component1 from 'component1'
// import component2 from 'component2'

export default {
    sockets: {
        ClientSendMessageToServer: function (responseMessage) {
            this.messageContent = responseMessage;
        },
        ServerSendMessageToClient: function (responseMessage) {
            if (responseMessage.type === 'message') {
                if (responseMessage.user_id == this.selectedFriend.id) {
                    responseMessage.my_message = "friend";
                }
                this.listMessage.push(responseMessage);
                this.$forceUpdate();
            }
        },
    },
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
            friends: [],
            token: sessionStorage.getItem("token"),
            showChatBox: false,
            selectedFriend: null,
            listMessage: null,
            roomId: 0,
            messageContent: "",
        }
    },
    created() {
        /***********************************************************************************************************
         *********************** Initialize data when this component is used. **************************************
         **********************************************************************************************************/
        this.getFriends();
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
        selectedFriend() {
            this.getListMessage();
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
         * Call API sample
         */
        async getFriends() {
            try {
                const callAPI = await axios.get('http://localhost/wise_social_api/public/api/list-friend', {
                    /************ Attach param for request here ***************/
                    headers: {
                        "Content-type": "application/json",
                        "Authorization": "Bearer " + this.token
                    }
                });
                if (callAPI.data.code == 200) {
                    this.friends = callAPI.data.data;

                } else {
                    alert("Call api failed, please check again!");
                }
            } catch (err) {
                console.log(err);
            }
        },

        showBoxMsg(friend) {
            this.showChatBox = true;
            this.selectedFriend = friend;
            let dataMsgSendToSocket = {
                "id": 0,
                "name": "",
                "avatar": "user-pro-img.png",
                "message": "",
                "user_id": "",
                "friend_id": "",
                "is_view": 0,
                "created_at": "",
                "my_message": "me",
                "_created_at": "",
                "room_id": this.roomId,
                // "type" => "message",
                // "action" => "send-message",
            };
        },

        hideBoxMsg() {
            this.showBoxMsg = false;
            this.selectedFriend = null;
        },

        async getListMessage() {
            try {
                const callAPI = await axios.get('http://localhost/wise_social_api/public/api/list-message?friendId=' + this.selectedFriend.id, {
                    /************ Attach param for request here ***************/
                    headers: {
                        "Content-type": "application/json",
                        "Authorization": "Bearer " + this.token
                    }
                });
                if (callAPI.data.code == 200) {
                    this.listMessage = callAPI.data.data.messages;
                    this.roomId = callAPI.data.data.room_id;
                    let dataMsgSentToSocket = {
                        "id": 0,
                        "name": "",
                        "avatar": "",
                        "message": "",
                        "user_id": "",
                        "friend_id": "",
                        "is_view": 0,
                        "created_at": "",
                        "my_message": "me",
                        "_created_at": "",
                        "room_id": this.roomId,
                        "type": "message",
                        "action": "join"
                    }
                    this.$socket.emit(
                        'ClientSendMessageToServer',
                        dataMsgSentToSocket
                    );
                } else {
                    alert("Call api failed, please check again!");
                }
            } catch (err) {
                console.log(err);
            }
        },

        async sendMessage() {
            try {
                let formData = new FormData();
                formData.append('friend_id', this.selectedFriend.id);
                formData.append('room_id', this.roomId);
                formData.append('message_content', this.messageContent);
                const callAPI = await axios.post('http://localhost/wise_social_api/public/api/send-message',
                    formData
                    , {
                        /************ Attach param for request here ***************/
                        headers: {
                            "Content-type": "multipart/form-data",
                            "Authorization": "Bearer " + this.token
                        }
                    });
                if (callAPI.data.code == 200) {
                    this.messageContent = "";
                    this.$socket.emit(
                        'ClientSendMessageToServer',
                        callAPI.data.data
                    );
                } else {
                    alert("Call api failed, please check again!");
                }
            } catch (err) {
                console.log(err);
            }
        }
    },
}
</script>