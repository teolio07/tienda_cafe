const commentsService = require('./../services/commentsServices');
const service = new commentsService;
const Joi = require('@hapi/joi')

//validate data for create messages
const schemaCreateMessages = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    comment: Joi.string().min(6).max(255).required()
})

//validate data for update messages


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
    const { error } = schemaCreateMessages.validate(req.body);
    
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
    try{
        let newComment = req.body;
        let idComment = req.body.idComment;
        let updateComment = service.updateComment(idComment,newComment);
        updateComment.then((response)=>{
            res.send(response)
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
    updateComment
}
