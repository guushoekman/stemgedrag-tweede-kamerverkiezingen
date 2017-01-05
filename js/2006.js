function geslacht2006() {

	var chart = nv.models.multiBarChart()
		chart.stacked(true)
		chart.reduceXTicks(false)
		chart.yAxis.axisLabel('y axis')
		chart.yAxis.axisLabelDistance(-10);
    chart.xAxis.axisLabel('x axis');
    chart.yDomain([0,100]);
    chart.yAxis.tickValues([10,20,30,40,50,60,70,80,90]);
    chart.yAxis.tickFormat(d3.format("d"));
	;

	d3.select('#chart svg').datum([
    {
      key: "CDA",
      color: "#007b5f",
      values:
      [
        {x: "Totaal", y: 21},
        {x: "Mannen", y: 21},
        {x: "Vrouwen", y: 22}
      ]
    },
    {
      key: "PvdA",
      color: "#e12b1a",
      values:
      [
        {x: "Totaal", y: 17},
        {x: "Mannen", y: 17},
        {x: "Vrouwen", y: 18}
      ]
    },
    {
      key: "VVD",
      color: "#262b6a",
      values:
      [
        {x: "Totaal", y: 11},
        {x: "Mannen", y: 12},
        {x: "Vrouwen", y: 10}
      ]
    },
    {
      key: "GroenLinks",
      color: "#66A344",
      values:
      [
        {x: "Totaal", y: 4},
        {x: "Mannen", y: 3},
        {x: "Vrouwen", y: 4}
      ]
    },
    {
      key: "SP",
      color: "#a91e1e",
      values:
      [
        {x: "Totaal", y: 14},
        {x: "Mannen", y: 13},
        {x: "Vrouwen", y: 15}
      ]
    },
    {
      key: "ChristenUnie",
      color: "#75C9E0",
      values:
      [
        {x: "Totaal", y: 3},
        {x: "Mannen", y: 2},
        {x: "Vrouwen", y: 5}
      ]
    },
    {
      key: "PVV",
      color: "#a6a7a9",
      values:
      [
        {x: "Totaal", y: 4},
        {x: "Mannen", y: 5},
        {x: "Vrouwen", y: 3}
      ]
    },
    {
      key: "Overige politieke partijen",
      color: "#f2c42e",
      values:
      [
        {x: "Totaal", y: 4},
        {x: "Mannen", y: 4},
        {x: "Vrouwen", y: 4}
      ]
    },
    {
      key: "Niet gestemd",
      disabled: true,
      color: "#634f0b",
      values:
      [
        {x: "Totaal", y: 20},
        {x: "Mannen", y: 21},
        {x: "Vrouwen", y: 18}
      ]
    }
	
	]).transition().duration(500).call(chart);

  $('#chart-title').html('<h4>Stemgedrag naar geslacht <div class="btn-group" role="group"><button onclick="geslacht2006()" type="button" class="btn btn-sm btn-secondary active">2006</button><button onclick="geslacht2010()" type="button" class="btn btn-sm btn-secondary">2010</button><button onclick="geslacht2012()" type="button" class="btn btn-sm btn-secondary">2012</button></div></h4>');

}

