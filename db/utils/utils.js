exports.formatDates = input => {
    if (input.length === 0) return []
    const newArr = input.map(time => {
        const newTime = new Date(time.created_at)
        time.created_at = newTime
        return time
    })
    return newArr
};

exports.makeRefObj = list => {
    if (list.length === 0) return {}
    let refObject = {}
    for (ref in list) {
        refObject[list[ref].title] = list[ref].article_id
    }
    return refObject
};

exports.formatComments = (comments, articleRef) => {
    
};
