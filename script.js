// --- Simulated PCA Output Data ---
// In a real application, this data would come from a server (e.g., Python/scikit-learn)
// after running PCA on the high-dimensional dataset.

const simulated_pca_data = [
    // Cluster 1 (e.g., Class 0)
    { pc1: 1.2, pc2: 2.5, group: 'Class A' },
    { pc1: 0.8, pc2: 3.0, group: 'Class A' },
    { pc1: 1.5, pc2: 2.2, group: 'Class A' },
    { pc1: 0.5, pc2: 2.8, group: 'Class A' },
    { pc1: 1.0, pc2: 3.5, group: 'Class A' },

    // Cluster 2 (e.g., Class 1)
    { pc1: -2.0, pc2: -1.0, group: 'Class B' },
    { pc1: -1.5, pc2: -0.5, group: 'Class B' },
    { pc1: -2.5, pc2: -1.5, group: 'Class B' },
    { pc1: -1.8, pc2: -1.2, group: 'Class B' },
    { pc1: -2.3, pc2: -0.8, group: 'Class B' },

    // Cluster 3 (e.g., Class 2)
    { pc1: 3.0, pc2: -1.5, group: 'Class C' },
    { pc1: 2.5, pc2: -2.0, group: 'Class C' },
    { pc1: 3.5, pc2: -1.2, group: 'Class C' },
    { pc1: 2.8, pc2: -1.8, group: 'Class C' },
    { pc1: 3.2, pc2: -2.5, group: 'Class C' },
];

// --- Process Data for Plotly ---
// Group data points by their class (target variable)
const groups = [...new Set(simulated_pca_data.map(d => d.group))];
const data_traces = groups.map(group => {
    const groupData = simulated_pca_data.filter(d => d.group === group);
    return {
        x: groupData.map(d => d.pc1),
        y: groupData.map(d => d.pc2),
        mode: 'markers',
        type: 'scatter',
        name: group,
        marker: { size: 10, opacity: 0.8 }
    };
});


// --- Plotly Layout Configuration ---
const layout = {
    title: 'PCA Projection of Data onto PC1 and PC2',
    xaxis: {
        title: 'Principal Component 1 (PC1)',
        zeroline: false 
    },
    yaxis: {
        title: 'Principal Component 2 (PC2)',
        zeroline: false
    },
    hovermode: 'closest',
    autosize: true
};

// --- Render the Plot ---
Plotly.newPlot('pca-plot', data_traces, layout);

// Note: In a real-world scenario, you would use an AJAX call (fetch API)
// to get the X_pca and Y_target data from your ML backend.