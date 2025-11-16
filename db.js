require('dotenv').config();
const oracledb = require('oracledb');

// Initialize Thick mode
try {
    oracledb.initOracleClient();
    console.log('node-oracledb running in Thick mode.');
} catch (err) {
    console.error('Error initializing Oracle Client:', err);
    process.exit(1); // Exit if initialization fails
}

async function runApp()
{
    config = 
    {
        user: process.env.USER,
        password: process.env.PASSWORD,
        connectionString: "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(Host=oracle.scs.ryerson.ca)(Port=1521))(CONNECT_DATA=(SID=orcl)))",
    }
    console.log(config);
    let connection;
    try {
        connection = await oracledb.getConnection(config);
        console.log("Successfully connected to Oracle Database");

        // Create a table
        await connection.execute(`
        BEGIN
            EXECUTE IMMEDIATE 'DROP TABLE todoitem';
        EXCEPTION
            WHEN OTHERS THEN
            IF SQLCODE != -942 THEN
                RAISE;
            END IF;
        END;`,
        [],
        { autoCommit: true });
       await connection.execute(`
            CREATE TABLE todoitem (
                id           NUMBER,
                description  VARCHAR2(4000),
                creation_ts  TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                done         NUMBER(1,0),
                PRIMARY KEY (id)
            )`,
            [],
        { autoCommit: true });
        // Insert some data
        const sql = `insert into todoitem (id, description, done) values(:1, :2, :3)`;
        const rows = [ [0, "Task 1", 0 ], [1, "Task 2", 0 ], [2, "Task 3", 1 ], [3, "Task 4", 0 ], [4, "Task 5", 1 ] ];
        let result = await connection.executeMany(sql, rows);
        console.log(result.rowsAffected, "Rows Inserted");
        connection.commit();
        
        // Now query the rows back
        result = await connection.execute( `select description, done from todoitem`, [], { resultSet: true, outFormat: oracledb.OUT_FORMAT_OBJECT });
        const rs = result.resultSet; let row;
        while ((row = await rs.getRow())) {
            if (row.DONE)
                console.log(row.DESCRIPTION, "is done");
            else
                console.log(row.DESCRIPTION, "is NOT done");
        }
        await rs.close();
    } catch (err) {
        console.error(err);
    } finally {
        if (connection)
        {
            try {
                await connection.close();
            } catch (err) {
                console.error(err);
            }
        }
    }
}
runApp();