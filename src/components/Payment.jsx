import React from "react";
import Date from "./date";
import Logo from "./logo";
import Button from "./button";
import Heading from "./heading";
import Devices from "./devices";
import styles from "./payment.module.css"

const Payment = () => {

    let amazon = {
        logo: "http://poodlerescuene.org/prne2017/wp-content/uploads/2017/03/amazon-post.jpg",
        date: "28/10/2020",
        title1: "Amazon Gift",
        title2: "Pay",
        sub: "Desktop - Mobile"
    };
    let apple = {
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsCJFrmbJJSk1Xxp7i73c5AcjOL59eBMJJLw&usqp=CAU",
        date: "17 Sep 2020",
        title1: "Apple Gift",
        title2: "Payment",
        sub: "MacOS - Mobile"
    };

    return (
        <div className={styles.box}>
            <div className={styles.top}>
                <Date date={amazon.date} />
                <Logo logo={amazon.logo} />
            </div>
            <Button />
            <Heading title1={amazon.title1} />
            <Heading title1={amazon.title2} />
            <Devices sub={amazon.sub} />
        </div>  
        
    )
}

export default Payment