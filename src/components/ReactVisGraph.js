import React from 'react';
import Graph from 'react-vis-network-graph';

export default function GraphView() {
    const graph = {
        nodes: [
            {id: 1, label: "Variables", title: "Variables: Represent quantities that can change", shape: "box", color: {background: "#a3c2a4", border: "#5c8b5b"}},
            {id: 2, label: "Expressions", title: "Expressions: Combinations of variables and constants", shape: "circle", color: {background: "#a3c2a4", border: "#5c8b5b"}},
            {id: 3, label: "Equations", title: "Equations: Statements that two expressions are equal", shape: "diamond", color: {background: "#a3c2a4", border: "#5c8b5b"}},
            {id: 4, label: "Functions", title: "Functions: Relations that assign exactly one output for each input", shape: "star", color: {background: "#a3c2a4", border: "#5c8b5b"}},
            {id: 5, label: "Linear Equations", title: "Linear Equations: Equations that graph as straight lines", color: {background: "#a3c2a4", border: "#5c8b5b"}},
            {id: 6, label: "Systems of Equations", title: "Systems of Equations: Sets of equations with multiple variables", color: {background: "#a3c2a4", border: "#5c8b5b"}},
            {id: 7, label: "Inequalities", title: "Inequalities: Expressions that define a range of values", color: {background: "#a3c2a4", border: "#5c8b5b"}},
            {id: 8, label: "Polynomials", title: "Polynomials: Expressions involving sums of powers of variables", color: {background: "#a3c2a4", border: "#5c8b5b"}},
            {id: 9, label: "Factoring", title: "Factoring: Breaking down a polynomial into simpler terms", color: {background: "#a3c2a4", border: "#5c8b5b"}}
        ],
        edges: [
            {from: 1, to: 2, smooth: {type: "curvedCW"}, arrows: {from: {enabled: true, type: "circle"}, to: {enabled: true, type: "circle"}}, color: "#4caf50"},
            {from: 2, to: 3, arrows: {from: {enabled: true, type: "vee"}, to: {enabled: true, type: "vee"}}, color: "#4caf50"},
            {from: 3, to: 4, arrows: {to: {enabled: true, type: "curve"}}, color: "#4caf50"},
            {from: 4, to: 5, color: {color: "#4caf50", highlight: "#81c784", opacity: 0.5}},
            {from: 5, to: 6, color: "#4caf50"},
            {from: 6, to: 7, color: "#4caf50"},
            {from: 7, to: 8, color: "#4caf50"},
            {from: 8, to: 9, color: "#4caf50"},
            {from: 9, to: 3, color: "#4caf50"},
            {from: 3, to: 7, color: "#4caf50"},
            {from: 2, to: 8, color: "#4caf50"}
        ]
    };

    const options = {
        physics: {
            enabled: false
        },
        interaction: {
            navigationButtons: true
        },
        nodes: {
            borderWidth: 2,
            size: 30,
            color: {
                border: "#5c8b5b",
                background: "#a3c2a4"
            },
            font: {color: "#3e4b47"}
        },
        edges: {
            color: "#4caf50",
            smooth: true
        },
        shadow: true,
        height: "900px"
    };
    return (
        <div className='container'>
            <Graph 
                graph={graph}
                options={options}
        />
    </div>
  )
}