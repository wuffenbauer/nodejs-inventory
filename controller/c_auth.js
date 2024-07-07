const bcrypt    = require('bcryptjs')
const mysql     = require('mysql2')
const db        = require('../config/database').db

let cari_username = function(username) {
    return new Promise((resolve, reject) => {
        try {
            db.query('SELECT * FROM user WHERE username = ?', [username], (errorSql, hasil) => {
                if (errorSql) {
                    reject(errorSql)
                } else {
                    let user = hasil[0]
                    resolve(user)
                }
            })
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {    
    form_login: (req, res) => {
        if (req.session.user) {
            res.redirect('/dashboard')
        } else {
            let dataview = {
                req: req
            }
            res.render('auth/form-login', dataview)
        }
    },

    proses_login: async (req, res) => {
        let username = req.body.form_username
        let password = req.body.form_password
        
        let user = await cari_username(username)
        if (user) {
            let passwordSesuai = bcrypt.compareSync(password, user.password)
            if (passwordSesuai) {
                req.session.user = user
                return res.redirect('/dashboard')
            } else {
                res.redirect('/login?msg=Password yang Anda masukkan salah')
            }
        } else {
            res.redirect('/login?msg=Username tidak terdaftar')
        }
    },

    cek_login: (req, res, next) => {
        if (req.session.user) {
            next()
        } else {
            res.redirect('/login?msg=Sesi Anda sudah habis. Silakan login ulang.')
        }
    },

    
}