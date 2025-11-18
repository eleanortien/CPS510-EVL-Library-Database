import { Result } from 'oracledb'; 

export function create_oracle_pool(username, password): Promise<boolean>;
export function drop_tables(): Promise<void>;
export function create_tables(): Promise<void>;
export function populate_tables(): Promise<void>;
export function simple_query_tables(querynum: number): Promise<Result<any>>;
export function test_session(): Promise<void>;
