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
        comment.author = comment.created_by
        delete comment.created_by
        comment.article_id = comment.belongs_to
        delete comment.belongs_to
        comment.article_id = articleRef[comment.article_id]
        comment.created_at = formatDates(comment.created_at)
        return comment
    })
    return newObj
};