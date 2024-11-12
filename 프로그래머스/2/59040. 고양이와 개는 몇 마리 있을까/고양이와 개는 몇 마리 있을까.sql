-- 코드를 입력하세요
SELECT distinct(animal_type), count(*) as count
from ANIMAL_INS
group by animal_type
order by animal_type