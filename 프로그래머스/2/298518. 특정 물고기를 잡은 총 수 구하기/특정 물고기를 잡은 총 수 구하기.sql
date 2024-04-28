-- 코드를 작성해주세요
select count(*) as fish_count
from fish_info a
left join fish_name_info b
on a.fish_type = b.fish_type
where fish_name like '%BASS%'
or fish_name like '%SNAPPER%'