import express from 'express';

const router = express.Router();

const users = [
    {
        "firstName" : "Kim",
        "lastname" : "Washington",
        "age" : 17
    }
]

router.get('/', (req,res) => {
    res.send('Hello');
});



export default router;