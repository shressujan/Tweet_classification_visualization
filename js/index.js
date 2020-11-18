nbc = {'accuracy': 0.900, 'precision': 0.861, 'recall': 0.720, 'f1_score': 0.784};
svm = {'accuracy': 0.898, 'precision': 0.921, 'recall': 0.643, 'f1_score': 0.757};
lg = {'accuracy': 0.913, 'precision': 0.978, 'recall': 0.628, 'f1_score': 0.772};

data = {'naive bayes': nbc, 'support vector machine': svm, 'logistic regression': lg}

nbc_full = {
    'uni_X_train_lemma': 0.717,
    'uni_X_train_stemm': 0.803,
    'uni_X_train_lemma_stemm': 0.799,
    'bi_X_train_lemma': 0.861,
    'bi_X_train_stemm': 0.900,
    'bi_X_train_lemma_stemm': 0.799,
    'tfidf_X_train_lemma': 0.639,
    'tfidf_X_train_stemm': 0.628,
    'tfidf_X_train_lemma_stemm': 0.629,
    'w2v_X_train_lemma': 0.614,
    'w2v_X_train_stemm': 0.621,
    'w2v_X_train_lemma_stemm': 0.618,
    'd2v_X_train_lemma': 0.750,
    'd2v_X_train_stemm': 0.753,
    'd2v_X_train_lemma_stemm': 0.744
}

nbc_data = [];

Object.entries(nbc_full).forEach(entry => nbc_data.push({'feature': entry[0], 'value': entry[1]}));


svm_full = {
    'uni_X_train_lemma': 0.863,
    'uni_X_train_stemm': 0.866,
    'uni_X_train_lemma_stemm': 0.867,
    'bi_X_train_lemma': 0.889,
    'bi_X_train_stemm': 0.898,
    'bi_X_train_lemma_stemm': 0.867,
    'tfidf_X_train_lemma': 0.868,
    'tfidf_X_train_stemm': 0.865,
    'tfidf_X_train_lemma_stemm': 0.867,
    'w2v_X_train_lemma': 0.794,
    'w2v_X_train_stemm': 0.765,
    'w2v_X_train_lemma_stemm': 0.618,
    'd2v_X_train_lemma': 0.756,
    'd2v_X_train_stemm': 0.794,
    'd2v_X_train_lemma_stemm': 0.755
}

svm_data = [];
Object.entries(svm_full).forEach(entry => svm_data.push({'feature': entry[0], 'value': entry[1]}));


lg_full = {
    'uni_X_train_lemma': 0.917,
    'uni_X_train_stemm': 0.908,
    'uni_X_train_lemma_stemm': 0.910,
    'bi_X_train_lemma': 0.913,
    'bi_X_train_stemm': 0.912,
    'bi_X_train_lemma_stemm': 0.910,
    'tfidf_X_train_lemma': 0.802,
    'tfidf_X_train_stemm': 0.804,
    'tfidf_X_train_lemma_stemm': 0.805,
    'w2v_X_train_lemma': 0.850,
    'w2v_X_train_stemm': 0.858,
    'w2v_X_train_lemma_stemm': 0.857,
    'd2v_X_train_lemma': 0.854,
    'd2v_X_train_stemm': 0.847,
    'd2v_X_train_lemma_stemm': 0.849
}

lg_data = [];
Object.entries(lg_full).forEach(entry => lg_data.push({'feature': entry[0], 'value': entry[1]}));

draw_nbc_chart();
draw_svm_chart();
draw_lg_chart();
draw_comparison_chart();

function draw_nbc_chart(){
    /* removes any earlier graph component  */
    d3.select('#nbc')
        .select('g')
        .remove();

    /* Set the dimensions for the graph. */
    const margin = {top: 100, right: 130, bottom: 100, left: 100};
    const width = 1850 - (margin.left / 2) - (margin.right / 2);
    const height = 670 - (margin.top /2) - (margin.bottom / 2);

    const svg =  d3.select('#nbc')
        .attr('width', '2000')
        .attr('height', '770');

    const g =  svg.append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');


    const x = d3.scaleBand()
        .domain(nbc_data.map(d => d.feature))
        .range([0, width]);

    g.append('g')
        .attr('transform', 'translate(0,' + height + ')')
        .call(d3.axisBottom(x));


    const maxY = 1;
    const y = d3.scaleLinear()
        .range([height, 0])
        .domain([0, maxY]);

    g.append('g')
        .call(d3.axisLeft(y))

    const line = d3.line()
        .x(d => x(d.feature) + 55) // set the x values for the line generator
        .y(d => y(d.value)); // set the y values for the line generator


    /* Adding lines in the chart */
    g.append('path')
        .datum(nbc_data)
        .attr('class', 'line')
        .attr('d', line);

    /* Adding circles in the chart */
    g.selectAll('.dot')
        .data(nbc_data)
        .enter().append('circle')
        .attr('class', 'dot')
        .attr('cx', d => x(d.feature) + 55)
        .attr('cy', d => y(d.value))
        .attr('r', 5);

}

