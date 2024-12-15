<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue';
import UserProfileComponent from '@/components/UserProfileComponent.vue';
import SuggestionComponent from '@/components/SuggestionComponent.vue';
import TimelineComponent from '@/components/TimelineComponent.vue';
import MostFollowerComponent from '@/components/MostFollowerComponent.vue';
import MyFavouriteComponent from '@/components/MyFavouriteComponent.vue';
import friendRequestComponent from '@/components/FriendRequestComponent.vue';
</script>

<template>
  <div class="wrapper">
        <!-- Begin header -->
        <HeaderComponent/>
        <!--header end-->

        <main>
            <div class="main-section">
                <div class="container">
                    <div class="main-section-data">
                        <div class="row">
                            <div class="col-lg-3 col-md-4 pd-left-none no-pd">
                                <div class="main-left-sidebar no-margin">
                                    <!-- Begin user-data -->
                                    <UserProfileComponent/>
                                    <!-- End user-data -->
                                    <!--user-data end-->
                                    <div class="suggestions full-width">
                                        <div class="sd-title">
                                            <h3>提案</h3>
                                        </div>
                                        <!--sd-title end-->
                                        <!-- Begin suggestions-list -->
                                        <SuggestionComponent/>
                                        <!--suggestions-list end-->
                                    </div>
                                    <!--suggestions end-->
                                    <div class="tags-sec full-width">
                                        <div class="cp-sec">
                                            <img src="../assets/images/logo2.png" alt="">
                                            <p>&copy; Copyright 2024.</p>
                                        </div>
                                    </div>
                                    <!--tags-sec end-->
                                </div>
                                <!--main-left-sidebar end-->
                            </div>
                            <div class="col-lg-6 col-md-8 no-pd">
                                <!-- begin main-ws-sec -->
                                <TimelineComponent/>
                                <!--main-ws-sec end-->
                            </div>
                            <div class="col-lg-3 pd-right-none no-pd">
                                <div class="right-sidebar">
                                    <!-- Begin widget-about -->
                                    <MostFollowerComponent/>
                                    <!--widget-about end-->
                                    <!-- Top jobs -->
                                    <!-- Begin favourite -->
                                    <MyFavouriteComponent/>
                                    <!--Request friend People-->
                                    <friendRequestComponent/>
                                    <!--End Request friend People-->
                                </div>
                                <!--right-sidebar end-->
                            </div>
                        </div>
                    </div>
                    <!-- main-section-data end-->
                </div>
            </div>
        </main>
        <!--chatbox-list end-->
    </div>
</template>
