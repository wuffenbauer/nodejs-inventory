module.exports = {
    index: (req, res) => {
        let dataview = {
            konten: 'master-produk/index',
            uri_segment: req.path.split('/'),
        }
        res.render('template/struktur', dataview)
    },
    
}