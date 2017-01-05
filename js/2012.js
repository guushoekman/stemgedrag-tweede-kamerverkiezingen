function geslacht2012() {

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
      {x: "Totaal", y: 6},
      {x: "Mannen", y: 6},
      {x: "Vrouwen", y: 6}
    ]
  },
  {
    key: "PvdA",
    color: "#e12b1a",
    values:
    [
      {x: "Totaal", y: 19},
      {x: "Mannen", y: 17},
      {x: "Vrouwen", y: 20}
    ]
  },
  {
    key: "VVD",
    color: "#262b6a",
    values:
    [
      {x: "Totaal", y: 20},
      {x: "Mannen", y: 21},
      {x: "Vrouwen", y: 19}
    ]
  },
  {
    key: "GroenLinks",
    color: "#66A344",
    values:
    [
      {x: "Totaal", y: 2},
      {x: "Mannen", y: 1},
      {x: "Vrouwen", y: 2}
    ]
  },
  {
    key: "SP",
    color: "#a91e1e",
    values:
    [
      {x: "Totaal", y: 7},
      {x: "Mannen", y: 7},
      {x: "Vrouwen", y: 7}
    ]
  },
  {
    key: "ChristenUnie",
    color: "#75C9E0",
    values:
    [
      {x: "Totaal", y: 2},
      {x: "Mannen", y: 2},
      {x: "Vrouwen", y: 3}
    ]
  },
  {
    key: "PVV",
    color: "#a6a7a9",
    values:
    [
      {x: "Totaal", y: 8},
      {x: "Mannen", y: 9},
      {x: "Vrouwen", y: 6}
    ]
  },
  {
    key: "D66",
    color: "#01AF40",
    values:
    [
      {x: "Totaal", y: 6},
      {x: "Mannen", y: 6},
      {x: "Vrouwen", y: 6}
    ]
  },
  {
    key: "Overige politieke partijen",
    color: "#f2c42e",
    values:
    [
      {x: "Totaal", y: 5},
      {x: "Mannen", y: 4},
      {x: "Vrouwen", y: 5}
    ]
  },
  {
    key: "Niet gestemd",
    disabled: true,
    color: "#634f0b",
    values:
    [
      {x: "Totaal", y: 25},
      {x: "Mannen", y: 26},
      {x: "Vrouwen", y: 25}
    ]
  }
	
	]).transition().duration(500).call(chart);

  $('#chart-title').html('<h4>Stemgedrag naar geslacht <div class="btn-group" role="group"><button onclick="geslacht2006()" type="button" class="btn btn-sm btn-secondary">2006</button><button onclick="geslacht2010()" type="button" class="btn btn-sm btn-secondary">2010</button><button onclick="geslacht2012()" type="button" class="btn btn-sm btn-secondary active">2012</button></div></h4>');

}

