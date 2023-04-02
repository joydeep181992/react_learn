import React from "react";
import ReactDOM from "react-dom/client";

/*
  Header
    Logo
    Nav Items
  Body
    Search
    ResturantContainer
      ResturantCard
      - Image
      - NameOfResturant
      - start Rating
      - cuisine
      - delivery
  Footer
    copyright
    Links
    Address
    Contact
*/
// resData.cards[0]["name"]
const resObj = {
  title: "SEE ALL",
  totalOpenRestaurants: 1487,
  cards: [
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "997",
        name: "A2B - Adyar Ananda Bhavan",
        uuid: "ed7f88f1-3a91-4aac-9c3c-55415a3e2b8d",
        city: "1",
        area: "Marathahalli",
        totalRatingsString: "10000+ ratings",
        cloudinaryImageId: "wcqvllaujsmtz1ji2vlp",
        cuisines: ["South Indian", "North Indian", "Sweets", "Chinese"],
        tags: [],
        costForTwo: 30000,
        costForTwoString: "₹300 FOR TWO",
        deliveryTime: 20,
        minDeliveryTime: 20,
        maxDeliveryTime: 20,
        slaString: "20 MINS",
        lastMileTravel: 2.9000000953674316,
        slugs: {
          restaurant:
            "a2b-veg-marathalli-bridge-opposite-bhagini-hotel-marathahalli",
          city: "bangalore",
        },
        cityState: "1",
        address:
          "No. 135 situated at Munekolala, Varthur Hobli, Marathahalli, HAL main Road, Bangalore - 560 037",
        locality: "Munekolala",
        parentId: 22,
        unserviceable: false,
        veg: true,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "Flat ₹125 off",
          shortDescriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹249",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "₹125 OFF",
          shortDescriptionList: [
            {
              meta: "Use MATCHDEAL125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        ribbon: [
          {
            type: "PROMOTED",
          },
        ],
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "distance",
              fee: 2800,
              message: "",
            },
            {
              name: "time",
              fee: 0,
              message: "",
            },
            {
              name: "special",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 2800,
          message: "",
          title: "Delivery Charge",
          amount: "2800",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID:
          "cid=6362793~p=1~eid=00000187-3c58-5e05-100f-064300b0011a",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "2.9 kms",
        hasSurge: false,
        sla: {
          restaurantId: "997",
          deliveryTime: 20,
          minDeliveryTime: 20,
          maxDeliveryTime: 20,
          lastMileTravel: 2.9000000953674316,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: true,
        avgRating: "4.2",
        totalRatings: 10000,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "654809",
        name: "Meghana Foods",
        uuid: "714578ac-c1b9-46a2-82af-a0d10ad21ad4",
        city: "1",
        area: "Sarjapur Road",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "c627e55c996978a070c10079ae57f706",
        cuisines: [
          "Biryani",
          "Andhra",
          "South Indian",
          "North Indian",
          "Chinese",
          "Seafood",
        ],
        tags: [],
        costForTwo: 50000,
        costForTwoString: "₹500 FOR TWO",
        deliveryTime: 27,
        minDeliveryTime: 27,
        maxDeliveryTime: 27,
        slaString: "27 MINS",
        lastMileTravel: 5,
        slugs: {
          restaurant: "meghana-foods-bellandur-sarjapur-bellandur-sarjapur",
          city: "bangalore",
        },
        cityState: "1",
        address:
          "SY No.18/2A, 1ST FLOOR G R S TOWERS SARJAPURA ROAD,BELLANDUR BANGALORE ,Mahadevapura , B.B.M.P East,Karnataka, 560102",
        locality: "G R S TOWERS",
        parentId: 635,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "60% off",
          shortDescriptionList: [
            {
              meta: "60% off | Use WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹100 | Use code WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "60% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹100 | Use code WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "distance",
              fee: 4700,
              message: "",
            },
            {
              name: "time",
              fee: 0,
              message: "",
            },
            {
              name: "special",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 4700,
          message: "",
          title: "Delivery Charge",
          amount: "4700",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 1,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "5 kms",
        hasSurge: false,
        sla: {
          restaurantId: "654809",
          deliveryTime: 27,
          minDeliveryTime: 27,
          maxDeliveryTime: 27,
          lastMileTravel: 5,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "IT_IS_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.4",
        totalRatings: 1000,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "64228",
        name: "Anjappar",
        uuid: "80ecc650-da76-4a1d-b0ef-876dd2d85f3e",
        city: "1",
        area: "Marathahalli",
        totalRatingsString: "10000+ ratings",
        cloudinaryImageId: "fa25f646f0f18e7b1d854e3e8b4a8f1b",
        cuisines: [
          "Chettinad",
          "Thalis",
          "Biryani",
          "Chinese",
          "Tandoor",
          "South Indian",
          "North Indian",
        ],
        tags: [],
        costForTwo: 50000,
        costForTwoString: "₹500 FOR TWO",
        deliveryTime: 28,
        minDeliveryTime: 28,
        maxDeliveryTime: 28,
        slaString: "28 MINS",
        lastMileTravel: 4.5,
        slugs: {
          restaurant: "anjappar-marathahalli-marathahalli",
          city: "bangalore",
        },
        cityState: "1",
        address:
          "#90/3,Opp.Innovative Multiplex,outer ring road,Bangalore-560037.",
        locality: "Marathahalli",
        parentId: 61,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "Flat ₹125 off",
          shortDescriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹249",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "₹125 OFF",
          shortDescriptionList: [
            {
              meta: "Use MATCHDEAL125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        ribbon: [
          {
            type: "PROMOTED",
          },
        ],
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "distance",
              fee: 4000,
              message: "",
            },
            {
              name: "time",
              fee: 0,
              message: "",
            },
            {
              name: "special",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 4000,
          message: "",
          title: "Delivery Charge",
          amount: "4000",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID:
          "cid=6301627~p=4~eid=00000187-3c58-5e05-100f-064400b00443",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "4.5 kms",
        hasSurge: false,
        sla: {
          restaurantId: "64228",
          deliveryTime: 28,
          minDeliveryTime: 28,
          maxDeliveryTime: 28,
          lastMileTravel: 4.5,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: true,
        avgRating: "3.9",
        totalRatings: 10000,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "420659",
        name: "Sri Lakshmi Biryani",
        uuid: "eb227257-1596-441a-9c84-8265417d2d19",
        city: "1",
        area: "Marathahalli",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "n7pn6ilfponvcatp0n73",
        cuisines: ["Biryani", "North Indian", "Snacks"],
        tags: [],
        costForTwo: 20000,
        costForTwoString: "₹200 FOR TWO",
        deliveryTime: 26,
        minDeliveryTime: 26,
        maxDeliveryTime: 26,
        slaString: "26 MINS",
        lastMileTravel: 4.699999809265137,
        slugs: {
          restaurant: "sri-lakshmi-biryani-kadubeesanahalli-kadubeesanahalli",
          city: "bangalore",
        },
        cityState: "1",
        address:
          "No 15&16 Srinivasa Reddy building, Lakshmi Narayana temple road, manunatha layout, munnekoll Bangalore 560037",
        locality: "Manunatha Layout",
        parentId: 193940,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "Flat ₹125 off",
          shortDescriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹249",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "₹125 OFF",
          shortDescriptionList: [
            {
              meta: "Use MATCHDEAL125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "distance",
              fee: 4000,
              message: "",
            },
            {
              name: "time",
              fee: 0,
              message: "",
            },
            {
              name: "special",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 4000,
          message: "",
          title: "Delivery Charge",
          amount: "4000",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "4.6 kms",
        hasSurge: false,
        sla: {
          restaurantId: "420659",
          deliveryTime: 26,
          minDeliveryTime: 26,
          maxDeliveryTime: 26,
          lastMileTravel: 4.699999809265137,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "3.7",
        totalRatings: 1000,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "8530",
        name: "Kritunga Restaurant",
        uuid: "84e612db-d9d4-483d-ad77-81ea42c2208f",
        city: "1",
        area: "Marathahalli",
        totalRatingsString: "10000+ ratings",
        cloudinaryImageId: "vxxpqtjryjhhrpoxt65h",
        cuisines: ["Andhra", "Biryani", "South Indian", "Hyderabadi"],
        tags: [],
        costForTwo: 50000,
        costForTwoString: "₹500 FOR TWO",
        deliveryTime: 23,
        minDeliveryTime: 23,
        maxDeliveryTime: 23,
        slaString: "23 MINS",
        lastMileTravel: 3.9000000953674316,
        slugs: {
          restaurant: "kritunga-kundanhalli-gate-marathahalli",
          city: "bangalore",
        },
        cityState: "1",
        address:
          "42 2  Sriven square  Munekollela  Beside star bazaar  Kundanahalli gate  Bangalore",
        locality: "Kundalahalli",
        parentId: 20088,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "60% off",
          shortDescriptionList: [
            {
              meta: "60% off | Use WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹100 | Use code WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "60% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹100 | Use code WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "distance",
              fee: 3400,
              message: "",
            },
            {
              name: "time",
              fee: 0,
              message: "",
            },
            {
              name: "special",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 3400,
          message: "",
          title: "Delivery Charge",
          amount: "3400",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "Closes soon",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "3.9 kms",
        hasSurge: false,
        sla: {
          restaurantId: "8530",
          deliveryTime: 23,
          minDeliveryTime: 23,
          maxDeliveryTime: 23,
          lastMileTravel: 3.9000000953674316,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "3.6",
        totalRatings: 10000,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "210119",
        name: "Sri Jayadurga Biryani",
        uuid: "13927ae4-7437-4d24-959e-888585c704e8",
        city: "1",
        area: "Marathahalli",
        totalRatingsString: "10000+ ratings",
        cloudinaryImageId: "e5k8viofbtrxxo75lxdy",
        cuisines: ["Biryani", "South Indian", "Andhra", "Hyderabadi", "Snacks"],
        tags: [],
        costForTwo: 30000,
        costForTwoString: "₹300 FOR TWO",
        deliveryTime: 26,
        minDeliveryTime: 26,
        maxDeliveryTime: 26,
        slaString: "26 MINS",
        lastMileTravel: 4.699999809265137,
        slugs: {
          restaurant: "sri-jayadurga-biryani-marathahalli-marathahalli",
          city: "bangalore",
        },
        cityState: "1",
        address:
          "Sri Jaya Durga Restaurant, OPP AMRUTHA BAKERY, LAKSHMI NARAYANA TEMPLE ROAD, MUNNEKOLALA, MARATHAHALLI, BANGALORE",
        locality: "Munnekollal",
        parentId: 14529,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "Flat ₹125 off",
          shortDescriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹249",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "₹125 OFF",
          shortDescriptionList: [
            {
              meta: "Use MATCHDEAL125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "distance",
              fee: 4000,
              message: "",
            },
            {
              name: "time",
              fee: 0,
              message: "",
            },
            {
              name: "special",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 4000,
          message: "",
          title: "Delivery Charge",
          amount: "4000",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "4.6 kms",
        hasSurge: false,
        sla: {
          restaurantId: "210119",
          deliveryTime: 26,
          minDeliveryTime: 26,
          maxDeliveryTime: 26,
          lastMileTravel: 4.699999809265137,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "3.7",
        totalRatings: 10000,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "564284",
        name: "Soul Rasa",
        uuid: "a36c4fb5-0953-4a75-99c3-3153ceb3ee4a",
        city: "1",
        area: "Mahadevapura",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "drsmipf17xngxem0o8tg",
        cuisines: [
          "Indian",
          "Healthy Food",
          "Home Food",
          "South Indian",
          "North Indian",
        ],
        tags: [],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        slaString: "25 MINS",
        lastMileTravel: 3.9000000953674316,
        slugs: {
          restaurant: "soul-rasa-bellandur-sarjapur-bellandur-sarjapur",
          city: "bangalore",
        },
        cityState: "1",
        address:
          "SY NO.164, 1ST FLOOR, SY.NO.84/2, BELLANDUR VILLAGE, VARTHUR HOBLI, BANGALORE., Mahadevapura, B.B.M.P East, Karnataka-560048",
        locality: "Bellandur",
        parentId: 239281,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "Flat ₹125 off",
          shortDescriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹249",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "₹125 OFF",
          shortDescriptionList: [
            {
              meta: "Use MATCHDEAL125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        ribbon: [
          {
            type: "PROMOTED",
          },
        ],
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "distance",
              fee: 3400,
              message: "",
            },
            {
              name: "time",
              fee: 0,
              message: "",
            },
            {
              name: "special",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 3400,
          message: "",
          title: "Delivery Charge",
          amount: "3400",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID:
          "cid=6312067~p=10~eid=00000187-3c58-5e05-100f-064600b00a1c",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "3.9 kms",
        hasSurge: false,
        sla: {
          restaurantId: "564284",
          deliveryTime: 25,
          minDeliveryTime: 25,
          maxDeliveryTime: 25,
          lastMileTravel: 3.9000000953674316,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: true,
        avgRating: "4.3",
        totalRatings: 1000,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "59593",
        name: "Al Daaz",
        uuid: "c189b92c-d842-4595-9a1f-ff85bd67bc2a",
        city: "1",
        area: "Hsr Layout",
        totalRatingsString: "10000+ ratings",
        cloudinaryImageId: "rxsvhvcdip9dbfdijzk9",
        cuisines: [
          "American",
          "Arabian",
          "Chinese",
          "Desserts",
          "Mughlai",
          "North Indian",
        ],
        tags: [],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 41,
        minDeliveryTime: 41,
        maxDeliveryTime: 41,
        slaString: "41 MINS",
        lastMileTravel: 6.400000095367432,
        slugs: {
          restaurant: "al-daaz-hsr-hsr",
          city: "bangalore",
        },
        cityState: "1",
        address: "#64 & 65, 27th Main Rd, 1st Sector HSR Layout - 560102",
        locality: "HSR",
        parentId: 21640,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "distance",
              fee: 5300,
              message: "",
            },
            {
              name: "time",
              fee: 0,
              message: "",
            },
            {
              name: "special",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 5300,
          message: "",
          title: "Delivery Charge",
          amount: "5300",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 1,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "6.4 kms",
        hasSurge: false,
        sla: {
          restaurantId: "59593",
          deliveryTime: 41,
          minDeliveryTime: 41,
          maxDeliveryTime: 41,
          lastMileTravel: 6.400000095367432,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "IT_IS_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.3",
        totalRatings: 10000,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "262167",
        name: "Hotel Empire",
        uuid: "c087d70f-5cff-49ec-8b8a-e8b1a07a1977",
        city: "1",
        area: "Brookefields",
        totalRatingsString: "10000+ ratings",
        cloudinaryImageId: "weuqdjwzk3azoijehnel",
        cuisines: ["North Indian", "Kebabs", "Biryani"],
        tags: [],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 30,
        minDeliveryTime: 30,
        maxDeliveryTime: 30,
        slaString: "30 MINS",
        lastMileTravel: 4.800000190734863,
        slugs: {
          restaurant: "hotel-empire-marathahalli-marathahalli",
          city: "bangalore",
        },
        cityState: "1",
        address:
          "EMPIRE RESTAURANT ASK TOWERS,NO 7/3 OF THOOBARAHALLI VILLAGE,VARTHUR VILLAGE,VARTHOOR HOBLI 560037",
        locality: "",
        parentId: 475,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "10% off",
          shortDescriptionList: [
            {
              meta: "10% off | Use PARTY",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "10% off | Use code PARTY",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "10% OFF",
          shortDescriptionList: [
            {
              meta: "Use PARTY",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "10% off | Use code PARTY",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "distance",
              fee: 4000,
              message: "",
            },
            {
              name: "time",
              fee: 0,
              message: "",
            },
            {
              name: "special",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 4000,
          message: "",
          title: "Delivery Charge",
          amount: "4000",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "4.8 kms",
        hasSurge: false,
        sla: {
          restaurantId: "262167",
          deliveryTime: 30,
          minDeliveryTime: 30,
          maxDeliveryTime: 30,
          lastMileTravel: 4.800000190734863,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.0",
        totalRatings: 10000,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "345504",
        name: "Sharief Bhai",
        uuid: "db744a5c-d9a7-4676-a280-48741c2351dc",
        city: "1",
        area: "Sarjapur Road",
        totalRatingsString: "5000+ ratings",
        cloudinaryImageId: "i3k6f8biievi3k7rekzd",
        cuisines: [
          "Mughlai",
          "Biryani",
          "Arabian",
          "Kebabs",
          "Beverages",
          "Desserts",
        ],
        tags: [],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 28,
        minDeliveryTime: 28,
        maxDeliveryTime: 28,
        slaString: "28 MINS",
        lastMileTravel: 4.599999904632568,
        slugs: {
          restaurant: "sharief-bhai-bellandur-sarjapur-bellandur-sarjapur-3",
          city: "bangalore",
        },
        cityState: "1",
        address:
          "Bearing Number 1,2,3 Situdated at Ambalipura villaga, Sarjapura Main Road, Bellandur Gate, Bangalore 560102,B.B.M.P East",
        locality: "Sarjapur Road",
        parentId: 5734,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "FLAT150 off",
          shortDescriptionList: [
            {
              meta: "FLAT150 off | Use FLATDEAL",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "FLAT150 off | Use FLATDEAL",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "₹150 OFF",
          shortDescriptionList: [
            {
              meta: "Use FLATDEAL",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "FLAT150 off | Use FLATDEAL",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        ribbon: [
          {
            type: "PROMOTED",
          },
        ],
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "distance",
              fee: 4000,
              message: "",
            },
            {
              name: "time",
              fee: 0,
              message: "",
            },
            {
              name: "special",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 4000,
          message: "",
          title: "Delivery Charge",
          amount: "4000",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID:
          "cid=6353742~p=13~eid=00000187-3c58-5e05-100f-064700b00d50",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "4.5 kms",
        hasSurge: false,
        sla: {
          restaurantId: "345504",
          deliveryTime: 28,
          minDeliveryTime: 28,
          maxDeliveryTime: 28,
          lastMileTravel: 4.599999904632568,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: true,
        avgRating: "4.0",
        totalRatings: 5000,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "445762",
        name: "Burger King",
        uuid: "548856fe-2b3d-4d24-b572-a25eed551d9f",
        city: "1",
        area: "Doddanekundi",
        totalRatingsString: "5000+ ratings",
        cloudinaryImageId: "nt1itsfhqgnfcjkxbb7m",
        cuisines: ["Burgers", "American"],
        tags: [],
        costForTwo: 35000,
        costForTwoString: "₹350 FOR TWO",
        deliveryTime: 30,
        minDeliveryTime: 30,
        maxDeliveryTime: 30,
        slaString: "30 MINS",
        lastMileTravel: 4.400000095367432,
        slugs: {
          restaurant: "burger-king-marathalli-kadugodi",
          city: "bangalore",
        },
        cityState: "1",
        address:
          "burger king Kote MR Plaza, Anand Nagar, Sanjay Nagar, Chinnapanna Halli, Bengaluru, Karnataka 560037",
        locality: "Doddanekundi",
        parentId: 166,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "Flat ₹125 off",
          shortDescriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹249",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "₹125 OFF",
          shortDescriptionList: [
            {
              meta: "Use MATCHDEAL125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "distance",
              fee: 4000,
              message: "",
            },
            {
              name: "time",
              fee: 0,
              message: "",
            },
            {
              name: "special",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 4000,
          message: "",
          title: "Delivery Charge",
          amount: "4000",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "4.4 kms",
        hasSurge: false,
        sla: {
          restaurantId: "445762",
          deliveryTime: 30,
          minDeliveryTime: 30,
          maxDeliveryTime: 30,
          lastMileTravel: 4.400000095367432,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.1",
        totalRatings: 5000,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "47439",
        name: "Leon's - Burgers & Wings (Leon Grill)",
        uuid: "aaeb7f0e-10ef-45cf-b45e-8da91b77ce6d",
        city: "1",
        area: "Marathahalli",
        totalRatingsString: "10000+ ratings",
        cloudinaryImageId: "uxtqnke0nupbu1i1fmvf",
        cuisines: [
          "American",
          "Snacks",
          "Turkish",
          "Portuguese",
          "Continental",
        ],
        tags: [],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 27,
        minDeliveryTime: 27,
        maxDeliveryTime: 27,
        slaString: "27 MINS",
        lastMileTravel: 4.5,
        slugs: {
          restaurant: "leon-grill-marathahalli-marathahalli",
          city: "bangalore",
        },
        cityState: "1",
        address:
          "90/1 90/3, Opposite to Innovative Multiplex, Outer Ring Rd, Next to World Of Titan, Marathahalli, Bengaluru, Karnataka 560037",
        locality: "Outer Ring Road",
        parentId: 371281,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "Flat ₹125 off",
          shortDescriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹249",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "₹125 OFF",
          shortDescriptionList: [
            {
              meta: "Use MATCHDEAL125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        ribbon: [
          {
            type: "PROMOTED",
          },
        ],
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "distance",
              fee: 4000,
              message: "",
            },
            {
              name: "time",
              fee: 0,
              message: "",
            },
            {
              name: "special",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 4000,
          message: "",
          title: "Delivery Charge",
          amount: "4000",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID:
          "cid=6329548~p=16~eid=00000187-3c58-5e05-100f-064800b01068",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "4.5 kms",
        hasSurge: false,
        sla: {
          restaurantId: "47439",
          deliveryTime: 27,
          minDeliveryTime: 27,
          maxDeliveryTime: 27,
          lastMileTravel: 4.5,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: true,
        avgRating: "4.2",
        totalRatings: 10000,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "4747",
        name: "Phulke Ghar Ke",
        uuid: "56825c89-4929-470b-952b-7f82541bf80a",
        city: "1",
        area: "Bellandur",
        totalRatingsString: "10000+ ratings",
        cloudinaryImageId: "r08nbmwgi1pmj01hr9yh",
        cuisines: ["North Indian"],
        tags: [],
        costForTwo: 20000,
        costForTwoString: "₹200 FOR TWO",
        deliveryTime: 23,
        minDeliveryTime: 23,
        maxDeliveryTime: 23,
        slaString: "23 MINS",
        lastMileTravel: 3.700000047683716,
        slugs: {
          restaurant: "phulke-ghar-ke-bellandursarjapur",
          city: "bangalore",
        },
        cityState: "1",
        address: "#18/1, HMR Complex, Near Ganesh Temple, Bellandur, Bangalore",
        locality: "HMR Complex",
        parentId: 20953,
        unserviceable: false,
        veg: true,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "60% off",
          shortDescriptionList: [
            {
              meta: "60% off | Use WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹100 | Use code WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "60% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹100 | Use code WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "distance",
              fee: 3400,
              message: "",
            },
            {
              name: "time",
              fee: 0,
              message: "",
            },
            {
              name: "special",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 3400,
          message: "",
          title: "Delivery Charge",
          amount: "3400",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "Closes soon",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "3.7 kms",
        hasSurge: false,
        sla: {
          restaurantId: "4747",
          deliveryTime: 23,
          minDeliveryTime: 23,
          maxDeliveryTime: 23,
          lastMileTravel: 3.700000047683716,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.3",
        totalRatings: 10000,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "426971",
        name: "Ande Ka Funda",
        uuid: "2be3b54d-e1d5-438b-a08b-019609cf1c13",
        city: "1",
        area: "Bellandur",
        totalRatingsString: "100+ ratings",
        cloudinaryImageId: "irkglsbb9j8h0z7uk2np",
        cuisines: ["Chinese", "Indian"],
        tags: [],
        costForTwo: 5000,
        costForTwoString: "₹50 FOR TWO",
        deliveryTime: 28,
        minDeliveryTime: 28,
        maxDeliveryTime: 28,
        slaString: "28 MINS",
        lastMileTravel: 3.5999999046325684,
        slugs: {
          restaurant: "ande-ka-funda-kadubeesanahalli-kadubeesanahalli",
          city: "bangalore",
        },
        cityState: "1",
        address:
          "Dhaber bishsnli, Kariyammana Agrahara, Bellandur, Bengaluru, Karnataka 560103, India",
        locality: "Kariyammana Agrahara",
        parentId: 15677,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "20% off",
          shortDescriptionList: [
            {
              meta: "20% off | Use JUMBO",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "20% off up to ₹100 on orders above ₹479 | Use code JUMBO",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "20% OFF",
          shortDescriptionList: [
            {
              meta: "Use JUMBO",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "20% off up to ₹100 on orders above ₹479 | Use code JUMBO",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "distance",
              fee: 3400,
              message: "",
            },
            {
              name: "time",
              fee: 0,
              message: "",
            },
            {
              name: "special",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 3400,
          message: "",
          title: "Delivery Charge",
          amount: "3400",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "3.5 kms",
        hasSurge: false,
        sla: {
          restaurantId: "426971",
          deliveryTime: 28,
          minDeliveryTime: 28,
          maxDeliveryTime: 28,
          lastMileTravel: 3.5999999046325684,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.0",
        totalRatings: 100,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "323512",
        name: "Pizza Hut",
        uuid: "47a3cb39-ef62-4ed0-8e4f-36fcea4f6e2c",
        city: "1",
        area: "Bellandur",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "esaphwtte8njdmvcgjlf",
        cuisines: ["Pizzas"],
        tags: [],
        costForTwo: 35000,
        costForTwoString: "₹350 FOR TWO",
        deliveryTime: 32,
        minDeliveryTime: 32,
        maxDeliveryTime: 32,
        slaString: "32 MINS",
        lastMileTravel: 3.799999952316284,
        slugs: {
          restaurant: "pizza-hut-bellandur-village-bellandur-sarjapur",
          city: "bangalore",
        },
        cityState: "1",
        address:
          "Pizza Hut at Khata No- 643/656/672/152, Plot No- 151, 152 & 153 situated at Bellandur Village, Varthur Hobli, Bangalore 560103",
        locality: "Kadubeesanahalli",
        parentId: 721,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "20% off",
          shortDescriptionList: [
            {
              meta: "20% off | Use SWIGGYIT",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "20% off up to ₹50 | Use code SWIGGYIT",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "20% OFF",
          shortDescriptionList: [
            {
              meta: "Use SWIGGYIT",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "20% off up to ₹50 | Use code SWIGGYIT",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "distance",
              fee: 3400,
              message: "",
            },
            {
              name: "time",
              fee: 0,
              message: "",
            },
            {
              name: "special",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 3400,
          message: "",
          title: "Delivery Charge",
          amount: "3400",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "3.7 kms",
        hasSurge: false,
        sla: {
          restaurantId: "323512",
          deliveryTime: 32,
          minDeliveryTime: 32,
          maxDeliveryTime: 32,
          lastMileTravel: 3.799999952316284,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "3.9",
        totalRatings: 1000,
        new: false,
      },
      subtype: "basic",
    },
  ],
  totalRestaurants: 1487,
};

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn.pixabay.com/photo/2022/08/02/04/46/icon-7359529_1280.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// const styleCard = {
//   backgroundColor: "#f0f0f0",
// };

//always create a component when you need to use it again
const ResturantCard = ({ resData }) => {
  const {
    name,
    cuisines,
    avgRating,
    minDeliveryTime,
    costForTwo,
    cloudinaryImageId,
  } = resData?.data;
  console.log(resData);
  return (
    <div className="resturant-card">
      <img
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
        alt="res-card"
      />
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <h4>{avgRating} stars</h4>
      <h4>{minDeliveryTime} mins</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" />
        <button>Search</button>
      </div>
      <div className="resturant-container">
        {resObj.cards.map((card) => {
          return <ResturantCard resData={card} key={card.data.id} />;
        })}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
