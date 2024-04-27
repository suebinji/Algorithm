-- 코드를 작성해주세요
select aa.item_id, item_name
from item_info aa
left join item_tree bb
on aa.item_id = bb.item_id
where parent_item_id is null