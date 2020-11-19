/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (journal) => {
    return `
        <section id="entry--${journal.id}" class="journalEntry">
           ${journal.entry}
        </section>
    `
}