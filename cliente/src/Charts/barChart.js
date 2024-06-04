import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BarChart = ({ data, collection }) => {
    console.log(data);
    const svgRef = useRef();

    useEffect(() => {
        const svg = d3.select(svgRef.current);
        const width = 1100;
        const height = 500;
        const margin = { top: 20, right: 30, bottom: 30, left: 40 };

        svg.selectAll('*').remove();

        svg.append('text')
            .attr('x', width / 2)
            .attr('y', margin.top / 2 + 10)
            .attr('text-anchor', 'middle')
            .style('font-size', '16px')
            .style('font-weight', 'bold')
            .text('Diagrama de Barras ' + collection);

        const x = d3.scaleBand()
            .domain(data.map(d => d.name))
            .range([margin.left, width - margin.right])
            .padding(0.1);

        const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.value)]).nice()
            .range([height - margin.bottom, margin.top]);

        svg.append('g')
            .attr('transform', `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(x).tickSizeOuter(0));

        svg.append('g')
            .attr('transform', `translate(${margin.left},0)`)
            .call(d3.axisLeft(y));

        svg.append('g')
            .selectAll('rect')
            .data(data)
            .join('rect')
            .attr('x', d => x(d.name))
            .attr('y', d => y(d.value))
            .attr('height', d => y(0) - y(d.value))
            .attr('width', x.bandwidth());
    }, [collection, data]);

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <svg ref={svgRef} width="1100" height="510" style={{ backgroundColor: '#f0f0f0', margin:"1rem" }}></svg>
        </div>
    );
};

export default BarChart;
