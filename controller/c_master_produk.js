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
    

}