const dims = { 
    width: 300,
    height: 300,
    radius: 150
}
const cent = { 
    x: dims.width / 2 + 5,
    y: dims.height / 2 + 5
}

const svg = d3.select('.canvas')
    .append('svg')
    .attr('width', dims.width + 150)
    .attr('height', dims.height + 150);

const graph = svg.append('g')
    .attr('transform', `translate(${cent.x},${cent.y})`);