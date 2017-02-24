import Ember from 'ember';

export default Ember.Controller.extend({

	filtredModel: Ember.computed('model', function(){
		return this.get('model');
	}),

	actions: {
		ordenar(type){
			let reorder = this.get('filtredModel');
			switch(type){
				case 'nome':
				reorder = reorder.sortBy('name');
				break;
				case 'star':
				reorder = reorder.sortBy('stargazers_count');
				break;
				case 'JavaScript':
				reorder = reorder.filterBy('language', 'JavaScript');
				break;
				case 'all':
				reorder = this.get('model');
				break;
			}
			this.set('filtredModel', reorder);
		}
	}

});
