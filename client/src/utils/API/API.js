export default {
    getAllImageFiles: () => fetch(`http://localhost:3001/api/img`),
    getOneImageFile: (id) => fetch(`http://localhost:3001/api/img/${id}`)
}