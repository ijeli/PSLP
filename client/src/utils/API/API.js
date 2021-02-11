export default {
    getAllImageFiles: () => fetch(`http://localhost:3001/api/img`)
        .then(res => res.json()),
    getOneImageFile: (id) => fetch(`http://localhost:3001/api/img/${id}`)
        .then(res => res.json()),

    postOneImageFile: (data) => fetch(`http://localhost:3001/api/img/upload`, data)
}