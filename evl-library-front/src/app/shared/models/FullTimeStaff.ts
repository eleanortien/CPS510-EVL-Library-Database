export class FullTimeStaff {
    staff_ID!: number;
    first_name!: string;
    last_name!: string;
    email!: string;
    staff_role!: string;
    phone_number!: string;
    managed_by: number = -1;
    works_at: number = -1;
    salary!: number;
}