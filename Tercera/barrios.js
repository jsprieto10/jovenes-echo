function cambiar_de_comuna(id_comuna) {
	
	id_comuna = id_comuna || "B2";
	comuna_act = id_comuna;

	var comuna_seleccionada = datos_comuna_para_per_comuna.filter(d => d.id == id_comuna)[0];
	var req2 = { ...req };
	req2.comunas = [comuna_seleccionada.barrio];
	req2.numero = 1023;
	req2.respuesta = [1];
	
	dibujar_burbujas(comuna_seleccionada.datos)
}


function escribirBarrio(){

	//Hombres

	if (
		params["mayor_hombre"] &&
		!params["mayor_mujer"] &&
		params["adulto_hombre"] &&
		!params["adulto_mujer"] &&
		params["joven_hombre"] &&
		!params["joven_mujer"])
		{
			demografia = "LOS HOMBRES"
		}


	//Mujeres
	else if (
		!params["mayor_hombre"] &&
		params["mayor_mujer"] &&
		!params["adulto_hombre"] &&
		params["adulto_mujer"] &&
		!params["joven_hombre"] &&
		params["joven_mujer"]) {
			demografia = "LAS MUJERES"
		}

	//Mayores
	else if (
		params["mayor_hombre"] &&
		params["mayor_mujer"] &&
		!params["adulto_hombre"] &&
		!params["adulto_mujer"] &&
		!params["joven_hombre"] &&
		!params["joven_mujer"]) {
			demografia = "LOS ADULTOS MAYORES"
		}


	//Adultos
	else if (
		!params["mayor_hombre"] &&
		!params["mayor_mujer"] &&
		params["adulto_hombre"] &&
		params["adulto_mujer"] &&
		!params["joven_hombre"] &&
		!params["joven_mujer"]) {
			demografia = "LAS PERSONAS ENTRE 29 Y 59"
		}

		//Jovenes
		else if (
			!params["mayor_hombre"] &&
			!params["mayor_mujer"] &&
			!params["adulto_hombre"] &&
			!params["adulto_mujer"] &&
			params["joven_hombre"] &&
			params["joven_mujer"]){
				demografia = "LOS JOVENES"
				}

	//Hombres mayores
	else if (
		params["mayor_hombre"] &&
		!params["mayor_mujer"] &&
		!params["adulto_hombre"] &&
		!params["adulto_mujer"] &&
		!params["joven_hombre"] &&
		!params["joven_mujer"]) {
			demografia = "LOS HOMBRES ADULTOS MAYORES"
		}

	//Hombres adultos
	else if (
		!params["mayor_hombre"] &&
		!params["mayor_mujer"] &&
		params["adulto_hombre"] &&
		!params["adulto_mujer"] &&
		!params["joven_hombre"] &&
		!params["joven_mujer"]) {
			demografia = "LOS HOMBRES ADULTOS ENTRE 29 Y 59"
		}

	//Hombres jovenes
	else if (
		!params["mayor_hombre"] &&
		!params["mayor_mujer"] &&
		!params["adulto_hombre"] &&
		!params["adulto_mujer"] &&
		params["joven_hombre"] &&
		!params["joven_mujer"]) {
			demografia = "LOS HOMBRES JOVENES"
	}


	//Mujeres mayores
	else if (
		!params["mayor_hombre"] &&
		params["mayor_mujer"] &&
		!params["adulto_hombre"] &&
		!params["adulto_mujer"] &&
		!params["joven_hombre"] &&
		!params["joven_mujer"]) {
			demografia = "LAS MUJERES ADULTAS MAYORES"
	}

	
	//Mujeres adultos
	else if (
		!params["mayor_hombre"] &&
		!params["mayor_mujer"] &&
		!params["adulto_hombre"] &&
		params["adulto_mujer"] &&
		!params["joven_hombre"] &&
		!params["joven_mujer"]) {
			demografia = "LAS MUJERES ADULTAS ENTRE 29 Y 59"
		}

	//Mujeres jovenes
	else if (
		!params["mayor_hombre"] &&
		!params["mayor_mujer"] &&
		!params["adulto_hombre"] &&
		!params["adulto_mujer"] &&
		!params["joven_hombre"] &&
		params["joven_mujer"]){
			demografia = "LAS MUJERES JOVENES"
		} 

		
	else {
		"LOS HABITANTES DEL BARRIO"
	}

	
	d3.select("#demografia").text(demografia)
	d3.select("#barrioName").text(barrioName)
	d3.select("#demografia2").text(demografia)
	d3.select("#barrioName2").text(barrioName2)

}
escribirBarrio()