function herkomst2006() {

  var chart = nv.models.multiBarChart()
    chart.stacked(true)
    chart.reduceXTicks(false)
    chart.yAxis.axisLabel('y axis')
    chart.yAxis.axisLabelDistance(-10);
    chart.xAxis.axisLabel('x axis');
    chart.yDomain([0,100]);
    chart.yAxis.tickValues([10,20,30,40,50,60,70,80,90]);
    chart.yAxis.tickFormat(d3.format("d"));

  d3.select('#chart svg').datum([
    {
      key: "CDA",
      color: "#007b5f",
      values:
      [
        {x: "Totaal", y: 21},
        {x: "Autochtonen", y: 23},
        {x: "Westerse allochtonen", y: 14},
        {x: "Niet westerse allochtonen", y: 8}
      ]
    },
    {
      key: "PvdA",
      color: "#e12b1a",
      values:
      [
        {x: "Totaal", y: 17},
        {x: "Autochtonen", y: 16},
        {x: "Westerse allochtonen", y: 17},
        {x: "Niet westerse allochtonen", y: 28}
      ]
    },
    {
      key: "VVD",
      color: "#262b6a",
      values:
      [
        {x: "Totaal", y: 11},
        {x: "Autochtonen", y: 11},
        {x: "Westerse allochtonen", y: 16},
        {x: "Niet westerse allochtonen", y: 4}
      ]
    },
    {
      key: "GroenLinks",
      color: "#66A344",
      values:
      [
        {x: "Totaal", y: 4},
        {x: "Autochtonen", y: 4},
        {x: "Westerse allochtonen", y: 3},
        {x: "Niet westerse allochtonen", y: 3}
      ]
    },
    {
      key: "SP",
      color: "#a91e1e",
      values:
      [
        {x: "Totaal", y: 14},
        {x: "Autochtonen", y: 14},
        {x: "Westerse allochtonen", y: 13},
        {x: "Niet westerse allochtonen", y: 13}
      ]
    },
    {
      key: "ChristenUnie",
      color: "#75C9E0",
      values:
      [
        {x: "Totaal", y: 3},
        {x: "Autochtonen", y: 4},
        {x: "Westerse allochtonen", y: 1},
        {x: "Niet westerse allochtonen", y: 1}
      ]
    },
    {
      key: "PVV",
      color: "#a6a7a9",
      values:
      [
        {x: "Totaal", y: 4},
        {x: "Autochtonen", y: 4},
        {x: "Westerse allochtonen", y: 3},
        {x: "Niet westerse allochtonen", y: 1}
      ]
    },
    {
      key: "Overige politieke partijen",
      color: "#f2c42e",
      values:
      [
        {x: "Totaal", y: 4},
        {x: "Autochtonen", y: 4},
        {x: "Westerse allochtonen", y: 4},
        {x: "Niet westerse allochtonen", y: 1}
      ]
    },
    {
      key: "Niet gestemd",
      disabled: true,
      color: "#634f0b",
      values:
      [
        {x: "Totaal", y: 20},
        {x: "Autochtonen", y: 17},
        {x: "Westerse allochtonen", y: 28},
        {x: "Niet westerse allochtonen", y: 40}
      ]
    }
  
  ]).transition().duration(500).call(chart);

  $('#chart-title').html('<h4>Stemgedrag naar herkomst <div class="btn-group" role="group"><button onclick="herkomst2006()" type="button" class="btn btn-sm btn-secondary active">2006</button><button onclick="herkomst2010()" type="button" class="btn btn-sm btn-secondary">2010</button><button onclick="herkomst2012()" type="button" class="btn btn-sm btn-secondary">2012</button></div></h4>');

}

