window.LANDEX_CONFIG = {
  "version": "7.1",
  "updated": "2026-08-23",
  "provider": "LANDEX / Optical Storage Solutions",
  "integration_policy": {
    "api": "No public LANDEX API or webhook documentation was verified during this build. Treat API/webhook integration as conditional until LANDEX provides documented authorization, endpoints, credentials, rate limits and terms.",
    "automation": "Zapier, Make or similar tools can be used only if a documented LANDEX API/webhook, permitted email trigger, or approved file-export workflow is available.",
    "manual": "CSV/manual export-import is the supported fallback architecture in this package."
  },
  "counties": [
    {
      "county": "Cumberland",
      "status": "Confirmed LANDEX",
      "access": "LANDEX online deed records; county also offers LANDEX-powered Record Notification.",
      "coverage": "Deeds back to 1750 available online according to county Recorder of Deeds.",
      "source": "https://www.cumberlandcountypa.gov/123/Recorder-of-Deeds",
      "record_alert": "https://www.cumberlandcountypa.gov/5249/Records-Notification-System"
    },
    {
      "county": "York",
      "status": "Confirmed LANDEX",
      "access": "LANDEX Remote for frequent users and LANDEX Webstore for infrequent/public users.",
      "coverage": "County states deeds/miscellaneous from 1944-present, mortgages from 1974-present, parcel ID lookup from 2001-present in its LANDEX resources page.",
      "source": "https://www.yorkcountypa.gov/1027/Additional-Resources"
    },
    {
      "county": "Perry",
      "status": "Confirmed LANDEX",
      "access": "LANDEX Remote or Webstore; county states index searching is free and fees apply when purchasing copies.",
      "coverage": "County Register/Recorder directs online users to LANDEX.",
      "source": "https://perryco.org/departments/orphans-court/"
    },
    {
      "county": "Lebanon",
      "status": "Confirmed LANDEX",
      "access": "County Recorder FAQ directs users to landex.com; county meeting records identify LANDEX as its recording vendor.",
      "coverage": "County FAQ states online records are available from 1925-present.",
      "source": "https://www.lebanoncountypa.gov/"
    },
    {
      "county": "Franklin",
      "status": "Confirmed LANDEX",
      "access": "Franklin County states Register & Recorder information is on the LANDEX System and public searching can be performed remotely.",
      "coverage": "Remote public land-record search via LANDEX; county also provides LANDEX Record Alert.",
      "source": "https://www.franklincountypa.gov/departments/register-recorder/",
      "record_alert": "https://www.franklincountypa.gov/landex-record-alert/"
    },
    {
      "county": "Adams",
      "status": "Different public-record system",
      "access": "Adams County provides its own Public Records Search / eSearch and PropertyCheck links on the Recorder of Deeds page.",
      "coverage": "Do not assume LANDEX for Adams County without further verification.",
      "source": "https://adamscountypa.gov/departments/recorderofdeeds"
    },
    {
      "county": "Lancaster",
      "status": "Different public-record system",
      "access": "Lancaster County directs users to its Recorder of Deeds Public Records Search, LanCo View GIS and assessment tools.",
      "coverage": "Do not assume LANDEX for Lancaster County without further verification.",
      "source": "https://www.co.lancaster.pa.us/143/GIS-Division"
    }
  ]
};
