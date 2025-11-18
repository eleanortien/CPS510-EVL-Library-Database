import 'dotenv/config';
import oracledb from 'oracledb';
import { Statements } from './statements.js';
/**
 * Creates an Oracle connection pool.
 * @returns {Promise<void>}
 */
export async function create_oracle_pool(username, password) {
    try {
        const pool = await oracledb.createPool({
            user: username,
            password: password, // mypw contains the hr schema password
            connectString: "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(Host=oracle12c.scs.ryerson.ca)(Port=1521))(CONNECT_DATA=(SID=orcl12c)))",
            poolIncrement: 1,
            poolMin: 0,
            poolMax: 5,
            poolAlias: "default"
        });
    }
    catch (err) {
        console.error("Failed to create Oracle Pool:", err);
        throw err;
    }
}
/**
 * Closes an Oracle connection pool.
 * @returns {Promise<void>}
 */
export async function close_oracle_pool() {
    await oracledb.getPool().close(0);
}
/**
 * Drops tables.
 * @returns {Promise<void>}
 */
export async function drop_tables() {
    let connection;
    try {
        connection = await oracledb.getConnection();
        console.log("Successfully connected to Oracle Database");
    }
    catch (err) {
        console.error(err);
        throw err;
    }
    for (const sqlCommand of Statements.dropTables) {
        try {
            await connection.execute(sqlCommand);
        }
        catch (err) {
            console.error(sqlCommand + ": " + err);
            continue;
        }
    }
    connection.commit();
    console.log("Successfully dropped tables.");
    if (connection) {
        try {
            await connection.close();
        }
        catch (err) {
            console.error(err);
        }
    }
}
/**
 * Creates tables.
 * @returns {Promise<void>}
 */
export async function create_tables() {
    let connection;
    try {
        connection = await oracledb.getConnection();
        console.log("Successfully connected to Oracle Database");
    }
    catch (err) {
        console.error(err);
        throw err;
    }
    for (const sqlCommand of Statements.createTables) {
        try {
            await connection.execute(sqlCommand);
        }
        catch (err) {
            console.error(sqlCommand + ": " + err);
            continue;
        }
    }
    connection.commit();
    console.log("Successfully created tables.");
    if (connection) {
        try {
            await connection.close();
        }
        catch (err) {
            console.error(err);
        }
    }
}
/**
 * Populates tables.
 * @returns {Promise<void>}
 */
export async function populate_tables() {
    let connection;
    try {
        connection = await oracledb.getConnection();
        console.log("Successfully connected to Oracle Database");
    }
    catch (err) {
        console.error(err);
        throw err;
    }
    for (const sqlCommand of Statements.populateTables) {
        try {
            await connection.executeMany(sqlCommand.sql, sqlCommand.binds, sqlCommand.options);
        }
        catch (err) {
            console.error(JSON.stringify(sqlCommand) + ": ");
            console.error(err);
            continue;
        }
    }
    connection.commit();
    console.log("Successfully populated tables.");
    if (connection) {
        try {
            await connection.close();
        }
        catch (err) {
            console.error(err);
        }
    }
}
/**
 *  Runs and returns a simple query.
 * @returns {Promise<Result<any>>}
 */
export async function simple_query_tables(querynum) {
    let connection;
    try {
        connection = await oracledb.getConnection();
        console.log("Successfully connected to Oracle Database");
    }
    catch (err) {
        console.error(err);
        throw err;
    }
    try {
        if (querynum < 1 || querynum > 12) {
            throw new Error("Invalid query num: " + querynum + ". Should be from 1-12");
        }
        let sqlCommand = Statements.simpleQueries[querynum];
        let result = await connection.execute(sqlCommand, [], { outFormat: oracledb.OBJECT });
        let res = JSON.stringify(result.rows);
        console.log("Successfully ran simple query on tables.");
        return res;
    }
    catch (err) {
        console.error(sqlCommand + ": " + err);
    }
    if (connection) {
        try {
            await connection.close();
        }
        catch (err) {
            console.error(err);
        }
    }
}
/**
 *  Runs and returns an advanced query.
 * @returns {Promise<Result<any>>}
 */
export async function advanced_query_tables(querynum) {
    let connection;
    try {
        connection = await oracledb.getConnection();
        console.log("Successfully connected to Oracle Database");
    }
    catch (err) {
        console.error(err);
        throw err;
    }
    try {
        if (querynum < 1 || querynum > 6) {
            throw new Error("Invalid query num: " + querynum + ". Should be from 1-6");
        }
        let sqlCommand = Statements.advancedQueries[querynum];
        let result = await connection.execute(sqlCommand, [], { outFormat: oracledb.OBJECT });
        let res = JSON.stringify(result.rows);
        console.log("Successfully ran advanced query on tables.");
        return res;
    }
    catch (err) {
        console.error(sqlCommand + ": " + err);
    }
    if (connection) {
        try {
            await connection.close();
        }
        catch (err) {
            console.error(err);
        }
    }
}
/**
 *  Runs and returns a table.
 * @returns {Promise<Result<any>>}
 */
export async function view_tables(querykey) {
    let connection;
    try {
        connection = await oracledb.getConnection();
        console.log("Successfully connected to Oracle Database");
    }
    catch (err) {
        console.error(err);
        throw err;
    }
    try {
        if (!(querykey in Statements.viewTables)) {
            throw new Error("Invalid key value: " + querykey + ". Double check this is a valid table name");
        }
        let sqlCommand = Statements.viewTables[querykey];
        let result = await connection.execute(sqlCommand, [], { outFormat: oracledb.OBJECT });
        let res = JSON.stringify(result.rows);
        console.log("Successfully retrieved table.");
        return res;
    }
    catch (err) {
        console.error(sqlCommand + ": " + err);
    }
    if (connection) {
        try {
            await connection.close();
        }
        catch (err) {
            console.error(err);
        }
    }
}
/**
 *  Runs user inputted sql command
 * @returns {Promise<void>}
 */
export async function sql_injector(sqlCommand) {
    let connection;
    try {
        connection = await oracledb.getConnection();
        console.log("Successfully connected to Oracle Database");
    }
    catch (err) {
        console.error(err);
        throw err;
    }
    try {
        await connection.execute(sqlCommand);
    }
    catch (err) {
        console.error(sqlCommand + ": " + err);
        throw err;
    }
    console.log("Successfully ran sqlCommand: " + sqlCommand);
    connection.commit();
    if (connection) {
        try {
            await connection.close();
        }
        catch (err) {
            console.error(err);
        }
    }
}
//Testing functions
//await create_oracle_pool(process.env.USER, process.env.PASSWORD);
//wait drop_tables();
//await create_tables();
//await populate_tables();
//await simple_query_tables(1);
//await advanced_query_tables(1);
//await view_tables("book");
//await sql_injector("DROP TABLE borrows");
//# sourceMappingURL=db.js.map