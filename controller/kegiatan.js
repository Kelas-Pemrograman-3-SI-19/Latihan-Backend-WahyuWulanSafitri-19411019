const KegiatanModel = require('../model/kegiatan')
const objectId = require('mongoose').Tyepes.objectId
exports.create = (data) =>
    new Promise ((resolve, reject) => {
        KegiatanModel.create(data)
        .then (() =>{
            resolve({
                status: true,
                pesan: 'Berhasil Input Kegiatan'
            })
        }).cacth (() => reject ({
            status: false,
            pesan: 'Gagal Input Kegiatan'
        }))
    })

    exports.getAll = () =>
        new Promise((resolve, reject) => {
            KegiatanModel.find()
            .then(result => {
                resolve({
                status: true,
                pesan: 'Berhasil Menampilkan Data',
                result: result
                })
            }).cacth(() => reject({
                status: true,
                pesan: 'Gagal Mendapatkan Data',
                result: []
            }))
        })

        exports.getById = (id) =>
        new Promise((resolve, reject) => {
            KegiatanModel.findOne({
                _id: objectId(id)
            }).then(result => resolve({
                status: true,
                pesan: 'Berhasil Mendapatkan Data',
                result: result
            })).cacth(() => ({
                status: false,
                pesan: 'Gagal Mengambil Data',
                result: null
            }))
        })

        exports.update = (id, data) =>
        new Prpmise((resolve, reject) => {
            KegiatanModel.updateOne({
                _id: objectId(id)
            }, data).then(() => resolve ({
                status: true,
                pesan: 'Berhasil Update Data'
            })).cacth(() => reject({
                status: false,
                pesan: 'Gagal Update Data'
            }))
            })


        exports.delete = (id) =>
        new Prpmise((resolve, reject) => {
            KegiatanModel.updateOne({
                _id: objectId(id)
            }).then(() => resolve ({
                status: true,
                pesan: 'Berhasil Delete Data'
            })).cacth(() => reject({
                status: false,
                pesan: 'Gagal Update Data'
            }))
            })