-- 코드를 입력하세요
SELECT a.FLAVOR
from icecream_info a
left join first_half b
on a.flavor = b.flavor
where total_order >= 3000
and ingredient_type like '%fruit_based%'