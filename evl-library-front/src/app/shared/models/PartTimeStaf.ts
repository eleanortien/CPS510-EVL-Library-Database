export class PartTimeStaff {
    staff_ID!: number;
    first_name!: string;
    last_name!: string;
    email!: string;
    staff_role!: string;
    phone_number!: string;
    managed_by: number = -1;
    works_at: number = -1;
    hourly_rate!: number;
    bi_weekly_hours!: number;
}