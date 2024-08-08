const student = require('./hogwarts.js')

const errorDetected = async (res, err) =>{
    console.log(err.message)
    res.status(500).json({"Error": err.message})
}

const general = (req, res) => {
    res.send("Heyy server is Listening !!<br>Test API's for Hogwarts")
}

const createStudent = async (req, res) => {
    existing = await student.find({"id": req.body.id})
    if(existing.length == 0){
        try{
            temp = await student.create(req.body)
            return res.status(200).json(temp)
        }
        catch(err){
            errorDetected(res, err)
        }
    }
    else{
        res.status(200).send("Student with same id already exists !!")
    }
}

const viewAll = async (req, res) => {
    try{
        temp = await student.find({})
        res.status(200).json(temp)
    }
    catch(err){
        errorDetected(res, err)
    }
}

const update = async (req, res) => {
    try{
        id = req.params.id
        check = !req.body.hasOwnProperty("id")
        if(check){
            temp = await student.findOneAndUpdate({"id": id}, req.body, {new: true})
            if(temp == null){
                return res.send("Student do not exists !!")
            }
            res.status(200).json(temp)
        }
        else{
            res.send("Cannot Update Student id !!!")
        }
    }
    catch(err){
        errorDetected(res, err)
    }
}

const deleteStudent = async (req, res) => {
    try{
        id = req.params.id
        check = await student.deleteMany({"id": id})
        if(check.deletedCount > 0){
            res.send("Student deleted sucessfully !!")
        }
        else{
            res.send("Student do not exits or Deleted Earlier !!")
        }
    }
    catch(err){
        errorDetected(res, err)
    }
}

module.exports = {
    general,
    createStudent,
    viewAll,
    update,
    deleteStudent
}