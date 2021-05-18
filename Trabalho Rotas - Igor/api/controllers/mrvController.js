function mrvController(req, res) {
    res.render('mrv', {title: 'Empreendimento Imobiliário - MRV', 
      texto: 'MRV'});
  }
  
  module.exports = {mrvController}