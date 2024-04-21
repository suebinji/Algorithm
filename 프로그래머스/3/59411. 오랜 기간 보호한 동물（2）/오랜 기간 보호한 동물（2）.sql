-- 코드를 입력하세요
SELECT a.animal_id, a.name
#a.datetime, b.datetime #, a.datetime-b.datetime as aa
from animal_outs a
left join animal_ins b
on a.animal_id = b.animal_id
order by a.datetime-b.datetime desc
limit 2