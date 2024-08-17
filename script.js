document.querySelectorAll('.ford-article').forEach(article => {
    const backgroundUrl = article.getAttribute('data-background');
    article.style.backgroundImage = `url(${backgroundUrl})`;
});

document.querySelectorAll('menu ul li').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('menu ul li').forEach(li => li.classList.remove('active'));

        item.classList.add('active');
    });
});


const Allcars = {
    car1: {
        car: "NUEVO CAPRI 100% ELÉCTRICO",
        img: "https://www.gpas-cache.ford.com/guid/875ad5f2-5735-3adc-a8f6-94b26520e69b.png",
        type: "AllCars"

    },
    car2: {
        car: "NUEVO EXPLORER 100% ELÉCTRICO",
        img: "https://www.gpas-cache.ford.com/guid/09b27036-45c4-334d-b35c-5d726d63ef6a.png",
        type: "AllCars"
    },
    car3: {
        car: "NUEVO PUMA",
        img: "https://www.gpas-cache.ford.com/guid/188b638d-f310-3729-a4c1-f5ffa5747544.png",
        type: "AllCars"
    },
    car4: {
        car: "NUEVO KUGA",
        img: "https://www.gpas-cache.ford.com/guid/629785a0-6f53-3174-b43e-e5236e674c39.png",
        type: "AllCars"
    },
    car5: {
        car: "MUSTANG MACH-E",
        img: "https://www.gpas-cache.ford.com/guid/1393cb26-68ce-312d-812e-bac93cd1c05c.png",
        type: "AllCars"
    },
    car6: {
        car: "NUEVO TOURNEO COURIER",
        img: "https://www.gpas-cache.ford.com/guid/619e5553-8945-3f5f-8945-b106e66d7968.png",
        type: "AllCars"
    },
    car7: {
        car: "FOCUS",
        img: "https://www.gpas-cache.ford.com/guid/d7b99e9d-54cd-38c3-bbff-2cfa5220afd2.png",
        type: "AllCars"
    },
    car8: {
        car: "NUEVO TOURNEO CONNECT",
        img: "https://www.gpas-cache.ford.com/guid/00364354-0240-3203-83ef-da5e0aa94757.png",
        type: "AllCars"
    },
    car9: {
        car: "MUSTANG",
        img: "https://www.gpas-cache.ford.com/guid/f1b79327-8108-3ed3-a17c-709f684716ba.png",
        type: "AllCars"
    },
    car10: {
        car: "EXPLORER",
        img: "https://www.gpas-cache.ford.com/guid/899edeef-5ba1-30b2-81dd-b4a082241bc5.png",
        type: "AllCars"
    },
    car11: {
        car: "NUEVO BRONCO",
        img: "https://www.gpas-cache.ford.com/guid/1b9d35ad-a12c-33a1-9681-a728aeb48132.png",
        type: "AllCars"
    },
    car12: {
        car: "NUEVO TOURNEO CUSTOM",
        img: "https://www.gpas-cache.ford.com/guid/f447fee5-17ce-3ac0-b765-9f07131fc269.png",
        type: "AllCars"
    }
}

const SUVcars = {
    car1: {
        car: "NUEVO CAPRI 100% ELÉCTRICO",
        img: "https://www.gpas-cache.ford.com/guid/875ad5f2-5735-3adc-a8f6-94b26520e69b.png",
        type: "SUV"

    },
    car2: {
        car: "NUEVO EXPLORER 100% ELÉCTRICO",
        img: "https://www.gpas-cache.ford.com/guid/09b27036-45c4-334d-b35c-5d726d63ef6a.png",
        type: "SUV"
    },
    car3: {
        car: "NUEVO KUGA",
        img: "https://www.gpas-cache.ford.com/guid/629785a0-6f53-3174-b43e-e5236e674c39.png",
        type: "SUV"
    },
    car4: {
        car: "MUSTANG MACH-E",
        img: "https://www.gpas-cache.ford.com/guid/1393cb26-68ce-312d-812e-bac93cd1c05c.png",
        type: "SUV"
    },
    car5: {
        car: "FOCUS",
        img: "https://www.gpas-cache.ford.com/guid/d7b99e9d-54cd-38c3-bbff-2cfa5220afd2.png",
        type: "SUV"
    },
    car6: {
        car: "EXPLORER",
        img: "https://www.gpas-cache.ford.com/guid/899edeef-5ba1-30b2-81dd-b4a082241bc5.png",
        type: "SUV"
    },
    car7: {
        car: "NUEVO BRONCO",
        img: "https://www.gpas-cache.ford.com/guid/1b9d35ad-a12c-33a1-9681-a728aeb48132.png",
        type: "SUV"
    }
}

const HIByELEC = {
    car1: {
        car: "NUEVO CAPRI 100% ELÉCTRICO",
        img: "https://www.gpas-cache.ford.com/guid/875ad5f2-5735-3adc-a8f6-94b26520e69b.png",
        type: "hibridos"

    },
    car2: {
        car: "NUEVO EXPLORER 100% ELÉCTRICO",
        img: "https://www.gpas-cache.ford.com/guid/09b27036-45c4-334d-b35c-5d726d63ef6a.png",
        type: "hibridos"
    },
    car3: {
        car: "NUEVO KUGA",
        img: "https://www.gpas-cache.ford.com/guid/629785a0-6f53-3174-b43e-e5236e674c39.png",
        type: "hibridos"
    },
    car4: {
        car: "MUSTANG MACH-E",
        img: "https://www.gpas-cache.ford.com/guid/1393cb26-68ce-312d-812e-bac93cd1c05c.png",
        type: "hibridos"
    },
    car5: {
        car: "FOCUS",
        img: "https://www.gpas-cache.ford.com/guid/d7b99e9d-54cd-38c3-bbff-2cfa5220afd2.png",
        type: "hibridos"
    },
    car6: {
        car: "EXPLORER",
        img: "https://www.gpas-cache.ford.com/guid/899edeef-5ba1-30b2-81dd-b4a082241bc5.png",
        type: "hibridos"
    },
    car7: {
        car: "NUEVO TOURNEO CUSTOM",
        img: "https://www.gpas-cache.ford.com/guid/f447fee5-17ce-3ac0-b765-9f07131fc269.png",
        type: "hibridos"
    }
}

