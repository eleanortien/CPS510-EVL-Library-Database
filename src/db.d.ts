import { Result } from 'oracledb'; 

export function create_oracle_pool(username: string, password: string): Promise<void>;
export function close_oracle_pool(): Promise<void>;
export function drop_tables(): Promise<void>;
export function create_tables(): Promise<void>;
export function populate_tables(): Promise<void>;
export function simple_query_tables(querynum: number): Promise<Result<any>>;
export function advanced_query_tables(querynum: number): Promise<Result<any>>;
export function view_tables(querykey: string): Promise<Result<any>>;
export function sql_injector(sqlCommand: string): Promise<void>;

