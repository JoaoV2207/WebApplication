const router = require('express').Router();
const UserService = require('../service/UserService');
const {
  loginMilddleware,
  notLoggedIn,
  jwtMiddleware,
  checkRole,
} = require('../../middlewares/auth-middlewares');
const objectFilter = require('../../middlewares/object-filter');
const userValidate = require('../../middlewares/user-validator');

router.post('/', 
  objectFilter('body',['name', 'email', 'image', 'password']),
  userValidate('createUser'),
 async (req, res) => {
  try {
    const user = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      image: req.body.image,
      role: 'user',
    };

    await UserService.createUser(user);

    res.status(201).end();
  } catch (error) {
    console.log(error);
  }
});

router.get('/', jwtMiddleware, async (req, res) => {
  try {
    const users = await UserService.getAllUsers();

    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
});

router.get('/user/:id', jwtMiddleware, async (req, res) =>{
  try {
    const userId = req.params.id;
    const user = await UserService.getUserById(userId);

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
});

router.put('/user/:id', 
  jwtMiddleware,
  objectFilter('body',['name', 'email', 'image']),
  userValidate('updateUser'),
async (req, res) =>{
  try {
    const userId = req.params.id;
    await UserService.updateUser(userId, req.user.id, req.user.role, req.body);

    res.status(204).end();
  } catch (error) {
    res.status(400).send(erro.message);
  }
});

router.delete('/user/:id',
  jwtMiddleware,
  checkRole('admin'),
  async (req, res) =>{
    try {
      const userId = req.params.id;
      await UserService.deleteUser(userId, req.user.id);

      res.status(204).end();
    } catch (error) {
      res.status(400).send(erro.message);
    }
  });

router.post('/login', notLoggedIn, userValidate('login'), loginMilddleware);

router.get('/logout', jwtMiddleware, (req, res) => {
  try {
    res.clearCookie('jwt');
    res.status(204).end();
  } catch (error) {
    console.log(error);
  }
});

router.get('/me', jwtMiddleware, async (req, res) => {
  const user = await UserService.getCurrentUser(req.user.id);

  res.status(200).json(user);
});

module.exports = router;
