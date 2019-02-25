<template>
    <header>
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <a class="navbar-brand header-title" href="/">CUBE's Portfolio</a>
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="ナビゲーションの切替">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul class="navbar-nav ml-auto header-nav">
                        <router-link tag="li" to="/"><a class="nav-item nav-link">HOME</a></router-link>
                        <router-link tag="li" to="/profile"><a class="nav-item nav-link">PROFILE</a></router-link>
                        <router-link tag="li" to="/skills"><a class="nav-item nav-link">SKILLS</a></router-link>
                        <router-link tag="li" to="/contact"><a class="nav-item nav-link">CONTACT</a></router-link>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>