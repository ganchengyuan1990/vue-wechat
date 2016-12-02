<template>
    <div class="component-dialogue-bar-person" :class='display_more_tools?"pool_up":""'>
        <span class="iconfont icon-dialogue-jianpan" v-show="way==='say'" v-touch:tap="switch_way('txt')"></span>
        <span class="iconfont icon-dialogue-voice" v-show='way==="txt"' v-touch:tap='switch_way("say")'></span>
        <!--say-->
        <div class="chat-way" v-show="way==='say'">
            <div class="chat-say" :class='!!state_say?"chat-say_touched":""' v-touch:press='switch_way_say(true)' @touchend='switch_way_say(false)' @touchmove='switch_say_cancel(true)'>
                <span class="one">按住 说话</span>
                <span class="two">松开 结束</span>
            </div>
        </div>
        <!--txt-->
        <div class="chat-way" v-show="way==='txt'">
            <input class="chat-txt" type="text">
        </div>
        <span class="expression iconfont icon-dialogue-smile"></span>
        <span class="more iconfont icon-dialogue-jia" @click="openMoreTools"></span>
        <!--tips-->
        <div class="recording" v-show="state_say">
            <div class="recording-voice" v-show='!say_cancel&&state_say'>
                <div class="voice-inner">
                    <div class="voice-icon"></div>
                    <div class="voice-volume">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <p>手指上划,取消发送</p>
            </div>
            <div class="recording-cancel" v-show='say_cancel&&state_say'>
                <div class="cancel-inner"></div>
                <p >松开手指,取消发送</p>
            </div>
        </div>

    </div>
    <div class="more-tools"  v-show="display_more_tools">
        <span class="button">图片</span>
        <span class="button">小视频 </span>
        <span class="button">我的收藏</span>
        <span class="button">位置</span>
        <span class="button">名片</span>
        <span class="button">语音输入</span>
    </div>
</template>
<script>
export default {
    replace: true,
    props: {

    },
    data() {
        return {
            way: 'txt',
            state_say: false, //'chat-say_touched'
            say_cancel:false,
            display_more_tools: false,
        }
    },
    methods: {
        switch_way(way) {
            //say,txt
            // console.log(way)
            this.way = way;
        },
        switch_way_say(boo) {
            this.state_say = boo;
            this.say_cancel = false;
        },
        switch_say_cancel(){
            this.say_cancel = true;
        },
        openMoreTools() {
            this.display_more_tools = !this.display_more_tools;
        }
    }
}
</script>

<style>
    .more-tools {
        height: 100px;
        width: 100%;
        background: #eeeeee;
        position: fixed;
        bottom: 0;
    }
    .pool_up {
        bottom: 100px;
    }
    span.button {
        padding: 5px;
        width: 50px;
        height: 50px;
        border-radius: 10px;
        border: 1px solid red;
        margin: 20px;
    }
</style>