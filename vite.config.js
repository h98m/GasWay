import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  // 1. أضفنا اسم المستودع هنا لكي تعمل الروابط على GitHub Pages
  base: '/GasWay/', 
  
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: { enabled: true },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        cleanupOutdatedCaches: true
      },
      manifest: {
        // 2. تعديل المعرف والرابط ليبدأ من مسار المشروع
        id: '/GasWay/',
        start_url: '/GasWay/', 
        name: 'GasWay - هندسة النفط والغاز',
        short_name: 'GasWay',
        description: 'نظام الاستدلال الذكي لقسم الغاز الطبيعي',
        theme_color: '#1c3d6a',
        background_color: '#f8fafc',
        display: 'standalone',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ],
        screenshots: [
          {
            src: 'screenshot-desktop.png',
            sizes: '1755x910',
            type: 'image/png',
            form_factor: 'wide',
            label: 'واجهة سطح المكتب'
          },
          {
            src: 'screenshot-mobile.png',
            sizes: '390x850',
            type: 'image/png',
            label: 'واجهة الموبايل'
          }
        ]
      }
    })
  ]
})