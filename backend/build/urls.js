export const BASE_URL = "http://localhost:8080";
// Post Requests
export const LOGIN_URL = `${BASE_URL}/login`;
export const CLOSE_SESSION_URL = `${BASE_URL}/close-session`;
export const DROP_TABLES_URL = `${BASE_URL}/drop`;
export const CREATE_TABLES_URL = `${BASE_URL}/create`;
export const POPULATE_TABLES_URL = `${BASE_URL}/populate`;
// Queries: Add parameter when called to select query 
//Eg. SIMPLE_QUERY_URL(1) to get simple query 1
//Simple Query - accepts 1-12
export const SIMPLE_QUERY_URL = (querynum) => `${BASE_URL}/simple-query/${querynum}`;
//Advanced Query - accepts 1-6
export const ADVANCED_QUERY_URL = (querynum) => `${BASE_URL}/advanced-query/${querynum}`;
//View Tables - accepts table names
export const VIEW_TABLES_URL = (querykey) => `${BASE_URL}/view-tables/${querykey}`;
//Users can delete rows, update rows, or insert rows
export const RUN_USER_SQL_URL = `${BASE_URL}/run-command`;
//# sourceMappingURL=urls.js.map