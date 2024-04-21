-- 코드를 입력하세요
SELECT a.animal_id, a.name-- , a.datetime as '입양일', b.datetime as '보호일'
from animal_outs a
left join animal_ins b
on a.animal_id = b.animal_id
where a.datetime <= b.datetime
order by b.datetime