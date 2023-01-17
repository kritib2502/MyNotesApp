import express from "express";
import database from './mysqlDatabase.js';
// const mysqlDatabase = require("./mysqlDatabase");

const app = express()
app.set("view engine","ejs");

app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))

app.get("/",async(req,res) => {
    const notes = await database.getNotes()
    res.render("index.ejs",{notes});
});

app.get("/:id", async(req,res) =>{
    const id = req.params.id
    const note = await database.getNote(id)
    res.render("singleNote.ejs",{note});
})


app.post('/createNote',async (req,res) =>{
    const{title,content} = req.body
    await database.addNote(title,content)
    res.redirect('/')
})

app.post('/deleteNote',async (req,res) =>{
    const{id} = req.body
    await database.deleteNote(id)
    res.redirect('/')
})

const port = process.env.PORT || 8080;
app.listen(port, () =>{
    console.log(`Listening on port ${port}`);
});