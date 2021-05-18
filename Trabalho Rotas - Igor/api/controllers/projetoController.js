function projetoController(req, res) {
    res.render('projeto', {title: 'Empreendimento Imobiliário - Projeto', 
      texto: 'Projeto'});
  }
  
  module.exports = {projetoController}