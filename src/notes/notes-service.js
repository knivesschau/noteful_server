const NotesService = {
    getAllNotes(knex) {
        return knex
            .select('*')
            .from('notes')
    },
    insertNote(knex, newNote) {
        return knex
            .insert(newNote)
            .into('notes')
            .returning('*')
            .then(rows => {
                return rows[0]
            });
    },
    getNoteById(knex, id) {
        return knex
            .from('notes')
            .select('*')
            .where('id', id)
            .first();
    },
    deleteNote(knex, id) {
        return knex('folders')
            .where({id})
            .delete();
    },
    updateNote(knex, newNoteFields) {
        return knex('folders')
            .where({id})
            .update(newNoteFields)
    }
};

module.exports = NotesService; 