function onderwijs2006() {

  var chart = nv.models.multiBarChart()
    chart.stacked(true)
    chart.reduceXTicks(false)
    chart.yAxis.axisLabel('y axis')
    chart.yAxis.axisLabelDistance(-10);
    chart.xAxis.axisLabel('x axis');
    chart.yDomain([0,100]);
    chart.yAxis.tickValues([10,20,30,40,50,60,70,80,90]);
    chart.yAxis.tickFormat(d3.format("d"));  ;

  d3.select('#chart svg').datum([
    {
      key: "CDA",
      color: "#007b5f",
      values:
      [
        {x: "Totaal", y: 21},
        {x: "Basisonderwijs", y: 18},
        {x: "Lager beroepsondewijs", y: 24},
        {x: "VMBO, onderbouw HAVO en VWO", y: 19},
        {x: "HAVO, VWO, MBO", y: 21},
        {x: "HBO, WO", y: 24}
      ]
    },
    {
      key: "PvdA",
      color: "#e12b1a",
      values:
      [
        {x: "Totaal", y: 17},
        {x: "Basisonderwijs", y: 22},
        {x: "Lager beroepsondewijs", y: 18},
        {x: "VMBO, onderbouw HAVO en VWO", y: 18},
        {x: "HAVO, VWO, MBO", y: 15},
        {x: "HBO, WO", y: 18}
      ]
    },
    {
      key: "VVD",
      color: "#262b6a",
      values:
      [
        {x: "Totaal", y: 11},
        {x: "Basisonderwijs", y: 3},
        {x: "Lager beroepsondewijs", y: 7},
        {x: "VMBO, onderbouw HAVO en VWO", y: 16},
        {x: "HAVO, VWO, MBO", y: 11},
        {x: "HBO, WO", y: 16}
      ]
    },
    {
      key: "GroenLinks",
      color: "#66A344",
      values:
      [
        {x: "Totaal", y: 4},
        {x: "Basisonderwijs", y: 1},
        {x: "Lager beroepsondewijs", y: 1},
        {x: "VMBO, onderbouw HAVO en VWO", y: 1},
        {x: "HAVO, VWO, MBO", y: 4},
        {x: "HBO, WO", y: 9}
      ]
    },
    {
      key: "SP",
      color: "#a91e1e",
      values:
      [
        {x: "Totaal", y: 14},
        {x: "Basisonderwijs", y: 12},
        {x: "Lager beroepsondewijs", y: 12},
        {x: "VMBO, onderbouw HAVO en VWO", y: 16},
        {x: "HAVO, VWO, MBO", y: 16},
        {x: "HBO, WO", y: 13}
      ]
    },
    {
      key: "ChristenUnie",
      color: "#75C9E0",
      values:
      [
        {x: "Totaal", y: 3},
        {x: "Basisonderwijs", y: 2},
        {x: "Lager beroepsondewijs", y: 4},
        {x: "VMBO, onderbouw HAVO en VWO", y: 4},
        {x: "HAVO, VWO, MBO", y: 3},
        {x: "HBO, WO", y: 4}
      ]
    },
    {
      key: "PVV",
      color: "#a6a7a9",
      values:
      [
        {x: "Totaal", y: 4},
        {x: "Basisonderwijs", y: 5},
        {x: "Lager beroepsondewijs", y: 7},
        {x: "VMBO, onderbouw HAVO en VWO", y: 6},
        {x: "HAVO, VWO, MBO", y: 3},
        {x: "HBO, WO", y: 2}
      ]
    },
    {
      key: "Overige politieke partijen",
      color: "#f2c42e",
      values:
      [
        {x: "Totaal", y: 4},
        {x: "Basisonderwijs", y: 2},
        {x: "Lager beroepsondewijs", y: 3},
        {x: "VMBO, onderbouw HAVO en VWO", y: 4},
        {x: "HAVO, VWO, MBO", y: 4},
        {x: "HBO, WO", y: 6}
      ]
    },
    {
      key: "Niet gestemd",
      disabled: true,
      color: "#634f0b",
      values:
      [
        {x: "Totaal", y: 20},
        {x: "Basisonderwijs", y: 33},
        {x: "Lager beroepsondewijs", y: 23},
        {x: "VMBO, onderbouw HAVO en VWO", y: 14},
        {x: "HAVO, VWO, MBO", y: 21},
        {x: "HBO, WO", y: 9}
      ]
    }
  
  ]).transition().duration(500).call(chart);

  $('#chart-title').html('<h4>Stemgedrag naar onderwijsniveau <div class="btn-group" role="group"><button onclick="onderwijs2006()" type="button" class="btn btn-sm btn-secondary active">2006</button><button onclick="onderwijs2010()" type="button" class="btn btn-sm btn-secondary">2010</button><button onclick="onderwijs2012()" type="button" class="btn btn-sm btn-secondary">2012</button></div></h4>');

}

