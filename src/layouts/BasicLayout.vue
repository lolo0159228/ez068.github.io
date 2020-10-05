<template>
    <div>
        <div class="sidebar">
            <!-- <div class="sidebaritem">
                <a href="/">首頁</a>
            </div>
            <div class="sidebaritem">
                <a href="/category">文章分類</a>
            </div>
            <div class="sidebaritem">
                <a href="/me">關於我</a>
            </div> -->
            <div class="sidebaricon" v-if="toggle">≡</div>
        </div>        
        <router-view/>
    </div>
</template>

<script>
export default {
    name: "BasicLayout",
    data() {
        return {
            toggle : true
        }
    }
}
</script>

<style lang="scss" scoped>
.sidebar {
    width: 100%;
    display: block;
    height: 80px;



    & .sidebaritem {
        display: block;
        float: left;
        background-color: rgb(235, 235, 235);
        margin: 10px;
        padding: 20px;
        border-radius: 5px;
        

        & a {
            color: #555555;
            text-decoration:none;
        }
    }

    & .sidebaricon {
        position: fixed;
        background-color: rgb(211, 113, 43);
        color: white;
        padding: 5px;
        right: 5px;
        border-radius: 50px;
    }

}
</style>
