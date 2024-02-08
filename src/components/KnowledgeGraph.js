import React, { useRef, useEffect } from 'react';
import cytoscape from 'cytoscape';

function KnowledgeGraph() {
  const cyRef = useRef(null);

  useEffect(() => {
    let cy;
    if (cyRef.current) {
      cy = cytoscape({
        container: cyRef.current,
        elements: [
          // Nodes for algebra concepts
          { data: { id: 'algebra', label: 'Algebra' } },
          { data: { id: 'equations', label: 'Equations' } },
          { data: { id: 'functions', label: 'Functions' } },
          { data: { id: 'variables', label: 'Variables' } },
          { data: { id: 'inequalities', label: 'Inequalities' } },
          { data: { id: 'graphs', label: 'Graphs' } },
          { data: { id: 'linearEquations', label: 'Linear Equations' } },
          { data: { id: 'quadraticEquations', label: 'Quadratic Equations' } },
          { data: { id: 'polynomials', label: 'Polynomials' } },

          // Edges showing relationships
          { data: { source: 'algebra', target: 'equations' } },
          { data: { source: 'equations', target: 'variables' } },
          { data: { source: 'equations', target: 'linearEquations' } },
          { data: { source: 'equations', target: 'quadraticEquations' } },
          { data: { source: 'algebra', target: 'functions' } },
          { data: { source: 'functions', target: 'graphs' } },
          { data: { source: 'algebra', target: 'polynomials' } },
          { data: { source: 'polynomials', target: 'variables' } },
          { data: { source: 'inequalities', target: 'graphs' } },
        ],
        style: [
          {
            selector: 'node',
            style: {
              'background-color': '#4caf50', // default/base green for nodes
              'label': 'data(label)',
              'text-valign': 'center',
              'color': '#1b5e20', // darkest green for text
              'text-outline-width': 1,
              'text-outline-color': '#c8e6c9', // white outline for better visibility
              'border-color': '#2e7d32', // slightly darker green for border
              'border-width': 2
            }
          },
          {
            selector: 'edge',
            style: {
              'width': 2,
              'line-color': '#2e7d32', // lighter green for edges
              'target-arrow-color': '#66bb6a',
              'target-arrow-shape': 'triangle',
              'curve-style': 'bezier',
              'label': 'data(label)',
              'color': '#1b5e20', // darkest green for edge labels
              'text-outline-color': '#ffffff',
              'text-outline-width': 1
            }
          }
        ],
        // Layout will be initialized separately
      });

      // Initialize and run the layout
      const layout = cy.layout({ name: 'cose' });
      layout.run();
    }

    // Cleanup function for the Cytoscape instance
    return () => {
      if (cy) {
        cy.destroy();
      }
    };
  }, []);

  return <div ref={cyRef} style={{ width: '1000px', height: '600px' }} />;
}

export default KnowledgeGraph;
