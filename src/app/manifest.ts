export const dynamic = "force-static";

export default function manifest() {
  return {
    name: 'КП — Разработка сайта для ветклиники',
    short_name: 'КП Сайт',
    description: 'Коммерческое предложение на разработку сайта',
    start_url: '/',
    display: 'standalone',
    background_color: '#162b22',
    theme_color: '#4faa78',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