function herkomst2012() {

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
      {x: "Totaal", y: 6},
      {x: "Autochtoon", y: 7},
      {x: "Westerse allochtoon", y: 3},
      {x: "Niet-westerse allochtoon", y: 2}
    ]
  },
  {
    key: "PvdA",
    color: "#e12b1a",
    values:
    [
      {x: "Totaal", y: 19},
      {x: "Autochtoon", y: 17},
      {x: "Westerse allochtoon", y: 23},
      {x: "Niet-westerse allochtoon", y: 31}
    ]
  },
  {
    key: "VVD",
    color: "#262b6a",
    values:
    [
      {x: "Totaal", y: 20},
      {x: "Autochtoon", y: 21},
      {x: "Westerse allochtoon", y: 16},
      {x: "Niet-westerse allochtoon", y: 11}
    ]
  },
  {
    key: "GroenLinks",
    color: "#66A344",
    values:
    [
      {x: "Totaal", y: 2},
      {x: "Autochtoon", y: 2},
      {x: "Westerse allochtoon", y: 3},
      {x: "Niet-westerse allochtoon", y: 0}
    ]
  },
  {
    key: "SP",
    color: "#a91e1e",
    values:
    [
      {x: "Totaal", y: 7},
      {x: "Autochtoon", y: 8},
      {x: "Westerse allochtoon", y: 6},
      {x: "Niet-westerse allochtoon", y: 5}
    ]
  },
  {
    key: "ChristenUnie",
    color: "#75C9E0",
    values:
    [
      {x: "Totaal", y: 2},
      {x: "Autochtoon", y: 2},
      {x: "Westerse allochtoon", y: 3},
      {x: "Niet-westerse allochtoon", y: 1}
    ]
  },
  {
    key: "PVV",
    color: "#a6a7a9",
    values:
    [
      {x: "Totaal", y: 8},
      {x: "Autochtoon", y: 8},
      {x: "Westerse allochtoon", y: 4},
      {x: "Niet-westerse allochtoon", y: 7}
    ]
  },
  {
    key: "D66",
    color: "#01AF40",
    values:
    [
      {x: "Totaal", y: 6},
      {x: "Autochtoon", y: 6},
      {x: "Westerse allochtoon", y: 5},
      {x: "Niet-westerse allochtoon", y: 6}
    ]
  },
  {
    key: "Overige politieke partijen",
    color: "#f2c42e",
    values:
    [
      {x: "Totaal", y: 5},
      {x: "Autochtoon", y: 5},
      {x: "Westerse allochtoon", y: 4},
      {x: "Niet-westerse allochtoon", y: 1}
    ]
  },
  {
    key: "Niet gestemd",
    disabled: true,
    color: "#634f0b",
    values:
    [
      {x: "Totaal", y: 25},
      {x: "Autochtoon", y: 24},
      {x: "Westerse allochtoon", y: 33},
      {x: "Niet-westerse allochtoon", y: 35}
    ]
  }
  
  ]).transition().duration(500).call(chart);

  $('#chart-title').html('<h4>Stemgedrag naar herkomst <div class="btn-group" role="group"><button onclick="herkomst2006()" type="button" class="btn btn-sm btn-secondary">2006</button><button onclick="herkomst2010()" type="button" class="btn btn-sm btn-secondary">2010</button><button onclick="herkomst2012()" type="button" class="btn btn-sm btn-secondary active">2012</button></div></h4>');

}

