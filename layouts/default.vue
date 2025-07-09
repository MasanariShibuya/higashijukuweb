<script setup lang="ts">
import { ref } from 'vue'

// サイドバーが開いているかどうかの状態をここで管理
const isSidebarOpen = ref(false)
</script>

<template>
  <div class="bg-gray-50 min-h-screen">
    <Header @open-sidebar="isSidebarOpen = true" />

    <Sidebar :is-open="isSidebarOpen" @close="isSidebarOpen = false" />

    <main class="container mx-auto p-4">
      <slot />
    </main>
  </div>
</template>