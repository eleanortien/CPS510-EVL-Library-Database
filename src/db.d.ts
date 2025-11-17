// db.d.ts
export function create_oracle_pool(username, password): Promise<boolean>;
export function test_session(): Promise<void>;