function onderwijs2012() {

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
      {x: "Totaal", y: 6},
      {x: "Basisonderwijs", y: 11},
      {x: "Lager beroepsonderwijs", y: 8},
      {x: "HAVO onderbouw", y: 6},
      {x: "HAVO, VWO, MBO", y: 6},
      {x: "HBO, WO", y: 5}
    ]
  },
  {
    key: "PvdA",
    color: "#e12b1a",
    values:
    [
      {x: "Totaal", y: 19},
      {x: "Basisonderwijs", y: 19},
      {x: "Lager beroepsonderwijs", y: 14},
      {x: "HAVO onderbouw", y: 14},
      {x: "HAVO, VWO, MBO", y: 17},
      {x: "HBO, WO", y: 24}
    ]
  },
  {
    key: "VVD",
    color: "#262b6a",
    values:
    [
      {x: "Totaal", y: 20},
      {x: "Basisonderwijs", y: 7},
      {x: "Lager beroepsonderwijs", y: 10},
      {x: "HAVO onderbouw", y: 21},
      {x: "HAVO, VWO, MBO", y: 21},
      {x: "HBO, WO", y: 27}
    ]
  },
  {
    key: "GroenLinks",
    color: "#66A344",
    values:
    [
      {x: "Totaal", y: 2},
      {x: "Basisonderwijs", y: 0},
      {x: "Lager beroepsonderwijs", y: 1},
      {x: "HAVO onderbouw", y: 1},
      {x: "HAVO, VWO, MBO", y: 1},
      {x: "HBO, WO", y: 5}
    ]
  },
  {
    key: "SP",
    color: "#a91e1e",
    values:
    [
      {x: "Totaal", y: 7},
      {x: "Basisonderwijs", y: 9},
      {x: "Lager beroepsonderwijs", y: 6},
      {x: "HAVO onderbouw", y: 10},
      {x: "HAVO, VWO, MBO", y: 8},
      {x: "HBO, WO", y: 5}
    ]
  },
  {
    key: "ChristenUnie",
    color: "#75C9E0",
    values:
    [
      {x: "Totaal", y: 2},
      {x: "Basisonderwijs", y: 2},
      {x: "Lager beroepsonderwijs", y: 3},
      {x: "HAVO onderbouw", y: 1},
      {x: "HAVO, VWO, MBO", y: 2},
      {x: "HBO, WO", y: 3}
    ]
  },
  {
    key: "PVV",
    color: "#a6a7a9",
    values:
    [
      {x: "Totaal", y: 8},
      {x: "Basisonderwijs", y: 8},
      {x: "Lager beroepsonderwijs", y: 13},
      {x: "HAVO onderbouw", y: 4},
      {x: "HAVO, VWO, MBO", y: 9},
      {x: "HBO, WO", y: 2}
    ]
  },
  {
    key: "D66",
    color: "#01AF40",
    values:
    [
      {x: "Totaal", y: 6},
      {x: "Basisonderwijs", y: 0},
      {x: "Lager beroepsonderwijs", y: 1},
      {x: "HAVO onderbouw", y: 3},
      {x: "HAVO, VWO, MBO", y: 4},
      {x: "HBO, WO", y: 15}
    ]
  },
  {
    key: "Overige politieke partijen",
    color: "#f2c42e",
    values:
    [
      {x: "Totaal", y: 5},
      {x: "Basisonderwijs", y: 2},
      {x: "Lager beroepsonderwijs", y: 5},
      {x: "HAVO onderbouw", y: 3},
      {x: "HAVO, VWO, MBO", y: 5},
      {x: "HBO, WO", y: 5}
    ]
  },
  {
    key: "Niet gestemd",
    disabled: true,
    color: "#634f0b",
    values:
    [
      {x: "Totaal", y: 25},
      {x: "Basisonderwijs", y: 41},
      {x: "Lager beroepsonderwijs", y: 39},
      {x: "HAVO onderbouw", y: 38},
      {x: "HAVO, VWO, MBO", y: 26},
      {x: "HBO, WO", y: 8}
    ]
  }
  
  ]).transition().duration(500).call(chart);

  $('#chart-title').html('<h4>Stemgedrag naar onderwijsniveau <div class="btn-group" role="group"><button onclick="onderwijs2006()" type="button" class="btn btn-sm btn-secondary">2006</button><button onclick="onderwijs2010()" type="button" class="btn btn-sm btn-secondary">2010</button><button onclick="onderwijs2012()" type="button" class="btn btn-sm btn-secondary active">2012</button></div></h4>');

}

