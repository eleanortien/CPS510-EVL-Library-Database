export namespace Statements {
    let createTables: string[];
    let dropTables: string[];
    let populateTables: ({
        sql: string;
        options: {
            autoCommit: boolean;
            bindDefs: {
                id: {
                    type: any;
                };
                username: {
                    type: any;
                    maxSize: number;
                };
                email: {
                    type: any;
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
                    type: any;
                };
                title: {
                    type: any;
                    maxSize: number;
                };
                author: {
                    type: any;
                    maxSize: number;
                };
                publish_date: {
                    type: any;
                };
                genre: {
                    type: any;
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
                    type: any;
                };
                phone_number: {
                    type: any;
                    maxSize: number;
                };
                email: {
                    type: any;
                    maxSize: number;
                };
                supplier_name: {
                    type: any;
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
                    type: any;
                };
                branch_name: {
                    type: any;
                    maxSize: number;
                };
                street_number: {
                    type: any;
                };
                street: {
                    type: any;
                    maxSize: number;
                };
                city: {
                    type: any;
                    maxSize: number;
                };
                province: {
                    type: any;
                    maxSize: number;
                };
                postal_code: {
                    type: any;
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
                    type: any;
                };
                book_id: {
                    type: any;
                };
                damaged: {
                    type: any;
                };
                located_at: {
                    type: any;
                };
                provided_by: {
                    type: any;
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
                    type: any;
                };
                first_name: {
                    type: any;
                    maxSize: number;
                };
                last_name: {
                    type: any;
                    maxSize: number;
                };
                email: {
                    type: any;
                    maxSize: number;
                };
                staff_role: {
                    type: any;
                    maxSize: number;
                };
                phone_number: {
                    type: any;
                    maxSize: number;
                };
                managed_by: {
                    type: any;
                };
                works_at: {
                    type: any;
                };
                salary: {
                    type: any;
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
                    type: any;
                };
                first_name: {
                    type: any;
                    maxSize: number;
                };
                last_name: {
                    type: any;
                    maxSize: number;
                };
                email: {
                    type: any;
                    maxSize: number;
                };
                staff_role: {
                    type: any;
                    maxSize: number;
                };
                phone_number: {
                    type: any;
                    maxSize: number;
                };
                managed_by: {
                    type: any;
                };
                works_at: {
                    type: any;
                };
                hourly_rate: {
                    type: any;
                };
                bi_weekly_hours: {
                    type: any;
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
                    type: any;
                };
                first_name: {
                    type: any;
                    maxSize: number;
                };
                last_name: {
                    type: any;
                    maxSize: number;
                };
                email: {
                    type: any;
                    maxSize: number;
                };
                staff_role: {
                    type: any;
                    maxSize: number;
                };
                phone_number: {
                    type: any;
                    maxSize: number;
                };
                managed_by: {
                    type: any;
                };
                works_at: {
                    type: any;
                };
                total_hours: {
                    type: any;
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
                    type: any;
                };
                book_id: {
                    type: any;
                };
                member_id: {
                    type: any;
                };
                due_date: {
                    type: any;
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
                    type: any;
                };
                place_in_queue: {
                    type: any;
                };
                member_id: {
                    type: any;
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
//# sourceMappingURL=statements.d.ts.map