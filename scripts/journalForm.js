// TASKS:
// add event listener for a click on the form button
// need to gather the data from the form
// convert form data to an object
// send data to be stored in the database, via the API

import { saveJournalEntry } from "./journalDataProvider.js"
const contentTarget = document.querySelector(".journalFormContainer")
const eventHub = document.querySelector(".container")

const render = () => {
    contentTarget.innerHTML = 
    `
    <fieldset>
        <label for="journalDate">Date of Entry</label>
        <input type="date" name="journalDate" id="journalDate">
    </fieldset>
    <fieldset>
        <label for="conceptsCovered">Concepts Covered</label>
        <input type="text" name="conceptsCovered" id="conceptsCovered">
    </fieldset>
    <fieldset>
        <label for="journalEntry">Journal Entry</label>
        <textarea id="journalEntry" name="journalEntry" rows="5"></textarea>
    </fieldset>
    <fieldset>
        <label for="mood">Mood</label>
        <select name="mood" id="mood">
            <option value="sad">Sad</option>
            <option value="discouraged">Discouraged</option>
            <option value="frustrated">Frustrated</option>
            <option value="defeated">Defeated</option>
            <option value="proud">Proud</option>
            <option value="excited">Excited</option>
        </select>
    </fieldset>

    `
}


// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveJournalEntry") {
        // need to gather data from the form
        const journalDate = document.querySelector("#journalDate").value
        const conceptsCovered = document.querySelector("#conceptsCovered").value
        const journalEntry = document.querySelector("#journalEntry")
        const mood = document.querySelector("#mood").value

        // Make a new object representation of a note
        const newJournalEntry = {
            // Key/value pairs here
            date: journalDate,
            concept: conceptsCovered,
            entry: journalEntry,
            mood: mood,
            dateCreated: Date.now()
        }

        // Change API state and application state
        
        saveJournalEntry(newJournalEntry)
    }
})

export const journalForm = () => {
    render()
}