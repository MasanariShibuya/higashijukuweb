<script setup lang="ts">
// ヘッダーは状態を持たないので、ref は不要
// const isMenuOpen = ref(false)  <- この行を削除

// 親コンポーネントに伝えるイベントを定義
const emit = defineEmits(['open-sidebar'])
</script>

<template>
  <header class="bg-white shadow-md">
    <nav class="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
      <div class="flex-shrink-0">
        <NuxtLink to="/" class="text-xl font-bold text-gray-800 hover:text-blue-600">
          東塾
        </NuxtLink>
      </div>
      <div class="hidden md:flex items-center space-x-8">
        <NuxtLink to="/courses" class="text-gray-600 hover:text-blue-600">コース案内</NuxtLink>
        <NuxtLink to="/about" class="text-gray-600 hover:text-blue-600">塾について</NuxtLink>
        <NuxtLink to="/access" class="text-gray-600 hover:text-blue-600">アクセス</NuxtLink>
      </div>
      <div class="flex items-center space-x-4">
        <NuxtLink to="/contact" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg text-sm transition-colors">
          お問い合わせ
        </NuxtLink>

        <button @click="emit('open-sidebar')" class="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
          <span class="sr-only">メニューを開く</span>
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
    </header>
</template>