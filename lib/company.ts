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
        landline: {
            display: "+971 2 442 9794",
            href: "tel:+97124429794"
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
        mapHref: "https://www.google.com/maps/place/24%C2%B020'26.5%22N+54%C2%B028'26.3%22E/@24.3406792,54.4713898,17z/data=!3m1!4b1!4m4!3m3!8m2!3d24.3406792!4d54.4739647?hl=en&entry=ttu",
        mapEmbedUrl: "https://www.google.com/maps?q=24.3406792,54.4739647&z=17&output=embed",
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
