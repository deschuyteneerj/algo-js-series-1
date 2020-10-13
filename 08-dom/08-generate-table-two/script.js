// 08-dom/08-generate-table-two/script.js - 8.8: creating a table (2)

(() => {
    let tab = document.createElement("table");

    for (let i = 0; i < 10; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < 10; j++) {
            let td = document.createElement("td");
            td.innerHTML = `${j + 1}*${i + 1}=${(i + 1) * (j + 1)}`;
            tr.appendChild(td);
        }
        tab.appendChild(tr);
    }

    document.getElementById("target").appendChild(tab);

})();
