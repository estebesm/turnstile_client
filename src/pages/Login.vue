<template>
  <section class="bg-main h-screen">
    <div class="flex w-full h-full">
      <div
        class="w-full container flex flex-col justify-between items-center py-[10px] h-full lg:w-[50%]"
      >
        <div
          class="w-full flex flex-col gap-y-[12px] h-[90%] justify-center 3xl:container xl:gap-y-[20px]"
        >
          <div>
            <h1
              class="text-primary text-center text-2xl mb-[5px] sm:text-[28px] md:text-[32px]"
            >
              Sign In
            </h1>
            <p class="text-center text-sm mt-[15px] sm:text-base md:text-lg">
              Enter your email and password to sign in!
            </p>
          </div>
          <Button
            class="rounded-2xl mx-auto flex justify-center items-center gap-x-[10px] h-[50px] w-full bg-slate-200 xl:w-9/12"
          >
            <img src="@/assets/icons/googleLogo.svg" alt="" />
            <p class="text-sm sm:text-base md:text-lg">Sign in with Google</p>
          </Button>
          <div
            class="w-full h-[30px] justify-between gap-x-[20px] flex items-center"
          >
            <div
              class="border-b-[1px] w-[110px] border-primary h-[7px] sm:w-[200px] md:w-[290px]"
            ></div>
            <p class="text-sm sm:text-base md:text-lg">or</p>
            <div
              class="border-b-[1px] w-[110px] border-primary h-[7px] sm:w-[200px] md:w-[290px]"
            ></div>
          </div>
          <div class="w-full">
            <p class="text-sm sm:text-base md:text-lg">Email*</p>
            <div
              class="w-full p-3 border-2 mt-[10px] border-slate-200 rounded-2xl bg-main"
            >
              <input
                class="bg-main w-full p-1 text-sm"
                type="text"
                placeholder="mail@simmmple.com"
              />
            </div>
          </div>
          <div class="w-full">
            <p class="text-sm sm:text-base md:text-lg">Password*</p>
            <div
              class="w-full p-3 border-2 justify-between items-center mt-[10px] flex border-slate-200 rounded-2xl bg-main"
            >
              <input
                class="bg-main text-sm w-[80%] p-1"
                type="text"
                placeholder="Min. 8 characters"
              />
              <img
                class="w-[20px] h-[20px]"
                src="@/assets/icons/closeEye.png"
                alt=""
              />
              <img
                class="w-[20px] h-[20px]"
                src="@/assets/icons/eye.png"
                alt=""
              />
            </div>
          </div>
          <div class="flex flex-col gap-y-[12px] sm:flex-row xl:gap-y-[20px]">
            <div class="flex gap-x-[10px] w-full sm:w-1/2">
              <input type="checkbox" />
              <p class="text-sm sm:text-base md:text-lg">Keep me logged in</p>
            </div>
            <div class="flex gap-x-[10px] w-full sm:w-1/2">
              <p
                class="text-primary w-full text-sm sm:text-base sm:text-end md:text-lg"
              >
                Forget password?
              </p>
            </div>
          </div>
          <Button
            class="rounded-2xl mx-auto flex justify-center items-center gap-x-[10px] h-[50px] w-full bg-primary xl:w-9/12"
          >
            <p class="text-main text-sm sm:text-base md:text-lg">Sign In</p>
          </Button>
          <p class="w-full text-sm sm:text-base">
            Not registered yet?
            <span class="text-primary sm:text-base md:text-lg">
              Create an Account
            </span>
          </p>
        </div>
        <div class="w-full flex items-end">
          <p class="text-center w-full text-sm sm:text-base md:text-lg">
            © 2022 Horizon UI. All Rights Reserved. Made with love by Simmmple!
          </p>
        </div>
      </div>
      <div
        class="w-[50%] bg-loginBackground rounded-bl-[25%] hidden flex-col justify-center items-center bg-cover bg-no-repeat h-full lg:flex"
      >
        <img
          class="w-[200px] h-[200px]"
          src="https://styles.redditmedia.com/t5_2s4v6/styles/communityIcon_smvsnfvizxga1.png?width=256&s=7435f46229af5f1810d0067a0f0c78e5861f09e8"
          alt=""
        />
        <Logo class="text-main mt-[20px] mb-[40px]" />
        <div
          class="border-2 border-main w-[300px] py-2 px-3 rounded-3xl gap-y-[10px] flex flex-col"
        >
          <p class="text-main text-center">Learn more about Horizon UI on</p>
          <p class="text-main text-2xl text-center">horizon-ui.com</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Logo from "@/ui/Logo.vue";
import Button from "@/ui/Button.vue";
</script>
