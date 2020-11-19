/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries } from "./journalDataProvider.js"
import { JournalEntryComponent } from "./journalEntry.js"

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector("#entryLog")

export const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    const entries = useJournalEntries()

    for (const entry of entries) {
        /*
            Invoke the component that returns an
            HTML representation of a single entry
        */
       const entryHTML = JournalEntryComponent(entry)
        entryLog.innerHTML += entryHTML
    }
}

// import { mostHolyFish } from './fishDataProvider.js'
// import { soldierFish } from './fishDataProvider.js'
// import { nonHolyFish } from './fishDataProvider.js'
// import { Fish } from './fish.js'

// export const FishList = () => {

//     // Get a reference to the `<article class="content">` element
//     const contentElement = document.querySelector(".container--left")
//     const holyFish = mostHolyFish()
//     const soldiers = soldierFish()
//     const losers = nonHolyFish()

//     for (const fishObject of holyFish) {
//         // console.log("one fish", fishObject)
//         const fishHTML = Fish(fishObject)
//         // Add to the existing HTML in the content element
//         contentElement.innerHTML += fishHTML
//     }
//     for (const fishObject of soldiers) {
//         // console.log("one fish", fishObject)
//         const fishHTML = Fish(fishObject)
//         // Add to the existing HTML in the content element
//         contentElement.innerHTML += fishHTML
//     }
//     for (const fishObject of losers) {
//         // console.log("one fish", fishObject)
//         const fishHTML = Fish(fishObject)
//         // Add to the existing HTML in the content element
//         contentElement.innerHTML += fishHTML
//     }

// }