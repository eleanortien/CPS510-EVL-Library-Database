export namespace Statements {
    let createTables: string[];
    let dropTables: string[];
    let populateTables: ({
        sql: string;
        options: {
            autoCommit: boolean;
            bindDefs: {
                id: {
                    type: oracledb.DbType & {
                        num: 2010;
                        name: "DB_TYPE_NUMBER";
                        columnTypeName: "NUMBER";
                        oraTypeNum: 2;
                        bufferSizeFactor: 22;
                    };
                };
                username: {
                    type: oracledb.DbType & {
                        num: 2001;
                        name: "DB_TYPE_VARCHAR";
                        columnTypeName: "VARCHAR2";
                        oraTypeNum: 1;
                        bufferSizeFactor: 4;
                        csfrm: oracledb.CSFRM_IMPLICIT;
                    };
                    maxSize: number;
                };
                email: {
                    type: oracledb.DbType & {
                        num: 2001;
                        name: "DB_TYPE_VARCHAR";
                        columnTypeName: "VARCHAR2";
                        oraTypeNum: 1;
                        bufferSizeFactor: 4;
                        csfrm: oracledb.CSFRM_IMPLICIT;
                    };
                    maxSize: number;
                };
                title?: never;
                author?: never;
                publish_date?: never;
                genre?: never;
                phone_number?: never;
                supplier_name?: never;
                branch_name?: never;
                street_number?: never;
                street?: never;
                city?: never;
                province?: never;
                postal_code?: never;
                copy_id?: never;
                book_id?: never;
                damaged?: never;
                located_at?: never;
                provided_by?: never;
                first_name?: never;
                last_name?: never;
                staff_role?: never;
                managed_by?: never;
                works_at?: never;
                salary?: never;
                hourly_rate?: never;
                bi_weekly_hours?: never;
                total_hours?: never;
                member_id?: never;
                due_date?: never;
                place_in_queue?: never;
            };
        };
        binds: {
            id: number;
            username: string;
            email: string;
        }[];
    } | {
        sql: string;
        options: {
            autoCommit: boolean;
            bindDefs: {
                id: {
                    type: oracledb.DbType & {
                        num: 2010;
                        name: "DB_TYPE_NUMBER";
                        columnTypeName: "NUMBER";
                        oraTypeNum: 2;
                        bufferSizeFactor: 22;
                    };
                };
                title: {
                    type: oracledb.DbType & {
                        num: 2001;
                        name: "DB_TYPE_VARCHAR";
                        columnTypeName: "VARCHAR2";
                        oraTypeNum: 1;
                        bufferSizeFactor: 4;
                        csfrm: oracledb.CSFRM_IMPLICIT;
                    };
                    maxSize: number;
                };
                author: {
                    type: oracledb.DbType & {
                        num: 2001;
                        name: "DB_TYPE_VARCHAR";
                        columnTypeName: "VARCHAR2";
                        oraTypeNum: 1;
                        bufferSizeFactor: 4;
                        csfrm: oracledb.CSFRM_IMPLICIT;
                    };
                    maxSize: number;
                };
                publish_date: {
                    type: oracledb.DbType & {
                        num: 2012;
                        name: "DB_TYPE_TIMESTAMP";
                        columnTypeName: "TIMESTAMP";
                        oraTypeNum: 180;
                        bufferSizeFactor: 11;
                    };
                };
                genre: {
                    type: oracledb.DbType & {
                        num: 2001;
                        name: "DB_TYPE_VARCHAR";
                        columnTypeName: "VARCHAR2";
                        oraTypeNum: 1;
                        bufferSizeFactor: 4;
                        csfrm: oracledb.CSFRM_IMPLICIT;
                    };
                    maxSize: number;
                };
                username?: never;
                email?: never;
                phone_number?: never;
                supplier_name?: never;
                branch_name?: never;
                street_number?: never;
                street?: never;
                city?: never;
                province?: never;
                postal_code?: never;
                copy_id?: never;
                book_id?: never;
                damaged?: never;
                located_at?: never;
                provided_by?: never;
                first_name?: never;
                last_name?: never;
                staff_role?: never;
                managed_by?: never;
                works_at?: never;
                salary?: never;
                hourly_rate?: never;
                bi_weekly_hours?: never;
                total_hours?: never;
                member_id?: never;
                due_date?: never;
                place_in_queue?: never;
            };
        };
        binds: {
            id: number;
            title: string;
            author: string;
            publish_date: Date;
            genre: string;
        }[];
    } | {
        sql: string;
        options: {
            autoCommit: boolean;
            bindDefs: {
                id: {
                    type: oracledb.DbType & {
                        num: 2010;
                        name: "DB_TYPE_NUMBER";
                        columnTypeName: "NUMBER";
                        oraTypeNum: 2;
                        bufferSizeFactor: 22;
                    };
                };
                phone_number: {
                    type: oracledb.DbType & {
                        num: 2001;
                        name: "DB_TYPE_VARCHAR";
                        columnTypeName: "VARCHAR2";
                        oraTypeNum: 1;
                        bufferSizeFactor: 4;
                        csfrm: oracledb.CSFRM_IMPLICIT;
                    };
                    maxSize: number;
                };
                email: {
                    type: oracledb.DbType & {
                        num: 2001;
                        name: "DB_TYPE_VARCHAR";
                        columnTypeName: "VARCHAR2";
                        oraTypeNum: 1;
                        bufferSizeFactor: 4;
                        csfrm: oracledb.CSFRM_IMPLICIT;
                    };
                    maxSize: number;
                };
                supplier_name: {
                    type: oracledb.DbType & {
                        num: 2001;
                        name: "DB_TYPE_VARCHAR";
                        columnTypeName: "VARCHAR2";
                        oraTypeNum: 1;
                        bufferSizeFactor: 4;
                        csfrm: oracledb.CSFRM_IMPLICIT;
                    };
                    maxSize: number;
                };
                username?: never;
                title?: never;
                author?: never;
                publish_date?: never;
                genre?: never;
                branch_name?: never;
                street_number?: never;
                street?: never;
                city?: never;
                province?: never;
                postal_code?: never;
                copy_id?: never;
                book_id?: never;
                damaged?: never;
                located_at?: never;
                provided_by?: never;
                first_name?: never;
                last_name?: never;
                staff_role?: never;
                managed_by?: never;
                works_at?: never;
                salary?: never;
                hourly_rate?: never;
                bi_weekly_hours?: never;
                total_hours?: never;
                member_id?: never;
                due_date?: never;
                place_in_queue?: never;
            };
        };
        binds: {
            id: number;
            phone_number: string;
            email: string;
            supplier_name: string;
        }[];
    } | {
        sql: string;
        options: {
            autoCommit: boolean;
            bindDefs: {
                id: {
                    type: oracledb.DbType & {
                        num: 2010;
                        name: "DB_TYPE_NUMBER";
                        columnTypeName: "NUMBER";
                        oraTypeNum: 2;
                        bufferSizeFactor: 22;
                    };
                };
                branch_name: {
                    type: oracledb.DbType & {
                        num: 2001;
                        name: "DB_TYPE_VARCHAR";
                        columnTypeName: "VARCHAR2";
                        oraTypeNum: 1;
                        bufferSizeFactor: 4;
                        csfrm: oracledb.CSFRM_IMPLICIT;
                    };
                    maxSize: number;
                };
                street_number: {
                    type: oracledb.DbType & {
                        num: 2010;
                        name: "DB_TYPE_NUMBER";
                        columnTypeName: "NUMBER";
                        oraTypeNum: 2;
                        bufferSizeFactor: 22;
                    };
                };
                street: {
                    type: oracledb.DbType & {
                        num: 2001;
                        name: "DB_TYPE_VARCHAR";
                        columnTypeName: "VARCHAR2";
                        oraTypeNum: 1;
                        bufferSizeFactor: 4;
                        csfrm: oracledb.CSFRM_IMPLICIT;
                    };
                    maxSize: number;
                };
                city: {
                    type: oracledb.DbType & {
                        num: 2001;
                        name: "DB_TYPE_VARCHAR";
                        columnTypeName: "VARCHAR2";
                        oraTypeNum: 1;
                        bufferSizeFactor: 4;
                        csfrm: oracledb.CSFRM_IMPLICIT;
                    };
                    maxSize: number;
                };
                province: {
                    type: oracledb.DbType & {
                        num: 2001;
                        name: "DB_TYPE_VARCHAR";
                        columnTypeName: "VARCHAR2";
                        oraTypeNum: 1;
                        bufferSizeFactor: 4;
                        csfrm: oracledb.CSFRM_IMPLICIT;
                    };
                    maxSize: number;
                };
                postal_code: {
                    type: oracledb.DbType & {
                        num: 2001;
                        name: "DB_TYPE_VARCHAR";
                        columnTypeName: "VARCHAR2";
                        oraTypeNum: 1;
                        bufferSizeFactor: 4;
                        csfrm: oracledb.CSFRM_IMPLICIT;
                    };
                    maxSize: number;
                };
                username?: never;
                email?: never;
                title?: never;
                author?: never;
                publish_date?: never;
                genre?: never;
                phone_number?: never;
                supplier_name?: never;
                copy_id?: never;
                book_id?: never;
                damaged?: never;
                located_at?: never;
                provided_by?: never;
                first_name?: never;
                last_name?: never;
                staff_role?: never;
                managed_by?: never;
                works_at?: never;
                salary?: never;
                hourly_rate?: never;
                bi_weekly_hours?: never;
                total_hours?: never;
                member_id?: never;
                due_date?: never;
                place_in_queue?: never;
            };
        };
        binds: {
            id: number;
            branch_name: string;
            street_number: number;
            street: string;
            city: string;
            province: string;
            postal_code: string;
        }[];
    } | {
        sql: string;
        options: {
            autoCommit: boolean;
            bindDefs: {
                copy_id: {
                    type: oracledb.DbType & {
                        num: 2010;
                        name: "DB_TYPE_NUMBER";
                        columnTypeName: "NUMBER";
                        oraTypeNum: 2;
                        bufferSizeFactor: 22;
                    };
                };
                book_id: {
                    type: oracledb.DbType & {
                        num: 2010;
                        name: "DB_TYPE_NUMBER";
                        columnTypeName: "NUMBER";
                        oraTypeNum: 2;
                        bufferSizeFactor: 22;
                    };
                };
                damaged: {
                    type: oracledb.DbType & {
                        num: 2010;
                        name: "DB_TYPE_NUMBER";
                        columnTypeName: "NUMBER";
                        oraTypeNum: 2;
                        bufferSizeFactor: 22;
                    };
                };
                located_at: {
                    type: oracledb.DbType & {
                        num: 2010;
                        name: "DB_TYPE_NUMBER";
                        columnTypeName: "NUMBER";
                        oraTypeNum: 2;
                        bufferSizeFactor: 22;
                    };
                };
                provided_by: {
                    type: oracledb.DbType & {
                        num: 2010;
                        name: "DB_TYPE_NUMBER";
                        columnTypeName: "NUMBER";
                        oraTypeNum: 2;
                        bufferSizeFactor: 22;
                    };
                };
                id?: never;
                username?: never;
                email?: never;
                title?: never;
                author?: never;
                publish_date?: never;
                genre?: never;
                phone_number?: never;
                supplier_name?: never;
                branch_name?: never;
                street_number?: never;
                street?: never;
                city?: never;
                province?: never;
                postal_code?: never;
                first_name?: never;
                last_name?: never;
                staff_role?: never;
                managed_by?: never;
                works_at?: never;
                salary?: never;
                hourly_rate?: never;
                bi_weekly_hours?: never;
                total_hours?: never;
                member_id?: never;
                due_date?: never;
                place_in_queue?: never;
            };
        };
        binds: {
            copy_id: number;
            book_id: number;
            damaged: number;
            located_at: number;
            provided_by: number;
        }[];
    } | {
        sql: string;
        options: {
            autoCommit: boolean;
            bindDefs: {
                id: {
                    type: oracledb.DbType & {
                        num: 2010;
                        name: "DB_TYPE_NUMBER";
                        columnTypeName: "NUMBER";
                        oraTypeNum: 2;
                        bufferSizeFactor: 22;
                    };
                };
                first_name: {
                    type: oracledb.DbType & {
                        num: 2001;
                        name: "DB_TYPE_VARCHAR";
                        columnTypeName: "VARCHAR2";
                        oraTypeNum: 1;
                        bufferSizeFactor: 4;
                        csfrm: oracledb.CSFRM_IMPLICIT;
                    };
                    maxSize: number;
                };
                last_name: {
                    type: oracledb.DbType & {
                        num: 2001;
                        name: "DB_TYPE_VARCHAR";
                        columnTypeName: "VARCHAR2";
                        oraTypeNum: 1;
                        bufferSizeFactor: 4;
                        csfrm: oracledb.CSFRM_IMPLICIT;
                    };
                    maxSize: number;
                };
                email: {
                    type: oracledb.DbType & {
                        num: 2001;
                        name: "DB_TYPE_VARCHAR";
                        columnTypeName: "VARCHAR2";
                        oraTypeNum: 1;
                        bufferSizeFactor: 4;
                        csfrm: oracledb.CSFRM_IMPLICIT;
                    };
                    maxSize: number;
                };
                staff_role: {
                    type: oracledb.DbType & {
                        num: 2001;
                        name: "DB_TYPE_VARCHAR";
                        columnTypeName: "VARCHAR2";
                        oraTypeNum: 1;
                        bufferSizeFactor: 4;
                        csfrm: oracledb.CSFRM_IMPLICIT;
                    };
                    maxSize: number;
                };
                phone_number: {
                    type: oracledb.DbType & {
                        num: 2001;
                        name: "DB_TYPE_VARCHAR";
                        columnTypeName: "VARCHAR2";
                        oraTypeNum: 1;
                        bufferSizeFactor: 4;
                        csfrm: oracledb.CSFRM_IMPLICIT;
                    };
                    maxSize: number;
                };
                managed_by: {
                    type: oracledb.DbType & {
                        num: 2010;
                        name: "DB_TYPE_NUMBER";
                        columnTypeName: "NUMBER";
                        oraTypeNum: 2;
                        bufferSizeFactor: 22;
                    };
                };
                works_at: {
                    type: oracledb.DbType & {
                        num: 2010;
                        name: "DB_TYPE_NUMBER";
                        columnTypeName: "NUMBER";
                        oraTypeNum: 2;
                        bufferSizeFactor: 22;
                    };
                };
                salary: {
                    type: oracledb.DbType & {
                        num: 2010;
                        name: "DB_TYPE_NUMBER";
                        columnTypeName: "NUMBER";
                        oraTypeNum: 2;
                        bufferSizeFactor: 22;
                    };
                };
                username?: never;
                title?: never;
                author?: never;
                publish_date?: never;
                genre?: never;
                supplier_name?: never;
                branch_name?: never;
                street_number?: never;
                street?: never;
                city?: never;
                province?: never;
                postal_code?: never;
                copy_id?: never;
                book_id?: never;
                damaged?: never;
                located_at?: never;
                provided_by?: never;
                hourly_rate?: never;
                bi_weekly_hours?: never;
                total_hours?: never;
                member_id?: never;
                due_date?: never;
                place_in_queue?: never;
            };
        };
        binds: ({
            id: number;
            first_name: string;
            last_name: string;
            email: string;
            staff_role: string;
            phone_number: string;
            managed_by: null;
            works_at: number;
            salary: number;
        } | {
            id: number;
            first_name: string;
            last_name: string;
            email: string;
            staff_role: string;
            phone_number: string;
            managed_by: number;
            works_at: number;
            salary: number;
        })[];
    } | {
        sql: string;
        options: {
            autoCommit: boolean;
            bindDefs: {
                id: {
                    type: oracledb.DbType & {
                        num: 2010;
                        name: "DB_TYPE_NUMBER";
                        columnTypeName: "NUMBER";
                        oraTypeNum: 2;
                        bufferSizeFactor: 22;
                    };
                };
                first_name: {
                    type: oracledb.DbType & {
                        num: 2001;
                        name: "DB_TYPE_VARCHAR";
                        columnTypeName: "VARCHAR2";
                        oraTypeNum: 1;
                        bufferSizeFactor: 4;
                        csfrm: oracledb.CSFRM_IMPLICIT;
                    };
                    maxSize: number;
                };
                last_name: {
                    type: oracledb.DbType & {
                        num: 2001;
                        name: "DB_TYPE_VARCHAR";
                        columnTypeName: "VARCHAR2";
                        oraTypeNum: 1;
                        bufferSizeFactor: 4;
                        csfrm: oracledb.CSFRM_IMPLICIT;
                    };
                    maxSize: number;
                };
                email: {
                    type: oracledb.DbType & {
                        num: 2001;
                        name: "DB_TYPE_VARCHAR";
                        columnTypeName: "VARCHAR2";
                        oraTypeNum: 1;
                        bufferSizeFactor: 4;
                        csfrm: oracledb.CSFRM_IMPLICIT;
                    };
                    maxSize: number;
                };
                staff_role: {
                    type: oracledb.DbType & {
                        num: 2001;
                        name: "DB_TYPE_VARCHAR";
                        columnTypeName: "VARCHAR2";
                        oraTypeNum: 1;
                        bufferSizeFactor: 4;
                        csfrm: oracledb.CSFRM_IMPLICIT;
                    };
                    maxSize: number;
                };
                phone_number: {
                    type: oracledb.DbType & {
                        num: 2001;
                        name: "DB_TYPE_VARCHAR";
                        columnTypeName: "VARCHAR2";
                        oraTypeNum: 1;
                        bufferSizeFactor: 4;
                        csfrm: oracledb.CSFRM_IMPLICIT;
                    };
                    maxSize: number;
                };
                managed_by: {
                    type: oracledb.DbType & {
                        num: 2010;
                        name: "DB_TYPE_NUMBER";
                        columnTypeName: "NUMBER";
                        oraTypeNum: 2;
                        bufferSizeFactor: 22;
                    };
                };
                works_at: {
                    type: oracledb.DbType & {
                        num: 2010;
                        name: "DB_TYPE_NUMBER";
                        columnTypeName: "NUMBER";
                        oraTypeNum: 2;
                        bufferSizeFactor: 22;
                    };
                };
                hourly_rate: {
                    type: oracledb.DbType & {
                        num: 2010;
                        name: "DB_TYPE_NUMBER";
                        columnTypeName: "NUMBER";
                        oraTypeNum: 2;
                        bufferSizeFactor: 22;
                    };
                };
                bi_weekly_hours: {
                    type: oracledb.DbType & {
                        num: 2010;
                        name: "DB_TYPE_NUMBER";
                        columnTypeName: "NUMBER";
                        oraTypeNum: 2;
                        bufferSizeFactor: 22;
                    };
                };
                username?: never;
                title?: never;
                author?: never;
                publish_date?: never;
                genre?: never;
                supplier_name?: never;
                branch_name?: never;
                street_number?: never;
                street?: never;
                city?: never;
                province?: never;
                postal_code?: never;
                copy_id?: never;
                book_id?: never;
                damaged?: never;
                located_at?: never;
                provided_by?: never;
                salary?: never;
                total_hours?: never;
                member_id?: never;
                due_date?: never;
                place_in_queue?: never;
            };
        };
        binds: {
            id: number;
            first_name: string;
            last_name: string;
            email: string;
            staff_role: string;
            phone_number: string;
            managed_by: number;
            works_at: number;
            hourly_rate: number;
            bi_weekly_hours: number;
        }[];
    } | {
        sql: string;
        options: {
            autoCommit: boolean;
            bindDefs: {
                id: {
                    type: oracledb.DbType & {
                        num: 2010;
                        name: "DB_TYPE_NUMBER";
                        columnTypeName: "NUMBER";
                        oraTypeNum: 2;
                        bufferSizeFactor: 22;
                    };
                };
                first_name: {
                    type: oracledb.DbType & {
                        num: 2001;
                        name: "DB_TYPE_VARCHAR";
                        columnTypeName: "VARCHAR2";
                        oraTypeNum: 1;
                        bufferSizeFactor: 4;
                        csfrm: oracledb.CSFRM_IMPLICIT;
                    };
                    maxSize: number;
                };
                last_name: {
                    type: oracledb.DbType & {
                        num: 2001;
                        name: "DB_TYPE_VARCHAR";
                        columnTypeName: "VARCHAR2";
                        oraTypeNum: 1;
                        bufferSizeFactor: 4;
                        csfrm: oracledb.CSFRM_IMPLICIT;
                    };
                    maxSize: number;
                };
                email: {
                    type: oracledb.DbType & {
                        num: 2001;
                        name: "DB_TYPE_VARCHAR";
                        columnTypeName: "VARCHAR2";
                        oraTypeNum: 1;
                        bufferSizeFactor: 4;
                        csfrm: oracledb.CSFRM_IMPLICIT;
                    };
                    maxSize: number;
                };
                staff_role: {
                    type: oracledb.DbType & {
                        num: 2001;
                        name: "DB_TYPE_VARCHAR";
                        columnTypeName: "VARCHAR2";
                        oraTypeNum: 1;
                        bufferSizeFactor: 4;
                        csfrm: oracledb.CSFRM_IMPLICIT;
                    };
                    maxSize: number;
                };
                phone_number: {
                    type: oracledb.DbType & {
                        num: 2001;
                        name: "DB_TYPE_VARCHAR";
                        columnTypeName: "VARCHAR2";
                        oraTypeNum: 1;
                        bufferSizeFactor: 4;
                        csfrm: oracledb.CSFRM_IMPLICIT;
                    };
                    maxSize: number;
                };
                managed_by: {
                    type: oracledb.DbType & {
                        num: 2010;
                        name: "DB_TYPE_NUMBER";
                        columnTypeName: "NUMBER";
                        oraTypeNum: 2;
                        bufferSizeFactor: 22;
                    };
                };
                works_at: {
                    type: oracledb.DbType & {
                        num: 2010;
                        name: "DB_TYPE_NUMBER";
                        columnTypeName: "NUMBER";
                        oraTypeNum: 2;
                        bufferSizeFactor: 22;
                    };
                };
                total_hours: {
                    type: oracledb.DbType & {
                        num: 2010;
                        name: "DB_TYPE_NUMBER";
                        columnTypeName: "NUMBER";
                        oraTypeNum: 2;
                        bufferSizeFactor: 22;
                    };
                };
                username?: never;
                title?: never;
                author?: never;
                publish_date?: never;
                genre?: never;
                supplier_name?: never;
                branch_name?: never;
                street_number?: never;
                street?: never;
                city?: never;
                province?: never;
                postal_code?: never;
                copy_id?: never;
                book_id?: never;
                damaged?: never;
                located_at?: never;
                provided_by?: never;
                salary?: never;
                hourly_rate?: never;
                bi_weekly_hours?: never;
                member_id?: never;
                due_date?: never;
                place_in_queue?: never;
            };
        };
        binds: {
            id: number;
            first_name: string;
            last_name: string;
            email: string;
            staff_role: string;
            phone_number: string;
            managed_by: number;
            works_at: number;
            total_hours: number;
        }[];
    } | {
        sql: string;
        options: {
            autoCommit: boolean;
            bindDefs: {
                copy_id: {
                    type: oracledb.DbType & {
                        num: 2010;
                        name: "DB_TYPE_NUMBER";
                        columnTypeName: "NUMBER";
                        oraTypeNum: 2;
                        bufferSizeFactor: 22;
                    };
                };
                book_id: {
                    type: oracledb.DbType & {
                        num: 2010;
                        name: "DB_TYPE_NUMBER";
                        columnTypeName: "NUMBER";
                        oraTypeNum: 2;
                        bufferSizeFactor: 22;
                    };
                };
                member_id: {
                    type: oracledb.DbType & {
                        num: 2010;
                        name: "DB_TYPE_NUMBER";
                        columnTypeName: "NUMBER";
                        oraTypeNum: 2;
                        bufferSizeFactor: 22;
                    };
                };
                due_date: {
                    type: oracledb.DbType & {
                        num: 2012;
                        name: "DB_TYPE_TIMESTAMP";
                        columnTypeName: "TIMESTAMP";
                        oraTypeNum: 180;
                        bufferSizeFactor: 11;
                    };
                };
                id?: never;
                username?: never;
                email?: never;
                title?: never;
                author?: never;
                publish_date?: never;
                genre?: never;
                phone_number?: never;
                supplier_name?: never;
                branch_name?: never;
                street_number?: never;
                street?: never;
                city?: never;
                province?: never;
                postal_code?: never;
                damaged?: never;
                located_at?: never;
                provided_by?: never;
                first_name?: never;
                last_name?: never;
                staff_role?: never;
                managed_by?: never;
                works_at?: never;
                salary?: never;
                hourly_rate?: never;
                bi_weekly_hours?: never;
                total_hours?: never;
                place_in_queue?: never;
            };
        };
        binds: {
            copy_id: number;
            book_id: number;
            member_id: number;
            due_date: Date;
        }[];
    } | {
        sql: string;
        options: {
            autoCommit: boolean;
            bindDefs: {
                id: {
                    type: oracledb.DbType & {
                        num: 2010;
                        name: "DB_TYPE_NUMBER";
                        columnTypeName: "NUMBER";
                        oraTypeNum: 2;
                        bufferSizeFactor: 22;
                    };
                };
                place_in_queue: {
                    type: oracledb.DbType & {
                        num: 2010;
                        name: "DB_TYPE_NUMBER";
                        columnTypeName: "NUMBER";
                        oraTypeNum: 2;
                        bufferSizeFactor: 22;
                    };
                };
                member_id: {
                    type: oracledb.DbType & {
                        num: 2010;
                        name: "DB_TYPE_NUMBER";
                        columnTypeName: "NUMBER";
                        oraTypeNum: 2;
                        bufferSizeFactor: 22;
                    };
                };
                username?: never;
                email?: never;
                title?: never;
                author?: never;
                publish_date?: never;
                genre?: never;
                phone_number?: never;
                supplier_name?: never;
                branch_name?: never;
                street_number?: never;
                street?: never;
                city?: never;
                province?: never;
                postal_code?: never;
                copy_id?: never;
                book_id?: never;
                damaged?: never;
                located_at?: never;
                provided_by?: never;
                first_name?: never;
                last_name?: never;
                staff_role?: never;
                managed_by?: never;
                works_at?: never;
                salary?: never;
                hourly_rate?: never;
                bi_weekly_hours?: never;
                total_hours?: never;
                due_date?: never;
            };
        };
        binds: {
            id: number;
            place_in_queue: number;
            member_id: number;
        }[];
    })[];
    let simpleQueries: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
    };
    let advancedQueries: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
    };
    namespace viewTables {
        let borrows: string;
        let part_time_staff: string;
        let volunteer_staff: string;
        let full_time_staff: string;
        let book_copy: string;
        let branch: string;
        let supplier: string;
        let queue_hold: string;
        let lib_member: string;
        let book: string;
    }
}
import oracledb from 'oracledb';
//# sourceMappingURL=statements.d.ts.map