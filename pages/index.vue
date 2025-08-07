<template>
  <!-- id="top" は一番外側のdivに設定すると確実です -->
  <div id="top">
    <!-- メインビジュアル / 無料体験案内 -->
    <section class="bg-blue-100">
      <div class="container mx-auto px-4 py-16 text-center">
        <p class="text-lg md:text-xl text-blue-800">無料体験授業、随時受付中！</p>
      </div>
    </section>

    <!-- 塾について -->
    <!-- セクション自体に上下の大きな余白はつけません -->
    <section id="about" class="bg-white">
      <!-- 内側のdivでコンテンツの配置と余白を管理します -->
      <div class="container mx-auto px-4 py-24">
        <h2 class="text-3xl font-bold text-center mb-12">東塾とは</h2>
        <p class="max-w-3xl mx-auto text-center">鹿児島の中の奄美群島のそのまた中の小さな島、沖永良部島から生まれた東大空海が教育を変えようと一念発起
          勃起</p>
      </div>
    </section>

    <!-- コース案内 -->
    <section id="courses" class="bg-gray-50">
      <div class="container mx-auto px-4 py-24">
        <h2 class="text-3xl font-bold text-center mb-12">コース案内</h2>
        <p class="max-w-3xl mx-auto text-center">こんなコースがあります</p>
      </div>
    </section>

   <!-- お問い合わせ / お申し込み -->
   <section id="contact" class="bg-gray-50">
       <div class="container mx-auto px-4 py-24">
        <h2 class="text-3xl font-bold text-center mb-12">お申し込み・お問い合わせ</h2>
        <p class="max-w-3xl mx-auto text-center">以下に示すお申し込みフォーム、またはお電話にてお気軽にご連絡ください。</p>
      </div>
    </section>
  </div>
</template>