function draw_svm_chart(){
    /* removes any earlier graph component  */
    d3.select('#svm')
        .select('g')
        .remove();

    /* Set the dimensions for the graph. */
    const margin = {top: 100, right: 130, bottom: 100, left: 100};
    const width = 1850 - (margin.left / 2) - (margin.right / 2);
    const height = 670 - (margin.top /2) - (margin.bottom / 2);

    const svg =  d3.select('#svm')
        .attr('width', '2000')
        .attr('height', '770');

    const g =  svg.append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');


    const x = d3.scaleBand()
        .domain(nbc_data.map(d => d.feature))
        .range([0, width]);

    g.append('g')
        .attr('transform', 'translate(0,' + height + ')')
        .call(d3.axisBottom(x));


    const maxY = 1;
    const y = d3.scaleLinear()
        .range([height, 0])
        .domain([0, maxY]);

    g.append('g')
        .call(d3.axisLeft(y))

    const line = d3.line()
        .x(d => x(d.feature) + 55) // set the x values for the line generator
        .y(d => y(d.value)); // set the y values for the line generator


    /* Adding lines in the chart */
    g.append('path')
        .datum(nbc_data)
        .attr('class', 'line')
        .attr('d', line);

    /* Adding circles in the chart */
    g.selectAll('.dot')
        .data(nbc_data)
        .enter().append('circle')
        .attr('class', 'dot')
        .attr('cx', d => x(d.feature) + 55)
        .attr('cy', d => y(d.value))
        .attr('r', 5);
}

function draw_lg_chart(){
    /* removes any earlier graph component  */
    d3.select('#lg')
        .select('g')
        .remove();

    /* Set the dimensions for the graph. */
    const margin = {top: 100, right: 130, bottom: 100, left: 100};
    const width = 1850 - (margin.left / 2) - (margin.right / 2);
    const height = 670 - (margin.top /2) - (margin.bottom / 2);

    const svg =  d3.select('#lg')
        .attr('width', '2000')
        .attr('height', '770');

    const g =  svg.append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');


    const x = d3.scaleBand()
        .domain(nbc_data.map(d => d.feature))
        .range([0, width]);

    g.append('g')
        .attr('transform', 'translate(0,' + height + ')')
        .call(d3.axisBottom(x));


    const maxY = 1;
    const y = d3.scaleLinear()
        .range([height, 0])
        .domain([0, maxY]);

    g.append('g')
        .call(d3.axisLeft(y))

    const line = d3.line()
        .x(d => x(d.feature) + 55) // set the x values for the line generator
        .y(d => y(d.value)); // set the y values for the line generator


    /* Adding lines in the chart */
    g.append('path')
        .datum(lg_data)
        .attr('class', 'line')
        .attr('d', line);

    /* Adding circles in the chart */
    g.selectAll('.dot')
        .data(lg_data)
        .enter().append('circle')
        .attr('class', 'dot')
        .attr('cx', d => x(d.feature) + 55)
        .attr('cy', d => y(d.value))
        .attr('r', 5);
}

function draw_comparison_chart() {

    /* removes any earlier graph component  */
    d3.select('#result')
        .select('g')
        .remove();

    /* Set the dimensions for the graph. */
    const margin = {top: 100, right: 130, bottom: 100, left: 300};
    const width = 1200 - (margin.left / 2) - (margin.right / 2);
    const height = 470 - (margin.top /2) - (margin.bottom / 2);

    const svg =  d3.select('#result')
        .attr('width', '1500')
        .attr('height', '570');

    const g =  svg.append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    const models = d3.keys(data);

    const x = d3.scaleBand()
        .domain(models)
        .rangeRound([0, width])
        .paddingInner(0.25);

    g.append('g')
        .attr('transform', 'translate(0,' + height + ')')
        .call(d3.axisBottom(x));

    const subgroups = ['accuracy', 'precision', 'recall', 'f1_score'];
    const xSub = d3.scaleBand()
        .domain(subgroups)
        .rangeRound([0, x.bandwidth()])
        .padding(0.05);

    const maxY = 1;
    const y = d3.scaleLinear()
        .range([height, 0])
        .domain([0, maxY]);

    g.append('g')
        .call(d3.axisLeft(y))

    const color = d3.scaleOrdinal()
        .domain(subgroups)
        .range(['#98abc5', '#8a89a6', '#7b6888', '#6b486b']);

    const tooltip = d3.tip()
        .attr('class', 'd3-tip')
        .html(d => {
            // @ts-ignore
            return d.values;
        });
    g.call(tooltip);

    /* Adding legend */
    const legend = g.selectAll('.legend')
        .data(subgroups)
        .enter()
        .append('g');

    legend.append('rect')
        // @ts-ignore
        .attr('fill', color)
        .attr('width', 20)
        .attr('height', 20)
        // tslint:disable-next-line:only-arrow-functions
        .attr('y', function(d, i) {
            return i * 25 - 100;
        })
        .attr('x', width + 70);

    legend.append('text')
        .attr('class', 'label')
        // tslint:disable-next-line:only-arrow-functions
        .attr('y', function(d, i) {
            return i * 25 + 14 - 100;
        })
        .attr('x', width + 93)
        .attr('text-anchor', 'start')
        // tslint:disable-next-line:only-arrow-functions
        .text(function(d, i) {
            return subgroups[i];
        });

    /* Adding bars in the chart */
    g.append('g')
        .selectAll('g')
        .data(d3.entries(data))
        .enter().append('g')
        .attr('transform', d => 'translate(' + x(d.key) + ',0)')
        .selectAll('rect')
        .data(d => subgroups.map(key => ({category: key, values: d.value[key]})))
        .enter().append('rect')
        .attr('class', 'bars')
        .attr('x', d => xSub(d.category))
        .attr('width', xSub.bandwidth())
        .attr('y', d => y(d.values))
        .attr('height', d => height - y(d.values))
        // @ts-ignore
        .attr('fill', d => color(d.category))
        // tslint:disable-next-line:only-arrow-functions
        .on('mouseover', function(d) {
            tooltip.show(d, this);
        })
        .on('mouseout', function(d) {
            tooltip.hide(d, this);
        });
}
