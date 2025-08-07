// 画面のスライドアニメーション用
import Lenis from '@studio-freight/lenis'

export default defineNuxtPlugin((nuxtApp) => {
  // Lenisのインスタンスを作成
  const lenis = new Lenis({
    // ここの数値を調整すると、動きの「味付け」ができます
    duration: 1.2, // スクロールにかかる時間（秒）
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // イージング関数（動きの緩急）
    lerp: 0.1, // スクロールの滑らかさ（小さいほど滑らか）
  })

  // スクロールアニメーションを常に実行するように設定
  function raf(time: number) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  // ページ内のすべてのリンク(#から始まるもの)に、クリックイベントを追加
  nuxtApp.hook('page:finish', () => {
    // ヘッダーの高さを取得
    const headerEl = document.querySelector('header')
    const headerHeight = headerEl ? headerEl.clientHeight : 0

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault()
        const href = anchor.getAttribute('href')
        if (href) {
          lenis.scrollTo(href, {
            // ヘッダーの高さ分、スクロール位置を上にずらす
            offset: -headerHeight
          })
        }
      })
    })
  })
})
