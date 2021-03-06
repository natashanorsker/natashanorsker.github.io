var width = 960,
    height = 500,
    radius = 6;

var fill = d3.scale.category20();

var force = d3.layout.force()
    .charge(-120)
    .linkDistance(30)
    .size([width, height]);

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

d3.json("graph.json", function(error, json) {
  if (error) throw error;

  var link = svg.selectAll("line")
      .data(json.links)
    .enter().append("line");

  var node = svg.selectAll("circle")
      .data(json.nodes)
    .enter().append("circle")
      .attr("r", radius - .75)
      .style("fill", function(d) { return fill(d.group); })
      .style("stroke", function(d) { return d3.rgb(fill(d.group)).darker(); })
      .call(force.drag);

  force
      .nodes(json.nodes)
      .links(json.links)
      .on("tick", tick)
      .start();

  function tick(e) {
    var k = 6 * e.alpha;

    // Push sources up and targets down to form a weak tree.
    link
        .each(function(d) { d.source.y -= k, d.target.y += k; })
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
        
  }
});