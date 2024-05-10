const pdf = require("html-pdf");
const ejs = require("ejs");
const path = require("path");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const Ticket = require("../models/ticket");

module.exports.downloadTicket = async (req, res) => {
  const { id } = req.params;

  if (!id) return res.status(404).send("No ticket found");

  let ticket = await Ticket.findById(id)
    .populate({
      path: "route",
      populate: {
        path: "from",
        model: "Destination",
      },
    })
    .populate({
      path: "route",
      populate: {
        path: "to",
        model: "Destination",
      },
    })
    .populate("airplane")
    .populate("passenger");
  if (!ticket) return res.status(404).send("Ticket not found");

  const data = {
    sourceLocation: ticket.route.from.name,
    sourceAirport: ticket.route.from.airport,
    destinationLocation: ticket.route.to.name,
    destinationAirport: ticket.route.to.airport,
    departure: new Date(ticket.date).toLocaleDateString(),
    time: new Date(ticket.route.departure).getTime(),
    name: ticket.passenger.userName,
    flight: ticket.airplane.serial,
    gate: ticket.route.gate,
    terminal: ticket.airplane.departureTerminal,
  };

  const html = await ejs.renderFile(
    path.dirname(__dirname) + "/views/ticket.ejs",
    data
  );

  // Generate the PDF from the rendered HTML
  pdf.create(html).toBuffer((error, buffer) => {
    if (error) {
      console.error("Error generating PDF:", error);
      return res.status(500).send("Error generating PDF");
    }

    // Set the response headers
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=boarding-pass.pdf"
    );

    // Send the PDF to the client
    return res.send(buffer);
  });
};

module.exports.downloadCSV = async (req, res) => {
  const users = [
    { name: "John Doe", age: 30, city: "New York" },
    { name: "Jane Smith", age: 25, city: "Los Angeles" },
    // Add more data as needed
  ];
  const csvWriter = createCsvWriter({
    path: "csv/users.csv",
    header: [
      { id: "name", title: "Name" },
      { id: "age", title: "Age" },
      { id: "city", title: "City" },
    ],
  });
  csvWriter
    .writeRecords(users)
    .then(() => {
      console.log("CSV file written successfully");
      return res.download("csv/users.csv"); // Download the generated CSV file
    })
    .catch((error) => {
      console.error("Error writing CSV file:", error);
      return res.status(500).send("Error generating CSV file");
    });
};
