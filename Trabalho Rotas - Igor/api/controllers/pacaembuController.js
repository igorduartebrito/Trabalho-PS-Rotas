function pacaembuController(req, res) {
    res.render('pacaembu', {title: 'Empreendimento Imobiliário - Pacaembu', 
      texto: 'Pacaembu'});
  }
  
  module.exports = {pacaembuController}