const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();

// This function is to GET all contacts
router.get("/", async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// This function is to GET a single contact by ID
router.get("/:id", async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) return res.status(404).json({ message: "Contact not found" });
        res.json(contact);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// This function is to POST a new contact
router.post("/", async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        await newContact.save();
        res.status(201).json({ id: newContact._id });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// This function is to PUT (update) an existing contact
router.put("/:id", async (req, res) => {
    try {
        await Contact.findByIdAndUpdate(req.params.id, req.body);
        res.sendStatus(200);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// This function is to DELETE a contact
router.delete("/:id", async (req, res) => {
    try {
        await Contact.findByIdAndDelete(req.params.id);
        res.sendStatus(200);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