function leeftijd2006() {

  var chart = nv.models.multiBarChart()
    chart.stacked(true)
    chart.reduceXTicks(false)
    chart.yAxis.axisLabel('y axis')
    chart.yAxis.axisLabelDistance(-10);
    chart.xAxis.axisLabel('x axis');
    chart.yDomain([0,100]);
    chart.yAxis.tickValues([10,20,30,40,50,60,70,80,90]);
    chart.yAxis.tickFormat(d3.format("d"));  ;

  d3.select('#chart svg').datum([
    {
      key: "CDA",
      color: "#007b5f",
      values:
      [
        {x: "Totaal", y: 21},
        {x: "18 tot 25 jaar", y: 17},
        {x: "25 tot 35 jaar", y: 14},
        {x: "35 tot 45 jaar", y: 20},
        {x: "45 tot 55 jaar", y: 19},
        {x: "55 tot 65 jaar", y: 23},
        {x: "65 tot 75 jaar", y: 32},
        {x: "75 jaar of ouder", y: 32}
      ]
    },
    {
      key: "PvdA",
      color: "#e12b1a",
      values:
      [
        {x: "Totaal", y: 17},
        {x: "18 tot 25 jaar", y: 15},
        {x: "25 tot 35 jaar", y: 11},
        {x: "35 tot 45 jaar", y: 17},
        {x: "45 tot 55 jaar", y: 19},
        {x: "55 tot 65 jaar", y: 22},
        {x: "65 tot 75 jaar", y: 17},
        {x: "75 jaar of ouder", y: 20}
      ]
    },
    {
      key: "VVD",
      color: "#262b6a",
      values:
      [
        {x: "Totaal", y: 11},
        {x: "18 tot 25 jaar", y: 11},
        {x: "25 tot 35 jaar", y: 10},
        {x: "35 tot 45 jaar", y: 15},
        {x: "45 tot 55 jaar", y: 11},
        {x: "55 tot 65 jaar", y: 12},
        {x: "65 tot 75 jaar", y: 11},
        {x: "75 jaar of ouder", y: 7}
      ]
    },
    {
      key: "GroenLinks",
      color: "#66A344",
      values:
      [
        {x: "Totaal", y: 4},
        {x: "18 tot 25 jaar", y: 5},
        {x: "25 tot 35 jaar", y: 4},
        {x: "35 tot 45 jaar", y: 4},
        {x: "45 tot 55 jaar", y: 6},
        {x: "55 tot 65 jaar", y: 2},
        {x: "65 tot 75 jaar", y: 2},
        {x: "75 jaar of ouder", y: 2}
      ]
    },
    {
      key: "SP",
      color: "#a91e1e",
      values:
      [
        {x: "Totaal", y: 14},
        {x: "18 tot 25 jaar", y: 12},
        {x: "25 tot 35 jaar", y: 16},
        {x: "35 tot 45 jaar", y: 14},
        {x: "45 tot 55 jaar", y: 20},
        {x: "55 tot 65 jaar", y: 13},
        {x: "65 tot 75 jaar", y: 9},
        {x: "75 jaar of ouder", y: 9}
      ]
    },
    {
      key: "ChristenUnie",
      color: "#75C9E0",
      values:
      [
        {x: "Totaal", y: 3},
        {x: "18 tot 25 jaar", y: 3},
        {x: "25 tot 35 jaar", y: 3},
        {x: "35 tot 45 jaar", y: 3},
        {x: "45 tot 55 jaar", y: 3},
        {x: "55 tot 65 jaar", y: 4},
        {x: "65 tot 75 jaar", y: 5},
        {x: "75 jaar of ouder", y: 4}
      ]
    },
    {
      key: "PVV",
      color: "#a6a7a9",
      values:
      [
        {x: "Totaal", y: 4},
        {x: "18 tot 25 jaar", y: 6},
        {x: "25 tot 35 jaar", y: 4},
        {x: "35 tot 45 jaar", y: 3},
        {x: "45 tot 55 jaar", y: 3},
        {x: "55 tot 65 jaar", y: 5},
        {x: "65 tot 75 jaar", y: 5},
        {x: "75 jaar of ouder", y: 3}
      ]
    },
    {
      key: "Overige politieke partijen",
      color: "#f2c42e",
      values:
      [
        {x: "Totaal", y: 4},
        {x: "18 tot 25 jaar", y: 3},
        {x: "25 tot 35 jaar", y: 4},
        {x: "35 tot 45 jaar", y: 3},
        {x: "45 tot 55 jaar", y: 4},
        {x: "55 tot 65 jaar", y: 4},
        {x: "65 tot 75 jaar", y: 6},
        {x: "75 jaar of ouder", y: 3}
      ]
    },
    {
      key: "Niet gestemd",
      disabled: true,
      color: "#634f0b",
      values:
      [
        {x: "Totaal", y: 20},
        {x: "18 tot 25 jaar", y: 29},
        {x: "25 tot 35 jaar", y: 32},
        {x: "35 tot 45 jaar", y: 21},
        {x: "45 tot 55 jaar", y: 13},
        {x: "55 tot 65 jaar", y: 14},
        {x: "65 tot 75 jaar", y: 10},
        {x: "75 jaar of ouder", y: 18}
      ]
    }
  
  ]).transition().duration(500).call(chart);

  $('#chart-title').html('<h4>Stemgedrag naar leeftijd <div class="btn-group" role="group"><button onclick="leeftijd2006()" type="button" class="btn btn-sm btn-secondary active">2006</button><button onclick="leeftijd2010()" type="button" class="btn btn-sm btn-secondary">2010</button><button onclick="leeftijd2012()" type="button" class="btn btn-sm btn-secondary">2012</button></div></h4>');

}

