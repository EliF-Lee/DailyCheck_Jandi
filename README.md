# DailyCheck_Jandi


```js
/**
 * @param {Array} query
 * @param {String|Int} max_horizontal
 * @param {String} active_txt
 * @param {String} inactive_txt
 */
function Jandi(query, max_horizontal = 'auto', active_txt = 'π©', inactive_txt = 'β¬') {...}
```

```js
/* Query */
[
    {
        "year": 2022,  // λ
        "month": 4,    // μ
        "day": "auto", // ν΄λΉ μ°μμ λ§μ§λ§ μΌλ‘ μλ μ€μ 
        "bit_flag": 0  // μλ λΉνΈνλκ·Έ κ° (0~2147483647)
    },
    {
        "year": 2022,           // λ
        "month": 5,             // μ
        "day": 16,              // μλμΌλ‘ μ€μ 
        "bit_flag": 2147483647  // μλ λΉνΈνλκ·Έ κ° (0~2147483647)
    },
]
```

```js
/* Example */
const Query = [
    {
        "year": 2022,
        "month": 1,
        "day": "auto",
        "bit_flag": 3823402
    },
    {
        "year": 2022,
        "month": 2,
        "day": "auto",
        "bit_flag": 28172399
    },
    {
        "year": 2022,
        "month": 3,
        "day": "auto",
        "bit_flag": 82739483
    },
    {
        "year": 2022,
        "month": 4,
        "day": "auto",
        "bit_flag": 19283723
    },
    {
        "year": 2022,
        "month": 5,
        "day": 16,
        "bit_flag": 44317
    }
];

const _Jandi = Jandi(Query);
console.log('Output 1');
console.log(_Jandi, '\n');

const _Jandi_2 = Jandi(Query, 16);
console.log('Output 2');
console.log(_Jandi_2, '\n');

const _Jandi_3 = Jandi(Query, 'auto', '[X]', '[ ]');
console.log('Output 3');
console.log(_Jandi_3, '\n');

const _Jandi_4 = Jandi(Query, 5, '[X]', '[ ]');
console.log('Output 4');
console.log(_Jandi_4, '\n');
```

# Output
<img width="495" alt="αα³αα³αα΅α«αα£αΊ 2022-05-16 15 12 03" src="https://user-images.githubusercontent.com/66173558/168530275-1d43a12d-8ed1-46aa-baba-eccc0c1fc900.png">
