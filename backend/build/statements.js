// statement strings for mass execution
// ex: for statement in array -> await connection.execute(statement)
// statement.replaceAll(/\s\s+|\n/g, '') -> if format does not work
// for populateTables -> connection.executeMany(statement.sql, statement.binds, statement.options)
import oracledb from 'oracledb';
export const Statements = {
    // Create tables
    createTables: [
        `CREATE TABLE lib_member (
            member_ID INT PRIMARY KEY, 
            username VARCHAR(20) NOT NULL, 
            email VARCHAR(100) NOT NULL
        )`,
        `CREATE TABLE book (
            book_ID INT PRIMARY KEY,
            title VARCHAR2 (180) NOT NULL,
            author VARCHAR2 (180) NOT NULL,
            publish_date DATE NOT NULL,
            genre VARCHAR2 (20)
        )`,
        `CREATE TABLE supplier (
            supplier_ID INT PRIMARY KEY,
            phone_number VARCHAR(12) NOT NULL,
            email VARCHAR(100) NOT NULL,
            supplier_name VARCHAR(50) NOT NULL
        )`,
        `CREATE TABLE branch (
            branch_ID INT PRIMARY KEY,
            branch_name VARCHAR(50) NOT NULL,
            address_street_number INT CHECK (address_street_number > 0) NOT NULL,
            address_street VARCHAR(50) NOT NULL,
            address_city VARCHAR(50) NOT NULL,
            address_province VARCHAR(20) NOT NULL,
            address_postal_code VARCHAR(10) NOT NULL
        )`,
        `CREATE TABLE book_copy (
            copy_ID INT CHECK (copy_ID >= 0) NOT NULL,
            book_ID INT,
            damaged NUMBER (1) DEFAULT 0 CHECK (damaged in (0, 1)) NOT NULL,
            located_at INT NOT NULL,
            provided_by INT NOT NULL,
            PRIMARY KEY (book_ID, copy_ID),
            FOREIGN KEY (book_ID) REFERENCES book (book_ID),
            FOREIGN KEY (provided_by) REFERENCES supplier(supplier_ID),
            FOREIGN KEY (located_at) REFERENCES branch(branch_ID)
        )`,
        `CREATE TABLE full_time_staff (
            staff_ID INT PRIMARY KEY,
            first_name VARCHAR(20) NOT NULL,
            last_name VARCHAR(20) NOT NULL,
            email VARCHAR(100) NOT NULL,
            staff_role VARCHAR(20) NOT NULL,
            phone_number VARCHAR(12) NOT NULL,
            managed_by INT,
            works_at INT,
            salary INT CHECK (salary > 0) NOT NULL,
            FOREIGN KEY (managed_by) REFERENCES full_time_staff (staff_ID),
            FOREIGN KEY (works_at) REFERENCES branch (branch_ID)
        )`,
        `CREATE TABLE part_time_staff (
            staff_ID INT PRIMARY KEY,
            first_name VARCHAR(20) NOT NULL,
            last_name VARCHAR(20) NOT NULL,
            email VARCHAR(100) NOT NULL,
            staff_role VARCHAR(20) NOT NULL,
            phone_number VARCHAR(12) NOT NULL,
            managed_by INT,
            works_at INT,
            hourly_rate DECIMAL(5, 2) CHECK (hourly_rate > 0) NOT NULL,
            bi_weekly_hours INT CHECK (bi_weekly_hours >= 0) NOT NULL,
            FOREIGN KEY (managed_by) REFERENCES full_time_staff (staff_ID),
            FOREIGN KEY (works_at) REFERENCES branch (branch_ID)
        )`,
        `CREATE TABLE volunteer_staff (
            staff_ID INT PRIMARY KEY,
            first_name VARCHAR(20) NOT NULL,
            last_name VARCHAR(20) NOT NULL,
            email VARCHAR(100) NOT NULL,
            staff_role VARCHAR(20) NOT NULL,
            phone_number VARCHAR(12) NOT NULL,
            managed_by INT,
            works_at INT,
            total_hours INT CHECK (total_hours >= 0) NOT NULL,
            FOREIGN KEY (managed_by) REFERENCES full_time_staff (staff_ID),
            FOREIGN KEY (works_at) REFERENCES branch (branch_ID)
        )`,
        `CREATE TABLE borrows (
            book_ID SMALLINT,
            copy_ID SMALLINT,
            member_ID INT,
            due_date DATE,
            PRIMARY KEY (book_ID, copy_ID, member_ID), 
            FOREIGN KEY (book_ID, copy_ID) REFERENCES book_copy (book_ID, copy_ID),
            FOREIGN KEY (member_ID) REFERENCES lib_member (member_ID)
        )`,
        `CREATE TABLE queue_hold (
            book_ID INT,
            place_in_queue INT CHECK (place_in_queue >= 0) NOT NULL,
            member_ID INT,
            PRIMARY KEY (member_ID, book_ID),
            FOREIGN KEY (book_ID) REFERENCES book (book_ID),
            FOREIGN KEY (member_ID) REFERENCES lib_member (member_ID)
        )`
    ],
    // Drop tables
    dropTables: [
        `DROP TABLE borrows`,
        `DROP TABLE part_time_staff`,
        `DROP TABLE volunteer_staff`,
        `DROP TABLE full_time_staff`,
        `DROP TABLE book_copy`,
        `DROP TABLE branch`,
        `DROP TABLE supplier`,
        `DROP TABLE queue_hold`,
        `DROP TABLE lib_member`,
        `DROP TABLE book`
    ],
    // Populate tables
    populateTables: [
        {
            sql: "INSERT INTO lib_member VALUES (:id, :username, :email)",
            options: {
                autoCommit: true,
                bindDefs: {
                    id: { type: oracledb.NUMBER },
                    username: { type: oracledb.STRING, maxSize: 20 },
                    email: { type: oracledb.STRING, maxSize: 100 }
                }
            },
            binds: [
                { id: 0, username: 'lsu', email: 'lilysu@gmail.com' },
                { id: 1, username: 'vdorovic', email: 'vanjadorovic@gmail.com' },
                { id: 2, username: 'etien', email: 'eleanortien@gmail.com' }
            ]
        },
        {
            sql: "INSERT INTO book VALUES (:id, :title, :author, :publish_date, :genre)",
            options: {
                autoCommit: true,
                bindDefs: {
                    id: { type: oracledb.NUMBER },
                    title: { type: oracledb.STRING, maxSize: 180 },
                    author: { type: oracledb.STRING, maxSize: 180 },
                    publish_date: { type: oracledb.DATE },
                    genre: { type: oracledb.STRING, maxSize: 20 }
                }
            },
            binds: [
                { id: 0, title: 'Harry Potter and the Sorcerers Stone', author: 'J. K. Rowling', publish_date: new Date('1997-06-26'), genre: 'Fantasy' },
                { id: 1, title: 'Harry Potter and the Chamber of Secrets', author: 'J. K. Rowling', publish_date: new Date('1998-07-02'), genre: 'Fantasy' },
                { id: 2, title: 'The Lord of the Rings', author: 'John Ronald Reuel Tolkien', publish_date: new Date('1954-07-29'), genre: 'Fantasy' },
                { id: 3, title: 'Sapiens: A Brief History of Humankind', author: 'Yuval Noah Harari', publish_date: new Date('2011-01-01'), genre: 'Non-Fiction' },
                { id: 4, title: 'Dune', author: 'Frank Herbert', publish_date: new Date('2011-08-01'), genre: 'Science Fiction' },
                { id: 5, title: 'It', author: 'Stephen King', publish_date: new Date('1986-09-15'), genre: 'Horror' },
                { id: 6, title: 'Twilight', author: 'Stephenie Meyer', publish_date: new Date('2005-09-27'), genre: 'Romance' }
            ]
        },
        {
            sql: "INSERT INTO supplier VALUES (:id, :phone_number, :email, :supplier_name)",
            options: {
                autoCommit: true,
                bindDefs: {
                    id: { type: oracledb.NUMBER },
                    phone_number: { type: oracledb.STRING, maxSize: 12 },
                    email: { type: oracledb.STRING, maxSize: 100 },
                    supplier_name: { type: oracledb.STRING, maxSize: 50 }
                }
            },
            binds: [
                { id: 0, phone_number: '5817182649', email: 'duck@duck.com', supplier_name: 'Duck Inc.' },
                { id: 1, phone_number: '7786901241', email: 'vrcompany@gmail.com', supplier_name: 'Very Real Company' }
            ]
        },
        {
            sql: "INSERT INTO branch VALUES (:id, :branch_name, :street_number, :street, :city, :province, :postal_code)",
            options: {
                autoCommit: true,
                bindDefs: {
                    id: { type: oracledb.NUMBER },
                    branch_name: { type: oracledb.STRING, maxSize: 50 },
                    street_number: { type: oracledb.NUMBER },
                    street: { type: oracledb.STRING, maxSize: 50 },
                    city: { type: oracledb.STRING, maxSize: 50 },
                    province: { type: oracledb.STRING, maxSize: 20 },
                    postal_code: { type: oracledb.STRING, maxSize: 10 }
                }
            },
            binds: [
                { id: 0, branch_name: 'Mistletoe', street_number: 25, street: 'Holiday', city: 'Toronto', province: 'Ontario', postal_code: 'HOH OHO' },
                { id: 1, branch_name: 'DuckPond', street_number: 10, street: 'Gould', city: 'Toronto', province: 'Ontario', postal_code: 'HE1 PU5' },
                { id: 2, branch_name: 'Ranch', street_number: 26, street: 'Barnyard', city: 'Calgary', province: 'Alberta', postal_code: 'M0O M0O' },
            ]
        },
        {
            sql: "INSERT INTO book_copy VALUES (:copy_id, :book_id, :damaged, :located_at, :provided_by)",
            options: {
                autoCommit: true,
                bindDefs: {
                    copy_id: { type: oracledb.NUMBER },
                    book_id: { type: oracledb.NUMBER },
                    damaged: { type: oracledb.NUMBER },
                    located_at: { type: oracledb.NUMBER },
                    provided_by: { type: oracledb.NUMBER }
                }
            },
            binds: [
                { copy_id: 0, book_id: 0, damaged: 0, located_at: 0, provided_by: 0 },
                { copy_id: 1, book_id: 0, damaged: 0, located_at: 1, provided_by: 1 },
                { copy_id: 2, book_id: 0, damaged: 0, located_at: 0, provided_by: 0 },
                { copy_id: 3, book_id: 0, damaged: 0, located_at: 2, provided_by: 0 },
                { copy_id: 4, book_id: 0, damaged: 0, located_at: 2, provided_by: 1 },
                { copy_id: 0, book_id: 1, damaged: 0, located_at: 1, provided_by: 1 },
                { copy_id: 1, book_id: 1, damaged: 0, located_at: 1, provided_by: 0 },
                { copy_id: 2, book_id: 1, damaged: 0, located_at: 0, provided_by: 0 },
                { copy_id: 3, book_id: 1, damaged: 0, located_at: 2, provided_by: 0 },
                { copy_id: 0, book_id: 2, damaged: 0, located_at: 2, provided_by: 1 },
                { copy_id: 0, book_id: 3, damaged: 0, located_at: 2, provided_by: 1 },
                { copy_id: 1, book_id: 3, damaged: 0, located_at: 1, provided_by: 0 },
                { copy_id: 2, book_id: 3, damaged: 0, located_at: 0, provided_by: 0 },
                { copy_id: 3, book_id: 3, damaged: 0, located_at: 0, provided_by: 1 },
                { copy_id: 4, book_id: 3, damaged: 0, located_at: 1, provided_by: 0 },
                { copy_id: 0, book_id: 4, damaged: 0, located_at: 2, provided_by: 0 },
                { copy_id: 1, book_id: 4, damaged: 0, located_at: 1, provided_by: 1 },
                { copy_id: 2, book_id: 4, damaged: 0, located_at: 0, provided_by: 1 },
                { copy_id: 3, book_id: 4, damaged: 0, located_at: 1, provided_by: 0 },
                { copy_id: 4, book_id: 4, damaged: 0, located_at: 0, provided_by: 0 },
                { copy_id: 5, book_id: 4, damaged: 0, located_at: 0, provided_by: 0 },
                { copy_id: 6, book_id: 4, damaged: 0, located_at: 2, provided_by: 0 },
                { copy_id: 0, book_id: 5, damaged: 0, located_at: 1, provided_by: 0 },
                { copy_id: 1, book_id: 5, damaged: 0, located_at: 0, provided_by: 1 },
                { copy_id: 2, book_id: 5, damaged: 0, located_at: 2, provided_by: 0 },
                { copy_id: 0, book_id: 6, damaged: 0, located_at: 2, provided_by: 0 },
                { copy_id: 1, book_id: 6, damaged: 0, located_at: 1, provided_by: 1 },
                { copy_id: 2, book_id: 6, damaged: 0, located_at: 2, provided_by: 0 },
                { copy_id: 3, book_id: 6, damaged: 0, located_at: 1, provided_by: 1 },
                { copy_id: 4, book_id: 6, damaged: 0, located_at: 0, provided_by: 1 },
            ]
        },
        {
            sql: "INSERT INTO full_time_staff VALUES (:id, :first_name, :last_name, :email, :staff_role, :phone_number, :managed_by, :works_at, :salary)",
            options: {
                autoCommit: true,
                bindDefs: {
                    id: { type: oracledb.NUMBER },
                    first_name: { type: oracledb.STRING, maxSize: 20 },
                    last_name: { type: oracledb.STRING, maxSize: 20 },
                    email: { type: oracledb.STRING, maxSize: 100 },
                    staff_role: { type: oracledb.STRING, maxSize: 20 },
                    phone_number: { type: oracledb.STRING, maxSize: 12 },
                    managed_by: { type: oracledb.NUMBER },
                    works_at: { type: oracledb.NUMBER },
                    salary: { type: oracledb.NUMBER }
                }
            },
            binds: [
                { id: 0, first_name: 'Argel', last_name: 'Hunos', email: 'arg.hunos@gmail.com', staff_role: 'manager', phone_number: '234-342-2342', managed_by: null, works_at: 0, salary: 80000 },
                { id: 1, first_name: 'Mikayla', last_name: 'Morrison', email: 'mik.morrison@gmail.com', staff_role: 'librarian', phone_number: '562-582-2059', managed_by: 0, works_at: 1, salary: 85000 },
                { id: 2, first_name: 'Eric', last_name: 'Wong', email: 'rice.wong@gmail.com', staff_role: 'archivist', phone_number: '345-123-9865', managed_by: 0, works_at: 2, salary: 65000 },
            ]
        },
        {
            sql: "INSERT INTO part_time_staff VALUES (:id, :first_name, :last_name, :email, :staff_role, :phone_number, :managed_by, :works_at, :hourly_rate, :bi_weekly_hours)",
            options: {
                autoCommit: true,
                bindDefs: {
                    id: { type: oracledb.NUMBER },
                    first_name: { type: oracledb.STRING, maxSize: 20 },
                    last_name: { type: oracledb.STRING, maxSize: 20 },
                    email: { type: oracledb.STRING, maxSize: 100 },
                    staff_role: { type: oracledb.STRING, maxSize: 20 },
                    phone_number: { type: oracledb.STRING, maxSize: 12 },
                    managed_by: { type: oracledb.NUMBER },
                    works_at: { type: oracledb.NUMBER },
                    hourly_rate: { type: oracledb.NUMBER },
                    bi_weekly_hours: { type: oracledb.NUMBER }
                }
            },
            binds: [
                { id: 0, first_name: 'Rohan', last_name: 'Manoharan', email: 'dat.manoharan@gmail.com', staff_role: 'assistant librarian', phone_number: '134-564-5698', managed_by: 2, works_at: 2, hourly_rate: 25, bi_weekly_hours: 40 },
                { id: 1, first_name: 'Jackie', last_name: 'Lam', email: 'darn.dang@gmail.com', staff_role: 'library clerk', phone_number: '345-134-6983', managed_by: 1, works_at: 1, hourly_rate: 22, bi_weekly_hours: 35 }
            ]
        },
        {
            sql: "INSERT INTO volunteer_staff VALUES (:id, :first_name, :last_name, :email, :staff_role, :phone_number, :managed_by, :works_at, :total_hours)",
            options: {
                autoCommit: true,
                bindDefs: {
                    id: { type: oracledb.NUMBER },
                    first_name: { type: oracledb.STRING, maxSize: 20 },
                    last_name: { type: oracledb.STRING, maxSize: 20 },
                    email: { type: oracledb.STRING, maxSize: 100 },
                    staff_role: { type: oracledb.STRING, maxSize: 20 },
                    phone_number: { type: oracledb.STRING, maxSize: 12 },
                    managed_by: { type: oracledb.NUMBER },
                    works_at: { type: oracledb.NUMBER },
                    total_hours: { type: oracledb.NUMBER }
                }
            },
            binds: [
                { id: 0, first_name: 'Felix', last_name: 'Nguyen', email: 'gelic.nguyen@gmail.com', staff_role: 'janitor', phone_number: '396-234-1963', managed_by: 0, works_at: 0, total_hours: 20 },
                { id: 1, first_name: 'Erkhes', last_name: 'Unur', email: 'neffy.unur@gmail.com', staff_role: 'computer technician', phone_number: '245-698-0953', managed_by: 1, works_at: 1, total_hours: 30 }
            ]
        },
        {
            sql: "INSERT INTO borrows VALUES (:copy_id, :book_id, :member_id, :due_date)",
            options: {
                autoCommit: true,
                bindDefs: {
                    copy_id: { type: oracledb.NUMBER },
                    book_id: { type: oracledb.NUMBER },
                    member_id: { type: oracledb.NUMBER },
                    due_date: { type: oracledb.DATE }
                }
            },
            binds: [
                { copy_id: 0, book_id: 0, member_id: 0, due_date: new Date('2025-11-10') },
                { copy_id: 4, book_id: 0, member_id: 0, due_date: new Date('2025-12-05') },
                { copy_id: 0, book_id: 1, member_id: 1, due_date: new Date('2025-11-15') },
                { copy_id: 2, book_id: 0, member_id: 1, due_date: new Date('2025-10-01') },
                { copy_id: 6, book_id: 0, member_id: 2, due_date: new Date('2024-10-10') }
            ]
        },
        {
            sql: "INSERT INTO queue_hold VALUES (:id, :place_in_queue, :member_id)",
            options: {
                autoCommit: true,
                bindDefs: {
                    id: { type: oracledb.NUMBER },
                    place_in_queue: { type: oracledb.NUMBER },
                    member_id: { type: oracledb.NUMBER }
                }
            },
            binds: [
                { id: 2, place_in_queue: 0, member_id: 0 },
                { id: 2, place_in_queue: 1, member_id: 2 }
            ]
        }
    ],
    // Simple queries
    simpleQueries: {
        1: `SELECT b.book_ID, title, author, genre, COUNT(c.copy_ID) AS Number_Available
        FROM book b, book_copy c
        WHERE b.book_ID = c.book_ID
            AND b.author = 'J. K. Rowling'
            AND (c.book_ID, c.copy_ID) NOT IN
            (SELECT borrows.book_ID, borrows.copy_ID
            FROM borrows)
        GROUP BY b.book_ID, title, author, genre
        ORDER BY b.book_ID`,
        2: `SELECT DISTINCT b.member_ID, username, bk.title, c.copy_ID, TRUNC(SYSDATE) - TRUNC(b.due_date) AS Days_Overdue
        FROM lib_member l, borrows b, book bk, book_copy c
        WHERE l.member_ID = b.member_ID
            AND b.book_ID = bk.book_ID
            AND b.book_ID = c.book_ID
            AND b.copy_ID = c.copy_ID
            AND TRUNC(b.due_date) < TRUNC(SYSDATE)
        ORDER BY Days_Overdue DESC`,
        3: `SELECT
            f.staff_ID,
            f.first_name,
            f.last_name,
            COUNT(DISTINCT p.staff_ID) AS Num_Part_Time_Managees,
            COUNT(DISTINCT v.staff_ID) AS Num_Volunteer_Managees,
            COUNT(DISTINCT f2.staff_ID) AS Num_Full_Time_Managees,
            COUNT(DISTINCT p.staff_ID) + COUNT(DISTINCT v.staff_ID) + COUNT(DISTINCT f2.staff_ID) AS Total_Managees
        FROM full_time_staff f
        LEFT JOIN part_time_staff p ON p.managed_by = f.staff_ID
        LEFT JOIN volunteer_staff v ON v.managed_by = f.staff_ID
        LEFT JOIN full_time_staff f2 ON f2.managed_by = f.staff_ID
        GROUP BY f.staff_ID, f.first_name, f.last_name
        ORDER BY Total_Managees DESC`,
        4: `SELECT staff_ID, first_name, last_name, s.works_at, b.branch_name
        FROM part_time_staff s, branch b
        WHERE s.works_at = b.branch_ID
        AND s.works_at = 2
        GROUP BY staff_ID, first_name, last_name, s.works_at, b.branch_name
        HAVING AVG(hourly_rate) > (SELECT AVG(hourly_rate) from part_time_staff)`,
        5: `SELECT staff_ID, first_name, last_name, total_hours
        FROM volunteer_staff
        WHERE total_hours = (SELECT MAX(total_hours) FROM volunteer_staff)`,
        6: `SELECT address_city, COUNT(branch_ID) as Num_of_Branches
        FROM branch
        WHERE address_province = 'Ontario'
        GROUP BY address_city`,
        7: `SELECT title, author, publish_date, genre
        FROM book
        WHERE publish_date = (SELECT MIN(publish_date) FROM book WHERE genre = 'Fantasy')`,
        8: `SELECT l.member_ID, username, COUNT(b.book_ID) AS NUM_BORROWED
        FROM lib_member l, borrows b
        WHERE l.member_ID = b.member_ID
        GROUP BY l.member_ID, username
        HAVING COUNT(b.book_ID) > 0
        ORDER BY NUM_BORROWED DESC, l.member_ID ASC`,
        9: `SELECT located_at AS branch_ID, COUNT(DISTINCT book_ID) AS NUM_BOOKS
        FROM book_copy
        GROUP BY located_at`,
        10: `SELECT provided_by AS supplier_ID, COUNT(DISTINCT book_ID) AS NUM_BOOKS, COUNT(copy_ID)AS TOTAL_VOLUMES
        FROM book_copy
        GROUP BY provided_by`,
        11: `SELECT member_ID, book_ID, place_in_queue
        FROM queue_hold
        WHERE place_in_queue = 0
        ORDER BY member_ID`,
        12: `SELECT s.supplier_ID, supplier_name, email, phone_number
        FROM supplier s
        LEFT JOIN book_copy b ON s.supplier_ID = b.provided_by
        HAVING COUNT(copy_ID) >= 10
        GROUP BY s.supplier_ID, supplier_name, email, phone_number`,
    },
    // Advanced queries
    advancedQueries: {
        1: `SELECT
            m.username,
            b.title,
            q.place_in_queue
        FROM lib_member m, queue_hold q, book b
        WHERE m.member_id = q.member_id
            AND m.username = 'lsu'
            AND b.book_id = q.book_id`,
        2: `SELECT br.branch_id, br.branch_name, br.full_address,
        COUNT(DISTINCT staff.staff_role_id) as number_of_staff,
        COUNT(DISTINCT b.book_id) as number_of_distinct_books
        FROM (
            SELECT
                branch_id,
                branch_name,
                address_street_number || ' ' || address_street || ' - ' || address_city || ', ' || address_province || ' ' || address_postal_code AS full_address
            FROM branch
        ) br
        LEFT JOIN (
            SELECT staff_id || ' full-time' as staff_role_id, works_at FROM full_time_staff
            UNION ALL
            SELECT staff_id || ' part-time' as staff_role_id, works_at FROM part_time_staff
            UNION ALL
            SELECT staff_id || ' volunteer' as staff_role_id, works_at FROM volunteer_staff
            ) staff ON staff.works_at = br.branch_id
        LEFT JOIN book_copy b ON b.located_at = br.branch_id
        GROUP BY br.branch_id, br.branch_name, br.full_address`,
        3: `SELECT b.book_ID, b.title, COUNT(DISTINCT h.place_in_queue) + COUNT(DISTINCT bo.copy_ID) AS POPULARITY
        FROM book b
        LEFT JOIN borrows bo ON b.book_ID = bo.book_ID
        LEFT JOIN queue_hold h ON b.book_ID = h.book_ID
        GROUP BY b.book_ID, b.title
        ORDER BY POPULARITY DESC`,
        4: `SELECT username
        FROM lib_member l
        WHERE EXISTS (
            SELECT b.member_id
            FROM borrows b
            WHERE b.member_id = l.member_id
            GROUP BY b.member_id
            HAVING COUNT(b.book_id) > 1
            )
        AND EXISTS (
            SELECT l.username
            FROM queue_hold q
            WHERE q.member_id = l.member_id
        )`,
        5: `SELECT
            s.supplier_id,
            s.supplier_name,
            ROUND ((COUNT(b.copy_id) / (SELECT COUNT(copy_id) FROM book_copy) ) * 100, 3) AS donation_percentage
        FROM supplier s
        JOIN book_copy b ON b.provided_by = s.supplier_id
        GROUP BY s.supplier_id, s.supplier_name`,
        6: `SELECT
            book.title
        FROM book_copy b
        JOIN book ON b.book_id = book.book_id
        WHERE b.located_at = 2
        MINUS
        SELECT
            book.title
        FROM book_copy b
        JOIN book ON b.book_id = book.book_id
        WHERE b.located_at != 2`,
    },
    //View Tables
    viewTables: {
        "borrows": `SELECT * FROM borrows`,
        "part_time_staff": `SELECT * FROM part_time_staff`,
        "volunteer_staff": `SELECT * FROM volunteer_staff`,
        "full_time_staff": `SELECT * FROM full_time_staff`,
        "book_copy": `SELECT * FROM book_copy`,
        "branch": `SELECT * FROM branch`,
        "supplier": `SELECT * FROM supplier`,
        "queue_hold": `SELECT * FROM queue_hold`,
        "lib_member": `SELECT * FROM lib_member`,
        "book": `SELECT * FROM book`
    }
};
//# sourceMappingURL=statements.js.map