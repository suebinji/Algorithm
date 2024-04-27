-- 코드를 작성해주세요
select count(*) as fish_count, a.fish_name
from fish_name_info a
right join fish_info b
on a.fish_type = b.fish_type
group by a.fish_name
order by fish_count desc