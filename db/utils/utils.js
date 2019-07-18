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
    if (comments.length === 0) return []
    const formatDates = (input) => {
        return new Date(input)
    }
    const newObj = comments.map(comment => {
        const { ['created_by']: value, ['belongs_to']: value2, ['created_at']: value3, ...rest } = comment;
        const secondObj = {
            ['author']: value,
            ['article_id']: articleRef[comment.belongs_to],
            ['created_at']: formatDates(comment.created_at), ...rest
        }
        return secondObj
    })
    return newObj
};
