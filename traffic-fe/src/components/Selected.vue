<template>
    <div>
        <select>
            <option v-for="item in options">{{item}}</option>
        </select>
        <button>OK</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            options: [
                2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008
            ]
        }
    },
    mounted: () => {
        
    }
}
</script>