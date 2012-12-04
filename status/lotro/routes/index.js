
/*
 * GET home page.
 */

exports.index = function(req, res){
	res.render('index');
 	//res.render('servers', { title: 'LOTRO Server Status', servers: [{'name': 'Brandywine', status: "icon-search"}, {'name': 'Crickhollow', status: "icon-search"}] });
  	/*
  	for (int i = 0; i < 5; i++)
  	{
	  	res.render('server', {name: 'Brandywine'});
  	}
  	*/
  	//res.render('footer');
};