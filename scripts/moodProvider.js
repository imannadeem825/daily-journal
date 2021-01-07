let recordedMoods = []

export const getMoods = () => {
    return fetch("http://localhost:8088/moods")
        .then(response => response.json())
        .then(moods => {
            console.table(moods)
            recordedMoods = moods
        })
}

export const useMoods = () => {
    return recordedMoods.slice()
}



// export const getEntries = () => {
//     return fetch("http://localhost:8088/entries") // Fetch from the API
//         .then(response => response.json())  // Parse as JSON
//         .then(entries => {
//             // What should happen when we finally have the array?
//             console.table(entries)
//             journal = entries
//         })
// }

// export const useJournalEntries = () => {
    
//     journal.sort(
//         (currentEntry, nextEntry) =>
//             Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
//     )
//     return journal.slice()
// }