# WhatsApp Bot - Blast Message

Contoh script untuk mengirim pesan WhatsApp secara otomatis dengan jeda antar pesan.

## ⚠️ Peringatan Penting

Script ini hanya untuk tujuan **pembelajaran dan dokumentasi**. Penggunaan untuk spam/blast pesan dapat:

- ❌ Melanggar Syarat & Ketentuan WhatsApp
- ❌ Menyebabkan akun WhatsApp di-ban
- ❌ Melanggar UU ITE (Indonesia) dan hukum di negara lain
- ❌ Digunakan untuk phishing, scam, atau penyalahgunaan

**Gunakan hanya dengan izin dan untuk keperluan yang sah.**

## 📋 Cara Kerja

Script ini akan:

1. Loop melalui daftar nomor telepon (`targets`)
2. Mengirim pesan ke setiap nomor
3. Menunggu delay (5 detik) sebelum pesan berikutnya
4. Log output ke console

## 🔧 Konfigurasi

```javascript
const targets = ['628123xxx', '628567xxx']; // Ganti dengan nomor tujuan
const message = "Halo, ini pesan otomatis.";  // Pesan yang dikirim
const delay = 5000;                           // Jeda dalam millisecond
```

## 📦 Dependensi

Script ini menggunakan library WhatsApp Web:
- `whatsapp-web.js` atau library serupa

Install dengan:
```bash
npm install whatsapp-web.js
```

## 🚀 Penggunaan

```javascript
const { startBlast } = require('./whatsapp-bot');
await startBlast();
```

## ✅ Alternatif Legal

Untuk automasi WhatsApp yang legal, gunakan:
- **WhatsApp Business API** (resmi dari WhatsApp)
- Hanya untuk kontak yang sudah opt-in
- Compliance dengan regulasi setempat

## 📝 Lisensi

Untuk pembelajaran saja. Pengguna bertanggung jawab atas penggunaan script ini.