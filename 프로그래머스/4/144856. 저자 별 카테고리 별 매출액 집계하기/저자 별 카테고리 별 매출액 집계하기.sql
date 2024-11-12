-- 코드를 입력하세요
SELECT A.author_id, AUTHOR_NAME, CATEGORY , sum(sales*price) as total_sales
from BOOK A,
AUTHOR B,
BOOK_SALES C
where 1=1
and A.AUTHOR_ID = B.AUTHOR_ID
and A.BOOK_ID = C.BOOK_ID
and to_char(SALES_DATE,'YYYY-MM') like '2022-01%'
group by A.author_id, AUTHOR_NAME, CATEGORY
order by A.author_id, CATEGORY desc