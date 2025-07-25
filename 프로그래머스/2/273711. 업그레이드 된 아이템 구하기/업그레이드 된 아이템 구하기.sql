-- 코드를 작성해주세요
# select a.item_id, 
# case when item_name like '%A%' then 'ITEM_B'
# when item_name like '%B%' then 'ITEM_C'  else item_name end as item_name, 
# rarity
# from item_info a
# left join item_tree b
# on a.item_id = b.item_id
# where rarity like '%RARE%'
# order by a.item_id desc
SELECT 
    ii.ITEM_ID,
    ii.ITEM_NAME,
    ii.RARITY
FROM item_tree it
JOIN item_info ii ON it.ITEM_ID = ii.ITEM_ID
WHERE it.PARENT_ITEM_ID IN (
    SELECT ITEM_ID
    FROM item_info
    WHERE RARITY = 'RARE'
)
ORDER BY ii.ITEM_ID DESC;