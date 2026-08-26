const flights = [
  {
    from: "Algiers",
    to: "Paris",
    airline: "Air France",
    price: 31900,
    time: "10:30",
    duration: "2h 25m",
  },
  {
    from: "Algiers",
    to: "Istanbul",
    airline: "Turkish Airlines",
    price: 24900,
    time: "08:30",
    duration: "3h 20m",
  },
  {
    from: "Algiers",
    to: "Dubai",
    airline: "Emirates",
    price: 44900,
    time: "15:40",
    duration: "6h 30m",
  },
  {
    from: "Algiers",
    to: "Rome",
    airline: "ITA Airways",
    price: 28900,
    time: "09:20",
    duration: "2h 10m",
  },
];

const hotels = [
  {
    city: "Paris",
    name: "Paris Grand Hotel",
    rating: "5 Stars",
    price: 14500,
  },
  {
    city: "Istanbul",
    name: "Bosphorus Hotel",
    rating: "4 Stars",
    price: 8900,
  },
  {
    city: "Dubai",
    name: "Dubai Marina Resort",
    rating: "5 Stars",
    price: 17900,
  },
];

const vacations = [
  {
    city: "Paris",
    name: "Paris Explorer",
    days: 6,
    price: 89900,
  },
  {
    city: "Istanbul",
    name: "Istanbul Escape",
    days: 7,
    price: 59900,
  },
  {
    city: "Dubai",
    name: "Dubai Adventure",
    days: 7,
    price: 99900,
  },
];

function showSearch(type) {
  document.getElementById("flight-search").classList.add("hidden");
  document.getElementById("hotel-search").classList.add("hidden");
  document.getElementById("vacation-search").classList.add("hidden");

  document.getElementById(type + "-search").classList.remove("hidden");
}

function searchFlights() {
  const from = document.getElementById("from").value.trim();
  const to = document.getElementById("to").value.trim();
  const passengers = Number(document.getElementById("passengers").value);

  const results = document.getElementById("results");

  if (!from || !to) {
    alert("Please enter your departure and destination.");
    return;
  }

  const found = flights.filter(
    (flight) =>
      flight.from.toLowerCase() === from.toLowerCase() &&
      flight.to.toLowerCase() === to.toLowerCase(),
  );

  results.innerHTML = "";

  if (found.length === 0) {
    results.innerHTML = `
            <div class="card">
                <div class="card-content">
                    <h3>No flights found</h3>
                    <p>Try Paris, Istanbul, Dubai or Rome.</p>
                </div>
            </div>
        `;
    return;
  }

  found.forEach((flight) => {
    const total = flight.price * passengers;

    results.innerHTML += `
            <div class="card">
                <div class="card-content">
                    <h3>${flight.from} to ${flight.to}</h3>
                    <p>${flight.airline}</p>
                    <p>Departure: ${flight.time}</p>
                    <p>Duration: ${flight.duration}</p>

                    <h3>${total.toLocaleString()} DA</h3>

                    <button onclick="book(
                        '${flight.from} to ${flight.to}',
                        ${total}
                    )">
                        Book Flight
                    </button>
                </div>
            </div>
        `;
  });
}

function searchHotels() {
  const destination = document.getElementById("hotel-destination").value.trim();

  const results = document.getElementById("results");

  if (!destination) {
    alert("Please enter a destination.");
    return;
  }

  const found = hotels.filter(
    (hotel) => hotel.city.toLowerCase() === destination.toLowerCase(),
  );

  results.innerHTML = "";

  if (found.length === 0) {
    results.innerHTML = `
            <div class="card">
                <div class="card-content">
                    <h3>No hotels found</h3>
                    <p>Try Paris, Istanbul or Dubai.</p>
                </div>
            </div>
        `;
    return;
  }

  found.forEach((hotel) => {
    results.innerHTML += `
            <div class="card">
                <div class="card-content">
                    <h3>${hotel.name}</h3>
                    <p>${hotel.rating}</p>
                    <p>Location: ${hotel.city}</p>

                    <h3>${hotel.price.toLocaleString()} DA</h3>
                    <p>Per night</p>

                    <button onclick="book(
                        '${hotel.name}',
                        ${hotel.price}
                    )">
                        Book Hotel
                    </button>
                </div>
            </div>
        `;
  });
}

function searchVacations() {
  const destination = document
    .getElementById("vacation-destination")
    .value.trim();

  const results = document.getElementById("results");

  if (!destination) {
    alert("Please enter a destination.");
    return;
  }

  const found = vacations.filter(
    (vacation) => vacation.city.toLowerCase() === destination.toLowerCase(),
  );

  results.innerHTML = "";

  if (found.length === 0) {
    results.innerHTML = `
            <div class="card">
                <div class="card-content">
                    <h3>No vacation packages found</h3>
                    <p>Try Paris, Istanbul or Dubai.</p>
                </div>
            </div>
        `;
    return;
  }

  found.forEach((vacation) => {
    results.innerHTML += `
            <div class="card">
                <div class="card-content">
                    <h3>${vacation.name}</h3>
                    <p>${vacation.days} days</p>
                    <p>Flight + Hotel</p>

                    <h3>${vacation.price.toLocaleString()} DA</h3>

                    <button onclick="book(
                        '${vacation.name}',
                        ${vacation.price}
                    )">
                        View Package
                    </button>
                </div>
            </div>
        `;
  });
}

function book(name, price) {
  document.getElementById("booking-text").textContent = `You selected ${name}.`;

  document.getElementById("booking-price").textContent =
    `${price.toLocaleString()} DA`;

  document.getElementById("booking-modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("booking-modal").classList.add("hidden");
}

function confirmBooking() {
  alert("Booking confirmed!\n\n" + "Thank you for choosing Travel Guide!");

  closeModal();
}
