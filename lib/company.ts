export const COMPANY_CONFIG = {
    brandName: "BLUERAY",
    legalName: "BLUERAY OIL AND GAS FIELD PIPELINE INSPECTION L.L.C.",
    descriptor: "Oil and Gas Field Pipeline Inspection L.L.C.",
    tagline: "NDT & Industrial Inspection Services",
    headquarters: "Abu Dhabi, UAE",
    branches: ["India"],
    phones: {
        uae: {
            display: "+971 505057863",
            href: "tel:+971505057863"
        },
        india: {
            display: "+91 8939886655",
            href: "tel:+918939886655"
        }
    },
    emails: {
        admin: "Admin.bluerayoilandgas@gmail.com",
        international: "bluerayinternational.office@gmail.com"
    },
    website: {
        display: "www.bluerayoilandgas.com",
        href: "https://www.bluerayoilandgas.com"
    },
    uaeAddress: {
        sector: "Mussaffah - Sector 43",
        plotBuilding: "Plot No: 117 - Building A",
        plotAddress: "Plot Address: 007 - 367 - 000 - 117",
        street: "Ash Shallal 8th Street",
        zone: "Mussaffah - 42",
        cityCountry: "Abu Dhabi, UAE",
        fullFormatted: [
            "Mussaffah - Sector 43",
            "Plot No: 117 - Building A",
            "Plot Address: 007 - 367 - 000 - 117",
            "Ash Shallal 8th Street",
            "Mussaffah - 42",
            "Abu Dhabi, UAE"
        ].join(", ")
    }
} as const;
