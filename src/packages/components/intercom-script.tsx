"use client";
import Script from "next/script";
import { env } from "@/env.mjs";
const INTERCOM_APP_ID =
  typeof window !== "undefined" ? env.NEXT_PUBLIC_INTERCOM_APP_ID : null;

export const IntercomScript = ({}) => {
  const INTERCOM_APP_ID = env.NEXT_PUBLIC_INTERCOM_APP_ID;
  return (
    <Script id="intercom">
      {`
window.intercomSettings = { app_id: "${INTERCOM_APP_ID}" };
(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/${INTERCOM_APP_ID}';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s, x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
    `}
    </Script>
  );
};
