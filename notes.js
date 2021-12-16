const fs = require('fs')
const chalk = require('chalk')


const getNotes = () => {
    return "Your notes..."
}

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNotes = notes.find((note) => note.title == title)
    // const duplicateNotes = notes.filter(function (note){
    //     return note.title == title
    // } )

        debugger

    if (!duplicateNotes){
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log('new note added')
    } else {
        console.log('note title taken')
    }


}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJsON)
}

const loadNotes = () => {
    try{    
        const databuffer = fs.readFileSync('notes.json')
        const dataJSON = databuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return[]
    }
    
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep =  notes.filter((note) => note.title !== title)
    if(notes.length == notesToKeep.length){
        console.log(chalk.bgRed('No note was Removed'))
    }else{
        saveNotes(notesToKeep)
        console.log(chalk.bgBlue('Note was Removed'))
    }

}

const listNotes = () => {
    console.log(chalk.green.inverse('Your Notes Are:'))
    const notes = loadNotes()
    notes.forEach( (notes) => {
        console.log(notes.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title == title)

    if(note){
          console.log(chalk.yellow.inverse(note.title))  
          console.log(note.body) 
        }
    else{
        console.log('Eror')
    }
}


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}