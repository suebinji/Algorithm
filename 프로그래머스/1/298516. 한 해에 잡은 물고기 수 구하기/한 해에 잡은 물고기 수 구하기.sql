-- 코드를 작성해주세요
select count(*) as fish_count
from fish_info
where date_format(time,'%Y%m%d') like '2021%'