const count = s => {
    const obj = {};
    for( let i = 0; i < s.length; i++){
        const char = s[i];
        obj[s[i]] = (obj[s[i]] || 0) + 1;
    }
    return obj;
}
