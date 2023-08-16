import './reset.scss'
import './global.scss'
import favicon from './favicon.svg'
import { Anonymous_Pro } from 'next/font/google'

const anonymousPro = Anonymous_Pro({ subsets: ['cyrillic'], weight: ['700'] })

export const metadata = {
  title: 'Среда | Медиа с улиц Ханты-Мансийска',
  description: 'Скоро Здесь Будет Медиа',
}

export default function RootLayout({ children }) {
  return (
    <>
    <head>
      <link rel="icon" href={favicon.src} />
    </head>
    <html lang="ru">
      <body className={anonymousPro.className}>{children}</body>
    </html>
    </>
  )
}
