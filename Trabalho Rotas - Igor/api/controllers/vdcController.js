function vdcController(req, res) {
    res.render('pacaembu/vdc', {title: 'Empreendimento Imobiliário - Pacaembu - Villa di Capri', 
      texto: 'Villa di Capri'});
  }
  
  module.exports = {vdcController}