// TASKS:
// add event listener for a click on the form button
// need to gather the data from the form
// convert form data to an object
// send data to be stored in the database, via the API

import { saveJournalEntry } from "./journalDataProvider.js"
import { getMoods, useMoods } from "./moodProvider.js"
let recordedMoods = []
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
        <label for="mood">I'm feeling...</label>
        <select name="mood" id="mood">
            <option value="0">Please select a mood</option>
            ${
                recordedMoods.map(
                    (mood) => {
                        return `<option value="${mood.id}">${mood.label}</option>`
                    }
                ).join("")
            }

            
            

        </select>
    </fieldset>

    `
}


{/* <option value="Proud 😊">Proud 😊</option>
<option value="Excited 🤩">Excited 🤩</option>
<option value="Celebratory 🥳>Celebratory 🥳</option>
<option value="Mind-blown 🤯">Mind-blown 🤯</option>

<option value="Capable 😎">Capable 😎</option>
<option value="Smart 🤓">Smart 🤓</option>
<option value="Boss 😤">Boss 😤</option>

<option value="Sad 😔">Sad 😔</option>
<option value="Discouraged 😩">Discouraged 😩</option>
<option value="Defeated 😭">Defeated 😭</option>
<option value="Hold Me 🥺">Hold Me 🥺</option>

<option value="Confused 🥴">Confused 🥴</option>
<option value="Lost 🙃">Lost 🙃</option>

<option value="Stressed 😓">Stressed 😓</option>
<option value="Frustrated 😖">Frustrated 😖</option>
<option value="Over It 😒">Over It 😒</option>
<option value="Fed up 🤬">Fed up 🤬</option>

<option value="🤡">🤡</option> */}


// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveJournalEntryButton") {
        // need to gather data from the form
        const journalDate = document.querySelector("#journalDate").value
        const conceptsCovered = document.querySelector("#conceptsCovered").value
        const journalEntry = document.querySelector("#journalEntry").value
        const mood = parseInt(document.querySelector("#mood").value)

        // Make a new object representation of a note
        const newJournalEntry = {
            // Key/value pairs here
            date: journalDate,
            concept: conceptsCovered,
            entry: journalEntry,
            moodId: mood,
        }

        // Change API state and application state
        
        saveJournalEntry(newJournalEntry)
    }
})


export const journalForm = () => {
    getMoods()
    .then( () => {
        recordedMoods = useMoods()
        render()
    })
}