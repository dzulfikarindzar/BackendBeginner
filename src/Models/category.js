const db = require('../Config/db')
const categories = {}


categories.get = () =>{
    return new Promise((resolve, reject) =>{
        db.query("SELECT * FROM public.category ORDER BY id ASC")
        .then((res) => {
            if (res.rows.length == 0) {
                resolve({msg : "Data Kosong"})
            } else {
                resolve(res.rows)
            }
        })
        .catch((err) => {
            reject(err)
        })
    })
}

categories.add = (data) =>{
    return new Promise((resolve, reject) =>{
        db.query(`INSERT INTO public.category(name) VALUES ('${data.name}')`)
        .then((res) => {
            resolve(data)
        })
        .catch((err) => {
            reject("Input Category please!")
        })
    })
}

categories.update = (data) =>{
    return new Promise((resolve, reject) =>{
        db.query(`UPDATE public.category SET category='${data.category}' WHERE id=${data.id}`)
        .then((res) => {
            resolve(data)
        })
        .catch((err) => {
            reject(err)
        })
    })
}


categories.del = (id) =>{
    return new Promise((resolve, reject) =>{
        db.query(`DELETE FROM public.category WHERE id=${id}`)
        .then((res) => {
            resolve(id)
        })
        .catch((err) => {
            reject(err)
        })
    })
}

module.exports = categories



