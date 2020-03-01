<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
            |
            <router-link to="/about">About</router-link>
            |
            <button @click="darkThemeSwitch">Switch Theme</button>
        </div>
        <router-view/>
    </div>
</template>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
<script>
    export default  {
        methods: {
            _addDarkTheme() {
                let darkThemeLinkEl = document.createElement("link");
                darkThemeLinkEl.setAttribute("rel", "stylesheet");
                darkThemeLinkEl.setAttribute("href", "/css/darktheme.css");
                darkThemeLinkEl.setAttribute("id", "dark-theme-style");

                let docHead = document.querySelector("head");
                docHead.append(darkThemeLinkEl);
            },
            _removeDarkTheme() {
                let darkThemeLinkEl = document.querySelector("#dark-theme-style");
                let parentNode = darkThemeLinkEl.parentNode;
                parentNode.removeChild(darkThemeLinkEl);
            },
            darkThemeSwitch() {
                let darkThemeLinkEl = document.querySelector("#dark-theme-style");
                if (!darkThemeLinkEl) {
                    this._addDarkTheme()
                } else {
                    this._removeDarkTheme()
                }
            }
        }
    }
</script>
