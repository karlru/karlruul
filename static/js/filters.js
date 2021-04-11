Vue.filter('formatDate', function(date) {
	// 0=regex, 1=year, 2=month, 3=day
	date = date.match(/(\d{4})-(\d{2})-(\d{2})/)
	
	if (!date) return ''
	
	const months = {
		'01': 'January',
		'02': 'February',
		'03': 'March',
		'04': 'April',
		'05': 'May',
		'06': 'June',
		'07': 'July',
		'08': 'August',
		'09': 'September',
		'10': 'October',
		'11': 'November',
		'12': 'December',
	}

	return `${months[date[2]]} ${(date[3].charAt(0) == '0' ? date[3].substring(1) : date[3])}, ${date[1]}`
})

Vue.filter('truncatechars', function(text, len) {
	return text.substring(0, parseInt(len))
})

Vue.filter('striptags', function(text) {
	return text.replace(/(<([^>]+)>)/gi, "") + '...'
})
