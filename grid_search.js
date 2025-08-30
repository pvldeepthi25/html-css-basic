const jsonToHtmlTable = (json) => {
    // Check if json is an array and not empty
    if (!Array.isArray(json) || json.length === 0 || typeof json[0] !== "object") {
        return "";
    }
    // Function to escape HTML characters
    const escapeHtml = (string) => {
        return String(string).replace(/[&<>"]/g, (s) => {
            return {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
            } [s];
        });
    };
    // Extract keys (columns) from the JSON object
    const keys = Object.keys(json[0]);
    // Create table element
    let table = '<table class="my-table" id="my-table">';
    // Create table header
    table += "<thead><tr>";
    keys.forEach(key => {
        table += '<th>' + escapeHtml(key).toUpperCase() + '</th>';
    });
    table += '</tr></thead>';
    // Create table body
    table += '<tbody>';
    json.forEach(row => {
        table += '<tr>';
        keys.forEach(key => {
            const value = row[key] !== null && row[key] !== undefined ? row[key] : "";
            table += '<td>' + escapeHtml(value) + '</td>';
        });
        table += "</tr>";
    });
    table += '</tbody>';
    // Close table element
    table += '</table>';
    return table;
};


