const m_produk      = require('./m_produk')
const mysql         = require('mysql2')
const db            = require('../config/database').db

module.exports = {
    get_semua_kategori: function() {
        let sql = mysql.format(
            `SELECT * FROM master_kategori;`
        )
        
        return new Promise((resolve, reject) => {
            db.query(sql, function(errorSql, hasil) {
                if (errorSql) {
                    reject(errorSql)
                }
                else {
                    resolve(hasil)
                }
            })
        })
    },
    
    get_satu_kategori: function(id) {
        let sql = mysql.format(
            `SELECT * FROM master_kategori WHERE kategori.id = ?;`,
            [id]            
        )

        return new Promise((resolve, reject) => {
            db.query(sql, function(errorSql, hasil) {
                if (errorSql) {
                    reject(errorSql)
                }
                else {
                    resolve(hasil)
                }
            })
        })
    },

    tambah: function(req) {
        let data = {
            nama            : req.body.form_kategori,
            deskripsi       : req.body.form_deskripsi
        }

        let sql = mysql.format(
            `INSERT INTO master_kategori SET ?`,
            [data]            
        )

        return new Promise((resolve, reject) => {
            db.query(sql, function(errorSql, hasil) {
                if (errorSql) {
                    reject(errorSql)
                }
                else {
                    resolve(hasil)
                }
            })
        })
    },
    
    edit: function(req) {
        let data = {
            nama            : req.body.form_kategori,
            deskripsi       : req.body.form_deskripsi
        }

        let sql = mysql.format(
            `UPDATE master_kategori SET ? WHERE id = ?`,
            [data, req.params.id_kategori]            
        )

        return new Promise((resolve, reject) => {
            db.query(sql, function(errorSql, hasil) {
                if (errorSql) {
                    reject(errorSql)
                }
                else {
                    resolve(hasil)
                }
            })
        })
    },


}