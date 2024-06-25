import express from "express";
import { findAll, find, create, update, destroy } from '../controllers/user.controller.js';

const router = express.Router();

// Retrieve all Users
router.get("/", findAll);

// Retrieve a User
router.get("/:id", find);

// Create a new User
router.post("/", create);

// Update a new User
router.put("/:id", update)

// Delete a User
router.delete("/:id", destroy)

export default router;