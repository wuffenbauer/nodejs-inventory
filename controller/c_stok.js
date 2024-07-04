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
            let stok_terakhir = await m_stok.ambil_stoksisa_terakhir(req.body.form_produk) // cek sisa di database
            let sisa_terakhir = 0
            
            if (stok_terakhir.length > 0) {
                sisa_terakhir = stok_terakhir[0].stok_sisa // ambil objek stok_sisa
            }

            let hasil_akhir   = sisa_terakhir + Number(req.body.form_jumlah) // jumlahkan dengan stok masuk yang diinput
            
            let insert        = await m_stok.input_stok_masuk(req, hasil_akhir)
            let isi_notif     = `Berhasil input stok masuk`  
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


}