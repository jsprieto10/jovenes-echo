var urlBack="https://jovenes-echo.herokuapp.com/"
var comunas_ordenadas = ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10', 'B11', 'B12', 'B13', 'B14', 'B15', 'B16', 'B17', 'B18', 'B19', 'B20', 'B21', 'B22', 'B23', 'B24', 'B25', 'B26', 'B27', 'B28', 'B29', 'B30', 'B31', 'B32', 'B33', 'B34', 'B35', 'B36', 'B37', 'B38', 'B39', 'B40', 'B41', 'B42', 'B43', 'B44', 'B45', 'B46', 'B47', 'B48', 'B49', 'B50', 'B51', 'B52', 'B53', 'B54', 'B55', 'B56', 'B57', 'B58', 'B59', 'B60', 'B61', 'B62', 'B63', 'B64', 'B65', 'B66', 'B67', 'B68', 'B69', 'B70', 'B71', 'B72', 'B73', 'B74', 'B75', 'B76', 'B77', 'B78', 'B79', 'B80', 'B81', 'B82', 'B83', 'B84', 'B85', 'B86', 'B87', 'B88', 'B89', 'B90', 'B91', 'B92', 'B93', 'B94', 'B95', 'B96', 'B97', 'B98', 'B99', 'B100', 'B101', 'B102', 'B103', 'B104', 'B105', 'B106', 'B107', 'B108', 'B109', 'B110', 'B111', 'B112', 'B113', 'B114', 'B115', 'B116', 'B117', 'B118', 'B119', 'B120', 'B121', 'B122', 'B123', 'B124', 'B125', 'B126', 'B127', 'B128', 'B129', 'B130', 'B131', 'B132', 'B133', 'B134', 'B135', 'B136', 'B137', 'B138', 'B139', 'B140', 'B141', 'B142', 'B143', 'B144'];
var barr_dict = {'LA CASTELLANA': 1, 'MANGA': 2, 'MARIA CANO': 3, 'EL COUNTRY': 4, 'NELSON MANDELA': 5, 'ALBORNOZ': 6, 'TERNERA': 7, 'LA CAMPIÑA': 8, 'EL POZON': 9, 'EL CAMPESTRE': 10, 'PIE DE LA POPA': 11, 'URBANIZACION COLOMBIATON': 12, 'OLAYA ST. CENTRAL': 13, 'EL CARMELO': 14, 'CRESPO': 15, 'ALAMEDA LA VICTORIA': 16, 'ALTO BOSQUE': 17, 'LA TRONCAL': 18, 'PROVIDENCIA': 19, 'SAN PEDRO MARTIR': 20, 'LA INDIA': 21, 'VILLA ESTRELLA': 22, 'BOSTON': 23, 'ALMIRANTE COLON': 24, 'VISTA HERMOSA': 25, 'SAN FERNANDO': 26, 'CHIQUINQUIRA': 27, 'LOS CARACOLES': 28, 'DANIEL LEMAITRE': 29, 'SANTA LUCIA': 30, 'SANTA MONICA': 31, 'LAS PALMERAS': 32, 'BARU': 33, 'LA VICTORIA': 34, 'ARROZ BARATO': 35, 'CALAMARES': 36, 'CHIPRE': 37, 'LOS ALPES': 38, 'ARMENIA': 39, 'CHAPACUA': 40, 'TORICES': 41, 'EL SOCORRO': 42, 'PARAGUAY': 43, 'SAN JOSE DE LOS CAMPANOS': 44, 'BELLAVISTA': 45, 'BOCAGRANDE': 46, 'SAN ANTONIO': 47, 'SAN PEDRO': 48, 'REPUBLICA DE VENEZUELA': 49, 'AMBERES': 50, 'NUEVO BOSQUE': 51, 'VILLA ROSITA': 52, 'CENTRO': 53, 'TRECE DE JUNIO': 54, 'BUENOS AIRES': 55, 'PIEDRA DE BOLIVAR': 56, 'LA BOQUILLA': 57, 'LA MARIA': 58, 'BLAS DE LEZO': 59, 'PASACABALLOS': 60, 'JUNIN': 61, 'VEINTE DE JULIO SUR': 62, 'SAN FRANCISCO': 63, 'BAYUNCA': 64, 'VIEJO PORVENIR': 65, 'OLAYA ST. PROGRESO': 66, 'VILLA HERMOSA': 67, 'GETSEMANI': 68, 'OLAYA ST. RAFAEL NUÑEZ': 69, 'ESCALLON VILLA': 70, 'CASTILLOGRANDE': 71, 'LA QUINTA': 72, 'LOMA FRESCA': 73, 'ALTOS DE SAN ISIDRO': 74, 'REPUBLICA DE CHILE': 75, 'LOS JARDINES': 76, 'EL MILAGRO': 77, 'LAS GAVIOTAS': 78, 'EL RECREO': 79, 'NUEVO PARAISO': 80, 'LOS EJECUTIVOS': 81, 'URBANIZACION SIMON BOLIVAR': 82, 'OLAYA ST. ZARABANDA': 83, 'LO AMADOR': 84, 'OLAYA VILLA OLIMPICA': 85, 'ZARAGOCILLA': 86, 'OLAYA ST. LA MAGDALENA': 87, 'ESPAÑA': 88, 'BRUSELAS': 89, 'LAS DELICIAS': 90, 'LA CONSOLATA': 91, 'SANTA CLARA': 92, 'HENEQUEN': 93, 'EL EDUCADOR': 94, 'FLOR DEL CAMPO': 95, 'OLAYA ST. LA PUNTILLA': 96, 'SAN ISIDRO': 97, 'ALCIBIA': 98, 'BOSQUE': 99, 'LOS CERROS': 100, 'TACARIGUA': 101, 'ANITA': 102, 'MARBELLA': 103, 'CIUDADELA 2000': 104, 'EL REPOSO': 105, 'LOS CORALES': 106, 'JUAN XXIII': 107, 'CEBALLOS': 108, 'CANAPOTE': 109, 'REPUBLICA DEL LIBANO': 110, 'MANZANILLO DEL MAR': 111, 'LA ESPERANZA': 112, 'ANTONIO JOSE DE SUCRE': 113, 'LAS BRISAS': 114, 'RECREO': 115, 'NUEVO PORVENIR': 116, 'CHAMBACU': 117, 'CAMILO TORRES': 118, 'LA CANDELARIA': 119, 'LOS ANGELES': 120, 'EL GALLO': 121, 'EL CABRERO': 122, 'PETARE': 123, 'BOCACHICA': 124, 'OLAYA ST. PLAYA BLANCA': 125, 'VILLA ROSA': 126, 'EL PRADO': 127, 'EL LAGUITO': 128, 'LA CENTRAL': 129, 'LUIS CARLOS GALAN': 130, 'ARARCA': 131, 'TIERRA BAJA': 132, 'PONTEZUELA': 133, 'SANTA MARIA': 134, 'BOSQUECITO': 135, 'VILLA RUBIA': 136, 'BARRIO CHINO': 137, 'LA CONCEPCION': 138, 'FREDONIA': 139, 'SAN BERNARDO': 140, 'PEDRO SALAZAR': 141, 'CIUDADELA 11 DE NOVIEMBRE': 142, 'LA SIERRITA': 143, 'CAMAGUEY': 144}
var datos_comuna_para_per_comuna;
var sampleData;
var ods = {
	"ods_1": { "name": "Fin de la pobreza", "color": "rgb(231, 56, 65)" },
	"ods_2": { "name": "Hambre cero", "color": "rgb(224, 164, 60)" },
	"ods_3": { "name": "Salud y bienestar", "color": "rgb(78, 160, 73)" },
	"ods_4": { "name": "Educación de calidad", "color": "rgb(200, 46, 51)" },
	"ods_5": { "name": "Igualdad de género", "color": "rgb(236, 63, 51)" },
	"ods_6": { "name": "Agua limpia y saneamiento", "color": "rgb(77, 191, 234)" },
	"ods_7": { "name": "Energía asequible y no contaminante", "color": "rgb(248, 195, 70)" },
	"ods_8": { "name": "Trabajo y crecimiento económico", "color": "rgb(167, 40, 70)" },
	"ods_9": { "name": "Industria, innovación e infraestructura", "color": "rgb(239, 105, 55)" },
	"ods_10": { "name": "Reducción de las desigualdades", "color": "rgb(224, 58, 104)" },
	"ods_11": { "name": "Ciudades y comunidades sostenible", "color": "rgb(244, 157, 63)" },
	"ods_12": { "name": "Producción y consumo responsables", "color": "rgb(191, 138, 50)" },
	"ods_13": { "name": "Acción por el clima", "color": "rgb(67, 126, 74)" },
	"ods_14": { "name": "Vida submarina", "color": "rgb(54, 150, 215)" },
	"ods_15": { "name": "Vida de ecosistemas terrestres", "color": "rgb(93, 184, 72)" },
	"ods_16": { "name": "Paz, justicia e instituciones sólidas", "color": "rgb(35, 105, 157)" },
	"ods_17": { "name": "Alianzas para lograr los objetivos", "color": "rgb(21, 71, 108)" }
};