function leeftijd2012() {

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
      {x: "Totaal", y: 6},
      {x: "18 tot 25 jaar", y: 4},
      {x: "25 tot 35 jaar", y: 1},
      {x: "35 tot 45 jaar", y: 5},
      {x: "45 tot 55 jaar", y: 4},
      {x: "55 tot 65 jaar", y: 5},
      {x: "65 tot 75 jaar", y: 11},
      {x: "75 jaar of ouder", y: 22}
    ]
  },
  {
    key: "PvdA",
    color: "#e12b1a",
    values:
    [
      {x: "Totaal", y: 19},
      {x: "18 tot 25 jaar", y: 16},
      {x: "25 tot 35 jaar", y: 18},
      {x: "35 tot 45 jaar", y: 18},
      {x: "45 tot 55 jaar", y: 16},
      {x: "55 tot 65 jaar", y: 30},
      {x: "65 tot 75 jaar", y: 15},
      {x: "75 jaar of ouder", y: 14}
    ]
  },
  {
    key: "VVD",
    color: "#262b6a",
    values:
    [
      {x: "Totaal", y: 20},
      {x: "18 tot 25 jaar", y: 18},
      {x: "25 tot 35 jaar", y: 19},
      {x: "35 tot 45 jaar", y: 21},
      {x: "45 tot 55 jaar", y: 24},
      {x: "55 tot 65 jaar", y: 16},
      {x: "65 tot 75 jaar", y: 23},
      {x: "75 jaar of ouder", y: 17}
    ]
  },
  {
    key: "GroenLinks",
    color: "#66A344",
    values:
    [
      {x: "Totaal", y: 2},
      {x: "18 tot 25 jaar", y: 1},
      {x: "25 tot 35 jaar", y: 2},
      {x: "35 tot 45 jaar", y: 3},
      {x: "45 tot 55 jaar", y: 2},
      {x: "55 tot 65 jaar", y: 2},
      {x: "65 tot 75 jaar", y: 2},
      {x: "75 jaar of ouder", y: 0}
    ]
  },
  {
    key: "SP",
    color: "#a91e1e",
    values:
    [
      {x: "Totaal", y: 7},
      {x: "18 tot 25 jaar", y: 11},
      {x: "25 tot 35 jaar", y: 5},
      {x: "35 tot 45 jaar", y: 8},
      {x: "45 tot 55 jaar", y: 9},
      {x: "55 tot 65 jaar", y: 9},
      {x: "65 tot 75 jaar", y: 2},
      {x: "75 jaar of ouder", y: 3}
    ]
  },
  {
    key: "ChristenUnie",
    color: "#75C9E0",
    values:
    [
      {x: "Totaal", y: 2},
      {x: "18 tot 25 jaar", y: 1},
      {x: "25 tot 35 jaar", y: 2},
      {x: "35 tot 45 jaar", y: 2},
      {x: "45 tot 55 jaar", y: 3},
      {x: "55 tot 65 jaar", y: 4},
      {x: "65 tot 75 jaar", y: 2},
      {x: "75 jaar of ouder", y: 2}
    ]
  },
  {
    key: "PVV",
    color: "#a6a7a9",
    values:
    [
      {x: "Totaal", y: 8},
      {x: "18 tot 25 jaar", y: 8},
      {x: "25 tot 35 jaar", y: 7},
      {x: "35 tot 45 jaar", y: 9},
      {x: "45 tot 55 jaar", y: 7},
      {x: "55 tot 65 jaar", y: 9},
      {x: "65 tot 75 jaar", y: 7},
      {x: "75 jaar of ouder", y: 6}
    ]
  },
  {
    key: "D66",
    color: "#01AF40",
    values:
    [
      {x: "Totaal", y: 6},
      {x: "18 tot 25 jaar", y: 8},
      {x: "25 tot 35 jaar", y: 9},
      {x: "35 tot 45 jaar", y: 7},
      {x: "45 tot 55 jaar", y: 7},
      {x: "55 tot 65 jaar", y: 4},
      {x: "65 tot 75 jaar", y: 4},
      {x: "75 jaar of ouder", y: 4}
    ]
  },
  {
    key: "Overige politieke partijen",
    color: "#f2c42e",
    values:
    [
      {x: "Totaal", y: 5},
      {x: "18 tot 25 jaar", y: 4},
      {x: "25 tot 35 jaar", y: 4},
      {x: "35 tot 45 jaar", y: 4},
      {x: "45 tot 55 jaar", y: 5},
      {x: "55 tot 65 jaar", y: 5},
      {x: "65 tot 75 jaar", y: 8},
      {x: "75 jaar of ouder", y: 3}
    ]
  },
  {
    key: "Niet gestemd",
    disabled: true,
    color: "#634f0b",
    values:
    [
      {x: "Totaal", y: 25},
      {x: "18 tot 25 jaar", y: 30},
      {x: "25 tot 35 jaar", y: 33},
      {x: "35 tot 45 jaar", y: 25},
      {x: "45 tot 55 jaar", y: 24},
      {x: "55 tot 65 jaar", y: 17},
      {x: "65 tot 75 jaar", y: 26},
      {x: "75 jaar of ouder", y: 28}
    ]
  }
  
  ]).transition().duration(500).call(chart);

  $('#chart-title').html('<h4>Stemgedrag naar leeftijd <div class="btn-group" role="group"><button onclick="leeftijd2006()" type="button" class="btn btn-sm btn-secondary">2006</button><button onclick="leeftijd2010()" type="button" class="btn btn-sm btn-secondary">2010</button><button onclick="leeftijd2012()" type="button" class="btn btn-sm btn-secondary active">2012</button></div></h4>');

}

