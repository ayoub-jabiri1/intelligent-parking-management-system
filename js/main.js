// 1. <-- Main Selectors -->

let parkPopup = document.getElementById("park-vehicle-popup"),
    parkingLotsBox = document.getElementById("parking-lots"),
    availableLots = document.getElementById("available-lots"),
    totalLots = document.getElementById("total-lots");

// 2. <-- Main Variables -->

let parkingLots = [
    {
        number: 1,
        occupied: true,
    },
    {
        number: 2,
        occupied: false,
    },
    {
        number: 3,
        occupied: false,
    },
    {
        number: 4,
        occupied: false,
    },
    {
        number: 5,
        occupied: false,
    },
    {
        number: 6,
        occupied: false,
    },
    {
        number: 7,
        occupied: false,
    },
    {
        number: 8,
        occupied: false,
    },
    {
        number: 9,
        occupied: false,
    },
    {
        number: 10,
        occupied: false,
    },
];

let vehicles = [];

// 3. <-- Set Main Elements in Page

setMainElementsInPage();

// 4. <-- Toggle Park Pop up -->

document.getElementById("park-popup-btn").addEventListener("click", () => {
    parkPopup.classList.replace("hidden", "flex");
});

document.getElementById("cancel-btn").addEventListener("click", () => {
    parkPopup.classList.replace("flex", "hidden");
});

// 5. <-- Get Vehicle Data -->

let plateNumberInp = document.getElementById("plate-number-input"),
    parkDurationInp = document.getElementById("park-duration-input"),
    vehicleType = document.getElementById("vehicle-type");

document.getElementById("park-btn").addEventListener("click", () => {
    let currentPlateNumber = plateNumberInp.value,
        currentParkDuration = parkDurationInp.value,
        currentVehicleType = vehicleType.value;

    if (
        currentPlateNumber != "" &&
        currentParkDuration != "" &&
        currentVehicleType != ""
    ) {
        vehicles.push({
            plateNumber: currentPlateNumber,
            type: currentVehicleType,
            entryTime: new Date().toLocaleString("en-CA"),
            parkDuration: currentParkDuration,
        });
    }
});

// Functions

function setMainElementsInPage() {
    let availableLotsCounter = 0;

    // 1. Set Parkings Lots
    parkingLotsBox.innerHTML = "";

    for (let lot of parkingLots) {
        if (!lot.occupied) availableLotsCounter++;

        parkingLotsBox.innerHTML += `
        <div
            id="lot"
            class="col-span-7 md:col-span-5 lg:col-span-3 text-center"
        >
            <h3 id="lot-number">Lot: ${lot.number}</h3>
            <i class="ri-parking-box-fill text-7xl text-[${
                lot.occupied ? "#F44336" : "#4CAF50"
            }] cursor-pointer"></i>
        </div>
    `;
    }

    // 1. Set Parking Info
    availableLots.innerHTML = availableLotsCounter;

    totalLots.innerHTML = parkingLots.length;
}
