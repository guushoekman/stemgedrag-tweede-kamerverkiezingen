function geslacht2010() {

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
        {x: "Totaal", y: 10},
        {x: "Mannen", y: 8},
        {x: "Vrouwen", y: 12}
      ]
    },
    {
      key: "PvdA",
      color: "#e12b1a",
      values:
      [
        {x: "Totaal", y: 15},
        {x: "Mannen", y: 15},
        {x: "Vrouwen", y: 14}
      ]
    },
    {
      key: "VVD",
      color: "#262b6a",
      values:
      [
        {x: "Totaal", y: 16},
        {x: "Mannen", y: 18},
        {x: "Vrouwen", y: 13}
      ]
    },
    {
      key: "GroenLinks",
      color: "#66A344",
      values:
      [
        {x: "Totaal", y: 5},
        {x: "Mannen", y: 4},
        {x: "Vrouwen", y: 6}
      ]
    },
    {
      key: "SP",
      color: "#a91e1e",
      values:
      [
        {x: "Totaal", y: 7},
        {x: "Mannen", y: 6},
        {x: "Vrouwen", y: 9}
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
        {x: "Totaal", y: 12},
        {x: "Mannen", y: 13},
        {x: "Vrouwen", y: 11}
      ]
    },
    {
      key: "D66",
      color: "#01AF40",
      values:
      [
        {x: "Totaal", y: 5},
        {x: "Mannen", y: 6},
        {x: "Vrouwen", y: 5}
      ]
    },
    {
      key: "Overige politieke partijen",
      color: "#f2c42e",
      values:
      [
        {x: "Totaal", y: 3},
        {x: "Mannen", y: 3},
        {x: "Vrouwen", y: 3}
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
        {x: "Vrouwen", y: 24}
      ]
    }
	
	]).transition().duration(500).call(chart);

  $('#chart-title').html('<h4>Stemgedrag naar geslacht <div class="btn-group" role="group"><button onclick="geslacht2006()" type="button" class="btn btn-sm btn-secondary">2006</button><button onclick="geslacht2010()" type="button" class="btn btn-sm btn-secondary active">2010</button><button onclick="geslacht2012()" type="button" class="btn btn-sm btn-secondary">2012</button></div></h4>');

}

function herkomst2010() {

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
      {x: "Totaal", y: 10},
      {x: "Autochtoon", y: 11},
      {x: "Westerse allochtoon", y: 10},
      {x: "Niet-westerse allochtoon", y: 5}
    ]
  },
  {
    key: "PvdA",
    color: "#e12b1a",
    values:
    [
      {x: "Totaal", y: 15},
      {x: "Autochtoon", y: 13},
      {x: "Westerse allochtoon", y: 13},
      {x: "Niet-westerse allochtoon", y: 37}
    ]
  },
  {
    key: "VVD",
    color: "#262b6a",
    values:
    [
      {x: "Totaal", y: 16},
      {x: "Autochtoon", y: 16},
      {x: "Westerse allochtoon", y: 18},
      {x: "Niet-westerse allochtoon", y: 8}
    ]
  },
  {
    key: "GroenLinks",
    color: "#66A344",
    values:
    [
      {x: "Totaal", y: 5},
      {x: "Autochtoon", y: 5},
      {x: "Westerse allochtoon", y: 4},
      {x: "Niet-westerse allochtoon", y: 6}
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
      {x: "Autochtoon", y: 3},
      {x: "Westerse allochtoon", y: 1},
      {x: "Niet-westerse allochtoon", y: 1}
    ]
  },
  {
    key: "PVV",
    color: "#a6a7a9",
    values:
    [
      {x: "Totaal", y: 12},
      {x: "Autochtoon", y: 13},
      {x: "Westerse allochtoon", y: 8},
      {x: "Niet-westerse allochtoon", y: 2}
    ]
  },
  {
    key: "D66",
    color: "#01AF40",
    values:
    [
      {x: "Totaal", y: 5},
      {x: "Autochtoon", y: 6},
      {x: "Westerse allochtoon", y: 5},
      {x: "Niet-westerse allochtoon", y: 2}
    ]
  },
  {
    key: "Overige politieke partijen",
    color: "#f2c42e",
    values:
    [
      {x: "Totaal", y: 3},
      {x: "Autochtoon", y: 3},
      {x: "Westerse allochtoon", y: 0},
      {x: "Niet-westerse allochtoon", y: 3}
    ]
  },
  {
    key: "Niet gestemd",
    disabled: true,
    color: "#634f0b",
    values:
    [
      {x: "Totaal", y: 25},
      {x: "Autochtoon", y: 23},
      {x: "Westerse allochtoon", y: 34},
      {x: "Niet-westerse allochtoon", y: 32}
    ]
  }
  
  ]).transition().duration(500).call(chart);

  $('#chart-title').html('<h4>Stemgedrag naar herkomst <div class="btn-group" role="group"><button onclick="herkomst2006()" type="button" class="btn btn-sm btn-secondary">2006</button><button onclick="herkomst2010()" type="button" class="btn btn-sm btn-secondary active">2010</button><button onclick="herkomst2012()" type="button" class="btn btn-sm btn-secondary">2012</button></div></h4>');

}

