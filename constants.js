const constants ={
    DATABASE_URI: process.env.DATABASE_URL,

    DATABASES:{
        APP: 'room',
    },

    MESSAGES:{
        FETCHED: 'Resource fetched successfully',
        UPDATED: 'Resource updated successfully',
        ERROR:   'Resource error',
        CREATED: 'Resource created successfully',
        DELETED: 'Resource deletely successfully'
    }
}

module.exports = constants