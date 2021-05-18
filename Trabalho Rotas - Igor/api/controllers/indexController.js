function indexController(req, res) {
  res.render('index', {title: 'Empreendimento Imobiliário', 
    texto: 'Menu Principal'});
}

module.exports = {indexController}