function onderwijs2010() {

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
      {x: "Totaal", y: 10},
      {x: "Basisonderwijs", y: 13},
      {x: "Lager beroepsonderwijs", y: 10},
      {x: "HAVO onderbouw", y: 12},
      {x: "HAVO, VWO, MBO", y: 11},
      {x: "HBO, WO", y: 8}
    ]
  },
  {
    key: "PvdA",
    color: "#e12b1a",
    values:
    [
      {x: "Totaal", y: 15},
      {x: "Basisonderwijs", y: 22},
      {x: "Lager beroepsonderwijs", y: 11},
      {x: "HAVO onderbouw", y: 10},
      {x: "HAVO, VWO, MBO", y: 14},
      {x: "HBO, WO", y: 17}
    ]
  },
  {
    key: "VVD",
    color: "#262b6a",
    values:
    [
      {x: "Totaal", y: 16},
      {x: "Basisonderwijs", y: 3},
      {x: "Lager beroepsonderwijs", y: 8},
      {x: "HAVO onderbouw", y: 10},
      {x: "HAVO, VWO, MBO", y: 17},
      {x: "HBO, WO", y: 26}
    ]
  },
  {
    key: "GroenLinks",
    color: "#66A344",
    values:
    [
      {x: "Totaal", y: 5},
      {x: "Basisonderwijs", y: 2},
      {x: "Lager beroepsonderwijs", y: 2},
      {x: "HAVO onderbouw", y: 2},
      {x: "HAVO, VWO, MBO", y: 3},
      {x: "HBO, WO", y: 12}
    ]
  },
  {
    key: "SP",
    color: "#a91e1e",
    values:
    [
      {x: "Totaal", y: 7},
      {x: "Basisonderwijs", y: 6},
      {x: "Lager beroepsonderwijs", y: 8},
      {x: "HAVO onderbouw", y: 12},
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
      {x: "Basisonderwijs", y: 3},
      {x: "Lager beroepsonderwijs", y: 1},
      {x: "HAVO onderbouw", y: 4},
      {x: "HAVO, VWO, MBO", y: 3},
      {x: "HBO, WO", y: 3}
    ]
  },
  {
    key: "PVV",
    color: "#a6a7a9",
    values:
    [
      {x: "Totaal", y: 12},
      {x: "Basisonderwijs", y: 11},
      {x: "Lager beroepsonderwijs", y: 19},
      {x: "HAVO onderbouw", y: 16},
      {x: "HAVO, VWO, MBO", y: 11},
      {x: "HBO, WO", y: 3}
    ]
  },
  {
    key: "D66",
    color: "#01AF40",
    values:
    [
      {x: "Totaal", y: 5},
      {x: "Basisonderwijs", y: 1},
      {x: "Lager beroepsonderwijs", y: 2},
      {x: "HAVO onderbouw", y: 4},
      {x: "HAVO, VWO, MBO", y: 4},
      {x: "HBO, WO", y: 12}
    ]
  },
  {
    key: "Overige politieke partijen",
    color: "#f2c42e",
    values:
    [
      {x: "Totaal", y: 3},
      {x: "Basisonderwijs", y: 1},
      {x: "Lager beroepsonderwijs", y: 3},
      {x: "HAVO onderbouw", y: 1},
      {x: "HAVO, VWO, MBO", y: 3},
      {x: "HBO, WO", y: 4}
    ]
  },
  {
    key: "Niet gestemd",
    disabled: true,
    color: "#634f0b",
    values:
    [
      {x: "Totaal", y: 25},
      {x: "Basisonderwijs", y: 37},
      {x: "Lager beroepsonderwijs", y: 36},
      {x: "HAVO onderbouw", y: 28},
      {x: "HAVO, VWO, MBO", y: 24},
      {x: "HBO, WO", y: 10}
    ]
  }
  
  ]).transition().duration(500).call(chart);

  $('#chart-title').html('<h4>Stemgedrag naar onderwijsniveau <div class="btn-group" role="group"><button onclick="onderwijs2006()" type="button" class="btn btn-sm btn-secondary">2006</button><button onclick="onderwijs2010()" type="button" class="btn btn-sm btn-secondary active">2010</button><button onclick="onderwijs2012()" type="button" class="btn btn-sm btn-secondary">2012</button></div></h4>');

}

