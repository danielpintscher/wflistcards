import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	owner: DS.attr(),
	description: DS.attr('string'),
	language: DS.attr('string'),
	stargazers_count: DS.attr('number'),
	open_issues_count: DS.attr('number'),
	created_at: DS.attr('date'),
	pushed_at: DS.attr('date')
});
