module.exports = {
    index: (req, res) => {
        let dataview = {
            konten: 'master-produk/index'
        }
        res.render('template/struktur', dataview)
    },
    
}