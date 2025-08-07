<script setup lang="ts">
// このコンポーネントが受け取るデータ（プロパティ）を定義します。
// isOpenがtrueのときにサイドバーが表示されます。
defineProps<{
  isOpen: boolean
}>()

// 親コンポーネントに'close'イベントを伝えるためのemitを定義します。
// これにより、サイドバー内のボタンからサイドバーを閉じることができます。
const emit = defineEmits(['close'])
</script>

<template>
  <!-- 背景の黒いオーバーレイ -->
  <div
    v-if="isOpen"
    class="fixed inset-0 bg-black/50 z-40 transition-opacity"
    @click="emit('close')"
  ></div>

  <!-- サイドバー本体 -->
  <aside
    :class="[
      'fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out',
      isOpen ? 'translate-x-0' : 'translate-x-full'
    ]"
  >
    <div class="p-4">
      <!-- ヘッダー部分 -->
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-xl font-bold">メニュー</h2>
        <button @click="emit('close')" class="p-2 text-gray-600 hover:text-gray-900">
          <span class="sr-only">メニューを閉じる</span>
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- ナビゲーションリンク: 各セクションへスクロールします -->
      <nav class="flex flex-col space-y-4">
        <a href="#about" @click="emit('close')" class="text-lg text-gray-700 hover:text-blue-600 px-2 py-1 rounded-md">東塾とは</a>
        <a href="#courses" @click="emit('close')" class="text-lg text-gray-700 hover:text-blue-600 px-2 py-1 rounded-md">コース案内</a>
        <a href="#access" @click="emit('close')" class="text-lg text-gray-700 hover:text-blue-600 px-2 py-1 rounded-md">申し込みはこちら</a>
        <a href="#contact" @click="emit('close')" class="mt-4 inline-block text-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg text-sm transition-colors">
          お問い合わせ
        </a>
      </nav>
    </div>
  </aside>
</template>