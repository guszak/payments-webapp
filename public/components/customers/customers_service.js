App.factory('Customer', function ($resource, API_URL) {
	return $resource(API_URL + '/customers', {}, {
		methods: {
			query: { method: 'GET', isArray: false },
			get: { method: 'GET' },
			update: { method: 'PUT' },
			save: { method: 'POST' },
			delete: { method: 'DELETE' }
		}
	})
})
