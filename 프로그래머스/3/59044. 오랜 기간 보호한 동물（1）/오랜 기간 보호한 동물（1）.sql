-- 코드를 입력하세요
SELECT b.name, b.datetime -- a.animal_id, a.datetime as '입양보낸날짜', b.datetime as '보호소 들어온 날짜' -- a.name, a.datetime
from animal_outs a
right join animal_ins b
on a.animal_id = b.animal_id
where a.datetime is null
#having count(*) = 3
order by b.datetime
limit 3