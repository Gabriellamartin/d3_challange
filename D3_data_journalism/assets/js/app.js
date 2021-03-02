// http://bl.ocks.org/bunkat/2595950 for my basic D3 code

var data = [[38.6,21.1], [33.3,19.9], [36.9,16.5], [37.8,24.7], [36,12.9], [36.3,	15.7], [40.5,15.4], [39.6, 19.9], [33.8	, 16.4], [41.6, 17.7], [36.1	, 17.4], [38.1,	14.1], [35.9,	15.9], [37.5,	16.5], [37.4,	22.9], [38.2,	18.5], [36.2,	18.1], [38.5,	26.2], [36.1,	24], [44.1,	19.3], [38.3,	14.6], [39.4,	14.7], [39.6,	21.2], [37.8,	16.3], [36.7,	23], [38.5,	20.6], [39.6,	19.9], [36.2,	17.3], [37.4,	17], [42.5,	17.5], [39.4,	15.1], [37.2,	19.2], [38.2,	14.4], [38.3,	19.1], [35.1,	19.9], [39.4,	21],[36.2,	21.1], [39.3,	17], [40.7,	19.9], [39.8,	16.3], [38.8,	21.5], [36.6,	18.6], [38.6,	24.2], [34.3,	14.5], [30.5,	9.7], [42.8	,16.4],[37.7,	19.5], [37.5,	15.3], [41.9,	26.7], [39.2,	17.4], [36.6,	19.5]];
   
    var margin = {top: 20, right: 15, bottom: 60, left: 60}
      , width = 1060 - margin.left - margin.right
      , height = 600 - margin.top - margin.bottom;
    
    var x = d3.scale.linear()
              .domain([0, d3.max(data, function(d) { return d[0]; })])
              .range([ 0, width ]);
    
    var y = d3.scale.linear()
    	      .domain([0, d3.max(data, function(d) { return d[1]; })])
    	      .range([ height, 0 ]);
 
    var chart = d3.select('body')
	.append('svg:svg')
	.attr('width', width + margin.right + margin.left)
	.attr('height', height + margin.top + margin.bottom)
	.attr('class', 'chart')

    var main = chart.append('g')
	.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
	.attr('width', width)
	.attr('height', height)
	.attr('class', 'main')   
        
    // draw the x axis
    var xAxis = d3.svg.axis()
    .scale(x)
	.orient('bottom');

    main.append('g')
	.attr('transform', 'translate(0,' + height + ')')
	.attr('class', 'main axis date')
	.call(xAxis);

    // draw the y axis
    var yAxis = d3.svg.axis()
	.scale(y)
	.orient('left');

    main.append('g')
	.attr('transform', 'translate(0,0)')
	.attr('class', 'main axis date')
	.call(yAxis);

    var g = main.append("svg:g"); 
    
    g.selectAll("scatter-dots")
      .data(data)
      .enter().append("svg:circle")
          .attr("cx", function (d,i) { return x(d[0]); } )
          .attr("cy", function (d) { return y(d[1]); } )
          .attr("r", 8);