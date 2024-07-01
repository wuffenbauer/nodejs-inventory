const m_user = require("../model/m_user")

module.exports = {
    index: async (req, res) => {
        let dataview = {
            konten      : 'user-management/index',
            uri_segment : req.path.split('/'),
            users       : await m_user.get_semua_user()
        }
        res.render('template/struktur', dataview)
    },

    form_tambah: (req, res) => {
        let dataview = {
            konten      : 'user-management/form-tambah',
            uri_segment : req.path.split('/'),
            info_error  : null
        }
        res.render('template/struktur', dataview)
    },

    proses_simpan: async (req, res) => {
        try {      
            let insert      = await m_user.tambah(req)
            let isi_notif   = `Berhasil membuat user baru`  
            if (insert.affectedRows > 0) {
                res.redirect(`/user-management?status=${isi_notif}`)
            }        
        } 
        catch (error) {        
            res.render('/user/tambah', {info_error: error})
        }
    },


}