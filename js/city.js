$('document').ready(function() {
  $('#city').on('input', function() {
    var citys = Object.keys(data);
    var limaCity = citys[0];
    var huancayoCity = citys[1];
    var selvaCity = citys[2];
    var typeCitys = $('#city').val();

    if (typeCitys.toUpperCase() === limaCity || typeCitys.toUpperCase() === huancayoCity || typeCitys.toUpperCase() === selvaCity) {
      $('#restButton').removeAttr('disabled');      
      $('#restButton').removeClass('color-disabled');
      $('#restButton').addClass('color-enabled');
    } else {
      $('#msj1').text('¿Que comida desea comer de la COSTA, de la SIERRA o de la SELVA?');
      $('#restButton').attr('disabled', 'disabled');
      $('#restButton').addClass('color-disabled');
      $('#restButton').removeClass('color-enabled');
    }
  });

  // Guardadndo los valores del input para la siguiente vista 
  $('#restButton').click(function() {
    localStorage.input = $('#city').val();   
    localStorage.city = Object.keys(data); 
    window.location.href = '../views/restaurant.html';
  });
});