function leeftijd2010() {

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
      {x: "Totaal", y: 10},
      {x: "18 tot 25 jaar", y: 6},
      {x: "25 tot 35 jaar", y: 7},
      {x: "35 tot 45 jaar", y: 9},
      {x: "45 tot 55 jaar", y: 8},
      {x: "55 tot 65 jaar", y: 10},
      {x: "65 tot 75 jaar", y: 17},
      {x: "75 jaar of ouder", y: 23}
    ]
  },
  {
    key: "PvdA",
    color: "#e12b1a",
    values:
    [
      {x: "Totaal", y: 15},
      {x: "18 tot 25 jaar", y: 8},
      {x: "25 tot 35 jaar", y: 15},
      {x: "35 tot 45 jaar", y: 15},
      {x: "45 tot 55 jaar", y: 16},
      {x: "55 tot 65 jaar", y: 14},
      {x: "65 tot 75 jaar", y: 18},
      {x: "75 jaar of ouder", y: 18}
    ]
  },
  {
    key: "VVD",
    color: "#262b6a",
    values:
    [
      {x: "Totaal", y: 16},
      {x: "18 tot 25 jaar", y: 10},
      {x: "25 tot 35 jaar", y: 21},
      {x: "35 tot 45 jaar", y: 21},
      {x: "45 tot 55 jaar", y: 15},
      {x: "55 tot 65 jaar", y: 14},
      {x: "65 tot 75 jaar", y: 14},
      {x: "75 jaar of ouder", y: 7}
    ]
  },
  {
    key: "GroenLinks",
    color: "#66A344",
    values:
    [
      {x: "Totaal", y: 5},
      {x: "18 tot 25 jaar", y: 4},
      {x: "25 tot 35 jaar", y: 6},
      {x: "35 tot 45 jaar", y: 5},
      {x: "45 tot 55 jaar", y: 7},
      {x: "55 tot 65 jaar", y: 7},
      {x: "65 tot 75 jaar", y: 3},
      {x: "75 jaar of ouder", y: 0}
    ]
  },
  {
    key: "SP",
    color: "#a91e1e",
    values:
    [
      {x: "Totaal", y: 7},
      {x: "18 tot 25 jaar", y: 6},
      {x: "25 tot 35 jaar", y: 4},
      {x: "35 tot 45 jaar", y: 7},
      {x: "45 tot 55 jaar", y: 9},
      {x: "55 tot 65 jaar", y: 11},
      {x: "65 tot 75 jaar", y: 8},
      {x: "75 jaar of ouder", y: 3}
    ]
  },
  {
    key: "ChristenUnie",
    color: "#75C9E0",
    values:
    [
      {x: "Totaal", y: 2},
      {x: "18 tot 25 jaar", y: 2},
      {x: "25 tot 35 jaar", y: 4},
      {x: "35 tot 45 jaar", y: 3},
      {x: "45 tot 55 jaar", y: 2},
      {x: "55 tot 65 jaar", y: 2},
      {x: "65 tot 75 jaar", y: 2},
      {x: "75 jaar of ouder", y: 2}
    ]
  },
  {
    key: "PVV",
    color: "#a6a7a9",
    values:
    [
      {x: "Totaal", y: 12},
      {x: "18 tot 25 jaar", y: 13},
      {x: "25 tot 35 jaar", y: 10},
      {x: "35 tot 45 jaar", y: 13},
      {x: "45 tot 55 jaar", y: 13},
      {x: "55 tot 65 jaar", y: 13},
      {x: "65 tot 75 jaar", y: 10},
      {x: "75 jaar of ouder", y: 8}
    ]
  },
  {
    key: "D66",
    color: "#01AF40",
    values:
    [
      {x: "Totaal", y: 5},
      {x: "18 tot 25 jaar", y: 5},
      {x: "25 tot 35 jaar", y: 4},
      {x: "35 tot 45 jaar", y: 6},
      {x: "45 tot 55 jaar", y: 6},
      {x: "55 tot 65 jaar", y: 6},
      {x: "65 tot 75 jaar", y: 5},
      {x: "75 jaar of ouder", y: 1}
    ]
  },
  {
    key: "Overige politieke partijen",
    color: "#f2c42e",
    values:
    [
      {x: "Totaal", y: 3},
      {x: "18 tot 25 jaar", y: 3},
      {x: "25 tot 35 jaar", y: 3},
      {x: "35 tot 45 jaar", y: 4},
      {x: "45 tot 55 jaar", y: 2},
      {x: "55 tot 65 jaar", y: 2},
      {x: "65 tot 75 jaar", y: 2},
      {x: "75 jaar of ouder", y: 2}
    ]
  },
  {
    key: "Niet gestemd",
    disabled: true,
    color: "#634f0b",
    values:
    [
      {x: "Totaal", y: 25},
      {x: "18 tot 25 jaar", y: 41},
      {x: "25 tot 35 jaar", y: 26},
      {x: "35 tot 45 jaar", y: 18},
      {x: "45 tot 55 jaar", y: 21},
      {x: "55 tot 65 jaar", y: 21},
      {x: "65 tot 75 jaar", y: 21},
      {x: "75 jaar of ouder", y: 36}
    ]
  }
  
  ]).transition().duration(500).call(chart);

  $('#chart-title').html('<h4>Stemgedrag naar leeftijd <div class="btn-group" role="group"><button onclick="leeftijd2006()" type="button" class="btn btn-sm btn-secondary">2006</button><button onclick="leeftijd2010()" type="button" class="btn btn-sm btn-secondary active">2010</button><button onclick="leeftijd2012()" type="button" class="btn btn-sm btn-secondary">2012</button></div></h4>');

}

