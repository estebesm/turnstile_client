<template>
  <header id="header" class="border-b-2 border-white-underline h-100 flex items-center">
    <div class="container h-full items-center flex">
      <div class="row justify-between w-full items-center">
        <div class="bg-white rounded-full h-50 w-50 flex justify-center items-center flex-col gap-y-[3px]">
          <div class="h-0.5 w-18 bg-gray-burger">

          </div>
          <div class="h-0.5 w-18 bg-gray-burger">

          </div>
          <div class="h-0.5 w-18 bg-gray-burger">

          </div>
        </div>
        <div class="w-2/5 lg:w-9/12 flex items-center gap-x-5 sm:w-60%">
          <h2 class="text-gray-title text-lg">Constructor</h2>
          <nav class="hidden md:flex ">
            <ul class="flex gap-x-5 items-center">
              <NavItem/>
            </ul>
          </nav>
          <div class="bg-white hidden items-center rounded-30px pl-0.5 lg:flex">
            <img width="30px" height="30px" src="../assets/images/loop.svg" alt="">
            <input class="border-0 px-3 py-2 text-12px w-72 rounded-30px placeholder-gray-placeholder " placeholder="Search Transactions and Documents" type="text">
          </div>
        </div>
        <div class="flex gap-x-2 items-center">
          <div class="bg-white rounded-full h-50 w-50 flex justify-center items-center  sm:bg-transparent sm:w-20px sm:h-20px">
            <img  src="../assets/images/avatar.svg" alt="">
          </div>
          <p class="text-13px text-gray-name hidden xs:block">Clayton Santos</p>
          <div class="bg-white rounded-full h-50 w-50 hidden justify-center items-center justify-self-end sm:flex lg:hidden">
            <img width="30px" height="30px" src="../assets/images/loop.svg" alt="">
          </div>
        </div>
      </div>
      
    </div>
  </header>
  <section id="panel" >
    <div class="container">
      <div class="row ">
        <div class="pt-8 flex flex-col flex-wrap gap-y-5 pr-[23px] ">
          <NavIcon/>
        </div>
        <div class="flex flex-wrap px-[20px] gap-x-[20px]  pt-8 border-l-2 border-r-2 border-white-underline">
          <Chart/>
          <Chart/>
          <Chart/>
        </div>
        <div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NavItem from '../components/NavItem.vue';
import NavIcon from '../components/NavIcon.vue';
import Chart from '../components/UI/Chart.vue';
export default{
  components:{
    NavItem,
    NavIcon,
    Chart
  },
}
</script>
