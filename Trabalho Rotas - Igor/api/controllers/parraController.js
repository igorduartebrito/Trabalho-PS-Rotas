function parraController(req, res) {
    res.render('parra', {title: 'Empreendimento Imobiliário - Parra', 
      texto: 'Parra'});
  }
  
  module.exports = {parraController}