const MONOVOLUMENES = {
    car1: {
        car: "NUEVO TOURNEO COURIER",
        img: "https://www.gpas-cache.ford.com/guid/619e5553-8945-3f5f-8945-b106e66d7968.png",
        type: "monovolumenes"
    },
    car2: {
        car: "NUEVO TOURNEO CONNECT",
        img: "https://www.gpas-cache.ford.com/guid/00364354-0240-3203-83ef-da5e0aa94757.png",
        type: "monovolumenes"
    },
    car3: {
        car: "NUEVO TOURNEO CUSTOM",
        img: "https://www.gpas-cache.ford.com/guid/f447fee5-17ce-3ac0-b765-9f07131fc269.png",
        type: "monovolumenes"
    }
}

const PERFORMANCE = {
    car1: {
        car: "PUMA ST",
        img: "https://www.gpas-cache.ford.com/guid/e1574ce9-e269-3ada-9cd5-2f6ca104e377.png",
        type: "performance"
    },
    car2: {
        car: "FOCUS ST",
        img: "https://www.gpas-cache.ford.com/guid/2975fa2d-cc3e-34a5-a6d2-61a9c27dd839.png",
        type: "performance"
    },
    car3: {
        car: "MUSTANG",
        img: "https://www.gpas-cache.ford.com/guid/f1b79327-8108-3ed3-a17c-709f684716ba.png",
        type: "performance"
    }
}

const PICKUPS = {
    car1: {
        car: "NUEVA TRANSIT COURIER",
        img: "https://www.gpas-cache.ford.com/guid/9a515965-5a15-374c-b8fc-beb414b89c49.png",
        type: "pickups"
    },

    car2: {
        car: "NUEVA TRANSIT CUSTOM",
        img: "https://www.gpas-cache.ford.com/guid/2b469e75-88c9-38e2-aaad-29c9686dcbcb.png",
        type: "pickups"
    },
    car3: {
        car: "TRANSIT",
        img: "https://www.gpas-cache.ford.com/guid/94197ad7-f17b-3cbd-b454-16091a433bb5.png",
        type: "pickups"
    },
    car4: {
        car: "E-TRANSIT",
        img: "https://www.gpas-cache.ford.com/guid/7b143811-b58c-365d-8081-bbc4f5404a8c.png",
        type: "pickups"
    },
    car5: {
        car: "TRANSIT CHASIS",
        img: "https://www.gpas-cache.ford.com/guid/ca10942d-ddff-3a24-b814-dd3608113118.png",
        type: "pickups"
    },
    car6: {
        car: "NUEVO RANGER",
        img: "https://www.gpas-cache.ford.com/guid/5be37ecb-75c6-39e1-ac7c-a966e5af23f3.png",
        type: "pickups"
    },
    car7: {
        car: "NUEVO RANGER RAPTOR",
        img: "https://www.gpas-cache.ford.com/guid/36dec76f-38a6-3742-8961-853b96bda7a2.png",
        type: "pickups"
    },
    car8: {
        car: "TRANSIT MINIBUS",
        img: "https://www.gpas-cache.ford.com/guid/14f4c8dd-8e9e-3af5-a0e5-35d69992953c.png",
        type: "pickups"
    },
}

function displayVehicles(vehicles) {
    const container = document.getElementById('vehicle-container');
    container.innerHTML = '';
    Object.values(vehicles).forEach(vehicle => {
        const vehicleItem = document.createElement('div');
        vehicleItem.classList.add('vehicle-item');
        vehicleItem.innerHTML = `
            <img src="${vehicle.img}" alt="${vehicle.car}">
            <p>${vehicle.car}<p>
        `;
        container.appendChild(vehicleItem);
    });
    container.style.display = 'flex';
}

displayVehicles(Allcars)

document.querySelectorAll('menu ul li').forEach(item => {
    item.addEventListener('click', () => {
        const category = item.getAttribute('data-category');
        let vehicles;

        switch (category) {
            case 'AllCars':
                vehicles = Allcars;
                break;
            case 'SUV':
                vehicles = SUVcars;
                break;
            case 'hibridos':
                vehicles = HIByELEC;
                break;
            case 'monovolumenes':
                vehicles = MONOVOLUMENES;
                break;
            case 'pickups':
                vehicles = PICKUPS;
                break;
            case 'performance':
                vehicles = PERFORMANCE;
                break;
            default:
                vehicles = {};
        }

        displayVehicles(vehicles);

        document.querySelectorAll('menu ul li').forEach(li => li.classList.remove('active'));
        item.classList.add('active');
    });
});

document.getElementById("legalInfo").addEventListener("click", function () {
    let legalInfo = document.getElementById("legalInfo")
    let legalInfoArrow = document.getElementById("legalInfo-arrow");
    let isHidden = legalInfoArrow.classList.contains("hidden");

    if (isHidden) {
        legalInfoArrow.classList.remove("hidden");
        legalInfo.innerHTML = `<strong>Información legal importante</strong><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#292929" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 15l6 -6l6 6" /></svg>`;
    } else {
        legalInfoArrow.classList.add("hidden");
        legalInfo.innerHTML = `<strong>Información legal importante</strong><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#292929" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg>`;
    }
});
