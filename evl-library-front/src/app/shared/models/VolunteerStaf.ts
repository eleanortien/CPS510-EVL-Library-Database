export class VolunteerStaff {
    STAFF_ID!: number;
    FIRST_NAME!: string;
    LAST_NAME!: string;
    EMAIL!: string;
    STAFF_ROLE!: string;
    PHONE_NUMBER!: string;
    MANAGED_BY: number = -1;
    WORKS_AT: number = -1;
    TOTAL_HOURS!: number;
}