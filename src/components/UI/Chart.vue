<template>
    <div class="rounded-[10px] flex w-[250px] bg-white">
        <div class="w-full flex justify-evenly h-[63px] items-center border-b-2 border-white-underline">
            <p class="text-12px text-gray-nav" v-for="el in data" :key="el.id">{{ el.time }}</p>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            data:[
                {id:1, time:'Last Month'},
                {id:2, time:'3M'},
                {id:3, time:'6M'},
                {id:4, time:'Year'},
                {id:5, time:'All'},
            ]
        }
    }
}
</script>