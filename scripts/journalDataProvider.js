const eventHub = document.querySelector(".container")
let journal = []

const dispatchStateChangeEvent = () => {
    const entryStateChangedEvent = new CustomEvent("entryStateChanged")
    eventHub.dispatchEvent(entryStateChangedEvent)
}

export const getEntries = () => {
    return fetch("http://localhost:8088/entries") // Fetch from the API
        .then()  // Parse as JSON
        .then(entries => {
            // What should happen when we finally have the array?
            console.table(entries)
            journal = entries
        })
}

export const useJournalEntries = () => {
    journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return journal.slice()
}

export const saveJournalEntry = (newJournalEntry) => {
    let stringifiedObj = JSON.stringify(newJournalEntry)
    return fetch('http://localhost:8088/entries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: stringifiedObj
    })
    .then(getEntries)
    .then(dispatchStateChangeEvent)
}
