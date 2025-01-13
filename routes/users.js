import express from 'express';

const router = express.Router();

const users = [
    {
        firstName : "Kim",
        lastname : "Washington",
        age : 17,
        occupation : "Clerk"
    },
    {
        firstName : "Johnny",
        lastname : "Fields",
        age : 37,
        occupation : "Baker"
    }
]

router.get('/', (req,res) => {
    console.log(users);

    res.send(users);
});

router.post('/', (req, res) => {
  const user = req.body;

    users.push(user);

    res.send(`User with the name ${user.firstName} added to the Database`);
});


export default router;