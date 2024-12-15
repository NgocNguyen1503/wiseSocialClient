<template>
  <div class="wrapper">
    <div class="sign-in-page">
      <div class="signin-popup">
        <div class="signin-pop">
          <div class="row">
            <div class="col-lg-6">
              <div class="cmp-info">
                <div class="cm-logo">
                  <img src="/src/assets/images/cm-logo.png" alt="">
                </div>
                <!--cm-logo end-->
                <img src="/src/assets/images/cm-main-img.png" alt="">
              </div>
              <!--cmp-info end-->
            </div>
            <div class="col-lg-6">
              <div class="login-sec">
                <ul class="sign-control">
                  <li data-tab="tab-1" v-on:click="chooseType('login')" :class="{ current: choseType == 'login' }"><a
                      href="#" title="">サインイン</a></li>
                  <li data-tab="tab-2" v-on:click="chooseType('register')" :class="{ current: choseType == 'register' }">
                    <a href="#" title="">サインアップ</a></li>
                </ul>
                <div class="sign_in_sec" :class="{ current: choseType == 'login' }" id="tab-1">
                  <h3>サインイン</h3>
                  <div class="form">
                    <div class="row">
                      <div class="col-lg-12 no-pdd">
                        <div class="sn-field">
                          <input type="text" name="email" placeholder="メール" v-model="loginEmail">
                          <i class="fa fa-user"></i>
                          <span class="text-danger msgError">{{ loginErrEmailMsg }}</span>
                        </div>
                        <!--sn-field end-->
                      </div>
                      <div class="col-lg-12 no-pdd">
                        <div class="sn-field">
                          <input type="password" name="password" placeholder="Password" v-model="loginPassword">
                          <i class="fa fa-lock"></i>
                          <span class="text-danger msgError">{{ loginErrEmailMsg }}</span>
                        </div>
                      </div>
                      <div class="col-lg-12 no-pdd">
                        <button type="submit" value="submit" v-on:click="login()">サインイン</button>
                      </div>
                    </div>
                  </div>
                  <!--login-resources end-->
                </div>
                <!--sign_in_sec end-->
                <div class="sign_in_sec" :class="{ current: choseType == 'register' }" id="tab-2">
                  <!--signup-tab end-->
                  <div class="dff-tab current" id="tab-3">
                    <div class="form">
                      <div class="row">
                        <div class="col-lg-12 no-pdd">
                          <div class="sn-field">
                            <input type="email" name="email" v-model="registerEmail" placeholder="メール">
                            <i class="fa fa-envelope"></i>
                            <span class="text-danger msgError">{{ registerErrEmailMsg }}</span>
                          </div>
                        </div>
                        <div class="col-lg-12 no-pdd">
                          <div class="sn-field">
                            <input type="text" name="name" v-model="registerFullName" placeholder="氏名">
                            <i class="fa fa-user"></i>
                            <span class="text-danger msgError">{{ registerErrFullNameMsg
                            }}</span>
                          </div>
                        </div>
                        <div class="col-lg-12 no-pdd">
                          <div class="sn-field">
                            <input type="text" name="country" v-model="registerCountry" placeholder="国">
                            <i class="fa fa-globe"></i>
                            <span class="text-danger msgError">{{ registerErrCountryMsg
                            }}</span>
                          </div>
                        </div>
                        <div class="col-lg-12 no-pdd">
                          <div class="sn-field">
                            <input type="password" v-model="registerPassword" name="password" placeholder="Password">
                            <i class="fa fa-lock"></i>
                            <span class="text-danger msgError">{{ registerErrPasswordMsg
                            }}</span>
                          </div>
                        </div>
                        <div class="col-lg-12 no-pdd">
                          <div class="sn-field">
                            <input type="password" v-model="registerRePassword" name="repeat-password"
                              placeholder="Repeat Password">
                            <i class="fa fa-lock"></i>
                            <span class="text-danger msgError">{{ registerErrRePasswordMsg
                            }}</span>
                          </div>
                        </div>
                        <div class="col-lg-12 no-pdd">
                          <div class="checky-sec st2">
                            <div class="fgt-sec">
                              <input type="checkbox" v-on:click="registerCheckAllow()"
                                :checked="this.registerTOS === true" name="cc" id="c2">
                              <label for="c2">
                                <span></span>
                              </label>
                              <small>はい、Wise の利用規約を理解し、同意します。</small>
                            </div>
                            <!--fgt-sec end-->
                          </div>
                        </div>
                        <div class="col-lg-12 no-pdd row">
                          <button :class="{ 'cursor-not-allow': this.registerTOS === false }"
                            :disabled="this.registerTOS === false" v-on:click="registerValidation()">開始する</button>
                          <img class="btn-register" :class="{ 'display-none': this.registerProcess === false }"
                            width="40px" height="40px" src="/src/assets/images/ezgif-3-090377b993.gif" alt="" srcset="">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--login-sec end-->
            </div>
          </div>
        </div>
        <!--signin-pop end-->
      </div>
    </div>
    <!--sign-in-page end-->
  </div>
