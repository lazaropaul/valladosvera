<script>
    export default {   
    data() {
        return {
            items: [{ name: 'Foo', lastname: 'Pito'}, 
                    { name: 'Carlos', lastname: 'Cojones'}] 
            }
        }
    }

    (function() {
        var a = b = 5;
    })();
    console.log(b);
</script>

<template>
    <div v-for="item in items">
        {{item.name}} {{item.lastname}}
    </div>
</template>