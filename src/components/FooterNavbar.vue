<template>
  <div>
    <div class="h-12 w-full lg:hidden"></div>
    <nav
      class="h-12 bg-main lg:hidden fixed bottom-0 left-0 flex items-center w-[calc(100%-var(--width-scrollbar))] border-t dark:border-gray-600 shadow-[0px_-1px_3px_rgba(82,82,91,0.3)]"
    >
      <ul class="container grid grid-cols-4 h-full">
        <li>
          <Button
            class="w-full h-full flex items-center justify-center"
            @click="() => router.push('/')"
          >
            <svg
              class="h-7 w-7 fill-secondary"
              :class="{
                'fill-[rgb(var(--color-primary))]':
                  route.name === 'dashboard' || route.name === 'notfound',
              }"
              viewBox="0 0 28 28"
              fill="none"
            >
              <g stroke-linecap="round" stroke-linejoin="round"></g>
              <g>
                <path
                  d="M1 20C1 18.8954 1.89543 18 3 18H6C7.10457 18 8 18.8954 8 20V25C8 26.1046 7.10457 27 6 27H3C1.89543 27 1 26.1046 1 25V20ZM6 20.4C6 20.1791 5.82091 20 5.6 20H3.4C3.17909 20 3 20.1791 3 20.4V24.6C3 24.8209 3.17909 25 3.4 25H5.6C5.82091 25 6 24.8209 6 24.6V20.4Z"
                ></path>
                <path
                  d="M10 3C10 1.89543 10.8954 1 12 1H15C16.1046 1 17 1.89543 17 3V25C17 26.1046 16.1046 27 15 27H12C10.8954 27 10 26.1046 10 25V3ZM15 3.4C15 3.17909 14.8209 3 14.6 3L12.4 3C12.1791 3 12 3.17909 12 3.4V24.6C12 24.8209 12.1791 25 12.4 25H14.6C14.8209 25 15 24.8209 15 24.6V3.4Z"
                ></path>
                <path
                  d="M19 11C19 9.89543 19.8954 9 21 9H24C25.1046 9 26 9.89543 26 11V25C26 26.1046 25.1046 27 24 27H21C19.8954 27 19 26.1046 19 25V11ZM24 11.4C24 11.1791 23.8209 11 23.6 11H21.4C21.1791 11 21 11.1791 21 11.4V24.6C21 24.8209 21.1791 25 21.4 25H23.6C23.8209 25 24 24.8209 24 24.6V11.4Z"
                ></path>
              </g>
            </svg>
          </Button>
        </li>
        <li>
          <Button
            class="w-full h-full flex items-center justify-center"
            @click="() => router.push('/cards')"
          >
            <svg
              class="w-7 h-7 stroke-secondary"
              :class="{
                'stroke-primary':
                  route.name === 'cards' || route.name === 'cardProfile',
              }"
              viewBox="0 0 24 24"
              fill="none"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </Button>
        </li>
        <li>
          <Button
            class="w-full h-full flex items-center justify-center"
            @click="() => router.push('/information')"
          >
            <svg
              viewBox="0 0 48 48"
              class="h-7 w-7 fill-secondary"
              :class="{
                'fill-[rgb(var(--color-primary))]':
                  route.name === 'information',
              }"
            >
              <g stroke-linecap="round" stroke-linejoin="round"></g>
              <g>
                <g>
                  <g>
                    <path
                      d="M24,2A22,22,0,1,0,46,24,21.9,21.9,0,0,0,24,2Zm0,40A18,18,0,1,1,42,24,18.1,18.1,0,0,1,24,42Z"
                    ></path>
                    <path
                      d="M24,20a2,2,0,0,0-2,2V34a2,2,0,0,0,4,0V22A2,2,0,0,0,24,20Z"
                    ></path>
                    <circle cx="24" cy="14" r="2"></circle>
                  </g>
                </g>
              </g>
            </svg>
          </Button>
        </li>
        <li>
          <Button
            class="w-full h-full flex items-center justify-center"
            @click="() => router.push('/settings')"
          >
            <svg
              class="h-7 w-7 stroke-secondary"
              viewBox="0 0 24 24"
              :class="{
                'stroke-[rgb(var(--color-primary))]': route.name === 'settings',
              }"
              fill="none"
            >
              <g stroke-linecap="round" stroke-linejoin="round"></g>
              <g>
                <path
                  d="M10.5213 3.62368C11.3147 2.75255 12.6853 2.75255 13.4787 3.62368L14.2142 4.43128C14.6151 4.87154 15.1914 5.11025 15.7862 5.08245L16.8774 5.03146C18.0543 4.97645 19.0236 5.94568 18.9685 7.12264L18.9176 8.21377C18.8898 8.80859 19.1285 9.38487 19.5687 9.78582L20.3763 10.5213C21.2475 11.3147 21.2475 12.6853 20.3763 13.4787L19.5687 14.2142C19.1285 14.6151 18.8898 15.1914 18.9176 15.7862L18.9685 16.8774C19.0236 18.0543 18.0543 19.0236 16.8774 18.9685L15.7862 18.9176C15.1914 18.8898 14.6151 19.1285 14.2142 19.5687L13.4787 20.3763C12.6853 21.2475 11.3147 21.2475 10.5213 20.3763L9.78582 19.5687C9.38487 19.1285 8.80859 18.8898 8.21376 18.9176L7.12264 18.9685C5.94568 19.0236 4.97645 18.0543 5.03146 16.8774L5.08245 15.7862C5.11025 15.1914 4.87154 14.6151 4.43128 14.2142L3.62368 13.4787C2.75255 12.6853 2.75255 11.3147 3.62368 10.5213L4.43128 9.78582C4.87154 9.38487 5.11025 8.80859 5.08245 8.21376L5.03146 7.12264C4.97645 5.94568 5.94568 4.97645 7.12264 5.03146L8.21376 5.08245C8.80859 5.11025 9.38487 4.87154 9.78583 4.43128L10.5213 3.62368Z"
                  stroke-width="2"
                ></path>
                <circle cx="12" cy="12" r="3" stroke-width="2"></circle>
              </g>
            </svg>
          </Button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import Button from "@/ui/Button.vue";
const router = useRouter();
const route = useRoute();
</script>
