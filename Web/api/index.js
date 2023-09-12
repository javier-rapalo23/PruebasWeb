const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://javier_rapalo23:Dhxka8793@cluster0.nbxgmnd.mongodb.net/miapp?retryWrites=true&w=majority')


const User = mongoose.model('User', {
    username: String,
    edad: Number,
})
const crear = async () => {
    const user = new User({ username: 'Alejandro', edad: 22})
    const savedUser = await user.save()
    console.log(savedUser)
}
//crear()

const buscarTodo = async () => {
    const users = await User.find()
    console.log(users)
}
//buscarTodo()

const buscar = async () => {
    const user = await User.find({ username: 'Alejandro'})
    console.log(user)
}
//buscar()

const buscarOne = async () => {
    const user = await User.findOne({ username: 'Alejandro'})
    console.log(user)
}
//buscarOne()

const actualizar = async () => {
    const user = await User.findOne({ username: 'Alejandro'})
    console.log(user)
    user.edad = 30
    await user.save()
}
//actualizar()

const eliminar = async () => {
    const user = await User.findOne({ username: 'Javier'})
    console.log(user)
    if (user) {
        await user.deleteOne()
    }
}
//elimiar()