function burgerlijkeStaat2012() {

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
      {x: "Totaal", y: 6},
      {x: "Ongehuwd", y: 3},
      {x: "Gehuwd / partnerschap", y: 8},
      {x: "Gescheiden", y: 5},
      {x: "Verweduwd", y: 15}
    ]
  },
  {
    key: "PvdA",
    color: "#e12b1a",
    values:
    [
      {x: "Totaal", y: 19},
      {x: "Ongehuwd", y: 18},
      {x: "Gehuwd / partnerschap", y: 19},
      {x: "Gescheiden", y: 21},
      {x: "Verweduwd", y: 16}
    ]
  },
  {
    key: "VVD",
    color: "#262b6a",
    values:
    [
      {x: "Totaal", y: 20},
      {x: "Ongehuwd", y: 19},
      {x: "Gehuwd / partnerschap", y: 22},
      {x: "Gescheiden", y: 12},
      {x: "Verweduwd", y: 18}
    ]
  },
  {
    key: "GroenLinks",
    color: "#66A344",
    values:
    [
      {x: "Totaal", y: 2},
      {x: "Ongehuwd", y: 3},
      {x: "Gehuwd / partnerschap", y: 1},
      {x: "Gescheiden", y: 2},
      {x: "Verweduwd", y: 0}
    ]
  },
  {
    key: "SP",
    color: "#a91e1e",
    values:
    [
      {x: "Totaal", y: 7},
      {x: "Ongehuwd", y: 9},
      {x: "Gehuwd / partnerschap", y: 6},
      {x: "Gescheiden", y: 8},
      {x: "Verweduwd", y: 5}
    ]
  },
  {
    key: "ChristenUnie",
    color: "#75C9E0",
    values:
    [
      {x: "Totaal", y: 2},
      {x: "Ongehuwd", y: 1},
      {x: "Gehuwd / partnerschap", y: 3},
      {x: "Gescheiden", y: 2},
      {x: "Verweduwd", y: 3}
    ]
  },
  {
    key: "PVV",
    color: "#a6a7a9",
    values:
    [
      {x: "Totaal", y: 8},
      {x: "Ongehuwd", y: 7},
      {x: "Gehuwd / partnerschap", y: 8},
      {x: "Gescheiden", y: 7},
      {x: "Verweduwd", y: 6}
    ]
  },
  {
    key: "D66",
    color: "#01AF40",
    values:
    [
      {x: "Totaal", y: 6},
      {x: "Ongehuwd", y: 9},
      {x: "Gehuwd / partnerschap", y: 4},
      {x: "Gescheiden", y: 4},
      {x: "Verweduwd", y: 6}
    ]
  },
  {
    key: "Overige politieke partijen",
    color: "#f2c42e",
    values:
    [
      {x: "Totaal", y: 5},
      {x: "Ongehuwd", y: 4},
      {x: "Gehuwd / partnerschap", y: 6},
      {x: "Gescheiden", y: 5},
      {x: "Verweduwd", y: 3}
    ]
  },
  {
    key: "Niet gestemd",
    disabled: true,
    color: "#634f0b",
    values:
    [
      {x: "Totaal", y: 25},
      {x: "Ongehuwd", y: 27},
      {x: "Gehuwd / partnerschap", y: 23},
      {x: "Gescheiden", y: 35},
      {x: "Verweduwd", y: 27}
    ]
  }
  
  ]).transition().duration(500).call(chart);

  $('#chart-title').html('<h4>Stemgedrag naar burgerlijke staat <div class="btn-group" role="group"><button onclick="burgerlijkeStaat2006()" type="button" class="btn btn-sm btn-secondary">2006</button><button onclick="burgerlijkeStaat2010()" type="button" class="btn btn-sm btn-secondary">2010</button><button onclick="burgerlijkeStaat2012()" type="button" class="btn btn-sm btn-secondary active">2012</button></div></h4>');

}

