function Jandi(query, max_horizontal = 'auto', active_txt = '🟩', inactive_txt = '⬜') {
    const _Jandi = [[], [], [], [], [], [], []];
    let _Jandi_Fix = 0;
    for (let i = 0; i < query.length; i++) {
        const q = query[i];
        for (let j = 0; j < new Date(q.year, q.month, q.day === 'auto' ? 0 : q.day).getDate(); j++) {
            _Jandi[(j + _Jandi_Fix) % 7].push((q.bit_flag >> j & 1) ? active_txt : inactive_txt);
        }
        _Jandi_Fix += new Date(q.year, q.month, q.day === 'auto' ? 0 : q.day).getDate() % 7;
    }
    return _Jandi.map(
        e => e.slice(
            max_horizontal === 'auto' ? 0 
            : Math.max(0, _Jandi[0].length - max_horizontal)
        ).join('')
    ).join('\n');
}