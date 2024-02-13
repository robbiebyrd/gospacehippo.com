import React from "react";
import Script from "next/script";

export default function Scripts() {
    return (
        <>
            <Script id={"zsiqchat"}>
                {`
                    var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode: "siq9d7c22675e6adcb77275cf846465d6dfacb7766efffbeeaf5a0d944f3b4f85d0", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zohopublic.com/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);
        `}
            </Script>
            <Script id={"zsma"}>
                {`
                    var w=window;var p = w.location.protocol;if(p.indexOf("http") < 0){p = "http"+":";}var d = document;var f = d.getElementsByTagName('script')[0],s = d.createElement('script');s.type = 'text/javascript'; s.async = false; if (s.readyState){s.onreadystatechange = function(){if (s.readyState=="loaded"||s.readyState == "complete"){s.onreadystatechange = null;try{loadwaprops("3z871da16a8f036d798dd19af71da0dd12","3z24de58e9af61c0078d773ae081eea10d","3z50c4b48165d26291fb4baf42bedd9c1101b64e80302677b38199834b8dd0f623","3zbc8d60c487f20da0997050481097f50970ceb810a79ea7af991a43ccd4ea615b","0.0");}catch(e){}}};}else {s.onload = function(){try{loadwaprops("3z871da16a8f036d798dd19af71da0dd12","3z24de58e9af61c0078d773ae081eea10d","3z50c4b48165d26291fb4baf42bedd9c1101b64e80302677b38199834b8dd0f623","3zbc8d60c487f20da0997050481097f50970ceb810a79ea7af991a43ccd4ea615b","0.0");}catch(e){}};}s.src =p+"//ma.zoho.com/hub/js/WebsiteAutomation.js";f.parentNode.insertBefore(s, f);
        `}
            </Script>
        </>
    );
}
