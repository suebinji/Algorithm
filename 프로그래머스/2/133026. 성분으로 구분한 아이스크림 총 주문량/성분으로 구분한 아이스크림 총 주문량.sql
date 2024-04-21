-- 코드를 입력하세요
SELECT INGREDIENT_TYPE, sum(total_order)
from icecream_info a
left join first_half b
on a.flavor = b.flavor
group by INGREDIENT_TYPE