</template>

<script>
import axios from 'axios';

//import Vue from 'vue'
//import axios from 'axios'
// import component1 from 'component1'
// import component2 from 'component2'

export default {
  /***********************************************************************************************************
   ******************************* Pass data to child component **********************************************
   **********************************************************************************************************/
  props: ["txtMSG"],
  // components: {component1, component2},
  data() {
    /***********************************************************************************************************
     ******************************* Initialize global variables ***********************************************
     **********************************************************************************************************/
    return {
      msg: 'Tôi là thành phần con.',
      choseType: 'login',
      registerEmail: '',
      registerErrEmailMsg: '',
      registerPassword: '',
      registerErrPasswordMsg: '',
      registerCountry: '',
      registerErrCountryMsg: '',
      registerFullName: '',
      registerErrFullNameMsg: '',
      registerRePassword: '',
      registerErrRePasswordMsg: '',
      registerTOS: false,
      registerProcess: false,
      // For login form
      loginEmail: '',
      loginPassword: '',
      loginTOS: false,
      loginProcess: false,
      loginErrEmailMsg: '',
      loginErrPasswordMsg: ''
    }
  },
  /**
   * Define global service socket
   *
   * Listing event from socket.io server
   * "ServerSendCommentToClient" is the name of the channel that sends notifications to all clients installed in the server socket
   */
  sockets: {
    // Send data to server
    ClientSendCommentToServer: function (responseComment) {
      this.comment = responseComment;
    },
    // Listen event from server and render data
    ServerSendCommentToClient: function (responseComment) {
      // Push to the comment list
      if (responseComment.type === 'comment' && this.transaction.id == responseComment.transaction_id) {
        this.pushCommentToList(responseComment);
        this.$forceUpdate();
      }
    },
  },
  created() {
    /***********************************************************************************************************
     *********************** Initialize data when this component is used. **************************************
     **********************************************************************************************************/
    console.log('Init created component and call to function get data from api server.');
    this.joinRoom();
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
    // Join a room
    joinRoom() {
      this.$socket.emit('ClientSendCommentToServer', {
        // Pass param obj
        transaction_id: 1
      });
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

    /**
     * Default local function chose login or register
     * 
     * @param type string 'login' or 'register'
     */
    chooseType(type) {
      this.choseType = type;
    },

    /**
     * Validate function.
     * 
     * Show msg error or endable button register
     * Call to function register and send data to server.
     */
    registerValidation() {
      // Validate email
      if (this.registerEmail == '') {
        this.registerErrEmailMsg = 'Email ユーザ名を入力してください。';
      } else {
        this.registerErrEmailMsg = '';
      }
      // Validate FullName
      if (this.registerFullName == '') {
        this.registerErrFullNameMsg = '氏名 ユーザ名を入力してください。';
      } else {
        this.registerErrFullNameMsg = '';
      }
      // Validate country
      if (this.registerCountry == '') {
        this.registerErrCountryMsg = '国 ユーザ名を入力してください。';
      } else if (this.registerCountry.length < 4) {
        this.registerErrCountryMsg = '国名は 3 文字以上である必要があります';
      } else {
        this.registerErrCountryMsg = '';
      }
      // Validate password
      if (this.registerPassword == '') {
        this.registerErrPasswordMsg = 'Password ユーザ名を入力してください。';
      } else if (this.registerPassword < 8) {
        this.registerErrPasswordMsg = 'Password 名は 8 文字以上である必要があります';
      } else {
        this.registerErrPasswordMsg = '';
      }
      // Validate Repassword
      if (this.registerPassword != this.registerRePassword) {
        this.registerErrRePasswordMsg = '確認用パスワードが間違っています。';
      } else {
        this.registerErrRePasswordMsg = '';
      }
      // Check all var error
      if (
        this.registerErrRePasswordMsg == '' && this.registerErrPasswordMsg == '' &&
        this.registerErrCountryMsg == '' && this.registerErrFullNameMsg == '' &&
        this.registerErrEmailMsg == ''
      ) {
        // Call to server
        this.register();
      }
      return null;
    },

    registerCheckAllow() {
      if (this.registerTOS === true) {
        this.registerTOS = false;
      } else if (this.registerTOS === false) {
        this.registerTOS = true;
      }
    },

    login() {
      if (this.loginEmail.length <= 0) {
        this.loginErrEmailMsg = 'Email アドレスを入力してください。';
      } else {
        this.loginErrEmailMsg = '';
      }
      if (this.loginPassword.length <= 0) {
        this.loginErrPasswordMsg = 'Password を入力してください。';
      } else {
        this.loginErrPasswordMsg = '';
      }
      if (this.loginErrEmailMsg == '' && this.loginErrPasswordMsg == '') {
        this.processLogin();
      }
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

    /**
     * Async await function register
     * 
     * Call to api endpoint /register
     * Method post pass param
     * Regirect router /auth
     */
    async register() {
      // Disabled button register
      this.registerCheckAllow();
      this.registerProcess = true;
      try {
        const callRegisterAPI = await axios.post('http://localhost/wise_api2/public/api/register', {
          // Pass param to header
          name: this.registerFullName,
          email: this.registerEmail,
          password: this.registerPassword,
          re_password: this.registerRePassword
        }).then(function (res) {
          // Api response success
          if (res.data.code == 200) {
            window.location.reload();
          } else {
            alert(res.data.message);
          }
        }).catch(function (err) {
          // API response error code
          alert(err);
        });
      } catch (err) {
        // Call to api failed
        console.log(err);
      }
      // Enabled button register
      this.registerCheckAllow();
      this.registerProcess = false;
    },

    /**
     * Async await function register
     * 
     * Call to api endpoint /register
     * Method post pass param
     * Regirect router /auth
     */
    async processLogin() {
      // Disabled button register
      this.loginProcess = true;
      try {
        const callLoginAPI = await 
        axios.post('http://localhost/wise_api2/public/api/login', {
          // Pass param to header
          email: this.loginEmail,
          password: this.loginPassword,
        }).then(function (res) {
          // Api response success
          if (res.data.code == 200) {
            window.location.href = "/index";
          } else {
            alert(res.data.message);
          }
        }).catch(function (err) {
          // API response error code
          alert(err);
        });
      } catch (err) {
        // Call to api failed
        console.log(err);
      }
      // Enabled button register
      this.registerCheckAllow();
      this.registerProcess = false;
    }
  },


}
</script>

<style>
/**
* Custom local style css
*/
.msgError {
  font-size: 10px !important;
  right: 0px !important;
}

.cursor-not-allow {
  cursor: not-allowed !important;
}
</style>