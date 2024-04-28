-- 코드를 작성해주세요
with maxScore as (
    select emp_no, sum(score) as score
    from hr_grade
    where year like '%2022%'
    group by emp_no
    order by sum(score) desc
    limit 1
)
select score, a.emp_no, a.emp_name, position, email
from hr_employees a
left join hr_department b
on a.dept_id =b.dept_id
left join maxScore
on a.emp_no = maxScore.emp_no
where maxScore.score is not null