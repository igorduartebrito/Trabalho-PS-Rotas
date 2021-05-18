function perplanController(req, res) {
    res.render('perplan', {title: 'Empreendimento Imobiliário - Perplan', 
      texto: 'Perplan'});
  }
  
  module.exports = {perplanController}