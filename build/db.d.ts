/**
 * Creates an Oracle connection pool.
 * @returns {Promise<void>}
 */
export function create_oracle_pool(username: any, password: any): Promise<void>;
/**
 * Closes an Oracle connection pool.
 * @returns {Promise<void>}
 */
export function close_oracle_pool(): Promise<void>;
/**
 * Drops tables.
 * @returns {Promise<void>}
 */
export function drop_tables(): Promise<void>;
/**
 * Creates tables.
 * @returns {Promise<void>}
 */
export function create_tables(): Promise<void>;
/**
 * Populates tables.
 * @returns {Promise<void>}
 */
export function populate_tables(): Promise<void>;
/**
 *  Runs and returns a simple query.
 * @returns {Promise<Result<any>>}
 */
export function simple_query_tables(querynum: any): Promise<Result<any>>;
/**
 *  Runs and returns an advanced query.
 * @returns {Promise<Result<any>>}
 */
export function advanced_query_tables(querynum: any): Promise<Result<any>>;
/**
 *  Runs and returns a table.
 * @returns {Promise<Result<any>>}
 */
export function view_tables(querykey: any): Promise<Result<any>>;
/**
 *  Runs user inputted sql command
 * @returns {Promise<void>}
 */
export function sql_injector(sqlCommand: any): Promise<void>;
//# sourceMappingURL=db.d.ts.map