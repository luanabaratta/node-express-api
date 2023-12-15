import express from 'express';
import {
    getUser,
    createUser,
    getUserById,
    updateUser,
    deleteUser } from "../controllers/users.js";

const router = express.Router();

router.get('/', getUser);
router.post('/', createUser);
router.get('/:id', getUserById);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;