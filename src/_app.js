import TagManager from "react-gtm-module";

const tagManagerArgs = {
    gtmId: process.env.GOOGLE_GTM_ID,
};

TagManager.initialize(tagManagerArgs);
