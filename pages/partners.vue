<template>
    <div></div>
</template>

<script>
	export default {
		name: "partners",
        head () {
            return {
                title: 'Наши партнеры',
                meta: [
                    {hid: 'description', name: 'description', content: 'Наши партнеры'},
                    {hid: 'image', itemprop: 'image', name: 'image', content: 'partners.jpg'},
                    {hid: 'og:title', name: 'og:title', content: 'Наши партнеры'},
                    {hid: 'og:type', name: 'og:type', content: 'article'},
                    {hid: 'og:url', name: 'og:url', content: this.$route.fullPath},
                    {hid: 'og:image', name: 'og:image', content: 'partners.jpg'}
                ]
            }
        }
	}
</script>

<style>

</style>
