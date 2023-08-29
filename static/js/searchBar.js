// import { presidentsData } from "./presidentsData";

const presidentsData = [
  {
    name: "George Washington",
    speeches: [
      { title: "Inaugural Address", url: "#" },
      { title: "Farewell Address", url: "#" },
    ],
  },
  {
    name: "John Adams",
    speeches: [
      { title: "Inaugural Address", url: "#" },
      { title: "Address to Congress", url: "#" },
    ],
  },
  {
    name: "Thomas Jefferson",
    speeches: [
      { title: "First Inaugural Address", url: "#" },
      { title: "Declaration of Independence", url: "#" },
    ],
  },
  {
    name: "Abraham Lincoln",
    speeches: [
      { title: "Gettysburg Address", url: "#" },
      { title: "Second Inaugural Address", url: "#" },
    ],
  },
  // ... Más datos aquí ...
  {
    name: "Woodrow Wilson",
    speeches: [
      { title: "War Message to Congress", url: "#" },
      { title: "Fourteen Points", url: "#" },
    ],
  },
  {
    name: "Calvin Coolidge",
    speeches: [
      { title: "Inaugural Address", url: "#" },
      { title: "The Business of America is Business", url: "#" },
    ],
  },
  {
    name: "Herbert Hoover",
    speeches: [
      { title: "Inaugural Address", url: "#" },
      { title: "Rugged Individualism", url: "#" },
    ],
  },
  {
    name: "Franklin D. Roosevelt",
    speeches: [
      { title: "First Inaugural Address", url: "#" },
      { title: "Infamy Speech", url: "#" },
    ],
  },
  {
    name: "Harry S. Truman",
    speeches: [
      { title: "Truman Doctrine", url: "#" },
      { title: "Inaugural Address", url: "#" },
    ],
  },
  {
    name: "Dwight D. Eisenhower",
    speeches: [
      { title: "Farewell Address", url: "#" },
      { title: "Atoms for Peace", url: "#" },
    ],
  },
  {
    name: "John F. Kennedy",
    speeches: [
      { title: "Inaugural Address", url: "#" },
      { title: "Ich bin ein Berliner", url: "#" },
    ],
  },
  {
    name: "Lyndon B. Johnson",
    speeches: [
      { title: "We Shall Overcome", url: "#" },
      { title: "Great Society", url: "#" },
    ],
  },
  {
    name: "Richard Nixon",
    speeches: [
      { title: "Checkers speech", url: "#" },
      { title: "Watergate Address", url: "#" },
    ],
  },
  {
    name: "Gerald Ford",
    speeches: [
      { title: "Sworn in as President", url: "#" },
      { title: "Pardon of Richard Nixon", url: "#" },
    ],
  },
  {
    name: "Jimmy Carter",
    speeches: [
      { title: "Inaugural Address", url: "#" },
      { title: "Crisis of Confidence", url: "#" },
    ],
  },
  {
    name: "Ronald Reagan",
    speeches: [
      { title: "Evil Empire", url: "#" },
      { title: "Tear down this wall!", url: "#" },
    ],
  },
  {
    name: "George H. W. Bush",
    speeches: [
      { title: "Read my lips: no new taxes", url: "#" },
      { title: "Desert Storm Address", url: "#" },
    ],
  },
  {
    name: "Bill Clinton",
    speeches: [
      { title: "I did not have sexual relations", url: "#" },
      { title: "The New Covenant", url: "#" },
    ],
  },
  {
    name: "George W. Bush",
    speeches: [
      { title: "9/11 Address to the Nation", url: "#" },
      { title: "Mission Accomplished", url: "#" },
    ],
  },
  {
    name: "Barack Obama",
    speeches: [
      { title: "Yes we can", url: "#" },
      { title: "A More Perfect Union", url: "#" },
    ],
  },
  {
    name: "Donald Trump",
    speeches: [
      { title: "Inaugural Address", url: "#" },
      { title: "Covfefe tweet", url: "#" },
    ],
  },
];

const tableBody = document.querySelector("#table-body");

presidentsData.forEach(function (president) {
  var row = document.createElement("tr");
  var nameCell = document.createElement("td");
  nameCell.textContent = president.name;
  row.appendChild(nameCell);

  var speechesCell = document.createElement("td");
  president.speeches.forEach(function (speech) {
    var speechLink = document.createElement("a");
    speechLink.textContent = speech.title;
    speechLink.href = speech.url;
    speechLink.target = "_blank";
    speechesCell.appendChild(speechLink);
    speechesCell.appendChild(document.createElement("br"));
  });
  row.appendChild(speechesCell);

  tableBody?.appendChild(row);
});

function updateTable(filter) {
  tableBody.innerHTML = "";

  presidentsData.forEach(function (president) {
    if (
      filter === "" ||
      president.name.toLowerCase().includes(filter.toLowerCase())
    ) {
      var row = document.createElement("tr");
      var nameCell = document.createElement("td");
      nameCell.textContent = president.name;
      row.appendChild(nameCell);

      var speechesCell = document.createElement("td");
      president.speeches.forEach(function (speech) {
        var speechLink = document.createElement("a");
        speechLink.textContent = speech.title;
        speechLink.href = speech.url;
        speechLink.target = "_blank";
        speechesCell.appendChild(speechLink);
        speechesCell.appendChild(document.createElement("br"));
      });
      row.appendChild(speechesCell);

      tableBody.appendChild(row);
    }
  });
}

var searchInput = document.querySelector("#search-input");
searchInput.addEventListener("input", function () {
  updateTable(searchInput.value);
});

// Carga inicial de la tabla
updateTable("");
