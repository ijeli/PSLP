export default {
    getAllImageFiles: () => fetch(`http://localhost:3001/api/img`),
    getOneImageFile: (id) => fetch(`http://localhost:3001/api/img/${id}`),

    postOneImageFile: (data) => fetch(`http://localhost:3001/api/img/upload`, data)
}