/**
 * Creates an Oracle connection pool.
 * @returns {Promise<boolean>}
 */
export function create_oracle_pool(username: any, password: any): Promise<boolean>;
/**
 * Closes an Oracle connection pool.
 * @returns {Promise<void>}
 */
export function close_oracle_pool(): Promise<void>;
/**
 * Creates tables.
 * @returns {Promise<void>}
 */
export function create_tables(): Promise<void>;
//# sourceMappingURL=db.d.ts.map