/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    // .containerの初期設定です。センタリング＆paddingをスマホ表示以外ではゼロにします。theme直下に入れた場合、既存のTailwind設定を上書きします。
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: 0,
        md: 0,
        lg: 0,
        xl: 0,
        "2xl": 0,
      },
    },
    extend: {
      // 例えば今回のコンテナサイズを設定するとしたら…のパターンです。extendに書いた内容は文字通り拡張されます。
      maxWidth: {
        base: "1080px",
      },
    },
  },
  plugins: [],
};
