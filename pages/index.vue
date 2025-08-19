<template>
  <div id="top" class="font-sans text-gray-800">
    <!-- メインビジュアル -->
    <section class="bg-gradient-to-r from-sky-300 via-sky-200 to-sky-100">
      <div class="container mx-auto px-4 py-24 text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold text-sky-900 drop-shadow-lg mb-6">
          東塾へようこそ
        </h1>
        <p class="text-lg md:text-xl text-sky-800 font-medium">
          無料体験授業、随時受付中！
        </p>
        <div class="mt-8">
          <a
            href="#contact"
            class="inline-block bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-full shadow-lg transition duration-300"
          >
            今すぐ申し込む
          </a>
        </div>
      </div>
    </section>

    <!-- 塾について -->
    <section id="about" class="bg-white">
      <div class="container mx-auto px-4 py-24">
        <h2 class="text-3xl font-bold text-center text-sky-700 mb-12 relative">
          東塾とは
          <span class="block w-16 h-1 bg-sky-400 mx-auto mt-4 rounded"></span>
        </h2>
        <p class="max-w-3xl mx-auto text-center text-gray-700 leading-relaxed">
          鹿児島の中の奄美群島のそのまた中の小さな島、沖永良部島から生まれた
          <span class="font-semibold text-sky-600">東大空海</span>
          が教育を変えようと一念発起しました。
        </p>
      </div>
    </section>

    <!-- コース案内 -->
    <section id="courses" class="bg-sky-50">
      <div class="container mx-auto px-4 py-24">
        <h2 class="text-3xl font-bold text-center text-sky-700 mb-12 relative">
          コース案内
          <span class="block w-16 h-1 bg-sky-400 mx-auto mt-4 rounded"></span>
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 class="text-xl font-bold text-sky-600 mb-3">基礎コース</h3>
            <p class="text-gray-600">基礎からじっくり学びたい方に最適なコースです。</p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 class="text-xl font-bold text-sky-600 mb-3">応用コース</h3>
            <p class="text-gray-600">応用問題に挑戦し、力を伸ばしたい方向け。</p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 class="text-xl font-bold text-sky-600 mb-3">受験対策コース</h3>
            <p class="text-gray-600">志望校合格に向けた徹底的なサポートを行います。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- お問い合わせ -->
    <section id="contact" class="bg-gradient-to-r from-sky-100 via-sky-200 to-sky-300">
      <div class="container mx-auto px-4 py-24">
        <h2 class="text-3xl font-bold text-center text-sky-900 mb-12 relative">
          お申し込み・お問い合わせ
          <span class="block w-16 h-1 bg-sky-600 mx-auto mt-4 rounded"></span>
        </h2>
        <p class="max-w-3xl mx-auto text-center text-gray-700 mb-8">
          以下のお申し込みフォーム、またはお電話にてお気軽にご連絡ください。
        </p>
        <div class="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
          <form class="space-y-4">
            <input type="text" placeholder="お名前" class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400" />
            <input type="email" placeholder="メールアドレス" class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400" />
            <textarea placeholder="お問い合わせ内容" class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"></textarea>
            <button type="submit" class="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-lg shadow-md transition">
              送信する
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
