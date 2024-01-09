
// using d3 for convenience
var main = d3.select("main");
var figure = main.select("#group-1 figure");
var figure2 = main.select("#group-2 figure");
var figure3 = main.select("#group-3 figure");
var article = main.select("article");
var step = article.selectAll(".step");

// initialize the scrollama
var scroller = scrollama();

// generic window resize listener event
function handleResize() {
    // 1. update height of step elements
    var stepH = Math.floor(window.innerHeight * 0.75);
    step.style("height", stepH + "px");

    var figureHeight = window.innerHeight / 1.5;
    var figureMarginTop = (window.innerHeight - figureHeight) / 1.5;

    figure
        // .style("height", "400" + "px")
        .style("height", figureHeight + "px")
        .style("top", figureMarginTop + "px");

    figure.select("#map")
        .style("height", figureHeight + "px")

    figure2
        .style("height", "400" + "px")
        .style("top", figureMarginTop + "px");

    figure3
        .style("height", figureHeight + "px")
        .style("top", figureMarginTop + "px");


    // 3. tell scrollama to update new element dimensions
    scroller.resize();
}

function handleTreeMap(response){
    
    if(response.index == 5){
        data[0]["labels"] = labels_2
        data[0]["parents"] = parents_2
        data[0]["values"] = values_2
        Plotly.redraw('myDiv')
    }
    
    if(response.index == 6){
        data[0]["labels"] = labels
        data[0]["parents"] = parents
        data[0]["values"] = values

        Plotly.redraw('myDiv')
    }
};

function handleMap(response){
    if(response.index === 0){
        if (!map.getLayer("deforestation-layer")) {
            map.addLayer({
                'id': 'deforestation-layer',
                'type': 'circle',
                'source': 'deforestation_circle',
                'paint': {
                    'circle-radius': 1,
                    'circle-stroke-width': 0.5,
                    'circle-color': 'red',
                    'circle-stroke-color': 'white'
                }
            });
        }
    };


    if(response.index === 3){
        map.removeLayer('municipalities-caatinga');
        map.flyTo({
            center: [-41.9868501, -10.542007], 
            zoom: 6,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
        
    };

    if(response.index === 4){
        map.removeLayer('deforestation-layer');
        
        map.flyTo({
            // center: [-41.9868501, -10.542007], 
            center: [-44.6373115, -10.2241827],
            zoom: 9,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
    };

};

// scrollama event handlers
function handleStepEnter(response){
    // response = { element, direction, index }
    // add color to current step only
    step.classed("is-active", function (d, i) {
        return i === response.index;
    });
    
    // update graphic based on step
    // figure.select("p").text(response.index + 1);
    handleTreeMap(response);
    handleMap(response);
};


function init() {

    // 1. force a resize on load to ensure proper dimensions are sent to scrollama
    handleResize();

    // 2. setup the scroller passing options
    // 		this will also initialize trigger observations
    // 3. bind scrollama event handlers (this can be chained like below)
    scroller
        .setup({
            step: "article .step",
            offset: 0.60,
            debug: false
        })
        .onStepEnter(handleStepEnter);
};

// kick things off
init();
