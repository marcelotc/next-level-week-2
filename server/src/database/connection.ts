const options = {
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'postgres',
        database: 'next-level-week-2'
    }
}

const knex = require('knex')(options)

export default knex;