function burgerlijkeStaat2010() {

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
      {x: "Totaal", y: 10},
      {x: "Ongehuwd", y: 5},
      {x: "Gehuwd partnerschap", y: 12},
      {x: "Gescheiden", y: 10},
      {x: "Verweduwd", y: 19}
    ]
  },
  {
    key: "PvdA",
    color: "#e12b1a",
    values:
    [
      {x: "Totaal", y: 15},
      {x: "Ongehuwd", y: 13},
      {x: "Gehuwd partnerschap", y: 16},
      {x: "Gescheiden", y: 15},
      {x: "Verweduwd", y: 16}
    ]
  },
  {
    key: "VVD",
    color: "#262b6a",
    values:
    [
      {x: "Totaal", y: 16},
      {x: "Ongehuwd", y: 15},
      {x: "Gehuwd partnerschap", y: 17},
      {x: "Gescheiden", y: 13},
      {x: "Verweduwd", y: 11}
    ]
  },
  {
    key: "GroenLinks",
    color: "#66A344",
    values:
    [
      {x: "Totaal", y: 5},
      {x: "Ongehuwd", y: 5},
      {x: "Gehuwd partnerschap", y: 5},
      {x: "Gescheiden", y: 6},
      {x: "Verweduwd", y: 3}
    ]
  },
  {
    key: "SP",
    color: "#a91e1e",
    values:
    [
      {x: "Totaal", y: 7},
      {x: "Ongehuwd", y: 6},
      {x: "Gehuwd partnerschap", y: 8},
      {x: "Gescheiden", y: 10},
      {x: "Verweduwd", y: 8}
    ]
  },
  {
    key: "ChristenUnie",
    color: "#75C9E0",
    values:
    [
      {x: "Totaal", y: 2},
      {x: "Ongehuwd", y: 1},
      {x: "Gehuwd partnerschap", y: 3},
      {x: "Gescheiden", y: 1},
      {x: "Verweduwd", y: 2}
    ]
  },
  {
    key: "PVV",
    color: "#a6a7a9",
    values:
    [
      {x: "Totaal", y: 12},
      {x: "Ongehuwd", y: 11},
      {x: "Gehuwd partnerschap", y: 12},
      {x: "Gescheiden", y: 14},
      {x: "Verweduwd", y: 9}
    ]
  },
  {
    key: "D66",
    color: "#01AF40",
    values:
    [
      {x: "Totaal", y: 5},
      {x: "Ongehuwd", y: 5},
      {x: "Gehuwd partnerschap", y: 5},
      {x: "Gescheiden", y: 7},
      {x: "Verweduwd", y: 3}
    ]
  },
  {
    key: "Overige politieke partijen",
    color: "#f2c42e",
    values:
    [
      {x: "Totaal", y: 3},
      {x: "Ongehuwd", y: 3},
      {x: "Gehuwd partnerschap", y: 3},
      {x: "Gescheiden", y: 2},
      {x: "Verweduwd", y: 2}
    ]
  },
  {
    key: "Niet gestemd",
    disabled: true,
    color: "#634f0b",
    values:
    [
      {x: "Totaal", y: 25},
      {x: "Ongehuwd", y: 36},
      {x: "Gehuwd partnerschap", y: 19},
      {x: "Gescheiden", y: 22},
      {x: "Verweduwd", y: 29}
    ]
  }
  
  ]).transition().duration(500).call(chart);

  $('#chart-title').html('<h4>Stemgedrag naar burgerlijke staat <div class="btn-group" role="group"><button onclick="burgerlijkeStaat2006()" type="button" class="btn btn-sm btn-secondary">2006</button><button onclick="burgerlijkeStaat2010()" type="button" class="btn btn-sm btn-secondary active">2010</button><button onclick="burgerlijkeStaat2012()" type="button" class="btn btn-sm btn-secondary">2012</button></div></h4>');

}

