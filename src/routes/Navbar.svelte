<script>
    import {page} from '$app/stores'

    const navs = [
        {
            title: 'Home',
            href: '/'
        },
        {
            title: 'About',
            href: '/about'
        },
        {
            title: 'Services',
            href: '/services'
        },
        {
            title: 'Contact',
            href: '/contact'
        }
    ]

    let routeId

    $: routeId = $page.route.id
</script>

<nav>
    <div class="container">
        <h1>Start Bootstrap</h1>
        <ul>
            {#each navs as {href, title}}
                <li><a {href} class:active={routeId === href} {title}>{title}</a></li>
            {/each}
        </ul>
    </div>
</nav>

<style>
    nav{
        background-color: #343a40;
        color: #fff;
        padding: 0.5em;
    }

    .container{
        display: flex;
        align-items: center;
    }

    ul{
        display: flex;
        margin: 0;
        margin-left: auto;
        list-style: none;
        font-size: 1em;
    }

    li{
        margin-right: 20px;
    }

    h1{
        margin: 0;
        font-size: 1.3em;
        font-weight: normal;
    }

    a{
        text-decoration: none;
        color: #aaa;
    }

    .active{
        color: #fff;
    }
</style>