<script>
    export let size = 'medium'
</script>

<button
    class:small={size === 'small'}
    class:medium={size === 'medium'}
    {...$$restProps}
>
    <slot />
</button>

<style>
    button{
        background-color: var(--primary-colour);
        border: none;
        border-radius: 0.25em;
        color: #fff;
        font-size: 1em;
        cursor: pointer;
    }

    .medium{
        padding: 0.5em 1.5em;
    }

    .small{
        padding: 0.25em 0.5em;
    }
</style>