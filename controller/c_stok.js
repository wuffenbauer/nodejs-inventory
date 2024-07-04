const m_produk = require('../model/m_produk')

module.exports = {
    form_stok_masuk: async (req, res) => {
        let dataview = {
            konten      : 'stok/form-stok-masuk',
            req         : req,
            uri_segment : req.path.split('/'),
            info_error  : null,
            produk      : await m_produk.get_semua_produk()
        }
        res.render('template/struktur', dataview)
    },


}