function stedelijkheid2012() {

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
      {x: "Totaal", y: 6},
      {x: "Zeer sterk stedelijk", y: 2},
      {x: "Sterk stedelijk", y: 6},
      {x: "Matig stedelijk", y: 6},
      {x: "Weinig stedelijk", y: 9},
      {x: "Niet stedelijk", y: 10}
    ]
  },
  {
    key: "PvdA",
    color: "#e12b1a",
    values:
    [
      {x: "Totaal", y: 19},
      {x: "Zeer sterk stedelijk", y: 27},
      {x: "Sterk stedelijk", y: 18},
      {x: "Matig stedelijk", y: 16},
      {x: "Weinig stedelijk", y: 15},
      {x: "Niet stedelijk", y: 18}
    ]
  },
  {
    key: "VVD",
    color: "#262b6a",
    values:
    [
      {x: "Totaal", y: 20},
      {x: "Zeer sterk stedelijk", y: 17},
      {x: "Sterk stedelijk", y: 18},
      {x: "Matig stedelijk", y: 27},
      {x: "Weinig stedelijk", y: 20},
      {x: "Niet stedelijk", y: 19}
    ]
  },
  {
    key: "GroenLinks",
    color: "#66A344",
    values:
    [
      {x: "Totaal", y: 2},
      {x: "Zeer sterk stedelijk", y: 3},
      {x: "Sterk stedelijk", y: 1},
      {x: "Matig stedelijk", y: 2},
      {x: "Weinig stedelijk", y: 2},
      {x: "Niet stedelijk", y: 1}
    ]
  },
  {
    key: "SP",
    color: "#a91e1e",
    values:
    [
      {x: "Totaal", y: 7},
      {x: "Zeer sterk stedelijk", y: 6},
      {x: "Sterk stedelijk", y: 9},
      {x: "Matig stedelijk", y: 7},
      {x: "Weinig stedelijk", y: 8},
      {x: "Niet stedelijk", y: 5}
    ]
  },
  {
    key: "ChristenUnie",
    color: "#75C9E0",
    values:
    [
      {x: "Totaal", y: 2},
      {x: "Zeer sterk stedelijk", y: 2},
      {x: "Sterk stedelijk", y: 3},
      {x: "Matig stedelijk", y: 1},
      {x: "Weinig stedelijk", y: 3},
      {x: "Niet stedelijk", y: 2}
    ]
  },
  {
    key: "PVV",
    color: "#a6a7a9",
    values:
    [
      {x: "Totaal", y: 8},
      {x: "Zeer sterk stedelijk", y: 8},
      {x: "Sterk stedelijk", y: 9},
      {x: "Matig stedelijk", y: 7},
      {x: "Weinig stedelijk", y: 7},
      {x: "Niet stedelijk", y: 7}
    ]
  },
  {
    key: "D66",
    color: "#01AF40",
    values:
    [
      {x: "Totaal", y: 6},
      {x: "Zeer sterk stedelijk", y: 10},
      {x: "Sterk stedelijk", y: 6},
      {x: "Matig stedelijk", y: 4},
      {x: "Weinig stedelijk", y: 6},
      {x: "Niet stedelijk", y: 3}
    ]
  },
  {
    key: "Overige politieke partijen",
    color: "#f2c42e",
    values:
    [
      {x: "Totaal", y: 5},
      {x: "Zeer sterk stedelijk", y: 7},
      {x: "Sterk stedelijk", y: 5},
      {x: "Matig stedelijk", y: 5},
      {x: "Weinig stedelijk", y: 4},
      {x: "Niet stedelijk", y: 3}
    ]
  },
  {
    key: "Niet gestemd",
    disabled: true,
    color: "#634f0b",
    values:
    [
      {x: "Totaal", y: 25},
      {x: "Zeer sterk stedelijk", y: 20},
      {x: "Sterk stedelijk", y: 25},
      {x: "Matig stedelijk", y: 25},
      {x: "Weinig stedelijk", y: 28},
      {x: "Niet stedelijk", y: 32}
    ]
  }
  
  ]).transition().duration(500).call(chart);

  $('#chart-title').html('<h4>Stemgedrag naar stedelijkheid <div class="btn-group" role="group"><button onclick="stedelijkheid2006()" type="button" class="btn btn-sm btn-secondary">2006</button><button onclick="stedelijkheid2010()" type="button" class="btn btn-sm btn-secondary">2010</button><button onclick="stedelijkheid2012()" type="button" class="btn btn-sm btn-secondary active">2012</button></div></h4>');

}