function stedelijkheid2010() {

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
      {x: "Totaal", y: 10},
      {x: "Zeer sterk stedelijk", y: 5},
      {x: "Sterk stedelijk", y: 6},
      {x: "Matig stedelijk", y: 11},
      {x: "Weinig stedelijk", y: 16},
      {x: "Niet stedelijk", y: 17}
    ]
  },
  {
    key: "PvdA",
    color: "#e12b1a",
    values:
    [
      {x: "Totaal", y: 15},
      {x: "Zeer sterk stedelijk", y: 21},
      {x: "Sterk stedelijk", y: 15},
      {x: "Matig stedelijk", y: 15},
      {x: "Weinig stedelijk", y: 11},
      {x: "Niet stedelijk", y: 12}
    ]
  },
  {
    key: "VVD",
    color: "#262b6a",
    values:
    [
      {x: "Totaal", y: 16},
      {x: "Zeer sterk stedelijk", y: 15},
      {x: "Sterk stedelijk", y: 15},
      {x: "Matig stedelijk", y: 19},
      {x: "Weinig stedelijk", y: 15},
      {x: "Niet stedelijk", y: 13}
    ]
  },
  {
    key: "GroenLinks",
    color: "#66A344",
    values:
    [
      {x: "Totaal", y: 5},
      {x: "Zeer sterk stedelijk", y: 7},
      {x: "Sterk stedelijk", y: 6},
      {x: "Matig stedelijk", y: 4},
      {x: "Weinig stedelijk", y: 4},
      {x: "Niet stedelijk", y: 3}
    ]
  },
  {
    key: "SP",
    color: "#a91e1e",
    values:
    [
      {x: "Totaal", y: 7},
      {x: "Zeer sterk stedelijk", y: 6},
      {x: "Sterk stedelijk", y: 8},
      {x: "Matig stedelijk", y: 7},
      {x: "Weinig stedelijk", y: 7},
      {x: "Niet stedelijk", y: 10}
    ]
  },
  {
    key: "ChristenUnie",
    color: "#75C9E0",
    values:
    [
      {x: "Totaal", y: 2},
      {x: "Zeer sterk stedelijk", y: 1},
      {x: "Sterk stedelijk", y: 2},
      {x: "Matig stedelijk", y: 3},
      {x: "Weinig stedelijk", y: 3},
      {x: "Niet stedelijk", y: 3}
    ]
  },
  {
    key: "PVV",
    color: "#a6a7a9",
    values:
    [
      {x: "Totaal", y: 12},
      {x: "Zeer sterk stedelijk", y: 10},
      {x: "Sterk stedelijk", y: 12},
      {x: "Matig stedelijk", y: 15},
      {x: "Weinig stedelijk", y: 10},
      {x: "Niet stedelijk", y: 10}
    ]
  },
  {
    key: "D66",
    color: "#01AF40",
    values:
    [
      {x: "Totaal", y: 5},
      {x: "Zeer sterk stedelijk", y: 8},
      {x: "Sterk stedelijk", y: 5},
      {x: "Matig stedelijk", y: 6},
      {x: "Weinig stedelijk", y: 4},
      {x: "Niet stedelijk", y: 3}
    ]
  },
  {
    key: "Overige politieke partijen",
    color: "#f2c42e",
    values:
    [
      {x: "Totaal", y: 3},
      {x: "Zeer sterk stedelijk", y: 2},
      {x: "Sterk stedelijk", y: 3},
      {x: "Matig stedelijk", y: 2},
      {x: "Weinig stedelijk", y: 3},
      {x: "Niet stedelijk", y: 5}
    ]
  },
  {
    key: "Niet gestemd",
    disabled: true,
    color: "#634f0b",
    values:
    [
      {x: "Totaal", y: 25},
      {x: "Zeer sterk stedelijk", y: 25},
      {x: "Sterk stedelijk", y: 27},
      {x: "Matig stedelijk", y: 17},
      {x: "Weinig stedelijk", y: 28},
      {x: "Niet stedelijk", y: 23}
    ]
  }
  
  ]).transition().duration(500).call(chart);

  $('#chart-title').html('<h4>Stemgedrag naar stedelijkheid <div class="btn-group" role="group"><button onclick="stedelijkheid2006()" type="button" class="btn btn-sm btn-secondary">2006</button><button onclick="stedelijkheid2010()" type="button" class="btn btn-sm btn-secondary active">2010</button><button onclick="stedelijkheid2012()" type="button" class="btn btn-sm btn-secondary">2012</button></div></h4>');

}

