<template>
  <div class="skeleton-element">
    <div class="skeleton-animation"></div>
  </div>
</template>

<script>
export default {
  name: "Skeleton",
};
</script>

<style scoped>
.skeleton-element {
  background-color: #f7f8fa;
  overflow: hidden;
}

.skeleton-animation {
  height: 100%;
  width: 100%;
  background: linear-gradient(var(--skeleton-gradient));
  background-size: 400% 400%;
  animation: pulse 1.2s ease-in-out infinite;
}

[data-mode="dark"] .skeleton-element {
  background-color: #1a202c;
}

@keyframes pulse {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: -135% 0%;
  }
}
</style>
