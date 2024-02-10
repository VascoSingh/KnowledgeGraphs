import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

function DynamicTreeGraph() {
  const [data, setData] = useState(null);
  const svgRef = useRef();

  // Fetch data and initialize
  useEffect(() => {
    // Simulate fetching data. Replace this with actual fetch call or import.
    const jsonData = {
      name: "Root",
      children: [
        {
          name: "Branch 1",
          children: [
            { name: "Leaf 1" },
            { name: "Leaf 2" }
          ],
        },
        {
          name: "Branch 2",
          children: [
            { name: "Leaf 3" },
            { name: "Leaf 4" }
          ],
        },
      ],
    };
    setData(jsonData);
  }, []);

  useEffect(() => {
    if (data) {
      const margin = {top: 20, right: 120, bottom: 20, left: 120};
      const width = 960 - margin.right - margin.left;
      const height = 800 - margin.top - margin.bottom;
      
      // Clear the SVG to prevent duplication
      d3.select(svgRef.current).selectAll("*").remove();

      const svg = d3.select(svgRef.current)
        .style("width", "100%")
        .style("height", "100%")
        .attr("viewBox", `0 0 ${width + margin.right + margin.left} ${height + margin.top + margin.bottom}`)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
      
      const root = d3.hierarchy(data);
      const treeLayout = d3.tree().size([height, width]);
      treeLayout(root);

      // Links
      const links = svg.selectAll(".link")
        .data(root.links())
        .enter().append("path")
        .attr("class", "link")
        .attr("d", d3.linkHorizontal()
          .x(d => d.y)
          .y(d => d.x))
        .style("fill", "none")
        .style("stroke", "#ccc");

      // Nodes
    const nodes = svg.selectAll(".node")
    .data(root.descendants())
    .enter().append("g")
    .attr("class", "node")
    .attr("transform", d => `translate(${d.y},${d.x})`)
    .on('mouseover', function(event, d) {
      // Highlight the node
      d3.select(this).select('circle')
        .style("fill", "#1b5e20");

      // Optional: Show more interaction or information about the node
      // For example, you could display the node's name or other data in a tooltip or elsewhere in your UI
    })
    .on('mouseout', function(event, d) {
      // Revert to the original fill color when no longer hovering
      d3.select(this).select('circle')
        .style("fill", "#2e7d32");
    });

  nodes.append("circle")
    .attr("r", 10)
    .style("fill", "#2e7d32");

  nodes.append("text")
    .attr("dy", ".35em")
    .attr("x", d => d.children ? -13 : 13)
    .style("text-anchor", d => d.children ? "end" : "start")
    .text(d => d.data.name);
    }
  }, [data]);

  return <svg ref={svgRef}></svg>;
}

export default DynamicTreeGraph;

//https://www.youtube.com/watch?v=szc4KlykGl0&ab_channel=InteractiveData