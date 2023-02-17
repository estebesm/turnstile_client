<template>
  <header class="border-b border-underline h-100 flex items-center">
    <div class="container h-full items-center flex">
      <div class="row justify-between w-full items-center">
        <div class="bg-white rounded-full h-50 w-50 flex justify-center items-center flex-col gap-y-[3px]">
          <div class="h-0.5 w-18 bg-burger">

          </div>
          <div class="h-0.5 w-18 bg-burger">

          </div>
          <div class="h-0.5 w-18 bg-burger">

          </div>
        </div>
        <div class="w-2/5 1200px:w-9/12 flex gap-x-5 768px:w-60%">
          <h2 class="text-title text-lg">Constructor</h2>
          <nav class="hidden 992px:flex ">
            <ul class="flex gap-x-5 items-center">
              <li class="text-13px text-nav">Dashboard</li>
              <li class="text-13px text-nav">About Us</li>
              <li class="text-13px text-nav">News</li>
              <li class="text-13px text-nav">User Policy</li>
              <li class="text-13px text-nav">Contacts</li>
            </ul>
          </nav>
          <div class="bg-white hidden items-center rounded-30px pl-0.5 1200px:flex">
            <img width="30px" height="30px" src="../assets/images/loop.svg" alt="">
            <input class="border-0 px-3 py-2 text-12px w-72 rounded-30px placeholder-input " placeholder="Search Transactions and Documents" type="text">
          </div>
        </div>
        <div class="flex gap-x-2 items-center">
          <div class="bg-white rounded-full h-50 w-50 flex justify-center items-center  768px:bg-transparent 768px:w-30px 768px:h-30px">
            <img width="30px" height="30px" src="../assets/images/avatar.svg" alt="">
          </div>
          <p class="text-13px text-name hidden 576px:block">Clayton Santos</p>
          <div class="bg-white rounded-full h-50 w-50 hidden justify-center items-center justify-self-end 768px:flex">
            <img width="30px" height="30px" src="../assets/images/loop.svg" alt="">
          </div>
        </div>
      </div>
      
    </div>
  </header>
</template>
