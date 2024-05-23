/* Exercise #1*/
select 
    * 
from 
    employees;

/* Exercise #2*/
select 
    *
from 
    employees 
where 
    last_name = 'Piveteau';

/* Exercise #3*/
select 
    * 
from 
    employees 
order by 
    hire_date asc;

/* Exercise #4*/
select 
    count(*) 
from 
    employees;

/* Exercise #5*/
select 
    YEAR(hire_date) as hire_year, 
    COUNT(*) as employee_count
from 
    employees
group by 
    YEAR(hire_date)
order by 
    hire_year;

/* Exercise #6*/
select 
    e.first_name,
    e.last_name,
    dp.dept_name
from 
    employees e
inner join 
    dept_emp de
on e.emp_no = de.emp_no
inner join
    departments dp
on de.dept_no = dp.dept_no;

/* Exercise #7*/
select 
    e.first_name,
    e.last_name,
    t.title
from 
    employees e
left join
    titles t
on e.emp_no = t.emp_no;

/* Exercise #8*/
SELECT
    e.first_name,
    e.last_name,
    s.salary
FROM
    employees e
LEFT JOIN
    salaries s
ON
    e.emp_no = s.emp_no
WHERE
    s.salary > (SELECT AVG(salary) FROM salaries);

/* Exercise #9*/
select 

/* Exercise #10*/
SELECT
    e.first_name,
    e.last_name,
    dp.dept_name
from
    employees e
inner join
    dept_emp de
on e.emp_no = de.emp_no
inner join
    departments dp
on de.dept_no = dp.dept_no
where de.dept_no = 'd005';

/* Exercise #11*/
SELECT
    avg(s.salary),
    dp.dept_name
FROM
    employees e
inner JOIN
    salaries s
ON
    e.emp_no = s.emp_no
inner join
    dept_emp de
on e.emp_no = de.emp_no
inner join
    departments dp
on de.dept_no = dp.dept_no
group by
	dp.dept_name;

/* Exercise #12*/
select
    e.first_name,
    e.last_name,
    
from
    employees e
left join
    dept_manager dm
on e.emp_no = dm.emp_no;

/* Exercise #13*/
SELECT
    e1.first_name AS first_name1,
    e1.last_name AS last_name1,
    e2.first_name AS first_name2,
    e2.last_name AS last_name2,
    e1.birth_date
FROM
    employees e1
INNER JOIN
    employees e2
ON
    e1.birth_date = e2.birth_date
    AND e1.emp_no < e2.emp_no

/* Exercise #14*/
SELECT
    e.first_name,
    e.last_name,
    dp.dept_name
from
    employees e
inner join
    dept_emp de
on e.emp_no = de.emp_no
inner join
    departments dp
on de.dept_no = dp.dept_no
where de.dept_no = 'd007';

/* Exercise #15*/
SELECT
    max(s.salary),
    dp.dept_name
FROM
    employees e
inner JOIN
    salaries s
ON
    e.emp_no = s.emp_no
inner join
    dept_emp de
on e.emp_no = de.emp_no
inner join
    departments dp
on de.dept_no = dp.dept_no
group by
	dp.dept_name