var comunas = {
	"C1": 1,
	"C2": 1,
	"C3": 1,
	"C4": 1,
	"C5": 1,
	"C6": 1,
	"C7": 1,
	"C8": 1,
	"C9": 1,
	"C10": 1,
	"C11": 1,
	"C12": 1,
	"C13": 1,
	"C14": 1,
	"C15": 1,
	"C16": 1
}

this.ods = ods;

function mapaCalor(item) {
	
	

	var opcs = [];
	var mayor = d3.max(datos_comuna_para_per_comuna, x => {
		var rr = x.datos.find(y => y.name == "ods_" + item) ? x.datos.find(y => y.name == "ods_" + item).value : 0;
		
		return rr;
	});
	
	var opSc = d3.scaleLinear()
		.domain([0, mayor])
		.range([0, 1]);
	d3.select("#mapa_svg").select('#Layer_2').select('#Layer_1-2').selectAll("path")
		.style("fill", function () {
			var valor = datos_comuna_para_per_comuna.find(x => x.id == this.id) ? datos_comuna_para_per_comuna.find(x => x.id == this.id).datos.find(x => x.name == "ods_" + item) ? datos_comuna_para_per_comuna.find(x => x.id == this.id).datos.find(x => x.name == "ods_" + item).value : 0 : 0;
			
			var opacidad = opSc(valor);
			
			return opacidad > 0.2 ? ods["ods_" + item].color : "rgb(237,237,237)";
		}).style('opacity', function (dd) {
			var valor = datos_comuna_para_per_comuna.find(x => x.id == this.id) ? datos_comuna_para_per_comuna.find(x => x.id == this.id).datos.find(x => x.name == "ods_" + item) ? datos_comuna_para_per_comuna.find(x => x.id == this.id).datos.find(x => x.name == "ods_" + item).value : 0 : 0;
			
			var opacidad = opSc(valor);
			
			return opacidad > 0.2 ? opacidad : 1;
		});
};


