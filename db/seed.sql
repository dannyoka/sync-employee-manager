INSERT INTO departments (name)
    VALUES
        ('Accounting'),
        ('Sales'),
        ('Engineering'),
        ('Human Resources');

INSERT INTO roles (title, salary, department_id)
    VALUES
        ('Senior Software Engineer', 140000, 3),
        ('Accountant', 80000, 1),
        ('Head of Sales', 120000, 2),
        ('Recruiter', 75000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
    VALUES 
        ('Danny', 'Oka', 1, NULL),
        ('Kelli', 'Oka', 3, NULL);