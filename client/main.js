import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Alpine from 'alpinejs'
import LoveCounter from './love-counter'
import Login from './alpine'
import persist from '@alpinejs/persist'
 import * as fun from 'everyday-fun';

window.Alpine = Alpine
Alpine.plugin(persist)

Alpine.data('open',Login)
Alpine.data('loveCounter', LoveCounter);
Alpine.data('quoteApp', function(){
	return {
		init(){
			this.quote = fun.getRandomQuote()
      
		}, 
		quote : {}
	}
})

Alpine.start()

