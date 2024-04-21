-- 코드를 입력하세요
SELECT book_id, date_format(published_date, '%Y-%m-%d')
from book
where date_format(published_date, '%Y%m') like '2021%'
and category like '%인문%'
order by date_format(published_date, '%Y-%m-%d')