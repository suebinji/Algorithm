-- 코드를 입력하세요
select category, sum(sales) as total_sales
from book_sales a
left join book b on a.book_id=b.book_id
where date_format(sales_date,'%Y%m%d') like '202201%'
group by category
order by category