function burgerlijkeStaat2006() {

  var chart = nv.models.multiBarChart()
    chart.stacked(true)
    chart.reduceXTicks(false)
    chart.yAxis.axisLabel('y axis')
    chart.yAxis.axisLabelDistance(-10);
    chart.xAxis.axisLabel('x axis');
    chart.yDomain([0,100]);
    chart.yAxis.tickValues([10,20,30,40,50,60,70,80,90]);
    chart.yAxis.tickFormat(d3.format("d"));  ;

  d3.select('#chart svg').datum([
    {
      key: "CDA",
      color: "#007b5f",
      values:
      [
        {x: "Totaal", y: 21},
        {x: "Ongehuwd", y: 15},
        {x: "Gehuwd", y: 25},
        {x: "Gescheiden", y: 14},
        {x: "Verweduwd", y: 25}
      ]
    },
    {
      key: "PvdA",
      color: "#e12b1a",
      values:
      [
        {x: "Totaal", y: 17},
        {x: "Ongehuwd", y: 14},
        {x: "Gehuwd", y: 18},
        {x: "Gescheiden", y: 18},
        {x: "Verweduwd", y: 21}
      ]
    },
    {
      key: "VVD",
      color: "#262b6a",
      values:
      [
        {x: "Totaal", y: 11},
        {x: "Ongehuwd", y: 11},
        {x: "Gehuwd", y: 12},
        {x: "Gescheiden", y: 8},
        {x: "Verweduwd", y: 8}
      ]
    },
    {
      key: "GroenLinks",
      color: "#66A344",
      values:
      [
        {x: "Totaal", y: 4},
        {x: "Ongehuwd", y: 5},
        {x: "Gehuwd", y: 3},
        {x: "Gescheiden", y: 4},
        {x: "Verweduwd", y: 2}
      ]
    },
    {
      key: "SP",
      color: "#a91e1e",
      values:
      [
        {x: "Totaal", y: 14},
        {x: "Ongehuwd", y: 15},
        {x: "Gehuwd", y: 13},
        {x: "Gescheiden", y: 19},
        {x: "Verweduwd", y: 17}
      ]
    },
    {
      key: "ChristenUnie",
      color: "#75C9E0",
      values:
      [
        {x: "Totaal", y: 3},
        {x: "Ongehuwd", y: 2},
        {x: "Gehuwd", y: 4},
        {x: "Gescheiden", y: 2},
        {x: "Verweduwd", y: 5}
      ]
    },
    {
      key: "PVV",
      color: "#a6a7a9",
      values:
      [
        {x: "Totaal", y: 4},
        {x: "Ongehuwd", y: 5},
        {x: "Gehuwd", y: 4},
        {x: "Gescheiden", y: 5},
        {x: "Verweduwd", y: 3}
      ]
    },
    {
      key: "Overige politieke partijen",
      color: "#f2c42e",
      values:
      [
        {x: "Totaal", y: 4},
        {x: "Ongehuwd", y: 4},
        {x: "Gehuwd", y: 4},
        {x: "Gescheiden", y: 3},
        {x: "Verweduwd", y: 2}
      ]
    },
    {
      key: "Niet gestemd",
      disabled: true,
      color: "#634f0b",
      values:
      [
        {x: "Totaal", y: 20},
        {x: "Ongehuwd", y: 27},
        {x: "Gehuwd", y: 16},
        {x: "Gescheiden", y: 27},
        {x: "Verweduwd", y: 15}
      ]
    }
  
  ]).transition().duration(500).call(chart);

  $('#chart-title').html('<h4>Stemgedrag naar burgerlijke staat <div class="btn-group" role="group"><button onclick="burgerlijkeStaat2006()" type="button" class="btn btn-sm btn-secondary active">2006</button><button onclick="burgerlijkeStaat2010()" type="button" class="btn btn-sm btn-secondary">2010</button><button onclick="burgerlijkeStaat2012()" type="button" class="btn btn-sm btn-secondary">2012</button></div></h4>');

}

