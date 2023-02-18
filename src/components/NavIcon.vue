<template>
    <div class="rounded-full h-50 w-50 bg-white flex justify-center items-center " v-for="icon in icons" :key="icon.id">
        <img class="w-20px h-20px " :src="icon.img" :alt="icon.id">
    </div>
</template>

<script> 
export default{
    data(){
        return{
            icons:[
            {id:1, img:"https://file.kelleybluebookimages.com/kbb/base/evox/CP/43648/2023-Honda-Civic-front_43648_032_1860x760_RE_cropped.png"},
            {id:2, img:"https://file.kelleybluebookimages.com/kbb/base/evox/CP/43648/2023-Honda-Civic-front_43648_032_1860x760_RE_cropped.png"},
            {id:3, img:"https://file.kelleybluebookimages.com/kbb/base/evox/CP/43648/2023-Honda-Civic-front_43648_032_1860x760_RE_cropped.png"},
            {id:4, img:"https://file.kelleybluebookimages.com/kbb/base/evox/CP/43648/2023-Honda-Civic-front_43648_032_1860x760_RE_cropped.png"},
            {id:5, img:"https://file.kelleybluebookimages.com/kbb/base/evox/CP/43648/2023-Honda-Civic-front_43648_032_1860x760_RE_cropped.png"},
            {id:6, img:"https://file.kelleybluebookimages.com/kbb/base/evox/CP/43648/2023-Honda-Civic-front_43648_032_1860x760_RE_cropped.png"},
            ]
        }
    },
}
</script>


