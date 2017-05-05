var dataset = [1, 1, 3, 1, 2, 1, 1, 1];

let colors = ['#9e0142', '#d53e4f', '#f46d43', '#fdae61', '#fee08b', '#e6f598', '#abdda4', '#66c2a5'];
//, '#3288bd', '#5e4fa2'
var ajax = {};
ajax.x = function () {
    if (typeof XMLHttpRequest !== 'undefined') {
        return new XMLHttpRequest();
    }
    var versions = [
        "MSXML2.XmlHttp.6.0",
        "MSXML2.XmlHttp.5.0",
        "MSXML2.XmlHttp.4.0",
        "MSXML2.XmlHttp.3.0",
        "MSXML2.XmlHttp.2.0",
        "Microsoft.XmlHttp"
    ];

    var xhr;
    for (var i = 0; i < versions.length; i++) {
        try {
            xhr = new ActiveXObject(versions[i]);
            break;
        } catch (e) {
        }
    }
    return xhr;
};

ajax.send = function (url, callback, method, data, async) {
    if (async === undefined) {
        async = true;
    }
    var x = ajax.x();
    x.open(method, url, async);
    x.onreadystatechange = function () {
        if (x.readyState == 4) {
            callback(x.responseText)
        }
    };
    if (method == 'POST') {
        x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    }
    x.send(data)
};

ajax.get = function (url, data, callback, async) {
    var query = [];
    for (var key in data) {
        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
    }
    ajax.send(url + (query.length ? '?' + query.join('&') : ''), callback, 'GET', null, async)
};

ajax.post = function (url, data, callback, async) {
    var query = [];
    for (var key in data) {
        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
    }
    ajax.send(url, callback, 'POST', query.join('&'), async)
};
ajax.get( 'https://rawgit.com/mohseenrm/mohseenrm.github.io/master/stats.json', {}, ( response ) => {
	console.log( response );
	response = JSON.parse( response );
	console.log( response[ "JavaScript" ] );
	dataset = [ response['JavaScript'], response[ 'Python' ], response[ 'Sass' ], response[ 'TypeScript' ], response[ 'CSS' ], response[ 'C' ], response[ 'Java' ], response[ 'JSX' ] ];
	draw();
});

/**
 * Credits: http://codepen.io/Siddharth11/pen/LVQmjN
 * Author: Siddharth Parmar
 */
const width = document.querySelector('.chart-wrapper').offsetWidth,
  height = document.querySelector('.chart-wrapper').offsetHeight,
  minOfWH = Math.min(width, height) / 2,
  initialAnimDelay = 300,
  arcAnimDelay = 150,
  arcAnimDur = 3000,
  secDur = 1000,
  secIndividualdelay = 150

let radius

// calculate minimum of width and height to set chart radius
if (minOfWH > 200) {
  radius = 200
} else {
  radius = minOfWH
}

// append svg
let svg = d3.select('.chart-wrapper').append('svg')
  .attr({
    'width': width,
    'height': height,
    'class': 'pieChart'
  })
  .append('g')

svg.attr({
  'transform': `translate(${width / 2}, ${height / 2})`
});

// for drawing slices
let arc = d3.svg.arc()
  .outerRadius(radius * 0.6)
  .innerRadius(radius * 0.45)

// for labels and polylines
let outerArc = d3.svg.arc()
  .innerRadius(radius * 0.85)
  .outerRadius(radius * 0.85)

// d3 color generator
// let c10 = d3.scale.category10();

let pie = d3.layout.pie()
  .value(d => d)

let draw = function() {

  svg.append("g").attr("class", "lines")
  svg.append("g").attr("class", "slices")
  svg.append("g").attr("class", "labels")

  // define slice
  let slice = svg.select('.slices')
    .datum(dataset)
    .selectAll('path')
    .data(pie)
  slice
    .enter().append('path')
    .attr({
      'fill': (d, i) => colors[i],
      'd': arc,
      'stroke-width': '25px'
    })
    .attr('transform', (d, i) => 'rotate(-180, 0, 0)')
    .style('opacity', 0)
    .transition()
    .delay((d, i) => (i * arcAnimDelay) + initialAnimDelay)
    .duration(arcAnimDur)
    .ease('elastic')
    .style('opacity', 1)
    .attr('transform', 'rotate(0,0,0)')

  slice.transition()
    .delay((d, i) => arcAnimDur + (i * secIndividualdelay))
    .duration(secDur)
    .attr('stroke-width', '5px')

  let midAngle = d => d.startAngle + (d.endAngle - d.startAngle) / 2

  let text = svg.select(".labels").selectAll("text")
    .data(pie(dataset))

  text.enter()
    .append('text')
    .attr('dy', '0.35em')
    .style("opacity", 0)
    .style('fill', (d, i) => colors[i])
    .text((d, i) => colors[i])
    .attr('transform', d => {
      // calculate outerArc centroid for 'this' slice
      let pos = outerArc.centroid(d)
      // define left and right alignment of text labels 							
      pos[0] = radius * (midAngle(d) < Math.PI ? 1 : -1)
      return `translate(${pos})`
    })
    .style('text-anchor', d => midAngle(d) < Math.PI ? "start" : "end")
    .transition()
    .delay((d, i) => arcAnimDur + (i * secIndividualdelay))
    .duration(secDur)
    .style('opacity', 1)

  let polyline = svg.select(".lines").selectAll("polyline")
    .data(pie(dataset))

  polyline.enter()
    .append("polyline")
    .style("opacity", 0.5)
    .attr('points', d => {
      let pos = outerArc.centroid(d)
      pos[0] = radius * 0.95 * (midAngle(d) < Math.PI ? 1 : -1)
      return [arc.centroid(d), arc.centroid(d), arc.centroid(d)]
    })
    .transition()
    .duration(secDur)
    .delay((d, i) => arcAnimDur + (i * secIndividualdelay))
    .attr('points', d => {
      let pos = outerArc.centroid(d)
      pos[0] = radius * 0.95 * (midAngle(d) < Math.PI ? 1 : -1)
      return [arc.centroid(d), outerArc.centroid(d), pos]
    })
}

// draw();

// let button = document.querySelector('button');

// let replay = () => {

//   d3.selectAll('.slices').transition().ease('back').duration(500).delay(0).style('opacity', 0).attr('transform', 'translate(0, 250)').remove()
//   d3.selectAll('.lines').transition().ease('back').duration(500).delay(100).style('opacity', 0).attr('transform', 'translate(0, 250)').remove()
//   d3.selectAll('.labels').transition().ease('back').duration(500).delay(200).style('opacity', 0).attr('transform', 'translate(0, 250)').remove()

//   setTimeout(draw, 800)

// }