function stedelijkheid2006() {

  var chart = nv.models.multiBarChart()
    chart.stacked(true)
    chart.reduceXTicks(false)
    chart.yAxis.axisLabel('y axis')
    chart.yAxis.axisLabelDistance(-10);
    chart.xAxis.axisLabel('x axis');
    chart.yDomain([0,100]);
    chart.yAxis.tickValues([10,20,30,40,50,60,70,80,90]);
    chart.yAxis.tickFormat(d3.format("d"));  ;

  d3.select('#chart svg').datum([
    {
      key: "CDA",
      color: "#007b5f",
      values:
      [
        {x: "Totaal", y: 21},
        {x: "Zeer sterk stedelijk", y: 10},
        {x: "Sterk stedelijk", y: 22},
        {x: "Matig stedelijk", y: 24},
        {x: "Weinig stedelijk", y: 24},
        {x: "Niet stedelijk", y: 25}
      ]
    },
    {
      key: "PvdA",
      color: "#e12b1a",
      values:
      [
        {x: "Totaal", y: 17},
        {x: "Zeer sterk stedelijk", y: 23},
        {x: "Sterk stedelijk", y: 15},
        {x: "Matig stedelijk", y: 17},
        {x: "Weinig stedelijk", y: 15},
        {x: "Niet stedelijk", y: 19}
      ]
    },
    {
      key: "VVD",
      color: "#262b6a",
      values:
      [
        {x: "Totaal", y: 11},
        {x: "Zeer sterk stedelijk", y: 13},
        {x: "Sterk stedelijk", y: 11},
        {x: "Matig stedelijk", y: 11},
        {x: "Weinig stedelijk", y: 11},
        {x: "Niet stedelijk", y: 12}
      ]
    },
    {
      key: "GroenLinks",
      color: "#66A344",
      values:
      [
        {x: "Totaal", y: 4},
        {x: "Zeer sterk stedelijk", y: 5},
        {x: "Sterk stedelijk", y: 4},
        {x: "Matig stedelijk", y: 4},
        {x: "Weinig stedelijk", y: 2},
        {x: "Niet stedelijk", y: 3}
      ]
    },
    {
      key: "SP",
      color: "#a91e1e",
      values:
      [
        {x: "Totaal", y: 14},
        {x: "Zeer sterk stedelijk", y: 16},
        {x: "Sterk stedelijk", y: 15},
        {x: "Matig stedelijk", y: 15},
        {x: "Weinig stedelijk", y: 12},
        {x: "Niet stedelijk", y: 13}
      ]
    },
    {
      key: "ChristenUnie",
      color: "#75C9E0",
      values:
      [
        {x: "Totaal", y: 3},
        {x: "Zeer sterk stedelijk", y: 3},
        {x: "Sterk stedelijk", y: 3},
        {x: "Matig stedelijk", y: 2},
        {x: "Weinig stedelijk", y: 6},
        {x: "Niet stedelijk", y: 3}
      ]
    },
    {
      key: "PVV",
      color: "#a6a7a9",
      values:
      [
        {x: "Totaal", y: 4},
        {x: "Zeer sterk stedelijk", y: 5},
        {x: "Sterk stedelijk", y: 4},
        {x: "Matig stedelijk", y: 4},
        {x: "Weinig stedelijk", y: 5},
        {x: "Niet stedelijk", y: 3}
      ]
    },
    {
      key: "Overige politieke partijen",
      color: "#f2c42e",
      values:
      [
        {x: "Totaal", y: 4},
        {x: "Zeer sterk stedelijk", y: 4},
        {x: "Sterk stedelijk", y: 5},
        {x: "Matig stedelijk", y: 3},
        {x: "Weinig stedelijk", y: 5},
        {x: "Niet stedelijk", y: 3}
      ]
    },
    {
      key: "Niet gestemd",
      disabled: true,
      color: "#634f0b",
      values:
      [
        {x: "Totaal", y: 20},
        {x: "Zeer sterk stedelijk", y: 21},
        {x: "Sterk stedelijk", y: 20},
        {x: "Matig stedelijk", y: 20},
        {x: "Weinig stedelijk", y: 19},
        {x: "Niet stedelijk", y: 19}
      ]
    }
  
  ]).transition().duration(500).call(chart);

  $('#chart-title').html('<h4>Stemgedrag naar stedelijkheid <div class="btn-group" role="group"><button onclick="stedelijkheid2006()" type="button" class="btn btn-sm btn-secondary active">2006</button><button onclick="stedelijkheid2010()" type="button" class="btn btn-sm btn-secondary">2010</button><button onclick="stedelijkheid2012()" type="button" class="btn btn-sm btn-secondary">2012</button></div></h4>');

}

