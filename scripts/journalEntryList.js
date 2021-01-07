
import { getEntries, useJournalEntries } from "./journalDataProvider.js"
import { JournalEntryComponent } from "./journalEntry.js"
import { getMoods, useMoods } from "./moodProvider.js"

const eventHub = document.querySelector(".container")

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector("#entryLog")
let journalEntryCards = []
let allMoods = []


export const EntryListComponent = () => {
    getEntries()
    .then(getMoods)
    .then( () => {
        allMoods = useMoods()
        let entries = useJournalEntries()

        for (const entry of entries) {
            const matchedMoods = allMoods.find( (mood) => mood.id === entry.moodId)
            entry.mood = matchedMoods.label
            journalEntryCards.push(JournalEntryComponent(entry))
        
        }

    entryLog.innerHTML = journalEntryCards.join("")
    })

}


eventHub.addEventListener("entryStateChanged", () => {
    EntryListComponent()
})