function tooltipHtml(n) {	/* function to create html content string in tooltip div. */
	
	return "<table>" +
		"<tr><td>numero de respuesta</td></tr>" +
		"<tr><td>" + n + "</td></tr>" +
		"</table>";
}


function dibujar_mapita(data) {

	if(!data && sampleData){
		
		uStates.draw("#statesvg", sampleData, tooltipHtml);
		return true;
	}

	

	sampleData = [];
	
	datos_comuna_para_per_comuna = data;

	comunas_ordenadas.forEach(function (dd) {
		var d = data.find(function (ele) {
			return ele.id == dd;
		});
		if (d != undefined && d.comuna != undefined && d.comuna != null && d.comuna != "") {
			var first = d.datos[0] != undefined ? d.datos[0].name : "",
				second = d.datos[1] != undefined ? d.datos[1].name : "",
				third = d.datos[2] != undefined ? d.datos[2].name : "",
				id = d.id,
				name = d.comuna;
			sampleData.push({
				first: first,
				second: second,
				third: third,
				id: id,
				name: name
			});
		} else {
			sampleData.push({
				first: null,
				second: null,
				third: null,
				id: dd
			});
		}

	});
	//
	//uStates.draw("#statesvg", sampleData, tooltipHtml);
	//uStates.draw_segundo("", sampleData, tooltipHtml);
	cambiar_de_comuna(comuna_act);
	// d3.select(self.frameElement).style("height", "600px");
	//mapa.attr('transform', 'rotate(-90 0 0)');


	avisar();
	sel_map(0);
}

