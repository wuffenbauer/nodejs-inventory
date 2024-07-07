const m_user = require("../model/m_user")

module.exports = {
    index: async (req, res) => {
        let dataview = {
            konten      : 'user-management/index',
            req         : req,
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
                res.redirect(`/user-management?status=sukses&pesan=${isi_notif}`)
            }        
        } 
        catch (error) {        
            let dataview = {
                konten      : 'user-management/form-tambah',
                req         : req,
                uri_segment : req.path.split('/'),
                info_error  : error,
            }
            res.render('template/struktur', dataview)
        }
    },

    // detail: async (req, res) => {
    //     const id = req.params.user
    //     let dataview = {
    //         konten      : 'user-management/detail/',
    //         uri_segment : req.path.split('/'),
    //         info_error  : null,
    //         detail_user : await m_user.get_satu_user(id), 
    //     }
    //     res.render('template/struktur', dataview)
    // },

    // edit: async (req, res) => {
    //     const id = req.params.user
    //     let dataview = {
    //         konten      : 'user-management/edit/',
    //         uri_segment : req.path.split('/'),
    //         info_error  : null,
    //         edit_user   : await m_user.get_satu_user(id),
    //     }
    //     res.render('template/struktur', dataview)
    // },

    // update_user: async (req, res) => {
    //     try {      
    //         let insert      = await m_user.edit(req)
    //         let isi_notif   = `Berhasil memperbarui data user`  
    //         if (insert.affectedRows > 0) {
    //             res.redirect(`/user-management?status=sukses&pesan=${isi_notif}`)
    //         }        
    //     } 
    //     catch (error) {        
    //         let dataview = {
    //             konten      : 'user-management/form-edit',
    //             req         : req,
    //             uri_segment : req.path.split('/'),
    //             info_error  : error,
    //         }
    //         res.render('template/struktur', dataview)
    //     }
    // },


}