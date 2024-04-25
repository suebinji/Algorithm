-- 코드를 입력하세요
SELECT member_id, member_name,gender,date_format(date_of_birth,'%Y-%m-%d') as date_of_birth
from member_profile
where date_format(date_of_birth,'%Y-%m-%d') like '%03%'
and gender like '%W%'
and tlno is not null