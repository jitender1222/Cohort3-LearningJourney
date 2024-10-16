const { Router } = require("express");
const adminMiddleware = require("../middleware/auth");
const { todo } = require("../Database/db");
const router = Router();

// todo Routes
router.post('/createTodo', adminMiddleware, async (req, res) => {
    // Implement todo creation logic
    const userId=req.userId;
    const title=req.body.title;
    const description=req.body.description;

    if(title && description){
        const createTodo=await todo.create({
            title,
            description, 
            userId
        })
    
        res.status(200).json({
            message:"todo created successfully",
            createTodo,
        })
    
    }
    else{
        res.json({
            message:"Either title or description is missing"
        })
    }
});

router.put('/updateTodo', adminMiddleware, (req, res) => {
    // Implement update todo  logic
});

router.delete('/deleteTodo', adminMiddleware, (req, res) => {
    // Implement delete todo logic
});

router.delete('/:id', adminMiddleware, (req, res) => {
    // Implement delete todo by id logic
});


router.get('/getAllTodo', adminMiddleware, (req, res) => {
    // Implement fetching all todo logic
});

router.get('/:id', adminMiddleware, (req, res) => {
    // Implement fetching todo by id logic
});

module.exports = router;