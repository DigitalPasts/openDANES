// to set up the api credentials, follow instructions here:
// https://developers.google.com/sheets/api/quickstart/js
// and/or here:
// https://phppot.com/javascript/google-sheets-javascript/

// Replace with your actual API key and spreadsheet ID

const { apiKey } = require('./variables');
// const apiKey = process.env.API_KEY;
const spreadsheetId = '1WD3KdRPNvbXeaQAusb_MsOStyNha8XnA6Op_CWtD-OQ';
const sheetName = 'Sheet1'; // Change to your desired sheet name

// URL to fetch data from the Google Sheets API
const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`;

const fieldIcons = {
  egyptology: '<i class="fa-solid fa-ankh"></i>',
  assyriology: '<i>𒍣</i>',
  archaeology: '<i class="fa-solid fa-person-digging"></i>',
  'semitic-studies': '𐤀',
  classics: '<i class="fa-solid fa-landmark"></i>'
  // Add more mappings here as needed
};

document.addEventListener('DOMContentLoaded', function() {
  // Function to generate and update the table of contents
  function generateTableOfContents() {
    // Your existing code for generating the table of contents
  }

// Function to fetch and display the data
async function fetchAndDisplayData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    const values = data.values;

    const sortedData = {}; // An object to store data sorted by Resource Type

    // Sort the data by Resource Type
    values.slice(1).forEach(row => {
      const resourceType = row[0]; // Assuming Resource Type is in the first column
      if (!sortedData[resourceType]) {
        sortedData[resourceType] = [];
      }
      sortedData[resourceType].push(row);
    });

    const main = document.querySelector('#output');
    main.innerHTML = ""; // Clear existing content

    // Loop through the sorted data and create sections for each Resource Type
    for (const resourceType in sortedData) {
      const section = document.createElement('section');
      const headingId = resourceType.toLowerCase().replace(/\s+/g, '-');
      section.innerHTML = `<h2 id="${headingId}">${resourceType}</h2>`;

      const items = sortedData[resourceType]; // Get the items for the current resourceType

      // Sort the items alphabetically by Resource Title (assuming it's in the second column)
      items.sort((a, b) => {
        const resourceTitleA = a[1];
        const resourceTitleB = b[1];
        return resourceTitleA.localeCompare(resourceTitleB);
      });
      
      for (let index = 0; index < items.length; index++) {
        const row = items[index];

        const [resourceType, resourceTitle, abbreviation, fields, url, summary, initiators, numSources, isDownloadable, citation] = row;

        const item = document.createElement('div');

        const title = document.createElement('p');
        const formattedFields = fields ? fields.split('; ').map(fieldName => fieldIcons[fieldName]).join(' ') : '';
        title.innerHTML = `
          <span style="font-weight: bold">${resourceTitle}</span>
          ${abbreviation ? ` (${abbreviation})` : ''} | 
          ${formattedFields}
        `;

        item.innerHTML = `
          ${title.outerHTML}
          <p><a href="${url}" target="_blank">${url}</a></p>
          <p>${summary}</p>
          <p>Initiator(s): ${initiators}</p>
          ${numSources ? `<p>Number of sources: ${numSources}</p>` : ''}
          <p>Is downloadable: ${isDownloadable}</p>
          ${citation ? `<p>Citation: ${citation}</p>` : ''}
        `;

        section.appendChild(item);

        // Add a separator line between items, except for the last item
        if (index < items.length - 1) {
          const separator = document.createElement('hr');
          section.appendChild(separator);
        }
      };

      main.appendChild(section);
    }

  // Generate and update the table of contents
  generateTableOfContents();

  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Function to generate and update the table of contents
function generateTableOfContents() {
  const headings = document.querySelectorAll('h2');
  const tocElement = document.getElementById('table-of-contents');
  const tocList = document.createElement('ul');

  headings.forEach(heading => {
    if (heading.textContent.trim() !== "On this page") {
      const headingId = heading.id;
      const tocItem = document.createElement('li');
      const tocLink = document.createElement('a');

      tocLink.textContent = heading.textContent;
      tocLink.href = '#' + headingId;

      tocItem.appendChild(tocLink);
      tocList.appendChild(tocItem);
    }
  });

  tocElement.innerHTML = ''; // Clear existing content
  tocElement.appendChild(tocList);
}

// Call the function to fetch and display data
fetchAndDisplayData();
});

// // Wait for the page to fully load before generating the table of contents
// window.onload = function () {
//   generateTableOfContents();
// };



        // const title = document.createElement('strong');
        // title.textContent = `${resourceTitle}`;
        // title.style.fontWeight = 'bold'; // Set the font weight to bold
        // if (abbreviation) {
        //   const abbreviationSpan = document.createElement('span');
        //   abbreviationSpan.textContent = ` (${abbreviation}) `;
        //   title.appendChild(abbreviationSpan);
        // }
        
        // const fieldsArr = fields.split(', ');

        // item.innerHTML = `
        //   <p>${title.innerHTML} {{ page.${fieldsArr.join('}}, {{ page.')}${fieldsArr.length > 1 ? '}}, etc.' : ''}}}</p>
        //   <p><a href="${url}" target="_blank">${url}</a></p>
        //   <p>${summary}</p>
        //   <p>Initiator(s): ${initiators}</p>
        //   ${numSources ? `<p>Number of sources: ${numSources}</p>` : ''}
        //   <p>Is downloadable: ${isDownloadable}</p>
        // `;


          //   const table = document.createElement('table');
  //   const header = table.createTHead();
  //   const headerRow = header.insertRow(0);
  //   const tbody = table.createTBody();

  //   // Create header row
  //   values[0].forEach(colName => {
  //     const cell = headerRow.insertCell(-1);
  //     cell.innerHTML = colName;
  //   });

  //   // Create rows with data
  //   for (let i = 1; i < values.length; i++) {
  //     const row = tbody.insertRow(-1);
  //     values[i].forEach(value => {
  //       const cell = row.insertCell(-1);
  //       cell.innerHTML = value;
  //     });
  //   }

  //   const main = document.querySelector('#output');
  //   main.innerHTML = "";
  //   main.append(table);
  // } 