function kerkelijkeGezindte2006() {

  var chart = nv.models.multiBarChart()
    chart.stacked(true)
    chart.reduceXTicks(false)
    chart.yAxis.axisLabel('y axis')
    chart.yAxis.axisLabelDistance(-10);
    chart.xAxis.axisLabel('x axis');
    chart.yDomain([0,100]);
    chart.yAxis.tickValues([10,20,30,40,50,60,70,80,90]);
    chart.yAxis.tickFormat(d3.format("d"));  ;

  d3.select('#chart svg').datum([
    {
      key: "CDA",
      color: "#007b5f",
      values:
      [
        {x: "Totaal", y: 21},
        {x: "Geen", y: 12},
        {x: "Rooms-katholiek", y: 35},
        {x: "Nederlands hervormd", y: 35},
        {x: "Gereformeerd", y: 45},
        {x: "Protestants", y: 41},
        {x: "Overige", y: 7}
      ]
    },
    {
      key: "PvdA",
      color: "#e12b1a",
      values:
      [
        {x: "Totaal", y: 17},
        {x: "Geen", y: 20},
        {x: "Rooms-katholiek", y: 12},
        {x: "Nederlands hervormd", y: 17},
        {x: "Gereformeerd", y: 2},
        {x: "Protestants", y: 6},
        {x: "Overige", y: 27}
      ]
    },
    {
      key: "VVD",
      color: "#262b6a",
      values:
      [
        {x: "Totaal", y: 11},
        {x: "Geen", y: 14},
        {x: "Rooms-katholiek", y: 10},
        {x: "Nederlands hervormd", y: 9},
        {x: "Gereformeerd", y: 5},
        {x: "Protestants", y: 7},
        {x: "Overige", y: 5}
      ]
    },
    {
      key: "GroenLinks",
      color: "#66A344",
      values:
      [
        {x: "Totaal", y: 4},
        {x: "Geen", y: 6},
        {x: "Rooms-katholiek", y: 2},
        {x: "Nederlands hervormd", y: 2},
        {x: "Gereformeerd", y: 0},
        {x: "Protestants", y: 3},
        {x: "Overige", y: 0}
      ]
    },
    {
      key: "SP",
      color: "#a91e1e",
      values:
      [
        {x: "Totaal", y: 14},
        {x: "Geen", y: 18},
        {x: "Rooms-katholiek", y: 13},
        {x: "Nederlands hervormd", y: 9},
        {x: "Gereformeerd", y: 5},
        {x: "Protestants", y: 4},
        {x: "Overige", y: 8}
      ]
    },
    {
      key: "ChristenUnie",
      color: "#75C9E0",
      values:
      [
        {x: "Totaal", y: 3},
        {x: "Geen", y: 1},
        {x: "Rooms-katholiek", y: 1},
        {x: "Nederlands hervormd", y: 6},
        {x: "Gereformeerd", y: 20},
        {x: "Protestants", y: 20},
        {x: "Overige", y: 12}
      ]
    },
    {
      key: "PVV",
      color: "#a6a7a9",
      values:
      [
        {x: "Totaal", y: 4},
        {x: "Geen", y: 5},
        {x: "Rooms-katholiek", y: 3},
        {x: "Nederlands hervormd", y: 3},
        {x: "Gereformeerd", y: 0},
        {x: "Protestants", y: 2},
        {x: "Overige", y: 1}
      ]
    },
    {
      key: "Overige politieke partijen",
      color: "#f2c42e",
      values:
      [
        {x: "Totaal", y: 4},
        {x: "Geen", y: 4},
        {x: "Rooms-katholiek", y: 2},
        {x: "Nederlands hervormd", y: 7},
        {x: "Gereformeerd", y: 11},
        {x: "Protestants", y: 3},
        {x: "Overige", y: 6}
      ]
    },
    {
      key: "Niet gestemd",
      disabled: true,
      color: "#634f0b",
      values:
      [
        {x: "Totaal", y: 20},
        {x: "Geen", y: 20},
        {x: "Rooms-katholiek", y: 21},
        {x: "Nederlands hervormd", y: 11},
        {x: "Gereformeerd", y: 10},
        {x: "Protestants", y: 14},
        {x: "Overige", y: 33}
      ]
    }
  
  ]).transition().duration(500).call(chart);

  $('#chart-title').html('<h4>Stemgedrag naar kerkelijke gezindte <div class="btn-group" role="group"><button onclick="kerkelijkeGezindte2006()" type="button" class="btn btn-sm btn-secondary active">2006</button><button onclick="kerkelijkeGezindte2010()" type="button" class="btn btn-sm btn-secondary">2010</button><button onclick="kerkelijkeGezindte2012()" type="button" class="btn btn-sm btn-secondary">2012</button></div></h4>');

}

