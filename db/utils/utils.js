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

    



};
// [{
//     body:
//       'The beautiful thing about treasure is that it exists. Got to find out what kind of sheets these are; not cotton, not rayon, silky.',
//     belongs_to: 'Living in the shadow of a great man',
//     created_by: 'butter_bridge',
//     votes: 14,
//     created_at: 1479818163389,
//   }]