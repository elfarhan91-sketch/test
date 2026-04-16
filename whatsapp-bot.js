// Contoh potongan kode untuk blast dengan jeda
const targets = ['628123xxx', '628567xxx']; // Daftar nomor
const message = "Halo, ini pesan otomatis.";
const delay = 5000; // Jeda 5 detik

async function startBlast() {
    for (const number of targets) {
        const jid = number + '@s.whatsapp.net';
        await sock.sendMessage(jid, { text: message });
        console.log(`Pesan terkirim ke: ${number}`);
        
        // Fungsi Jeda (Delay)
        await new Promise(resolve => setTimeout(resolve, delay));
    }
}

module.exports = { startBlast };