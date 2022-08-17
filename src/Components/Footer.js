import React from "react";
import SimpleReactFooter from 'simple-react-footer';
import '../Static/Css/Footer.css';


function Footer() {
    const description =
    "A web developing based startup, coming soon.We have a dream to provide the best service at a cheap price to our Customers.";
  const title = <><span className='sp1'>DEV</span><span className='sp2'>EER</span></>;
  const columns = [
    {
      title: "Resources",
      resources: [
        {
          name: "Careers",
          link: "/Startup/careers"
        },
        {
          name: "Contact",
          link: "/Startup/contact"
        },
      ]
    },
    {
      title: "Legal",
      resources: [
        {
          name: "Privacy",
          link: "/Startup/privacy"
        },
        {
          name: "Terms",
          link: "/Startup/terms"
        }
      ]
    },
    {
      title: "Visit",
      resources: [
        {
          name: "Locations",
          link: "/Startup/locations"
        },
        {
          name: "Culture",
          link: "/Startup/culture"
        }
      ]
    }
  ];
  return (
    <SimpleReactFooter
      description={description}
      title={title}
      columns={columns}
      linkedin=""
      facebook=""
      twitter=""
      instagram=""
      pinterest=""
      copyright="DEVEER"
      iconColor="DEVEER"
      backgroundColor="#1c1b2d"
      fontColor="#a59489"
    />
  );
}


export default Footer;