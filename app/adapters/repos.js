import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
	host: 'https://api.github.com/users',
	namespace: 'wilfernandesjr',
	headers: {
		Accept: 'application/vnd.github.v3+json'
	}
});
