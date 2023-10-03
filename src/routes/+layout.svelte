<script>
    import Sidebar from "./sidebar.svelte";
</script>
<header>
    <Sidebar/>
    <img src="\LogoNoBackground.png" alt="business logo made up of a ball of yarn, wings, and crochet hooks to look like the golden snitch from Harry Potter" id="logo">
    <nav>
        <a href="/">Home</a>
        <a href="/Products">Products</a>
        <a href="/Tutorials">Tutorials</a>
        <a href="/BookLessons">Book Lessons</a>
        <a href="/AboutMe">About Me</a>
    </nav>
</header>
<main><slot/></main>
<style>
    #logo {
        display: block;
        margin: auto;
        height: 35vmin;
    }
    nav {
    display: none;
    width: 100%;
    height: 50px;
    border-top-style: solid;
    border-bottom-style: solid;
    border-width: 3px;
    border-image: radial-gradient(goldenrod, goldenrod, white, transparent) 50;
    align-items: center;
    justify-content: center;
    margin-bottom: 4vmin;
}
nav a {
    display: flex;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 20px;
    padding-right: 20px;
    margin: 30px;
    color: black;
    font-size: 20px;
    font-family: 'Times New Roman';                                               
}
nav a:hover {
    background-color: goldenrod;
    color: black;
}
:global(h1, h2) {
        text-align: center;
        text-decoration: underline 3px solid goldenrod;
}
@media only screen and (min-width: 768px) {
    nav {
        display: flex;
    }
}
</style>