function kerkelijkeGezindte2012() {

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
      {x: "Totaal", y: 6},
      {x: "Geen", y: 2},
      {x: "Rooms-katholiek", y: 11},
      {x: "Nederlands hervormd", y: 16},
      {x: "Protestants", y: 30},
      {x: "Overige", y: 5}
    ]
  },
  {
    key: "PvdA",
    color: "#e12b1a",
    values:
    [
      {x: "Totaal", y: 19},
      {x: "Geen", y: 21},
      {x: "Rooms-katholiek", y: 16},
      {x: "Nederlands hervormd", y: 10},
      {x: "Protestants", y: 7},
      {x: "Overige", y: 22}
    ]
  },
  {
    key: "VVD",
    color: "#262b6a",
    values:
    [
      {x: "Totaal", y: 20},
      {x: "Geen", y: 21},
      {x: "Rooms-katholiek", y: 22},
      {x: "Nederlands hervormd", y: 24},
      {x: "Protestants", y: 14},
      {x: "Overige", y: 13}
    ]
  },
  {
    key: "GroenLinks",
    color: "#66A344",
    values:
    [
      {x: "Totaal", y: 2},
      {x: "Geen", y: 2},
      {x: "Rooms-katholiek", y: 1},
      {x: "Nederlands hervormd", y: 2},
      {x: "Protestants", y: 3},
      {x: "Overige", y: 1}
    ]
  },
  {
    key: "SP",
    color: "#a91e1e",
    values:
    [
      {x: "Totaal", y: 7},
      {x: "Geen", y: 9},
      {x: "Rooms-katholiek", y: 8},
      {x: "Nederlands hervormd", y: 3},
      {x: "Protestants", y: 3},
      {x: "Overige", y: 3}
    ]
  },
  {
    key: "ChristenUnie",
    color: "#75C9E0",
    values:
    [
      {x: "Totaal", y: 2},
      {x: "Geen", y: 0},
      {x: "Rooms-katholiek", y: 1},
      {x: "Nederlands hervormd", y: 2},
      {x: "Protestants", y: 12},
      {x: "Overige", y: 13}
    ]
  },
  {
    key: "PVV",
    color: "#a6a7a9",
    values:
    [
      {x: "Totaal", y: 8},
      {x: "Geen", y: 9},
      {x: "Rooms-katholiek", y: 8},
      {x: "Nederlands hervormd", y: 1},
      {x: "Protestants", y: 6},
      {x: "Overige", y: 2}
    ]
  },
  {
    key: "D66",
    color: "#01AF40",
    values:
    [
      {x: "Totaal", y: 6},
      {x: "Geen", y: 7},
      {x: "Rooms-katholiek", y: 4},
      {x: "Nederlands hervormd", y: 3},
      {x: "Protestants", y: 5},
      {x: "Overige", y: 4}
    ]
  },
  {
    key: "Overige politieke partijen",
    color: "#f2c42e",
    values:
    [
      {x: "Totaal", y: 5},
      {x: "Geen", y: 4},
      {x: "Rooms-katholiek", y: 2},
      {x: "Nederlands hervormd", y: 15},
      {x: "Protestants", y: 4},
      {x: "Overige", y: 8}
    ]
  },
  {
    key: "Niet gestemd",
    disabled: true,
    color: "#634f0b",
    values:
    [
      {x: "Totaal", y: 25},
      {x: "Geen", y: 25},
      {x: "Rooms-katholiek", y: 28},
      {x: "Nederlands hervormd", y: 24},
      {x: "Protestants", y: 16},
      {x: "Overige", y: 28}
    ]
  }
  
  ]).transition().duration(500).call(chart);

  $('#chart-title').html('<h4>Stemgedrag naar kerkelijke gezindte <div class="btn-group" role="group"><button onclick="kerkelijkeGezindte2006()" type="button" class="btn btn-sm btn-secondary">2006</button><button onclick="kerkelijkeGezindte2010()" type="button" class="btn btn-sm btn-secondary">2010</button><button onclick="kerkelijkeGezindte2012()" type="button" class="btn btn-sm btn-secondary active">2012</button></div></h4>');

}

