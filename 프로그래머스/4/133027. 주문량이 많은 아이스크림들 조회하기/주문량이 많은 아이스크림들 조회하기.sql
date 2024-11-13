-- 코드를 입력하세요
select flavor
from (
select A.flavor, sum(A.total_order + B.total_order) as total_order
from FIRST_HALF A,
JULY B
where A.flavor = B.flavor
group by A.flavor
order by 2 desc 
)
WHERE ROWNUM <= 3;