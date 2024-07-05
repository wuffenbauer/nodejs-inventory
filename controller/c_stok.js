const m_produk = require('../model/m_produk')
const m_stok   = require('../model/m_stok')

module.exports = {
    form_stok_masuk: async (req, res) => {
        let dataview = {
            req         : req,
            konten      : 'stok/form-stok-masuk',
            uri_segment : req.path.split('/'),
            info_error  : null,
            produk      : await m_produk.get_semua_produk()
        }
        res.render('template/struktur', dataview)
    },

    proses_stok_masuk: async (req, res) => {
        try {
            // cek sisa di database
            let stok_terakhir = await m_stok.ambil_stoksisa_terakhir(req.body.form_produk)
            let sisa_terakhir = 0
            
            if (stok_terakhir.length > 0) {
                // ambil objek stok_sisa
                sisa_terakhir = stok_terakhir[0].stok_sisa 
            }

            // jumlahkan dengan stok masuk yang diinput
            let hasil_akhir   = sisa_terakhir + Number(req.body.form_jumlah)
            
            // cek jumlah yang dimasukkan tidak boleh di bawah 1
            if (req.body.form_jumlah < 1) {
                let isi_info = `Minimal jumlah yang dikeluarkan adalah 1`
                return res.redirect(`/stok-masuk?status=info&pesan=${isi_info}`)
            }

            let insert        = await m_stok.input_stok_masuk(req, hasil_akhir)
            let isi_notif     = `Berhasil input stok masuk (${req.body.form_jumlah})`  
            if (insert.affectedRows > 0) {
                res.redirect(`/stok-masuk?status=sukses&pesan=${isi_notif}`)
            }        
        } 
        catch (error) {        
            let dataview = {
                konten      : 'stok/form-stok-masuk',
                req         : req,
                uri_segment : req.path.split('/'),
                info_error  : error,
                produk      : await m_produk.get_semua_produk()
            }
            res.render('template/struktur', dataview)
        }
    },

    form_stok_keluar: async (req, res) => {
        let dataview = {
            req         : req,
            konten      : 'stok/form-stok-keluar',
            uri_segment : req.path.split('/'),
            info_error  : null,
            produk      : await m_produk.get_semua_produk()
        }
        res.render('template/struktur', dataview)
    },

    proses_stok_keluar: async (req, res) => {
        try {
            // cek sisa di database
            let stok_terakhir = await m_stok.ambil_stoksisa_terakhir(req.body.form_produk)
            let sisa_terakhir = 0
            
            if (stok_terakhir.length > 0) {
                // ambil objek stok_sisa
                sisa_terakhir = stok_terakhir[0].stok_sisa
            }

            // jumlahkan dengan stok keluar yang diinput
            let hasil_akhir   = sisa_terakhir - Number(req.body.form_jumlah)
            
            // cek apakah jumlah yang dikeluarkan mencukupi
            if (req.body.form_jumlah > sisa_terakhir) {
                let isi_info = `Jumlah yang dikeluarkan (${req.body.form_jumlah}) melebihi stok yang tersedia (${sisa_terakhir})`
                return res.redirect(`/stok-keluar?status=info&pesan=${isi_info}`)
            }

            // cek jumlah yang dikeluarkan tidak boleh di bawah 1
            if (req.body.form_jumlah < 1) {
                let isi_info = `Minimal jumlah yang dikeluarkan adalah 1`
                return res.redirect(`/stok-keluar?status=info&pesan=${isi_info}`)
            }

            let insert        = await m_stok.input_stok_keluar(req, hasil_akhir)
            let isi_notif     = `Berhasil mengeluarkan stok (${req.body.form_jumlah})`  
            if (insert.affectedRows > 0) {
                res.redirect(`/stok-keluar?status=sukses&pesan=${isi_notif}`)
            }        
        } 
        catch (error) {        
            let dataview = {
                konten      : 'stok/form-stok-keluar',
                req         : req,
                uri_segment : req.path.split('/'),
                info_error  : error,
                produk      : await m_produk.get_semua_produk()
            }
            res.render('template/struktur', dataview)
        }
    },


}