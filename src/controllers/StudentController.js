const StudentModel = require('../models/StudentModel')
exports.InsertStudent = (req, res) => {
    console.log(req.body)
    let reqBody = req.body;
    StudentModel.create(reqBody, (err, data)=>{
        if(err){
            res.status(400).json({status: "Request Error", data: err})
        }else{
            res.status(201).json({status: "Success", data: data}) 
            // console.log(reqBody);
        }
    })
};

// Read students data 
exports.ReadStudent = (req, res)=>{
    let query = {}
    let projection = "Name Remarks"
    StudentModel.find(query, projection, (err, data)=>{
        if(err){
            res.status(400).json({status: "Request Error", data: err})
        }else{
            res.status(201).json({status: "Read Success", data: data}) 
        }
    });
}


// update student data 
exports.UpdateStudent = (req, res)=>{
    let id = req.params.id 
    let query = {_id:id}
    let reqBody = req.body 
    StudentModel.updateOne(query, reqBody, (err, data)=>{
        if(err){
            res.status(400).json({status: "Request Error", data: err})
        }else{
            res.status(200).json({status: "Update Success", data: data}) 
        }
    });
}



// update student data 
exports.DeleteStudent = (req, res)=>{
    let id = req.params.id 
    let query = {_id:id}
    StudentModel.remove(query, (err, data)=>{
        if(err){
            res.status(400).json({status: "Request Error", data: err})
        }else{
            res.status(200).json({status: "Delete Success", data: data}) 
        }
    });
}



