const m_produk = require('../model/m_produk')

module.exports = {
    index: async (req, res) => {
        let dataview = {
            konten      : 'master-produk/index',
            req         : req,
            uri_segment : req.path.split('/'),
            produk      : await m_produk.get_semua_produk()
        }
        res.render('template/struktur', dataview)
    },
    
    form_tambah: async (req, res) => {
        let dataview = {
            konten      : 'master-produk/form-tambah',
            uri_segment : req.path.split('/'),
            info_error  : null,
            kategori    : await m_produk.get_semua_kategori()
        }
        res.render('template/struktur', dataview)
    },


}