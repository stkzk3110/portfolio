<template>
    <footer>
        <div class="container">
            <nav class="navbar navbar-expand-lg footer-nav">
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul class="navbar-nav mr-auto ml-auto footer-nav">
                        <router-link tag="li" to="/"><a class="nav-item nav-link">HOME</a></router-link>
                        <router-link tag="li" to="/profile"><a class="nav-item nav-link">PROFILE</a></router-link>
                        <router-link tag="li" to="/skills"><a class="nav-item nav-link">SKILLS</a></router-link>
                        <router-link tag="li" to="/contact"><a class="nav-item nav-link">CONTACT</a></router-link>
                    </ul>
                </div>
            </nav>
            <div class="sns-box">
                <a href="https://twitter.com/fisherman3110se" target="_blank" class="sns-link">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="https://github.com/stkzk3110" target="_blank" class="sns-link">
                    <i class="fab fa-github"></i>
                </a>
                <a href="https://instagram.com/stkzk_aioaui" target="_blank" class="sns-link">
                    <i class="fab fa-instagram"></i>
                </a>
            </div>
            <div class="copyright-box">©️ 2019 cube</div>
        </div>
    </footer>
</template>