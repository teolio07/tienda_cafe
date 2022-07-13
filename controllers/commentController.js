const commentsService = require('./../services/commentsServices');
const service = new commentsService;
const Joi = require('@hapi/joi')

//validate data for create comments
const schemaCreateMessage = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    comment: Joi.string().min(1).max(255).required()
})

//validate data for update comments
const schemaUpdateComment= Joi.object({
    idComment: Joi.string().min(6).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    comment: Joi.string().min(1).max(255).required()
}) 

//validate data fot delete comments 
const schemaDeleteComment = Joi.object({
    idComment: Joi.string().min(6).max(255).required(),
    email: Joi.string().min(6).max(255).required().email()
})

const getComments = (req,res)=>{
    try{
        let readComments = service.readComments()
        readComments.then((response)=>{
            console.log(response)
            res.send(response)
        })
        
    
    }
    catch(error){
        console.log(error);
        res.send('Server error')
    }
}

const createCommnent = (req,res)=>{
    
    //validate data create comment
    const { error } = schemaCreateMessage.validate(req.body);
    
    if(error){
        return res.status(400).json(
            {error: error.details[0].message}
        )
    }


    try{
        let name = req.body.name;
        let email = req.body.email;
        let comment = req.body.comment;
        
        const saveComment = service.createCommnent(name,email,comment)
        saveComment.then((response)=>{ 
            if(response.isBoom == true){
                return res.status(response.output.payload.statusCode).json(response.output.payload);
            }else{
                res.json(response) 
            }
            
        })   
    }
    catch(error){
        console.log(error)
        res.send('Server error')
    }
}

const updateComment = (req,res)=>{
    const { error } = schemaUpdateComment.validate(req.body)
    if(error) {
        return res.status(400).json( 
            {error: error.details[0].message}
        )
    }

    try{
        let newComment = req.body;
        let idComment = req.body.idComment;
        let updateComment = service.updateComment(idComment,newComment);
        updateComment.then((response)=>{
            if(response.isBoom == true){
                return res.status(response.output.statusCode).json(response.output.payload);
            
            }
            res.json(response)
            
        })
        
    } 
    catch(error){
        console.log(error) 
        res.send('Server error')
        
    }
} 

const deleteComment = (req,res)=>{
    try{
        const { dataComment } = req.params
        let data = dataComment.split(',')
        let getEmail = data[1]
        let getIdComment = data[0]
        let validateData = {idComment:getIdComment,email: getEmail}
        const { error } = schemaDeleteComment.validate(validateData) 
        if(error) {
            return res.status(400).json( 
                {error: error.details[0].message}
            )
        }
        let idComment = validateData.idComment
        let email = validateData.email
        let deleteComment = service.deleteComment(idComment, email)
        deleteComment.then((response)=>{
            if(response.isBoom == true){
                return res.status(response.output.statusCode).json(response.output.payload);
            
            } 
            res.json(response)
        })
    }
    catch(error){
        console.log(error)
        res.send('Server error')
    } 
}


module.exports = {
    getComments,
    createCommnent,
    updateComment,
    deleteComment
}
