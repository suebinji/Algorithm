-- 코드를 작성해주세요
select a.dept_id, dept_name_en, round(avg(sal) ,0) as avg_sal
from HR_DEPARTMENT as a join
HR_EMPLOYEES as b
on a.dept_id = b.dept_id
group by a.dept_id, dept_name_en
order by avg_sal desc;