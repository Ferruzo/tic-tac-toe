$(document).ready(function() 
{
	var turno = true // true = x ; false = o
	var juego_activo = true
	var valor = ""

	$(".michiCasilla").click(function() {
		
		if (juego_activo == true && $(this).text() == "")
		{
			if (turno == true)
			{
				valor = "x"
			}
			else
			{
				valor = "o"
			}

			$(this).text(valor)
			
			turno = !turno	

			juego_activo = verificar(valor)
		}
		
	})

})

function verificar(valor)
{
	var juego_activo = true

	if ($(".michiCasilla").text().length == 9)
	{
		alert("Es un empate")
		juego_activo = false
	}

	if ($(".1").text() == valor && $(".2").text() == valor && $(".3").text() == valor)
	{
		juego_activo = false
		alert("Ganó " + valor)
	}
	else if ($(".4").text() == valor && $(".5").text() == valor && $(".6").text() == valor)
	{
		juego_activo = false
		alert("Ganó " + valor)
	}
	else if ($(".7").text() == valor && $(".8").text() == valor && $(".9").text() == valor)
	{
		juego_activo = false
		alert("Ganó " + valor)
	}
	else if ($(".1").text() == valor && $(".4").text() == valor && $(".7").text() == valor)
	{
		juego_activo = false
		alert("Ganó " + valor)
	}
	else if ($(".2").text() == valor && $(".5").text() == valor && $(".8").text() == valor)
	{
		juego_activo = false
		alert("Ganó " + valor)
	}
	else if ($(".3").text() == valor && $(".6").text() == valor && $(".9").text() == valor)
	{
		juego_activo = false
		alert("Ganó " + valor)
	}
	else if ($(".1").text() == valor && $(".5").text() == valor && $(".9").text() == valor)
	{
		juego_activo = false
		alert("Ganó " + valor)
	}
	else if ($(".3").text() == valor && $(".5").text() == valor && $(".7").text() == valor)
	{
		juego_activo = false
		alert("Ganó " + valor)
	}

	return juego_activo
}