function kerkelijkeGezindte2010() {

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
      {x: "Totaal", y: 10},
      {x: "Geen", y: 3},
      {x: "Rooms-katholiek", y: 21},
      {x: "Nederlands hervormd", y: 22},
      {x: "Gereformeerd", y: 21},
      {x: "Protestants", y: 34},
      {x: "Overige", y: 8}
    ]
  },
  {
    key: "PvdA",
    color: "#e12b1a",
    values:
    [
      {x: "Totaal", y: 15},
      {x: "Geen", y: 15},
      {x: "Rooms-katholiek", y: 10},
      {x: "Nederlands hervormd", y: 12},
      {x: "Gereformeerd", y: 4},
      {x: "Protestants", y: 12},
      {x: "Overige", y: 33}
    ]
  },
  {
    key: "VVD",
    color: "#262b6a",
    values:
    [
      {x: "Totaal", y: 16},
      {x: "Geen", y: 18},
      {x: "Rooms-katholiek", y: 13},
      {x: "Nederlands hervormd", y: 19},
      {x: "Gereformeerd", y: 6},
      {x: "Protestants", y: 9},
      {x: "Overige", y: 10}
    ]
  },
  {
    key: "GroenLinks",
    color: "#66A344",
    values:
    [
      {x: "Totaal", y: 5},
      {x: "Geen", y: 6},
      {x: "Rooms-katholiek", y: 3},
      {x: "Nederlands hervormd", y: 4},
      {x: "Gereformeerd", y: 3},
      {x: "Protestants", y: 6},
      {x: "Overige", y: 5}
    ]
  },
  {
    key: "SP",
    color: "#a91e1e",
    values:
    [
      {x: "Totaal", y: 7},
      {x: "Geen", y: 8},
      {x: "Rooms-katholiek", y: 8},
      {x: "Nederlands hervormd", y: 6},
      {x: "Gereformeerd", y: 7},
      {x: "Protestants", y: 2},
      {x: "Overige", y: 4}
    ]
  },
  {
    key: "ChristenUnie",
    color: "#75C9E0",
    values:
    [
      {x: "Totaal", y: 2},
      {x: "Geen", y: 0},
      {x: "Rooms-katholiek", y: 0},
      {x: "Nederlands hervormd", y: 7},
      {x: "Gereformeerd", y: 24},
      {x: "Protestants", y: 9},
      {x: "Overige", y: 11}
    ]
  },
  {
    key: "PVV",
    color: "#a6a7a9",
    values:
    [
      {x: "Totaal", y: 12},
      {x: "Geen", y: 14},
      {x: "Rooms-katholiek", y: 13},
      {x: "Nederlands hervormd", y: 9},
      {x: "Gereformeerd", y: 4},
      {x: "Protestants", y: 2},
      {x: "Overige", y: 4}
    ]
  },
  {
    key: "D66",
    color: "#01AF40",
    values:
    [
      {x: "Totaal", y: 5},
      {x: "Geen", y: 7},
      {x: "Rooms-katholiek", y: 2},
      {x: "Nederlands hervormd", y: 2},
      {x: "Gereformeerd", y: 8},
      {x: "Protestants", y: 6},
      {x: "Overige", y: 4}
    ]
  },
  {
    key: "Overige politieke partijen",
    color: "#f2c42e",
    values:
    [
      {x: "Totaal", y: 3},
      {x: "Geen", y: 2},
      {x: "Rooms-katholiek", y: 1},
      {x: "Nederlands hervormd", y: 3},
      {x: "Gereformeerd", y: 18},
      {x: "Protestants", y: 8},
      {x: "Overige", y: 4}
    ]
  },
  {
    key: "Niet gestemd",
    disabled: true,
    color: "#634f0b",
    values:
    [
      {x: "Totaal", y: 25},
      {x: "Geen", y: 27},
      {x: "Rooms-katholiek", y: 29},
      {x: "Nederlands hervormd", y: 15},
      {x: "Gereformeerd", y: 6},
      {x: "Protestants", y: 11},
      {x: "Overige", y: 19}
    ]
  }
  
  ]).transition().duration(500).call(chart);

  $('#chart-title').html('<h4>Stemgedrag naar kerkelijke gezindte <div class="btn-group" role="group"><button onclick="kerkelijkeGezindte2006()" type="button" class="btn btn-sm btn-secondary">2006</button><button onclick="kerkelijkeGezindte2010()" type="button" class="btn btn-sm btn-secondary active">2010</button><button onclick="kerkelijkeGezindte2012()" type="button" class="btn btn-sm btn-secondary">2012</button></div></h4>');

}