function kerkbezoek2012() {

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
      {x: "Totaal", y: 6},
      {x: "Één keer per week of vaker", y: 25},
      {x: "Twee tot drie keer per maand", y: 17},
      {x: "Één keer per maand", y: 10},
      {x: "Minder dan één keer per maand", y: 10},
      {x: "Zelden of nooit", y: 6}
    ]
  },
  {
    key: "PvdA",
    color: "#e12b1a",
    values:
    [
      {x: "Totaal", y: 19},
      {x: "Één keer per week of vaker", y: 7},
      {x: "Twee tot drie keer per maand", y: 15},
      {x: "Één keer per maand", y: 26},
      {x: "Minder dan één keer per maand", y: 18},
      {x: "Zelden of nooit", y: 17}
    ]
  },
  {
    key: "VVD",
    color: "#262b6a",
    values:
    [
      {x: "Totaal", y: 20},
      {x: "Één keer per week of vaker", y: 5},
      {x: "Twee tot drie keer per maand", y: 20},
      {x: "Één keer per maand", y: 23},
      {x: "Minder dan één keer per maand", y: 19},
      {x: "Zelden of nooit", y: 25}
    ]
  },
  {
    key: "GroenLinks",
    color: "#66A344",
    values:
    [
      {x: "Totaal", y: 2},
      {x: "Één keer per week of vaker", y: 1},
      {x: "Twee tot drie keer per maand", y: 4},
      {x: "Één keer per maand", y: 1},
      {x: "Minder dan één keer per maand", y: 0},
      {x: "Zelden of nooit", y: 2}
    ]
  },
  {
    key: "SP",
    color: "#a91e1e",
    values:
    [
      {x: "Totaal", y: 7},
      {x: "Één keer per week of vaker", y: 1},
      {x: "Twee tot drie keer per maand", y: 6},
      {x: "Één keer per maand", y: 3},
      {x: "Minder dan één keer per maand", y: 7},
      {x: "Zelden of nooit", y: 8}
    ]
  },
  {
    key: "ChristenUnie",
    color: "#75C9E0",
    values:
    [
      {x: "Totaal", y: 2},
      {x: "Één keer per week of vaker", y: 18},
      {x: "Twee tot drie keer per maand", y: 6},
      {x: "Één keer per maand", y: 5},
      {x: "Minder dan één keer per maand", y: 2},
      {x: "Zelden of nooit", y: 0}
    ]
  },
  {
    key: "PVV",
    color: "#a6a7a9",
    values:
    [
      {x: "Totaal", y: 8},
      {x: "Één keer per week of vaker", y: 3},
      {x: "Twee tot drie keer per maand", y: 4},
      {x: "Één keer per maand", y: 7},
      {x: "Minder dan één keer per maand", y: 7},
      {x: "Zelden of nooit", y: 6}
    ]
  },
  {
    key: "D66",
    color: "#01AF40",
    values:
    [
      {x: "Totaal", y: 6},
      {x: "Één keer per week of vaker", y: 2},
      {x: "Twee tot drie keer per maand", y: 7},
      {x: "Één keer per maand", y: 3},
      {x: "Minder dan één keer per maand", y: 3},
      {x: "Zelden of nooit", y: 6}
    ]
  },
  {
    key: "Overige politieke partijen",
    color: "#f2c42e",
    values:
    [
      {x: "Totaal", y: 5},
      {x: "Één keer per week of vaker", y: 15},
      {x: "Twee tot drie keer per maand", y: 3},
      {x: "Één keer per maand", y: 6},
      {x: "Minder dan één keer per maand", y: 1},
      {x: "Zelden of nooit", y: 2}
    ]
  },
  {
    key: "Niet gestemd",
    disabled: true,
    color: "#634f0b",
    values:
    [
      {x: "Totaal", y: 25},
      {x: "Één keer per week of vaker", y: 24},
      {x: "Twee tot drie keer per maand", y: 19},
      {x: "Één keer per maand", y: 16},
      {x: "Minder dan één keer per maand", y: 34},
      {x: "Zelden of nooit", y: 27}
    ]
  }
  
  ]).transition().duration(500).call(chart);

  $('#chart-title').html('<h4>Stemgedrag naar kerkbezoek <div class="btn-group" role="group"><button onclick="kerkbezoek2006()" type="button" class="btn btn-sm btn-secondary">2006</button><button onclick="kerkbezoek2010()" type="button" class="btn btn-sm btn-secondary">2010</button><button onclick="kerkbezoek2012()" type="button" class="btn btn-sm btn-secondary active">2012</button></div></h4>');

}