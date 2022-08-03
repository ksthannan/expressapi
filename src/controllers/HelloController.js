exports.Hello = (req, res) => {

    res.status(200).json({status: "Success", data: "Hello World!"})

}
