const menuContainer = document.querySelector("#content");

const COCKTAILS = [
    ['THE ORIGINAL MAI THAI', 'rum, gold rum, dark rum, triple sec, fresh lime, orgeat syrup'],
    ['HIGH SOCIETY', 'gin, campari, archers, lime, fresh grapefruit'],
    ['SEX ON THE BEACH', 'vodka, archers, orange, cranberry'],
    ['MINT JULEP', 'bourbon, mint, sugar'],
    ['AVIATION', 'gin, maraschino, violet, fresh lemon'],
    ['ESPRESSO MARTINI', 'vodka, kahlúa, espresso'],
    ['LONG ISLAND ICE TEA', 'gin, rum, vodka, tequila, cointreau, lime, cola'],
    ['APEROL SPRITZ', 'aperol, sparkling wine, soda water'],
    ['HUGO', 'elderflower liquer, sparkling wine, soda water'],
    ['MOSCOW MULE', 'vodka, ginger beer, fresh lime'],
    ['MIMOSA', 'champagne, orange juice'],
    ['KIR ROYALE', 'champagne, crème de cassis']
];

const createTableData = (cocktailData) => {
    const tableData = document.createElement("td");
    tableData.textContent = cocktailData;
    return tableData;
}

const createTableRow = (cocktail) => {
    const tableRow = document.createElement("tr");
    tableRow.appendChild(createTableData(cocktail[0]));
    tableRow.appendChild(createTableData(cocktail[1]));
    return tableRow;
}

const fillMenuItems = menuTable => {
    COCKTAILS.forEach(cocktail => {
        menuTable.appendChild(createTableRow(cocktail));
    });
}

const createMenuHeadings = (menuTable) => {
    const tableRow = document.createElement("tr");
    const tableHeadingCocktail = document.createElement("th");
    const tableHeadingIngredients = document.createElement("th");

    tableHeadingCocktail.textContent = "Cocktail";
    tableHeadingIngredients.textContent = "Ingredients";

    tableRow.appendChild(tableHeadingCocktail);
    tableRow.appendChild(tableHeadingIngredients);

    menuTable.appendChild(tableRow);
}

const createMenuTable = () => {
    const menuTable = document.createElement("table");
    menuTable.classList.add("menu-table");
    createMenuHeadings(menuTable);
    fillMenuItems(menuTable);

    return menuTable;
}

const createMenuImg = () => {
    const img = document.createElement("img");
    img.setAttribute("src", "assets/cocktail2.jpg");

    return img;
}

const createMenuDisplay = () => {
    const container = document.createElement("div");
    container.classList.add("menu-container");

    const menuTable = createMenuTable();
    const menuImg = createMenuImg();
    container.appendChild(menuImg);
    container.appendChild(menuTable);

    menuContainer.classList.add("backdrop");
    menuContainer.innerHTML = '';
    menuContainer.appendChild(container);
}

export default createMenuDisplay;