function kerkbezoek2006() {

  var chart = nv.models.multiBarChart()
    chart.stacked(true)
    chart.reduceXTicks(false)
    chart.yAxis.axisLabel('y axis')
    chart.yAxis.axisLabelDistance(-10);
    chart.xAxis.axisLabel('x axis');
    chart.yDomain([0,100]);
    chart.yAxis.tickValues([10,20,30,40,50,60,70,80,90]);
    chart.yAxis.tickFormat(d3.format("d"));  ;

  d3.select('#chart svg').datum([
    {
      key: "CDA",
      color: "#007b5f",
      values:
      [
        {x: "Totaal", y: 21},
        {x: "Één keer per week of vaker", y: 38},
        {x: "Twee tot drie keer per maand", y: 40},
        {x: "Één keer per maand", y: 42},
        {x: "Minder dan één keer per maand", y: 33},
        {x: "Zelden of nooit", y: 24}
      ]
    },
    {
      key: "PvdA",
      color: "#e12b1a",
      values:
      [
        {x: "Totaal", y: 17},
        {x: "Één keer per week of vaker", y: 8},
        {x: "Twee tot drie keer per maand", y: 15},
        {x: "Één keer per maand", y: 8},
        {x: "Minder dan één keer per maand", y: 14},
        {x: "Zelden of nooit", y: 17}
      ]
    },
    {
      key: "VVD",
      color: "#262b6a",
      values:
      [
        {x: "Totaal", y: 11},
        {x: "Één keer per week of vaker", y: 3},
        {x: "Twee tot drie keer per maand", y: 6},
        {x: "Één keer per maand", y: 13},
        {x: "Minder dan één keer per maand", y: 10},
        {x: "Zelden of nooit", y: 10}
      ]
    },
    {
      key: "GroenLinks",
      color: "#66A344",
      values:
      [
        {x: "Totaal", y: 4},
        {x: "Één keer per week of vaker", y: 1},
        {x: "Twee tot drie keer per maand", y: 1},
        {x: "Één keer per maand", y: 2},
        {x: "Minder dan één keer per maand", y: 2},
        {x: "Zelden of nooit", y: 2}
      ]
    },
    {
      key: "SP",
      color: "#a91e1e",
      values:
      [
        {x: "Totaal", y: 14},
        {x: "Één keer per week of vaker", y: 3},
        {x: "Twee tot drie keer per maand", y: 8},
        {x: "Één keer per maand", y: 10},
        {x: "Minder dan één keer per maand", y: 15},
        {x: "Zelden of nooit", y: 13}
      ]
    },
    {
      key: "ChristenUnie",
      color: "#75C9E0",
      values:
      [
        {x: "Totaal", y: 3},
        {x: "Één keer per week of vaker", y: 24},
        {x: "Twee tot drie keer per maand", y: 8},
        {x: "Één keer per maand", y: 4},
        {x: "Minder dan één keer per maand", y: 1},
        {x: "Zelden of nooit", y: 1}
      ]
    },
    {
      key: "PVV",
      color: "#a6a7a9",
      values:
      [
        {x: "Totaal", y: 4},
        {x: "Één keer per week of vaker", y: 0},
        {x: "Twee tot drie keer per maand", y: 4},
        {x: "Één keer per maand", y: 2},
        {x: "Minder dan één keer per maand", y: 2},
        {x: "Zelden of nooit", y: 3}
      ]
    },
    {
      key: "Overige politieke partijen",
      color: "#f2c42e",
      values:
      [
        {x: "Totaal", y: 4},
        {x: "Één keer per week of vaker", y: 10},
        {x: "Twee tot drie keer per maand", y: 2},
        {x: "Één keer per maand", y: 1},
        {x: "Minder dan één keer per maand", y: 4},
        {x: "Zelden of nooit", y: 3}
      ]
    },
    {
      key: "Niet gestemd",
      disabled: true,
      color: "#634f0b",
      values:
      [
        {x: "Totaal", y: 20},
        {x: "Één keer per week of vaker", y: 12},
        {x: "Twee tot drie keer per maand", y: 16},
        {x: "Één keer per maand", y: 17},
        {x: "Minder dan één keer per maand", y: 19},
        {x: "Zelden of nooit", y: 25}
      ]
    }
  
  ]).transition().duration(500).call(chart);

  $('#chart-title').html('<h4>Stemgedrag naar kerkbezoek <div class="btn-group" role="group"><button onclick="kerkbezoek2006()" type="button" class="btn btn-sm btn-secondary active">2006</button><button onclick="kerkbezoek2010()" type="button" class="btn btn-sm btn-secondary">2010</button><button onclick="kerkbezoek2012()" type="button" class="btn btn-sm btn-secondary">2012</button></div></h4>');

}