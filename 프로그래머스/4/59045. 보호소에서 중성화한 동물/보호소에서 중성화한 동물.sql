-- 코드를 입력하세요
SELECT A.animal_id, A.animal_type, A.name
from ANIMAL_INS A
join ANIMAL_OUTS B
on A.ANIMAL_ID = B.ANIMAL_ID
where sex_upon_intake like '%Intact%'
and sex_upon_outcome not like '%Intact%';