function kerkbezoek2010() {

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
      {x: "Totaal", y: 10},
      {x: "Één keer per week of vaker", y: 32},
      {x: "Twee tot drie keer per maand", y: 39},
      {x: "Één keer per maand", y: 27},
      {x: "Minder dan één keer per maand", y: 19},
      {x: "Zelden of nooit", y: 11}
    ]
  },
  {
    key: "PvdA",
    color: "#e12b1a",
    values:
    [
      {x: "Totaal", y: 15},
      {x: "Één keer per week of vaker", y: 12},
      {x: "Twee tot drie keer per maand", y: 12},
      {x: "Één keer per maand", y: 15},
      {x: "Minder dan één keer per maand", y: 18},
      {x: "Zelden of nooit", y: 14}
    ]
  },
  {
    key: "VVD",
    color: "#262b6a",
    values:
    [
      {x: "Totaal", y: 16},
      {x: "Één keer per week of vaker", y: 4},
      {x: "Twee tot drie keer per maand", y: 6},
      {x: "Één keer per maand", y: 17},
      {x: "Minder dan één keer per maand", y: 13},
      {x: "Zelden of nooit", y: 16}
    ]
  },
  {
    key: "GroenLinks",
    color: "#66A344",
    values:
    [
      {x: "Totaal", y: 5},
      {x: "Één keer per week of vaker", y: 2},
      {x: "Twee tot drie keer per maand", y: 3},
      {x: "Één keer per maand", y: 4},
      {x: "Minder dan één keer per maand", y: 7},
      {x: "Zelden of nooit", y: 3}
    ]
  },
  {
    key: "SP",
    color: "#a91e1e",
    values:
    [
      {x: "Totaal", y: 7},
      {x: "Één keer per week of vaker", y: 3},
      {x: "Twee tot drie keer per maand", y: 7},
      {x: "Één keer per maand", y: 4},
      {x: "Minder dan één keer per maand", y: 9},
      {x: "Zelden of nooit", y: 7}
    ]
  },
  {
    key: "ChristenUnie",
    color: "#75C9E0",
    values:
    [
      {x: "Totaal", y: 2},
      {x: "Één keer per week of vaker", y: 21},
      {x: "Twee tot drie keer per maand", y: 14},
      {x: "Één keer per maand", y: 1},
      {x: "Minder dan één keer per maand", y: 0},
      {x: "Zelden of nooit", y: 1}
    ]
  },
  {
    key: "PVV",
    color: "#a6a7a9",
    values:
    [
      {x: "Totaal", y: 12},
      {x: "Één keer per week of vaker", y: 3},
      {x: "Twee tot drie keer per maand", y: 0},
      {x: "Één keer per maand", y: 6},
      {x: "Minder dan één keer per maand", y: 11},
      {x: "Zelden of nooit", y: 12}
    ]
  },
  {
    key: "D66",
    color: "#01AF40",
    values:
    [
      {x: "Totaal", y: 5},
      {x: "Één keer per week of vaker", y: 0},
      {x: "Twee tot drie keer per maand", y: 3},
      {x: "Één keer per maand", y: 1},
      {x: "Minder dan één keer per maand", y: 2},
      {x: "Zelden of nooit", y: 5}
    ]
  },
  {
    key: "Overige politieke partijen",
    color: "#f2c42e",
    values:
    [
      {x: "Totaal", y: 3},
      {x: "Één keer per week of vaker", y: 13},
      {x: "Twee tot drie keer per maand", y: 2},
      {x: "Één keer per maand", y: 3},
      {x: "Minder dan één keer per maand", y: 1},
      {x: "Zelden of nooit", y: 1}
    ]
  },
  {
    key: "Niet gestemd",
    disabled: true,
    color: "#634f0b",
    values:
    [
      {x: "Totaal", y: 25},
      {x: "Één keer per week of vaker", y: 10},
      {x: "Twee tot drie keer per maand", y: 15},
      {x: "Één keer per maand", y: 22},
      {x: "Minder dan één keer per maand", y: 19},
      {x: "Zelden of nooit", y: 28}
    ]
  }
  
  ]).transition().duration(500).call(chart);

  $('#chart-title').html('<h4>Stemgedrag naar kerkbezoek <div class="btn-group" role="group"><button onclick="kerkbezoek2006()" type="button" class="btn btn-sm btn-secondary">2006</button><button onclick="kerkbezoek2010()" type="button" class="btn btn-sm btn-secondary active">2010</button><button onclick="kerkbezoek2012()" type="button" class="btn btn-sm btn-secondary">2012</button></div></h4>');

}