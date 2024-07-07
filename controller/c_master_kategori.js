const m_kategori    = require('../model/m_kategori')

module.exports = {
    index: async (req, res) => {
        let dataview = {
            konten      : 'master-kategori/index',
            req         : req,
            uri_segment : req.path.split('/'),
            kategori    : await m_kategori.get_semua_kategori(),
        }
        res.render('template/struktur', dataview)
    },

    form_tambah: async (req, res) => {
        let dataview = {
            konten      : 'master-kategori/form-tambah',
            uri_segment : req.path.split('/'),
            info_error  : null,
            kategori    : await m_kategori.get_semua_kategori(),
        }
        res.render('template/struktur', dataview)
    },

    proses_simpan: async (req, res) => {
        try {      
            let insert      = await m_kategori.tambah(req)
            let isi_notif   = `Berhasil membuat kategori baru`  
            if (insert.affectedRows > 0) {
                res.redirect(`/master-kategori?status=sukses&pesan=${isi_notif}`)
            }        
        } 
        catch (error) {        
            let dataview = {
                konten      : 'master-kategori/form-tambah',
                req         : req,
                uri_segment : req.path.split('/'),
                info_error  : error,
            }
            res.render('template/struktur', dataview)
        }
    },
    
    detail: async (req, res) => {
        const id = req.params.kategori
        let dataview = {
            konten          : 'master-kategori/detail',
            uri_segment     : req.path.split('/'),
            info_error      : null,
            detail_kategori : await m_kategori.get_satu_kategori(id),
        }
        res.render('template/struktur', dataview)
    },
    
    edit: async (req, res) => {
        const id     = req.params.kategori
        let dataview = {
            konten          : 'master-kategori/form-edit',
            uri_segment     : req.path.split('/'),
            info_error      : null,
            edit_kategori   : await m_kategori.get_satu_kategori(id)
        }
        res.render('template/struktur', dataview)
    },

    proses_update: async (req, res) => {
        try {      
            let insert      = await m_kategori.edit_kategori(req)
            let isi_notif   = `Berhasil update kategori`   
            if (insert.affectedRows > 0) {
                res.redirect(`/master-kategori?status=sukses&pesan=${isi_notif}`)
            }        
        } 
        catch (error) {
            let dataview = {
                konten      : 'master-kategori/form-edit',
                req         : req,
                uri_segment : req.path.split('/'),
                info_error  : error,
            }
            res.render('template/struktur', dataview)   
        }     
    },


}